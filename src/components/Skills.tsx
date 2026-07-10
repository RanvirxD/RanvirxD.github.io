import Section from "./Section";

const skillGroups = [
  {
    title: "Languages",
    skills: ["C++", "Python", "TypeScript", "JavaScript", "SQL", "Kotlin"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "JWT",
      "System Design",
      "DSA",
    ],
  },
  {
    title: "Cloud",
    skills: ["AWS", "Docker", "Linux", "Git", "GitHub Actions"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
];

export default function Skills() {
  return (
    <Section number="04" title="Skills">
      <div className="space-y-12">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid gap-4 border-b border-neutral-200 pb-8 md:grid-cols-4"
          >
            <h3
              className="text-xl font-semibold"
              style={{ fontFamily: "IBM Plex Serif" }}
            >
              {group.title}
            </h3>

            <div className="md:col-span-3 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-sm transition hover:bg-neutral-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}