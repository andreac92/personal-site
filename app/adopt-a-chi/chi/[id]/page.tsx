import { getChiById } from "@/app/api/rescue-groups";
import Image from "next/image";
import PetsIcon from "@mui/icons-material/Pets";
import BackButton from "@/app/components/back-button";

type ChiProfileParams = {
  params: { id: string };
};

const ChiProfile = async ({ params }: ChiProfileParams) => {
  const id = params.id;
  const chiRes = await getChiById({ id });
  const chiData = chiRes?.data?.[0]?.attributes;

  const pictures = chiRes?.included?.find((include: any) => {
    return include.type === "pictures";
  });

  const org = chiRes?.included?.find((include: any) => {
    return include.type === "orgs";
  });

  return chiData ? (
    <div>
      <div className="flex gap-x-5">
        <div className="p-4">
          <div className="text-plum text-2xl font-semibold text-center">
            {chiData.name}
          </div>
          <div className="pb-2 flex gap-x-2">
            <div>
              <strong>Age:</strong> {chiData.ageString || chiData.ageGroup}
            </div>
            <div>
              <strong>Sex:</strong> {chiData.sex}
            </div>
          </div>
          <div className="pb-2">
            <a href={`//${org.attributes.url}`} target="_blank">
              {org.attributes.name}
            </a>
            <div>
              {org.attributes.street} {org.attributes.citystate}
            </div>
            <div>{org.attributes.phone}</div>
            <div>{org.attributes.email}</div>
          </div>
        </div>
        <div>
          {pictures ? (
            <div className="flex justify-center">
              <Image
                alt={`Picture of ${chiData.name}`}
                src={pictures.attributes.large.url}
                width={pictures.attributes.large.resolutionX}
                height={pictures.attributes.large.resolutionY}
                className="object-cover object-center"
              />
            </div>
          ) : (
            <div className="text-center w-[200px] h-[200px] bg-slate-200 flex justify-center">
              <PetsIcon fontSize="large" />
            </div>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div>Error retrieving chi!</div>
  );
};

export default ChiProfile;
