import Link from "next/link";
import { ChiPaginationData, SearchParams } from "../types";
import { toURLParams, updateChiSearchParams } from "../utils/utils";

type ChiPaginationProps = {
  currPage: number;
  data: ChiPaginationData;
  searchParams: SearchParams;
};

const ChiPagination = ({
  currPage,
  data,
  searchParams,
}: ChiPaginationProps) => {
  const hasNext = data.pages > currPage;
  const hasPrev = currPage > 1;

  const filtersPrev = updateChiSearchParams(searchParams, {
    page: `${currPage - 1}`,
  });
  const filtersNext = updateChiSearchParams(searchParams, {
    page: `${currPage + 1}`,
  });
  return (
    <div className="flex gap-x-8 justify-center">
      {hasPrev === true && (
        <Link href={`adopt-a-chi?${toURLParams(filtersPrev)}`}>prev</Link>
      )}
      {hasNext === true && (
        <Link href={`adopt-a-chi?${toURLParams(filtersNext)}`}>next</Link>
      )}
    </div>
  );
};

export default ChiPagination;
