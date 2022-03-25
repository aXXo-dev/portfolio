export default function A({ className, children, href }) {
  return (
    <a
      className={`cursor-pointer hover:scale-125 transition-all ${className}`}
      href={href}
    >
      {children}
    </a>
  );
}
