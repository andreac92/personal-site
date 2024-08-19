export type Post = {
  id: string;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
};

export type SearchParams = { [key: string]: string | string[] | undefined };
