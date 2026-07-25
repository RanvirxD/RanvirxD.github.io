import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function BlogList({ posts }) {
  const [hoverIdx, setHoverIdx] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const active = hoverIdx !== null;
  const activePost = active ? posts[hoverIdx] : null;

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseMove={handleMove}
      onMouseLeave={() => setHoverIdx(null)}
      data-testid="blog-list"
    >
      <ul
        className={`divide-y divide-border transition-[filter] duration-500 ${active ? "blur-[3px]" : ""}`}
      >
        {posts.map((p, i) => (
          <li
            key={p.slug}
            onMouseEnter={() => setHoverIdx(i)}
            className={`transition-[opacity,transform] duration-500 ${active && hoverIdx !== i ? "opacity-40" : "opacity-100"}`}
          >
            <Link
              to={`/blog/${p.slug}`}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 md:py-10 items-baseline"
              data-testid={`blog-item-${p.slug}`}
            >
              <span className="md:col-span-2 font-mono text-xs text-muted-foreground">
                {new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
              </span>
              <div className="md:col-span-7">
                <h3 className="font-serif text-3xl md:text-5xl leading-[1.02] tracking-tight">
                  <span className="link-underline">{p.title}</span>
                </h3>
                <p className="mt-3 text-muted-foreground max-w-2xl">{p.excerpt}</p>
              </div>
              <div className="md:col-span-3 md:pl-6 flex items-center justify-between md:justify-end gap-3 text-sm text-muted-foreground">
                <span className="font-mono text-xs">{p.readTime}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {activePost && (
          <motion.div
            key={activePost.slug}
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
            style={{
              left: Math.min(Math.max(pos.x - 200, 0), (containerRef.current?.clientWidth || 800) - 400),
              top: Math.max(pos.y - 260, 0),
            }}
            className="pointer-events-none absolute z-30 w-[340px] md:w-[400px] aspect-[4/3] rounded-lg overflow-hidden border border-border shadow-2xl"
          >
            <img src={activePost.image} alt={activePost.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 font-mono text-[11px] uppercase tracking-[0.2em] text-background bg-foreground/80 backdrop-blur px-2 py-1 rounded">
              {activePost.title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

