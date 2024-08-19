import Link from "next/link";
import { Post } from "../types";
import dayjs from "dayjs";

type PostPreviewProps = {
  post: Post;
};
export default async function PostPreview({ post }: PostPreviewProps) {
  const postURL = `/blog/${post.slug}`;
  return (
    <div className="py-6">
      <div>{dayjs(post.date).format("MM/DD/YYYY")}</div>
      <Link href={postURL}>
        <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      </Link>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      <Link href={postURL}>read more</Link>
    </div>
  );
}
