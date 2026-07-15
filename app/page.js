import Link from "next/link";
import CommitTicker from "@/components/CommitTicker";
import SocialIcons from "@/components/SocialIcons";
import { siteConfig } from "@/lib/config";

export default function Home() {
  return (
    <>
      <section className="pt-16 pb-10">
        <div className="flex items-start gap-6">
          <div className="avatar-ring w-32 h-32 sm:w-36 sm:h-36 shrink-0">
            <div className="avatar-inner flex items-center justify-center">
              <span className="text-2xl font-semibold" style={{ color: "var(--accent)" }}>
                RS
              </span>
            </div>
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold" style={{ color: "var(--text)" }}>
              {siteConfig.name}
            </h1>
            <p className="font-mono text-base mt-1" style={{ color: "var(--text-muted)" }}>
              {siteConfig.role}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-mono text-base inline-flex items-center gap-1 mt-1"
              style={{ color: "var(--text-faint)" }}
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <p className="mt-6 max-w-lg text-lg" style={{ color: "var(--text-muted)" }}>
          {siteConfig.tagline}
        </p>

        <div className="mt-5">
          <CommitTicker />
        </div>

        <div className="mt-6">
          <SocialIcons />
        </div>
      </section>

      <section className="section-rule pt-10 pb-10">
        <p className="eyebrow">// projects</p>
        <h2 className="text-3xl font-semibold mt-1" style={{ color: "var(--text)" }}>
          Projects
        </h2>
        <p className="mt-2 max-w-lg text-lg" style={{ color: "var(--text-muted)" }}>
          A handful of things I&apos;ve built recently — small tools, experiments,
          and a couple of products people actually use.
        </p>
        <Link href="/projects" className="btn-outline mt-4">
          view all projects
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </section>

      <section className="section-rule pt-10 pb-10">
        <p className="eyebrow">// experience</p>
        <h2 className="text-3xl font-semibold mt-1" style={{ color: "var(--text)" }}>
          Experience
        </h2>
        <p className="mt-2 max-w-lg text-lg" style={{ color: "var(--text-muted)" }}>
          Where I&apos;ve worked and what I worked on — from early internships
          to full-time engineering roles.
        </p>
        <Link href="/experience" className="btn-outline mt-4">
          view full experience
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </section>

      <section className="section-rule pt-10 pb-16">
        <p className="eyebrow">// blog</p>
        <h2 className="text-3xl font-semibold mt-1" style={{ color: "var(--text)" }}>
          Blog
        </h2>
        <p className="mt-2 max-w-lg text-lg" style={{ color: "var(--text-muted)" }}>
          Notes on building software, career decisions, and things I&apos;m
          learning as I go.
        </p>
        <Link href="/blog" className="btn-outline mt-4">
          read the blog
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </section>
    </>
  );
}
