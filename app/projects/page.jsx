import { projects } from "@/lib/config";

export default function ProjectsPage() {
  return (
    <div className="pt-14 pb-20">
      <p className="eyebrow">// projects</p>
      <h1 className="text-3xl sm:text-4xl font-semibold mt-1" style={{ color: "var(--text)" }}>
        Projects
      </h1>
      <p className="mt-3 max-w-lg text-lg" style={{ color: "var(--text-muted)" }}>
        Hackathon builds, a live personal project, and the odd experiment — each
        one built to actually work, not just demo well.
      </p>

      <div className="mt-10 space-y-6">
        {projects.map((p) => (
          <article key={p.name} className="card p-6 sm:p-8">
            <div className="flex items-start justify-between flex-wrap gap-x-4 gap-y-2">
              <h2 className="text-2xl font-semibold" style={{ color: "var(--text)" }}>
                {p.name}
              </h2>
              <p className="font-mono text-sm" style={{ color: "var(--accent)" }}>
                {p.tag}
              </p>
            </div>

            <p className="mt-3 text-base" style={{ color: "var(--text-muted)" }}>
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-3 py-1 rounded-full border"
                  style={{ borderColor: "var(--border)", color: "var(--text-faint)" }}
                >
                  {s}
                </span>
              ))}
            </div>

            {(p.links.live || p.links.code) && (
              <div className="flex gap-2 mt-6">
                {p.links.live && (
                  <a href={p.links.live} target="_blank" rel="noreferrer" className="btn-outline">
                    live
                  </a>
                )}
                {p.links.code && (
                  <a href={p.links.code} target="_blank" rel="noreferrer" className="btn-outline">
                    code
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
