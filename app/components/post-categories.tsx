import Link from "next/link";
import { categoryMap } from "../constants";
import cx from "classnames";

type PostCategoriesProps = {
  categories: Array<number>;
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
      {categories.map((categoryID) => {
        return (
          <Link
            key={`category-${categoryID}`}
            className="text-xs w-fit border border-magenta rounded px-2 py-1 hover:border-plum"
            href={`/blog/category/${categoryID}`}
          >
            {categoryMap[categoryID]}
          </Link>
        );
      })}
    </div>
  ) : null;
};

export default PostCategories;
