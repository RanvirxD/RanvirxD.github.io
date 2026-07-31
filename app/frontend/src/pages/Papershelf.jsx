import { FadeUp, ChapterHead } from "@/components/motion/Reveal";
import { papers } from "@/data/portfolio";

export default function Papershelf() {
  return (
    <div className="pt-32 pb-32" data-testid="papershelf-page">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <FadeUp><ChapterHead number="—" kicker="Papershelf" title="Papers I've read." /></FadeUp>
        <FadeUp delay={0.1}>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Just a log. Title, author, the date I closed the tab with some information.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="mt-16 border-t border-border">
            <div className="grid grid-cols-12 gap-4 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground border-b border-border">
              <span className="col-span-3 md:col-span-2">Read</span>
              <span className="col-span-6 md:col-span-7">Paper</span>
              <span className="col-span-2 hidden md:block">Authors</span>
              <span className="col-span-3 md:col-span-1 text-right">Year</span>
            </div>
            <ul className="divide-y divide-border">
              {papers.map((p, i) => (
                <FadeUp key={p.title} delay={i * 0.02}>
                  <li className="grid grid-cols-12 gap-4 py-5 items-baseline group hover:bg-foreground/[0.03] transition-colors px-2 -mx-2 rounded" data-testid={`paper-row-${i}`}>
                    <span className="col-span-3 md:col-span-2 font-mono text-xs text-muted-foreground">
                      {new Date(p.readOn).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })}
                    </span>
                    <span className="col-span-6 md:col-span-7 font-serif text-xl md:text-2xl leading-tight">{p.title}</span>
                    <span className="col-span-2 hidden md:block text-sm text-muted-foreground">{p.authors}</span>
                    <span className="col-span-3 md:col-span-1 text-right font-mono text-xs text-muted-foreground">{p.year}</span>
                  </li>
                </FadeUp>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}