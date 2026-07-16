import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/config";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// pre-render every post at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="pt-14 pb-20 max-w-2xl">
      <Link href="/blog" className="btn-outline">
        ← back to blog
      </Link>

      <p className="font-mono text-sm mt-8" style={{ color: "var(--text-faint)" }}>
        {formatDate(post.date)}
      </p>
      <h1 className="text-3xl sm:text-4xl font-semibold mt-1" style={{ color: "var(--text)" }}>
        {post.title}
      </h1>

      <div className="mt-8 space-y-4">
        {post.body.map((para, i) => (
          <p key={i} className="text-lg" style={{ color: "var(--text-muted)" }}>
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
