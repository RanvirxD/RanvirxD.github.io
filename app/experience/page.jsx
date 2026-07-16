import { experience } from "@/lib/config";

export default function ExperiencePage() {
  return (
    <div className="pt-14 pb-20">
      <p className="eyebrow">// experience</p>
      <h1 className="text-3xl sm:text-4xl font-semibold mt-1" style={{ color: "var(--text)" }}>
        Experience
      </h1>
      <p className="mt-3 max-w-lg text-lg" style={{ color: "var(--text-muted)" }}>
        Where I&apos;ve worked, what I actually did there, and what shipped
        because of it.
      </p>

      <div className="mt-10 relative pl-8" style={{ borderLeft: "1px solid var(--border)" }}>
        {experience.map((job) => (
          <div key={job.company} className="relative pb-10 last:pb-0">
            <span
              className="absolute w-2.5 h-2.5 rounded-full"
              style={{ left: "-33px", top: "6px", background: "var(--accent)" }}
            />

            <div className="flex items-start justify-between flex-wrap gap-x-4">
              <h2 className="text-xl font-semibold" style={{ color: "var(--text)" }}>
                {job.company}
              </h2>
              <p className="font-mono text-sm" style={{ color: "var(--text-faint)" }}>
                {job.start} – {job.end}
              </p>
            </div>

            <p className="text-sm italic mt-0.5" style={{ color: "var(--text-muted)" }}>
              {job.role} · {job.mode}
              {job.location ? ` · ${job.location}` : ""}
            </p>

            <ul className="mt-3 space-y-2">
              {job.points.map((point) => (
                <li key={point} className="text-base flex gap-2" style={{ color: "var(--text-muted)" }}>
                  <span style={{ color: "var(--text-faint)" }}>—</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
