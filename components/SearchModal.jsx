"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/config";

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  const q = query.trim().toLowerCase();
  const results = q
    ? blogPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q)
      )
    : blogPosts;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl border overflow-hidden"
        style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--text-faint)" }}>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search blog posts…"
            className="flex-1 bg-transparent outline-none text-base"
            style={{ color: "var(--text)" }}
          />
          <span className="font-mono text-xs" style={{ color: "var(--text-faint)" }}>esc</span>
        </div>

        <div className="max-h-80 overflow-y-auto">
          {results.length === 0 && (
            <p className="px-4 py-6 text-sm text-center" style={{ color: "var(--text-faint)" }}>
              no posts match &ldquo;{query}&rdquo;
            </p>
          )}
          {results.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              onClick={onClose}
              className="block px-4 py-3 border-b last:border-b-0"
              style={{ borderColor: "var(--border)" }}
            >
              <p className="font-semibold" style={{ color: "var(--text)" }}>{post.title}</p>
              <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
