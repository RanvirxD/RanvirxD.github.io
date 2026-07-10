import Section from "./Section";

export default function Education() {
  return (
    <Section number="05" title="Education">
      <div className="space-y-12">

        <div className="border-b border-neutral-200 pb-10">
          <h3
            className="text-2xl font-semibold"
            style={{ fontFamily: "IBM Plex Serif" }}
          >
            SGT University
          </h3>

          <p className="mt-2 text-neutral-600">
            Bachelor of Technology — Computer Science
          </p>

          <p className="mt-2 text-neutral-500">
            Jul 2024 — Jul 2027
          </p>

          <p className="mt-6 text-lg">
            GPA <strong>9.01</strong>
          </p>
        </div>

        <div>
          <h3
            className="text-2xl font-semibold"
            style={{ fontFamily: "IBM Plex Serif" }}
          >
            Parul University
          </h3>

          <p className="mt-2 text-neutral-600">
            Bachelor of Technology — Computer Science
          </p>

          <p className="mt-2 text-neutral-500">
            Jun 2021 — Jun 2024
          </p>

          <p className="mt-6 text-lg">
            CGPA <strong>7.68</strong>
          </p>
        </div>

      </div>
    </Section>
  );
}