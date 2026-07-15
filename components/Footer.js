import Link from "next/link";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-10 border-t mt-10"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <div className="max-w-3xl mx-auto px-6 py-10 grid grid-cols-2 gap-8">
        <div>
          <p className="eyebrow mb-3">navigate</p>
          <ul className="space-y-2 text-base" style={{ color: "var(--text-muted)" }}>
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/projects" className="nav-link">Projects</Link></li>
            <li><Link href="/experience" className="nav-link">Experience</Link></li>
            <li><Link href="/blog" className="nav-link">Blog</Link></li>
            <li><Link href="/resume" className="nav-link">Resume</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-3">connect</p>
          <SocialIcons />
        </div>
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
