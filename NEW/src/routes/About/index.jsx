import { motion } from "framer-motion";

import Header from "../../components/Header";
import Fade from "../../components/Fade";

export default function About() {
  return (
    <>
      <Header index={1} />
      <Fade />
      <main className="About">
        <p className="text-center text-xl">I have been in the community for a bit over 4 years and began a <a target="_blank" href="https://www.youtube.com/channel/UCwR9bmRflFCa7_pKyJ5CvtA" className="text-[#ff0000]">YouTube</a> channel.</p>
      </main>
    </>
  );
}
