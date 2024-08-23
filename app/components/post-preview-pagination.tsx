import Link from "next/link";
import { hasNextPreviewPosts } from "../api/sanity";
import BackButton from "./back-button";

type PostPreviewPaginationProps = {
  category?: string;
  lastDate: string;
  isFirstPage: boolean;
};

const PostPreviewPagination = async ({
  category,
  lastDate,
  isFirstPage,
}: PostPreviewPaginationProps) => {
  const hasNext = await hasNextPreviewPosts({ category, lastDate });

  return (
    <div className="flex gap-x-8 justify-center">
      {!isFirstPage && <BackButton withIcon={false} text="prev" />}
      {hasNext === true && (
        <Link href={`?cursor=${Buffer.from(lastDate).toString("base64")}`}>
          next
        </Link>
      )}
    </div>
  );
};

export default PostPreviewPagination;
