import Section from "./Section";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export default function Contact() {
  return (
    <Section number="06" title="Contact">
      <div className="space-y-8">

        <p className="max-w-2xl text-xl leading-9 text-neutral-700">
          Interested in collaborating, discussing ideas, or building
          something impactful? Feel free to reach out.
        </p>

        <div className="space-y-5 text-lg">

          <a
            href="mailto:ranvirsingh.15h@gmail.com"
            className="flex items-center gap-3 hover:underline"
          >
            <FaEnvelope />
            ranvirsingh.15h@gmail.com
          </a>

          <a
            href="https://github.com/RanvirxD"
            target="_blank"
            className="flex items-center gap-3 hover:underline"
          >
            <FaGithub />
            github.com/RanvirxD
          </a>

          <a
            href="https://linkedin.com/in/rait-ranvir-singh"
            target="_blank"
            className="flex items-center gap-3 hover:underline"
          >
            <FaLinkedin />
            linkedin.com/in/rait-ranvir-singh
          </a>

        </div>

      </div>
    </Section>
  );
}