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

      <div className="mt-10">
        {experience.map((job) => (
          <div key={job.company} className="flow-row">
            <div className="flex items-start justify-between flex-wrap gap-x-4">
              <p className="text-xl font-semibold" style={{ color: "var(--text)" }}>{job.company}</p>
              <p className="font-mono text-sm" style={{ color: "var(--text-faint)" }}>
                {job.start} – {job.end}
              </p>
            </div>
            <p className="text-sm italic mt-0.5" style={{ color: "var(--text-muted)" }}>
              {job.role} · {job.mode}
              {job.location ? ` · ${job.location}` : ""}
            </p>
            {job.points.map((point) => (
              <p key={point} className="mt-2 text-base" style={{ color: "var(--text-muted)" }}>
                {point}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
