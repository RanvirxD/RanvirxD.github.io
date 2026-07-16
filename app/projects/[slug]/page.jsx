import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/config";

// pre-render every project at build time
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="pt-14 pb-20 max-w-2xl">
      <Link href="/projects" className="btn-outline">
        ← back to projects
      </Link>

      <p className="font-mono text-sm mt-8" style={{ color: "var(--text-faint)" }}>
        {project.tag}
      </p>
      <h1 className="text-3xl sm:text-4xl font-semibold mt-1" style={{ color: "var(--text)" }}>
        {project.name}
      </h1>

      <p className="mt-6 text-lg" style={{ color: "var(--text-muted)" }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-xs px-3 py-1 rounded-full border"
            style={{ borderColor: "var(--border)", color: "var(--text-faint)" }}
          >
            {s}
          </span>
        ))}
      </div>

      {(project.links.live || project.links.code) && (
        <div className="flex justify-center gap-2 mt-8">
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer" className="btn-outline">
              live
            </a>
          )}
          {project.links.code && (
            <a href={project.links.code} target="_blank" rel="noreferrer" className="btn-outline">
              code
            </a>
          )}
        </div>
      )}
    </div>
  );
}
