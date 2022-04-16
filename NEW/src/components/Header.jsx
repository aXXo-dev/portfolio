import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import Burger from "./Burger";

const LinkTo = ({ className, children, active, to }) => {
  return active ? (
    <a className={`${className} font-bold`}>{children}</a>
  ) : (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

// This header is a mess but it works
export default function Header({ children, index }) {
  const sidebarRef = useRef();
  const [isMobile, setMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    window.addEventListener("resize", () => {
      document.getElementById("root").classList.toggle("sideActive");
      setMobile(window.innerWidth <= 600);
    });
  }, []);

  const onMenuClick = () => {
    sidebarRef.current.classList.toggle("active");
  };

  return (
    <>
      <header className="Header flex items-center justify-between">
        <LinkTo className="text-3xl font-bold" to="/" active={index === 0}>
          aXXo
        </LinkTo>

        {!isMobile ? (
          <nav className="flex gap-5">
            <LinkTo to="/" active={index === 0}>
              Home
            </LinkTo>

            <LinkTo to="/about" active={index === 1}>
              About
            </LinkTo>

            <LinkTo to="/work" active={index === 2}>
              Work
            </LinkTo>

            <LinkTo to="/contact" active={index === 3}>
              Contact
            </LinkTo>
          </nav>
        ) : (
          <Burger onClick={onMenuClick} />
        )}
      </header>

      <header className="Sidebar" ref={sidebarRef}>
        <nav className="flex gap-5">
          <LinkTo to="/" active={index === 0}>
            Home
          </LinkTo>

          <LinkTo to="/about" active={index === 1}>
            About
          </LinkTo>

          <LinkTo to="/work" active={index === 2}>
            Work
          </LinkTo>

          <LinkTo to="/contact" active={index === 3}>
            Contact
          </LinkTo>
        </nav>
      </header>
    </>
  );
}
