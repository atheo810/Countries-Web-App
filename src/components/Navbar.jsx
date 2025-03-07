const NAV_LINKS = ["Home", "Explore", "About"];

export default function Navbar() {
  return (
    <header className="bg-surface border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display text-xl text-gold">Atlasia</span>
        <ul className="flex gap-6 text-sm text-parchment/80">
          {NAV_LINKS.map((link) => (
            <li
              key={link}
              className="hover:text-gold transition-colors cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
