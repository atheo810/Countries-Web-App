import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/explore", label: "Explore" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="bg-surface border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <NavLink to="/" className="font-display text-lg sm:text-xl text-gold">
          Atlasia
        </NavLink>
        <ul className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-parchment/80">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `transition-colors ${isActive ? "text-gold" : "hover:text-gold"}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
