import { FadeUp, ChapterHead } from "@/components/motion/Reveal";
import { bookshelf } from "@/data/portfolio";

export default function Bookshelf() {
  return (
    <div className="pt-32 pb-32" data-testid="bookshelf-page">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <FadeUp><ChapterHead number="—" kicker="Bookshelf" title="Books that have influenced my thinking and growth" /></FadeUp>
        <FadeUp delay={0.1}>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Sorted by the shape of the problem each one solves.
          </p>
        </FadeUp>
      </div>

      <div className="mt-20 max-w-[1400px] mx-auto px-6 md:px-10 space-y-24">
        {bookshelf.map((cat, ci) => (
          <section key={cat.category}>
            <FadeUp>
              <div className="flex items-baseline justify-between border-b border-border pb-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-muted-foreground">0{ci + 1}</span>
                  <h2 className="font-serif text-3xl md:text-5xl leading-none">{cat.category}</h2>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{cat.books.length} vols.</span>
              </div>
            </FadeUp>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cat.books.map((b, i) => (
                <FadeUp key={b.title} delay={i * 0.04}>
                  <article className="group h-full flex flex-col justify-between border border-border rounded-lg p-6 hover:bg-foreground/[0.03] transition-colors" data-testid={`book-card-${b.title.toLowerCase().replace(/\s+/g,'-')}`}>
                    <div>
                      <p className="mono-label">Vol. 0{i + 1}</p>
                      <h3 className="mt-3 font-serif text-2xl leading-tight">{b.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{b.author}</p>
                    </div>
                    <p className="mt-8 text-sm italic text-muted-foreground">&ldquo;{b.note}&rdquo;</p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

