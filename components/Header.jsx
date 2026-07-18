"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import SearchModal from "./SearchModal";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // cmd/ctrl+k opens search from anywhere on the site
  useEffect(() => {
    function handleKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header
      className="sticky top-0 z-30 border-b backdrop-blur-md"
      style={{ borderColor: "var(--border)", background: "var(--header-bg)" }}
    >
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <nav className="hidden sm:flex items-center gap-6 text-base">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="sm:hidden text-base font-mono"
          style={{ color: "var(--text-muted)" }}
          onClick={() => setOpen(!open)}
        >
          menu
        </button>

        <div className="flex items-center gap-2">
          <button className="btn-outline" onClick={() => setSearchOpen(true)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span style={{ color: "var(--text-faint)" }}>⌘K</span>
          </button>
          <ThemeToggle />
        </div>
      </div>

      {open && (
        <nav className="sm:hidden flex flex-col gap-3 px-6 pb-4 text-base">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </nav>
      )}

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
