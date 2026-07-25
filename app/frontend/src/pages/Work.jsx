import { FadeUp, ChapterHead } from "@/components/motion/Reveal";
import { experience, skills, education, certifications } from "@/data/portfolio";

export default function Work() {
  return (
    <div className="pt-32 pb-32" data-testid="work-page">
      <div className="content-column">
        <FadeUp><ChapterHead number="01" kicker="Work log" title="Where the code went to work." /></FadeUp>

        <div className="mt-20 divide-y divide-border">
          {experience.map((e, i) => (
            <FadeUp key={e.company} delay={i * 0.06}>
              <div className="flow-row grid grid-cols-1 md:grid-cols-12 gap-6 py-10">
                <div className="md:col-span-2 font-mono text-xs text-muted-foreground">{e.period}</div>
                <div className="md:col-span-4">
                  <h3 className="font-serif text-4xl leading-none">{e.company}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{e.role}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{e.location}</p>
                </div>
                <ul className="md:col-span-6 space-y-3 text-muted-foreground leading-relaxed">
                  {e.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Skills */}
        <section className="mt-32">
          <FadeUp><ChapterHead number="02" kicker="Toolkit" title="What I reach for." /></FadeUp>
          <div className="mt-14 space-y-8">
            {Object.entries(skills).map(([cat, items]) => (
              <FadeUp key={cat}>
                <h3 className="mono-label">{cat}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{items.join(', ')}</p>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-32">
          <FadeUp><ChapterHead number="03" kicker="School" title="Two campuses, one thread." /></FadeUp>
          <div className="mt-14 divide-y divide-border">
            {education.map((ed) => (
              <FadeUp key={ed.school}>
                <div className="flow-row py-8">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{ed.period}</p>
                  <h3 className="mt-2 font-serif text-3xl leading-tight">{ed.school}</h3>
                  <p className="mt-1 text-muted-foreground">{ed.degree} &middot; {ed.place}</p>
                  <p className="mt-2 font-mono text-sm">{ed.score}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* Cert */}
        <section className="mt-32">
          <FadeUp><ChapterHead number="04" kicker="Off‑the‑clock" title="Certification & co‑curricular." /></FadeUp>
          <div className="mt-14 divide-y divide-border">
            {certifications.map((c) => (
              <div key={c.title} className="flow-row py-6 grid grid-cols-1 md:grid-cols-12 gap-4">
                <p className="md:col-span-3 font-mono text-xs text-muted-foreground">{c.date}</p>
                <p className="md:col-span-6 font-serif text-xl">{c.title}</p>
                <p className="md:col-span-3 text-muted-foreground text-sm">{c.issuer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

