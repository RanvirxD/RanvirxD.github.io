import Link from "next/link";
import SocialIcons from "./SocialIcons";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/bookshelf", label: "Bookshelf" },
  { href: "/papers", label: "Paper Shelf" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 border-t mt-10"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <div className="max-w-3xl mx-auto px-6 py-10">
        <p className="eyebrow mb-3">navigate</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-base mb-8" style={{ color: "var(--text-muted)" }}>
          {footerLinks.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="eyebrow mb-3">connect</p>
        <SocialIcons />
      </div>
      <div
        className="border-t max-w-3xl mx-auto px-6 py-5 text-sm font-mono"
        style={{ borderColor: "var(--border)", color: "var(--text-faint)" }}
      >
        © {year} Ranvir Singh. All rights reserved.
      </div>
    </footer>
  );
}

