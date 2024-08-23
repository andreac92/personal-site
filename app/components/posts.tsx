import { Post, SearchParams } from "../types";
import PostPreview from "./post-preview";
import Divider from "./divider";
import { getPreviewPosts } from "../api/sanity";
import dayjs from "dayjs";
import PostPreviewPagination from "./post-preview-pagination";

type PostsProps = {
  category?: string;
  searchParams: SearchParams;
};

export default async function Posts({ category, searchParams }: PostsProps) {
  const lastDate = searchParams.cursor
    ? Buffer.from(searchParams.cursor as string, "base64").toString("ascii")
    : dayjs().toISOString();
  const posts = await getPreviewPosts({ category, lastDate });

  return (
    <>
      {!posts.error && posts.length ? (
        <>
          {posts.map((post: Post, i: number) => (
            <PostPreview key={`post-${i}`} post={post} />
          ))}
          <Divider />
          <PostPreviewPagination
            lastDate={posts[posts.length - 1]?.date}
            category={category}
            isFirstPage={!searchParams.cursor}
          />
        </>
      ) : (
        <div>Could not load posts</div>
      )}
    </>
  );
}
