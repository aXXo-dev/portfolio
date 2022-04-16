import { Link } from "react-router-dom";

// This header is a mess but it works
export default function Header({ children, index }) {
  const LinkTo = ({ className, children, active, to }) => {
    return active ? (
      <a className={`${className} font-bold`}>{children}</a>
    ) : (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  };

  return (
    <header className="flex items-center justify-between">
      <LinkTo className="text-3xl font-bold" to="/" active={index === 0}>
        aXXo
      </LinkTo>

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
  );
}
