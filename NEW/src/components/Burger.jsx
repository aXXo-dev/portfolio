import { useState } from "react";

export default function Burger({ onClick }) {
  const [toggle, setToggle] = useState(0);

  const onToggle = () => {
    onClick && onClick();
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
