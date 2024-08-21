import { getWPMediaById, getWPPostBySlug } from "@/app/api/wordpress";
import BackButton from "@/app/components/back-button";
import dayjs from "dayjs";
import Image from "next/image";
import PostCategories from "./post-categories";
import Divider from "./divider";

type BlogPostProps = {
  slug: string;
};
export default async function BlogPost({ slug }: BlogPostProps) {
  const postRes = await getWPPostBySlug({ slug });
  const post = postRes[0];
  const mediaRes = post.featured_media
    ? await getWPMediaById({ id: post.featured_media })
    : undefined;

  return (
    <>
      <div className="flex flex-col items-center">
        {mediaRes && (
          <Image
            alt={mediaRes.alt_text}
            src={mediaRes.source_url}
            width={500}
            height={500}
          />
        )}
        <div
          className="py-2 text-plum text-2xl font-semibold"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div>{dayjs(post.date).format("MM/DD/YYYY")}</div>
        <Divider />
      </div>

      <div
        className="blog-content pt-4"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
      <div className="flex gap-x-2 items-center">
        <div className="text-xs font-medium">Categories: </div>
        <PostCategories categories={post.categories} layout="horizontal" />
      </div>

      <Divider />

      <div className="flex items-center gap-x-2 pt-4">
        <BackButton />
      </div>
    </>
  );
}
