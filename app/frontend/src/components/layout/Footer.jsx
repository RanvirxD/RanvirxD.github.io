import { Link } from "react-router-dom";
import { profile } from "@/data/portfolio";

const primary = ["Home", "Work", "Projects", "Blog", "Resume"];
const extended = ["Papershelf", "Bookshelf"];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-background" data-testid="site-footer">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <p className="mono-label">Colophon</p>
            <h3 className="mt-3 font-serif text-4xl md:text-5xl leading-[1.05]">
              Built by hand, in a light room, at a quiet hour.
            </h3>
            <p className="mt-6 max-w-xl text-muted-foreground">
              {profile.name} — {profile.role}. {profile.location}.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href={`mailto:${profile.email}`} className="link-underline" data-testid="footer-email-link">{profile.email}</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline" data-testid="footer-github-link">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline" data-testid="footer-linkedin-link">LinkedIn</a>
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="mono-label">Site</p>
            <ul className="mt-4 space-y-2">
              {primary.map((p) => (
                <li key={p}>
                  <Link
                    to={p === "Home" ? "/" : `/${p.toLowerCase()}`}
                    className="text-base link-underline"
                    data-testid={`footer-${p.toLowerCase()}-link`}
                  >
                    {p}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="mono-label">Shelves</p>
            <ul className="mt-4 space-y-2">
              {extended.map((p) => (
                <li key={p}>
                  <Link to={`/${p.toLowerCase()}`} className="text-base link-underline" data-testid={`footer-${p.toLowerCase()}-link`}>{p}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 overflow-visible -mx-6 md:-mx-10">
          <p className="font-serif text-[18vw] md:text-[8.7vw] leading-none outline-text text-center">
            no-fluff engineering;
          </p>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-3 font-mono text-[11px] text-muted-foreground">
          <span>© 2026 Ranvir Singh. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

