import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Search, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";
import SearchOverlay from "@/components/search/SearchOverlay";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
];

export default function Header() {
  const { theme, toggle } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((s) => !s);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
        }`}
        data-testid="site-header"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <NavLink
            to="/"
            data-testid="brand-mark"
            className="group flex items-center gap-2"
          >
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">R/S</span>
            <span className="hidden sm:inline font-serif text-lg leading-none">Ranvir Singh</span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1 relative">
            {links.map((l) => {
              const active = pathname === l.to || (l.to !== "/" && pathname.startsWith(l.to));
              return (
                <NavLink
                  key={l.to}
                  to={l.to}
                  data-testid={`nav-${l.label.toLowerCase()}-link`}
                  className="relative px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-foreground/[0.06] border border-border"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </NavLink>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              data-testid="open-search-btn"
              className="group inline-flex items-center gap-2 rounded-full px-3 h-9 border border-border bg-background/60 hover:bg-foreground/[0.04] transition-colors"
              aria-label="Open search"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline font-mono text-[11px] text-muted-foreground">Search</span>
              <span className="hidden sm:inline font-mono text-[10px] px-1.5 py-0.5 rounded border border-border text-muted-foreground">⌘K</span>
            </button>
            <button
              onClick={toggle}
              data-testid="theme-toggle-btn"
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full border border-border bg-background/60 hover:bg-foreground/[0.04] transition-colors inline-flex items-center justify-center"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>
      <SearchOverlay open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}

