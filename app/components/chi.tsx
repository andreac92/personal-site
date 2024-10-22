import Image from "next/image";
import { ChiData } from "../types";
import Link from "next/link";
import PetsIcon from "@mui/icons-material/Pets";

type ChiProps = {
  data: ChiData;
  associatedData: Array<any>;
};

const Chi = ({ data, associatedData }: ChiProps) => {
  const { name, distance, ageGroup } = data.attributes || {};
  const pictures = associatedData.find((include) => {
    return (
      include.type === "pictures" &&
      include.id === data.relationships?.pictures?.data?.[0]?.id
    );
  });

  return (
    <Link
      href={`/adopt-a-chi/chi/${data.id}`}
      className="border border-magenta border-4 bg-white group"
    >
      <div className="w-[200px] relative">
        <div className="w-[200px] h-[200px] bg-slate-200 flex items-center justify-center">
          <PetsIcon fontSize="large" />
        </div>
        {/* {pictures ? (
          <Image
            alt={`Picture of ${name}`}
            src={pictures.attributes.large.url}
            width={pictures.attributes.large.resolutionX}
            height={pictures.attributes.large.resolutionY}
            className="w-[200px] h-[200px] object-cover object-center"
          />
        ) : (
          <div className="w-[200px] h-[200px] bg-slate-200 flex items-center justify-center">
            <PetsIcon fontSize="large" />
          </div>
        )} */}
        <div className="text-sm pb-2">
          <div className="text-2xl text-white group-hover:text-plum px-2 mb-2 bg-magenta">
            {name}
          </div>
          <div className="px-2">
            <strong>Age:</strong> {ageGroup}
          </div>
          <div className="px-2">
            <strong>Distance:</strong> {distance} miles
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Chi;
