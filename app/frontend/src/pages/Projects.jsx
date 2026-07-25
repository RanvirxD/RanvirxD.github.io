import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeUp, ChapterHead } from "@/components/motion/Reveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <div className="pt-32 pb-32" data-testid="projects-page">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <FadeUp>
          <ChapterHead number="—" kicker="Projects" title="Small proofs, shipped." />
        </FadeUp>
      </div>

      <div className="mt-24 space-y-32">
        {projects.map((p, i) => <Detailed key={p.slug} project={p} index={i} />)}
      </div>
    </div>
  );
}

function Detailed({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  return (
    <section ref={ref} className="max-w-[1400px] mx-auto px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-5 md:sticky md:top-28">
          <p className="mono-label">{`0${index + 1} · ${project.context}`}</p>
          <h2 className="mt-4 font-serif text-5xl md:text-6xl leading-[0.95] tracking-tight">{project.name}</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-md">{project.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="font-mono text-[11px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border border-border">{s}</span>
            ))}
          </div>
        </div>
        <div className="md:col-span-7 space-y-8">
          <FadeUp>
            <div className="relative overflow-hidden rounded-lg border border-border aspect-[16/10]">
              <motion.img style={{ y }} src={project.image} alt={project.name} className="absolute inset-0 w-full h-[120%] object-cover" loading="lazy" />
            </div>
          </FadeUp>
          <ul className="space-y-5">
            {project.points.map((pt, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <li className="flex gap-4">
                  <span className="font-mono text-xs text-muted-foreground pt-1.5">0{i + 1}</span>
                  <p className="text-lg text-muted-foreground leading-relaxed">{pt}</p>
                </li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
