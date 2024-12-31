type RescueGroupFetchParams = {
  bodyData?: { [key: string]: any };
  method?: string;
  path: string;
};
const rescueGroupFetch = ({
  bodyData,
  method = "POST",
  path,
}: RescueGroupFetchParams) => {
  const options = {
    headers: {
      "Content-Type": "application/vnd.api+json",
      Authorization: process.env.RESCUE_GROUP_KEY as string,
    },
    method,
    ...(bodyData ? { body: JSON.stringify({ data: bodyData }) } : {}),
    next: { revalidate: 3600 },
  };
  return fetch(`${process.env.RESCUE_GROUP_ENDPOINT}/${path}`, options)
    .then(async (res) => {
      if (!res.ok) {
        throw new Error(`Response status: ${res.status}`);
      }
      const json = await res.json();
      return json;
    })
    .catch((error) => {
      console.log("[RESCUE-GROUPS API ERROR]", error);
      return { error };
    });
};

type GetAllChisOptions = {
  page?: number;
  limit?: number;
  zipcode: string;
  miles?: number;
  sex?: string;
  age?: string;
};
export const getAllChis = ({
  page = 1,
  limit = 5,
  miles = 25,
  zipcode,
  sex,
  age,
}: GetAllChisOptions) => {
  const bodyData = {
    filterRadius: {
      miles,
      postalcode: zipcode,
    },
    filters: [
      {
        fieldName: "animals.breedString",
        operation: "contains",
        criteria: "chihuahua",
      },
      ...(age
        ? [
            {
              fieldName: "animals.ageGroup",
              operation: "equal",
              criteria: age,
            },
          ]
        : []),
      ...(sex
        ? [
            {
              fieldName: "animals.sex",
              operation: "equal",
              criteria: sex,
            },
          ]
        : []),
    ],
  };
  return rescueGroupFetch({
    path: `public/animals/search/available/dogs/haspic?page=${page}&limit=${limit}&fields[animals]=distance,name,ageGroup&include=pictures&sort=animals.distance`,
    bodyData,
  });
};

type GetChiByIdOptions = {
  id: string;
};

export const getChiById = ({ id }: GetChiByIdOptions) => {
  return rescueGroupFetch({ path: `public/animals/${id}`, method: "GET" });
};
