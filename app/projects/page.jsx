import Link from "next/link";
import { projects } from "@/lib/config";

export default function ProjectsPage() {
  return (
    <div className="pt-14 pb-20">
      <p className="eyebrow">// projects</p>
      <h1 className="text-3xl sm:text-4xl font-semibold mt-1" style={{ color: "var(--text)" }}>
        Projects
      </h1>
      <p className="mt-3 max-w-lg text-lg" style={{ color: "var(--text-muted)" }}>
        Hackathon builds, a live personal project, and the odd experiment.
      </p>

      <div className="mt-10">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="flow-row">
            <p className="font-mono text-sm" style={{ color: "var(--text-faint)" }}>{p.tag}</p>
            <p className="text-xl font-semibold mt-0.5" style={{ color: "var(--text)" }}>{p.name}</p>
            <p className="mt-1 text-base" style={{ color: "var(--text-muted)" }}>{p.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
