import Link from "next/link";
import { getWPPosts } from "../api/wordpress";
import { Post, SearchParams } from "../types";
import PostPreview from "./post-preview";
import Divider from "./divider";

type PostsProps = {
  categoryID?: number;
  searchParams: SearchParams;
};

export default async function Posts({ categoryID, searchParams }: PostsProps) {
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const posts = await getWPPosts({ categoryID, page });

  return (
    <>
      {!posts.error && posts.length ? (
        <>
          {posts.map((post: Post, i: number) => (
            <PostPreview key={`post-${i}`} post={post} />
          ))}
          <Divider />
          <div className="flex gap-x-8 justify-center">
            {posts._paging?.prev && (
              <Link href={`?page=${page - 1}`}>prev</Link>
            )}
            {posts._paging?.next && (
              <Link href={`?page=${page + 1}`}>next</Link>
            )}
          </div>
        </>
      ) : (
        <div>Could not load posts</div>
      )}
    </>
  );
}
