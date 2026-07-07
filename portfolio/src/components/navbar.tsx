const links = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Education",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAFAFA]/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <h1
          className="text-xl font-semibold"
          style={{
            fontFamily: "IBM Plex Serif",
          }}
        >
          Ranvir Singh
        </h1>

        <ul className="hidden gap-8 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-neutral-600 transition hover:text-black"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}