import Link from "next/link";
import { Post } from "../types";
import dayjs from "dayjs";
import PostCategories from "./post-categories";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { PortableText } from "next-sanity";

type PostPreviewProps = {
  post: Post;
};
export default async function PostPreview({ post }: PostPreviewProps) {
  const postURL = `/blog/${post.slug}`;
  return (
    <article className="py-6">
      <div className="flex gap-x-2">
        <div className="min-w-[125px]">
          <div className="mb-2">
            <div className="text-xs">Publish date</div>
            <div className="text-sm font-medium">
              {dayjs(post.date).format("MM/DD/YYYY")}
            </div>
          </div>
          <div className="text-xs mb-1">Categories</div>
          <PostCategories categories={post.categories} />
        </div>

        <div>
          <Link className="text-lg font-semibold" href={postURL}>
            <div>{post.title}</div>
          </Link>
          <div className="text-sm">
            <PortableText value={post.excerpt} />
          </div>
          <Link className="text-sm flex items-center gap-x-2" href={postURL}>
            <div>read more</div>
            <ArrowRightAltIcon />
          </Link>
        </div>
      </div>
    </article>
  );
}
