import Header from "../../components/Header";
import Fade from "../../components/Fade";
import logo from "../../assets/logo.svg";

export default function Home() {
  return (
    <>
      <Header />
      <Fade />
      <main className="Home flex items-center justify-between">
        <div className="flex flex-col gap-5 w-[45%] sm:w-full sm:text-center">
          <span className="font-bold text-3xl">
            Passionate Full Stack Developper.
          </span>
          <span className="text-[#CDCDCD] text-2xl">
            I enjoy simplicity and building new things in a team
          </span>
          <div className="mt-5">
            <a className="bg-[#414141] px-10 py-3 rounded-full">GET IN TOUCH</a>
          </div>
        </div>

        <img className="logo" src={logo} />
      </main>
    </>
  );
}
