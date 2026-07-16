import Link from "next/link";
import { blogPosts } from "@/lib/config";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="pt-14 pb-20">
      <p className="eyebrow">// blog</p>
      <h1 className="text-3xl sm:text-4xl font-semibold mt-1" style={{ color: "var(--text)" }}>
        Blog
      </h1>
      <p className="mt-3 max-w-lg text-lg" style={{ color: "var(--text-muted)" }}>
        Notes on building software, career decisions, and things I&apos;m
        learning as I go.
      </p>

      <div className="mt-10 space-y-4">
        {sorted.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card p-6 sm:p-7 block"
          >
            <p className="font-mono text-sm" style={{ color: "var(--text-faint)" }}>
              {formatDate(post.date)}
            </p>
            <h2 className="text-xl font-semibold mt-1" style={{ color: "var(--text)" }}>
              {post.title}
            </h2>
            <p className="mt-2 text-base" style={{ color: "var(--text-muted)" }}>
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
