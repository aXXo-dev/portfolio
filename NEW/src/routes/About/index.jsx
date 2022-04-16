import { motion } from "framer-motion";

import Header from "../../components/Header";
import Fade from "../../components/Fade";

export default function About() {
  return (
    <>
      <Header index={1} />
      <Fade />
      <main className="About">
        <h1>About</h1>
      </main>
    </>
  );
}
