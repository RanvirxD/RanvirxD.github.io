import Section from "./Section";

const experience = [
  {
    company: "Nextgen Technologies",
    role: "Linux Infrastructure Intern",
    duration: "Feb 2024 — Apr 2024",
    description:
      "Managed Linux server infrastructure, networking, firewall configuration, and deployment environments while ensuring high availability.",
  },
  {
    company: "IBM Cloud",
    role: "AI & Cloud Intern",
    duration: "Dec 2023 — Jan 2024",
    description:
      "Designed cloud-based preprocessing pipelines that converted raw datasets into structured ML-ready data with validation workflows.",
  },
  {
    company: "MySphere Infotech",
    role: "PHP Full Stack Intern",
    duration: "Aug 2023 — Oct 2023",
    description:
      "Built e-commerce platforms and integrated WooCommerce REST APIs with payment gateways for automated business workflows.",
  },
];

export default function Experience() {
  return (
    <Section number="02" title="Experience">
      <div className="space-y-12">
        {experience.map((job) => (
          <div
            key={job.company}
            className="border-b border-neutral-200 pb-10 last:border-none"
          >
            <div className="flex flex-col justify-between md:flex-row">
              <div>
                <h3
                  className="text-2xl font-semibold"
                  style={{ fontFamily: "IBM Plex Serif" }}
                >
                  {job.company}
                </h3>

                <p className="mt-2 text-neutral-500">{job.role}</p>
              </div>

              <span className="mt-4 text-sm text-neutral-500 md:mt-0">
                {job.duration}
              </span>
            </div>

            <p className="mt-6 max-w-3xl leading-8 text-neutral-700">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}