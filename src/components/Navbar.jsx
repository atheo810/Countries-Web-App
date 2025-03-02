const NAV_LINKS = ["Home", "Explore", "About"];
export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
