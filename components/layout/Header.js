import React from "react";
import Link from "next/link";

import Burger from "../ui/Burger";

export default function Header({ blog }) {
  return (
    <header className="py-5 z-50 flex justify-between items-center sticky">
      <Link href={blog ? "/blog" : "/"}>
        <a className="text-3xl font-bold">aXXo-dev</a>
      </Link>
      <Burger />
    </header>
  );
}
