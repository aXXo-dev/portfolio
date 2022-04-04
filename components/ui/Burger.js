import { useState } from "react";

export default function Burger() {
  const [toggle, setToggle] = useState(0);

  const onToggle = () => {
    document.getElementById("__next").classList.toggle("overlay-active");
    document.getElementById("overlay").classList.toggle("active");
    document.querySelector("html").classList.toggle("active");
    setToggle(!toggle);
  };

  return (
    <div
      className={`Burger flex flex-col gap-1 ${toggle ? "active" : ""}`}
      onClick={onToggle}
    >
      <div className="child"></div>
      <div className="child"></div>
      <div className="child"></div>
    </div>
  );
}
