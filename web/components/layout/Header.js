import React from "react";

import Burger from "../ui/Burger";

export default function Header() {
  return (
    <header className="py-5 z-50 flex justify-between items-center sticky">
      <a className="text-3xl font-bold" href="/">aXXo-dev</a>
      <Burger />
    </header>
  );
}
