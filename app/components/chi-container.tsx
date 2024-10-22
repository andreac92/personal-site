import { getAllChis } from "../api/rescue-groups";
import { ChiData, SearchParams } from "../types";
import Chi from "./chi";
import ChiPagination from "./chi-pagination";
import Divider from "./divider";

type ChiContainerProps = {
  searchParams: SearchParams;
};

const ChiContainer = async ({ searchParams }: ChiContainerProps) => {
  const page = searchParams.page ? Number(searchParams.page) : 1;
  const zipcode = (searchParams.zip ? searchParams.zip : "94706") as string;
  const results = await getAllChis({ page, zipcode, limit: 8 });
  const chiArray = results?.data;

  return chiArray?.length ? (
    <div>
      <div className="flex flex-wrap justify-between gap-y-2 p-2">
        {chiArray.map((chiData: ChiData) => {
          return (
            <Chi
              key={`chi-${chiData.id}`}
              data={chiData}
              associatedData={results.included}
            />
          );
        })}
      </div>
      <Divider />
      <ChiPagination
        data={results.meta}
        currPage={page}
        searchParams={searchParams}
      />
    </div>
  ) : (
    <div>Could not find any chihuahuas!</div>
  );
};

export default ChiContainer;
