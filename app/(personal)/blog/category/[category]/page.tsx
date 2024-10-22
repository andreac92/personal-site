import { getCategoryBySlug } from "@/app/api/sanity";
import Divider from "@/app/components/divider";
import Loading from "@/app/components/loading";
import Posts from "@/app/components/posts";
import { categoryMap } from "@/app/constants";
import { SearchParams } from "@/app/types";
import { Suspense } from "react";

type CategoryProps = {
  params: { category: string };
  searchParams: SearchParams;
};

export default async function Category({
  params: { category },
  searchParams,
}: CategoryProps) {
  const categoryRes = await getCategoryBySlug({ slug: category });
  const categoryName = categoryRes.error ? undefined : categoryRes?.[0].name;
  return (
    <section>
      <div className="text-3xl text-center">
        Category: {categoryName || category}
      </div>
      <Divider />
      <Suspense fallback={<Loading />}>
        <Posts category={category} searchParams={searchParams} />
      </Suspense>
    </section>
  );
}
