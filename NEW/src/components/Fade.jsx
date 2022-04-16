import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Fade() {
  const leftVariant = {
    initial: { x: "0" },
    animate: { x: "-100vw" },
    exit: { x: "0" },
  };

  const rightVariant = {
    initial: { x: "0" },
    animate: { x: "100vw" },
    exit: { x: "0" },
  };

  const Child = ({ className, right }) => {
    console.log(right);

    return (
      <motion.div
        className={`block ${className}`}
        variants={right ? rightVariant : leftVariant}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        transition={{ duration: 1 }}
      ></motion.div>
    );
  };

  return createPortal(
    <>
      <Child />
      <Child className="right" right={true} />
      <Child />
    </>,
    document.getElementById("overlay")
  );
}
