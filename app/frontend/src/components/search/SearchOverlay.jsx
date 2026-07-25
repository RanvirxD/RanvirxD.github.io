import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { searchIndex } from "@/data/portfolio";

export default function SearchOverlay({ open, onOpenChange }) {
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const items = useMemo(() => searchIndex(), []);

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  const filtered = q
    ? items.filter((it) => it.label.toLowerCase().includes(q.toLowerCase())).slice(0, 12)
    : items.slice(0, 8);

  const go = (href) => {
    onOpenChange(false);
    navigate(href);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-24"
          data-testid="search-overlay"
        >
          <button
            aria-label="Close search"
            onClick={() => onOpenChange(false)}
            className="absolute inset-0 bg-background/70 backdrop-blur-xl"
            data-testid="search-backdrop"
          />
          <motion.div
            initial={{ y: -12, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -8, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative w-[92vw] max-w-2xl bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-5 h-14 border-b border-border">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search projects, blog posts, papers, books…"
                className="flex-1 bg-transparent outline-none text-base placeholder:text-muted-foreground"
                data-testid="search-input"
              />
              <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-border text-muted-foreground">ESC</kbd>
              <button onClick={() => onOpenChange(false)} className="text-muted-foreground hover:text-foreground" aria-label="Close">
                <X className="w-4 h-4" />
              </button>
            </div>
            <ul className="max-h-[60vh] overflow-y-auto no-scrollbar py-2" data-testid="search-results">
              {filtered.length === 0 && (
                <li className="px-5 py-6 text-sm text-muted-foreground font-mono">No matches.</li>
              )}
              {filtered.map((it, i) => (
                <li key={i}>
                  <button
                    onClick={() => go(it.href)}
                    className="w-full text-left px-5 py-3 flex items-center justify-between gap-4 hover:bg-foreground/[0.04] transition-colors"
                    data-testid={`search-result-${i}`}
                  >
                    <span className="truncate">{it.label}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{it.kind}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

