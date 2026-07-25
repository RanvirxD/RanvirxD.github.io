import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { FadeUp } from "@/components/motion/Reveal";
import { blogPosts } from "@/data/portfolio";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div className="pt-16 pb-32" data-testid="blog-detail-page">
      <section ref={ref} className="relative h-[70svh] min-h-[420px] overflow-hidden">
        <motion.img
          style={{ y, scale }}
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background" />
        <div className="absolute bottom-10 left-0 right-0">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <FadeUp>
              <Link to="/blog" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors" data-testid="back-to-blog-link">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to blog
              </Link>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="mt-4 font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight max-w-4xl">
                {post.title}
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <article className="max-w-[720px] mx-auto px-6 md:px-0 mt-16">
        <FadeUp>
          <p className="font-serif text-2xl md:text-3xl leading-[1.35] text-foreground/85">{post.excerpt}</p>
        </FadeUp>
        <div className="mt-10 space-y-8">
          {post.body.map((para, i) => (
            <FadeUp key={i} delay={i * 0.03}>
              <p className="text-lg md:text-xl leading-[1.65] text-foreground/85">{para}</p>
            </FadeUp>
          ))}
        </div>
        <FadeUp>
          <div className="mt-16 pt-8 border-t border-border font-mono text-xs text-muted-foreground uppercase tracking-widest">
            End of note · Ranvir Singh
          </div>
        </FadeUp>
      </article>
    </div>
  );
}