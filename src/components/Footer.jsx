const QUICK_LINKS = ["Home", "Explore", "About"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg text-gold">Atlasia</p>
          <p className="mt-2 text-sm text-parchment/70 leading-relaxed">
            Jelajahi profil setiap negara di dunia — populasi, bahasa, mata
            uang, dan letaknya di peta.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-parchment mb-3">Navigasi</p>
          <ul className="space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-steel hover:text-gold transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-parchment mb-3">Sumber data</p>
          <p className="text-sm text-steel leading-relaxed">
            Data negara disediakan oleh{" "}
            <a
              href="https://restcountries.com"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sage hover:text-gold transition-colors"
            >
              restcountries.com
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="max-w-6xl mx-auto px-6 py-4 text-xs text-steel">
          &copy; {year} Atlasia. Dibuat dengan React &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
