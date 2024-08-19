import { getWPMediaById, getWPPostBySlug } from "@/app/api/wordpress";
import BackButton from "@/app/components/back-button";
import dayjs from "dayjs";
import Image from "next/image";

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
      {mediaRes && (
        <Image
          alt={mediaRes.alt_text}
          src={mediaRes.source_url}
          width={500}
          height={500}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <div>{dayjs(post.date).format("MM/DD/YYYY")}</div>
      <div
        className="blog-content pt-4"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
      <div className="pt-4">
        <BackButton />
      </div>
    </>
  );
}
