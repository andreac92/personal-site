import type { Metadata } from "next";
import Link from "next/link";
import { Sedan } from "next/font/google";
import cx from "classnames";
import "./globals.css";

export const metadata: Metadata = {
  title: "andrea campos | personal site",
};

const nameFont = Sedan({ weight: "400", subsets: ["latin"], style: "italic" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"px-12"}>
        <header className="py-4">
          <div className="flex justify-between items-center">
            <div className={cx(nameFont.className, "text-4xl italic")}>
              <Link href="/">andrea campos</Link>
            </div>
            <nav className="flex gap-x-4">
              <Link href="/about" className="text-fuchsia-900">
                about
              </Link>
              <Link href="/adopt-a-chi" className="text-fuchsia-900">
                adopt a chi
              </Link>
            </nav>
          </div>
        </header>
        <main className="py-8 w-[800px] mx-auto">{children}</main>
      </body>
    </html>
  );
}
