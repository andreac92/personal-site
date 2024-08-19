import { Suspense } from "react";
import Posts from "./components/posts";
import { SearchParams } from "./types";
import Loading from "./components/loading";

type HomeProps = {
  searchParams: SearchParams;
};

export default async function Home({ searchParams }: HomeProps) {
  return (
    <section>
      <Suspense fallback={<Loading />}>
        <Posts searchParams={searchParams} />
      </Suspense>
    </section>
  );
}
