import { Link } from "react-router-dom";

export default function Header({ index }) {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-3xl font-bold" to="/">aXXo</Link>

      <nav className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
