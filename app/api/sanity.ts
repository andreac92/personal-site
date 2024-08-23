import { sanityFetch } from "@/sanity/lib/client";
import {
  categoryQuery,
  hasNextCategoryPreviewQuery,
  hasNextPreviewQuery,
  postQuery,
  postsByCategoryPreviewQuery,
  postsPreviewQuery,
} from "@/sanity/lib/queries";

type GetPreviewPostsOptions = {
  perPage?: number;
  lastDate: string;
  category?: string;
};

export const getPreviewPosts = async ({
  perPage = 5,
  lastDate,
  category = "",
}: GetPreviewPostsOptions) => {
  return sanityFetch({
    query: category ? postsByCategoryPreviewQuery : postsPreviewQuery,
    params: { page: perPage, lastDate, category },
  })
    .then((res) => res)
    .catch((error) => ({ error }));
};

type GetPostBySlugOptions = {
  slug: string;
};

export const getPostBySlug = async ({ slug }: GetPostBySlugOptions) => {
  return sanityFetch({
    query: postQuery,
    params: { slug },
  })
    .then((res) => res)
    .catch((error) => ({ error }));
};

type HasNextPreviewPostsOptions = {
  perPage?: number;
  lastDate: string;
  category?: string;
};
export const hasNextPreviewPosts = async ({
  perPage = 5,
  lastDate,
  category = "",
}: HasNextPreviewPostsOptions) => {
  return sanityFetch({
    query: category ? hasNextCategoryPreviewQuery : hasNextPreviewQuery,
    params: { page: perPage, lastDate, category },
  })
    .then((res) => res)
    .catch((error) => ({ error }));
};

type GetCategoryBySlugOptions = {
  slug: string;
};
export const getCategoryBySlug = async ({ slug }: GetCategoryBySlugOptions) => {
  return sanityFetch({
    query: categoryQuery,
    params: { slug },
  })
    .then((res) => res)
    .catch((error) => ({ error }));
};
