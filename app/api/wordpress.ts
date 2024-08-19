import WPAPI from "wpapi";

const WPClient = new WPAPI({
  endpoint: process.env.WP_ENDPOINT as string,
  username: process.env.WP_USER as string,
  password: process.env.WP_KEY as string,
});

type GetWPPostOptions = {
  perPage?: number;
  page?: number;
};

export const getWPPosts = ({
  perPage = 5,
  page = 1,
}: GetWPPostOptions = {}) => {
  return WPClient.posts()
    .perPage(perPage)
    .page(page)
    .get()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return { error };
    });
};

type GetWPPostBySlugOptions = {
  slug: string;
};

export const getWPPostBySlug = ({ slug }: GetWPPostBySlugOptions) => {
  return WPClient.posts()
    .slug(slug)
    .get()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return { error };
    });
};

type GetWPMediaById = {
  id: number;
};
export const getWPMediaById = ({ id }: GetWPMediaById) => {
  return WPClient.media()
    .id(id)
    .get()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return { error };
    });
};
