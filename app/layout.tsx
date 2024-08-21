import type { Metadata } from "next";
import Link from "next/link";
import { Sedan } from "next/font/google";
import { Montserrat } from "next/font/google";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import cx from "classnames";
import "./globals.css";

export const metadata: Metadata = {
  title: "andrea campos | personal site",
};

const nameFont = Sedan({ weight: "400", subsets: ["latin"], style: "italic" });
const mainFont = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx(mainFont.className, "font-normal px-12")}>
        <header className="py-4">
          <div className="flex justify-between items-center">
            <Link
              className={cx(nameFont.className, "text-4xl italic text-violet")}
              href="/"
            >
              andrea campos
            </Link>
            <nav className="flex gap-x-4 text-violet">
              <Link href="/about">about</Link>
              {/* <Link href="/adopt-a-chi">
                adopt a chi
              </Link> */}
              <div>|</div>
              <div className="flex gap-x-2">
                <Link href="https://github.com/andreac92">
                  <GitHubIcon />
                </Link>
                <Link href="https://www.linkedin.com/in/andc92/">
                  <LinkedInIcon />
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <main className="py-8 w-[800px] mx-auto">{children}</main>
      </body>
    </html>
  );
}
