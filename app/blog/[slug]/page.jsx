import Link from "next/link";
import { notFound } from "next/navigation";
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

// pre-render every post at build time
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="pt-10 pb-20">
      <Reveal>
        <div
          className="rounded-2xl overflow-hidden h-56 sm:h-72"
          style={{ border: "1px solid var(--border)" }}
        >
          <CoverArt seed={post.slug} className="w-full h-full" />
        </div>
      </Reveal>

      <div className="max-w-2xl mt-10">
        <Reveal>
          <Link href="/blog" className="btn-outline">
            ← back to blog
          </Link>

          <p className="font-mono text-sm mt-8" style={{ color: "var(--text-faint)" }}>
            {formatDate(post.date)}
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold mt-1" style={{ color: "var(--text)" }}>
            {post.title}
          </h1>
        </Reveal>

        <div className="mt-8 space-y-4">
          {post.body.map((para, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-lg" style={{ color: "var(--text-muted)" }}>
                {para}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
