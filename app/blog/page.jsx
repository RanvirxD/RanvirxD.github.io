"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/config";
import CoverArt from "@/components/CoverArt";
import Reveal from "@/components/Reveal";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const [hovered, setHovered] = useState(null);
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="pt-14 pb-20">
      <Reveal>
        <p className="eyebrow">// blog</p>
        <h1 className="text-3xl sm:text-4xl font-semibold mt-1" style={{ color: "var(--text)" }}>
          Blog
        </h1>
        <p className="mt-3 max-w-lg text-lg" style={{ color: "var(--text-muted)" }}>
          Notes on building software, career decisions, and things I&apos;m
          learning as I go.
        </p>
      </Reveal>

      <div
        className="mt-10 relative"
        style={{
          filter: hovered ? "blur(6px)" : "none",
          transition: "filter 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {sorted.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.06}>
            <Link
              href={`/blog/${post.slug}`}
              className="flow-row"
              onMouseEnter={() => setHovered(post.slug)}
              onMouseLeave={() => setHovered(null)}
            >
              <p className="font-mono text-sm" style={{ color: "var(--text-faint)" }}>
                {formatDate(post.date)}
              </p>
              <p className="text-xl font-semibold mt-0.5" style={{ color: "var(--text)" }}>
                {post.title}
              </p>
              <p className="mt-1 text-base" style={{ color: "var(--text-muted)" }}>
                {post.excerpt}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* floating cover preview - appears above the blur while hovering a row */}
      <div
        className="fixed pointer-events-none z-40 rounded-2xl overflow-hidden shadow-2xl hidden md:block"
        style={{
          right: "8vw",
          top: "50%",
          width: "22rem",
          height: "14rem",
          transform: hovered ? "translateY(-50%) scale(1)" : "translateY(-50%) scale(0.94)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s cubic-bezier(0.16,1,0.3,1), transform 0.35s cubic-bezier(0.16,1,0.3,1)",
          border: "1px solid var(--border)",
        }}
      >
        {hovered && <CoverArt seed={hovered} className="w-full h-full" />}
      </div>
    </div>
  );
}
