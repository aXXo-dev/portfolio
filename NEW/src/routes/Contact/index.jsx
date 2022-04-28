import Header from "../../components/Header";
import Fade from "../../components/Fade";
import Squares from "../../assets/squares.svg";

import YouTube from "../../assets/youtube.svg";
import Twitter from "../../assets/twitter.svg";
import Email from "../../assets/email.svg";

export default function Contact() {
  return (
    <>
      <Header index={3} />
      <Fade />
      {/* <img className="absolute left-[12%] top-1/3 z-[-1]" width={120} height={120} src={Squares} />*/}
      <main className="Contact flex items-center justify-between w-full gap-10 sm:flex-col sm:justify-center">
        <div className="flex flex-col gap-10 w-1/2 sm:w-full sm:text-center">
          <b className="text-3xl">Contacting me</b>
          <p className="text-xl">
            Need to get in touch? I'll be happy to answer! I'm avalable on these
            following platforms 24/7.
          </p>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row">
          <a href="none" target="_blank">
            <img width={50} height={50} src={Email} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCwR9bmRflFCa7_pKyJ5CvtA"
            target="_blank"
          >
            <img width={50} height={50} src={YouTube} />
          </a>
          <a href="https://twitter.com/aXXo30" target="_blank">
            <img width={50} height={50} src={Twitter} />
          </a>
        </div>
      </main>
    </>
  );
}
