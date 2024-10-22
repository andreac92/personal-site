export type Categories = { name: string; _id: string; slug: string }[];

export type Post = {
  _id: string;
  date: string;
  slug: string;
  title: string;
  excerpt: any;
  categories: Categories;
};

export type SearchParams = { [key: string]: string | string[] | undefined };

export type ChiData = {
  id: string;
  attributes: {
    distance: number;
    name: string;
    ageGroup: string;
    sex: string;
    pictureThumbnailUrl: string;
  };
  relationships: {
    pictures?: { data: Array<{ id: string }> };
  };
};

export type ChiPaginationData = {
  pages: number;
};
