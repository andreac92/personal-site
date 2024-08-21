import Image from "next/image";
import mePic from "./meivypic.jpg";
import ThreePIcon from "@mui/icons-material/ThreeP";
import Divider from "../components/divider";
import DownloadResume from "../components/download-resume";

export default function About() {
  return (
    <section className="flex gap-x-8 items-center">
      <Image
        src={mePic}
        alt="Picture of me and my dog"
        className="rounded-full w-[250px] h-[250px]"
      />
      <div>
        <div className="flex justify-center text-plum mb-4">
          <ThreePIcon />
        </div>
        <div>
          Hi! My name is Andrea. I am a software engineer that loves to work on
          the web, with specialization in front-end development. I am based in
          the Bay Area, where I was born and raised. In my free time I like to
          hang out with my Chihuahua named Ivy, crochet, and attend live shows.
        </div>
        <Divider />
        <div className="flex justify-center gap-x-2">
          <DownloadResume />
        </div>
      </div>
    </section>
  );
}
