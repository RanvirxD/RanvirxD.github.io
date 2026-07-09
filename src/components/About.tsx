import Section from "./Section";

export default function About() {
  return (
    <Section number="01" title="About">
      <div className="grid gap-12 md:grid-cols-2">
        <p className="text-lg leading-9 text-neutral-700">
          I'm a Computer Science undergraduate based in Gurugram, India,
          passionate about building software that combines thoughtful design
          with scalable engineering. My interests span AI, distributed systems,
          cloud computing, backend architecture, and DevOps.
        </p>

        <p className="text-lg leading-9 text-neutral-700">
          I enjoy transforming ideas into production-ready products—from
          intelligent recommendation systems to healthcare platforms and
          developer tools. I'm constantly learning, building, and exploring new
          technologies that solve real-world problems.
        </p>
      </div>
    </Section>
  );
}