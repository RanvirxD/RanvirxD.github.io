import Section from "./Section";

const projects = [
  {
    title: "MindSpace",
    subtitle: "AI Internship Recommendation Engine",
    tech: "React • Flask • PostgreSQL • Redis • LLMs",
    description:
      "Hybrid recommendation engine combining LLM reasoning with deterministic ranking to generate explainable internship recommendations.",
  },
  {
    title: "MedFlow",
    subtitle: "Distributed Hospital Management System",
    tech: "React • Node.js • MongoDB",
    description:
      "Role-based healthcare platform supporting inter-hospital referrals, resource tracking, and real-time coordination.",
  },
  {
    title: "Redditor",
    subtitle: "AI Code Translation Platform",
    tech: "TypeScript • AST • LLM",
    description:
      "Real-time multilingual code translation supporting 19+ programming languages with optimized inference pipelines.",
  },
];

export default function Projects() {
  return (
    <Section number="03" title="Projects">
      <div className="space-y-16">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border-b border-neutral-200 pb-12 last:border-none"
          >
            <h3
              className="text-3xl font-semibold"
              style={{ fontFamily: "IBM Plex Serif" }}
            >
              {project.title}
            </h3>

            <p className="mt-2 text-neutral-500">{project.subtitle}</p>

            <p className="mt-6 max-w-3xl leading-8 text-neutral-700">
              {project.description}
            </p>

            <p className="mt-6 font-medium text-neutral-900">
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}