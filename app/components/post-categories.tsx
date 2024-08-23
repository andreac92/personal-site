import Link from "next/link";
import { categoryMap } from "../constants";
import cx from "classnames";
import { Categories } from "../types";

type PostCategoriesProps = {
  categories: Categories;
  layout?: "vertical" | "horizontal";
};

const PostCategories = ({
  categories,
  layout = "vertical",
}: PostCategoriesProps) => {
  return categories.length ? (
    <div
      className={cx("flex", {
        "flex-col gap-y-2": layout === "vertical",
        "gap-x-2": layout === "horizontal",
      })}
    >
      {categories.map((category) => {
        return (
          <Link
            key={`category-${category._id}`}
            className="text-xs w-fit border border-magenta rounded px-2 py-1 hover:border-plum"
            href={`/blog/category/${category.slug}`}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  ) : null;
};

export default PostCategories;
