import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col justify-center border-b border-neutral-300">

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-5 uppercase tracking-[0.35em] text-sm text-neutral-500"
      >
        Software Engineer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .15 }}
        className="text-6xl font-semibold leading-none md:text-8xl"
        style={{ fontFamily: "IBM Plex Serif" }}
      >
        Ranvir
        <br />
        Singh
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .35 }}
        className="mt-10 max-w-3xl text-xl leading-9 text-neutral-700"
      >
        Building intelligent systems, cloud-native applications,
        distributed architectures, and AI-powered products that
        transform ideas into production-ready software.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .55 }}
        className="mt-12 flex flex-wrap gap-8"
      >

        <a
          href="https://github.com/RanvirxD"
          target="_blank"
          className="flex items-center gap-2 text-neutral-700 hover:text-black transition"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/rait-ranvir-singh"
          target="_blank"
          className="flex items-center gap-2 text-neutral-700 hover:text-black transition"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a
          href="mailto:ranvirsingh.15h@gmail.com"
          className="flex items-center gap-2 text-neutral-700 hover:text-black transition"
        >
          <FaEnvelope />
          Email
        </a>

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: .6 }}
        transition={{ delay: .9 }}
        className="mt-24 text-sm tracking-[0.35em] text-neutral-400"
      >
        SCROLL
      </motion.div>

    </section>
  );
}