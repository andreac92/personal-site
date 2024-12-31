import { Suspense } from "react";
import { SearchParams } from "../types";
import Loading from "../components/loading";
import ChiContainer from "../components/chi-container";

type AdoptAChiProps = {
  searchParams: SearchParams;
};

export default function AdoptAChi({ searchParams }: AdoptAChiProps) {
  return (
    <Suspense fallback={<Loading />}>
      <ChiContainer searchParams={searchParams} />
    </Suspense>
  );
}
