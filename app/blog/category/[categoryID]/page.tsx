import Divider from "@/app/components/divider";
import Loading from "@/app/components/loading";
import Posts from "@/app/components/posts";
import { categoryMap } from "@/app/constants";
import { SearchParams } from "@/app/types";
import { Suspense } from "react";

type CategoryProps = {
  params: { categoryID: string };
  searchParams: SearchParams;
};

export default async function Category({
  params,
  searchParams,
}: CategoryProps) {
  const categoryID = Number(params.categoryID);
  return (
    <section>
      <div className="text-3xl text-center">
        Category: {categoryMap[categoryID]}
      </div>
      <Divider />
      <Suspense fallback={<Loading />}>
        <Posts categoryID={categoryID} searchParams={searchParams} />
      </Suspense>
    </section>
  );
}
