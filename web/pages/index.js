import Header from "../components/layout/Header";
import A from "../components/ui/Anchor";

export default function Index() {
  const index = 0;
  const count = 3;

  // This dot thing is temp for now
  const addDots = () => {
    let dots = [];
    for (let i = 0; i < count; i++) {
      dots.push(<div className={i === index && "active"}></div>);
    }
    return <>{dots}</>;
  };

  return (
    <>
      <Header />
      <nav className="idk gap-2 flex items-end sm:px-10 md:px-40 fixed right-0 bottom-5">
        {addDots()}
      </nav>
      <main className="padding px-5">
        <section></section>
      </main>
    </>
  );
}
