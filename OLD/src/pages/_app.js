import "../styles/globals.scss";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimateSharedLayout } from "framer-motion";

import A from "../components/ui/Anchor";

export default function MyApp({ Component, pageProps }) {
  const [overlay, setOverlay] = useState();

  useEffect(() => {
    localStorage.setItem("transition", false);
    setOverlay(document.getElementById("overlay"));
  }, []);

  return (
    <AnimateSharedLayout>
      {overlay &&
        createPortal(
          <nav className="flex flex-col text-center h-screen justify-center items-center gap-5 absolute z-[100] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <A className="text-5xl" href="/">
              Home
            </A>
            <A className="text-5xl" href="/blog">
              Blog
            </A>
            <A className="text-5xl" href="/contact">
              Contact
            </A>
          </nav>,
          overlay
        )}
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}
