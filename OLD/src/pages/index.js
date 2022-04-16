import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger";

import Header from "../components/layout/Header";
import A from "../components/ui/Anchor";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Index() {
  const sectionOneRef = useRef();

  useEffect(() => {
    gsap.to(sectionOneRef.current, {
      scrollTrigger: {
        trigger: sectionOneRef.current,
        start: "top center",
        end: "bottom center",
        marker: true,
        scrub: true,
      },
  
      duration: 1,
    });
  }, []);

  return (
    <>
      <Header />
      <main className="padding">
        <section className="flex justify-center items-center flex-col h-[90vh]">
          <div>
            <p className="text-3xl sm:w-[80vw] w-[50vw]">
              Hey! I'm Charles, a full stack developer specialized in back end.
              I love creating and learning new things by working on cooperative
              projects
            </p>

            <Link href="/contact">
              <A>Get in touch</A>
            </Link>
          </div>

          <p className="absolute bottom-5 right-0 defPad flex items-center gap-2">
            Scroll to explore{" "}
            <Image src={"/DownArrow.svg"} width={20} height={30} />
          </p>
        </section>

        <section className="h-screen bg-black" ref={sectionOneRef}></section>
      </main>
    </>
  );
}
