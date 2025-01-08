import { PortableText } from "next-sanity";
import BackButton from "@/app/components/back-button";
import dayjs from "dayjs";
import Image from "next/image";
import PostCategories from "./post-categories";
import Divider from "./divider";
import { getPostBySlug } from "../api/sanity";

type BlogPostProps = {
  slug: string;
};

const portableTextComponents = {
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel} target={rel && "_blank"}>
          {children}
        </a>
      );
    },
  },
};

export default async function BlogPost({ slug }: BlogPostProps) {
  const postRes = await getPostBySlug({ slug });
  const post = postRes?.[0];
  return post ? (
    <article>
      <div className="flex flex-col items-center">
        {post.featuredMedia && (
          <figure>
            <Image
              alt={post.featuredMediaAlt}
              src={post.featuredMedia.url}
              width={500}
              height={500}
            />
          </figure>
        )}
        <div className="py-2 text-plum text-2xl font-semibold">
          {post.title}
        </div>
        <div>{dayjs(post.date).format("MM/DD/YYYY")}</div>
        <Divider />
      </div>

      <div className="blog-content pt-4">
        <PortableText
          value={post.content}
          components={portableTextComponents}
        />
      </div>
      <div className="flex gap-x-2 items-center">
        <div className="text-xs font-medium">Categories: </div>
        <PostCategories categories={post.categories} layout="horizontal" />
      </div>

      <Divider />

      <div className="flex items-center gap-x-2 pt-4">
        <BackButton />
      </div>
    </article>
  ) : (
    <div>Could not load post</div>
  );
}
