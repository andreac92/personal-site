export type Categories = { name: string; _id: string; slug: string }[];

export type Post = {
  _id: string;
  date: string;
  slug: string;
  title: string;
  excerpt: string;
  categories: Categories;
};

export type SearchParams = { [key: string]: string | string[] | undefined };
