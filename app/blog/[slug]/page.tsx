import BlogPost from "@/app/components/blog-post";
import Loading from "@/app/components/loading";
import { Suspense } from "react";

type PostProps = {
  params: { slug: string };
};
export default async function Post({ params }: PostProps) {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <BlogPost slug={params.slug} />
      </Suspense>
    </section>
  );
}
