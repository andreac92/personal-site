"use client";

import ChiSidebar from "./chi-sidebar";
import { usePathname } from "next/navigation";
import cx from "classnames";
import BackButton from "./back-button";

const ChiLayout = ({ children }: any) => {
  const pathname = usePathname();
  const isChiProfile = pathname.startsWith("/adopt-a-chi/chi/");
  return (
    <section
      className={cx("flex", {
        "gap-x-4": !isChiProfile,
        "flex-col gap-y-4": isChiProfile,
      })}
    >
      {isChiProfile ? (
        <BackButton />
      ) : (
        <div className="w-4/12 max-w-[545px] bg-white/50">
          <ChiSidebar />
        </div>
      )}
      <div
        className={cx("max-w-[1000px] bg-white/50 self-center", {
          "w-8/12": !isChiProfile,
          "w-fit": isChiProfile,
        })}
      >
        {children}
      </div>
    </section>
  );
};

export default ChiLayout;
