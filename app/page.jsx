import Link from "next/link";
import CommitTicker from "@/components/CommitTicker";
import SocialIcons from "@/components/SocialIcons";
import { siteConfig, projects } from "@/lib/config";

export default function Home() {
  return (
    <>
      <section className="pt-16 pb-10">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="photo-frame w-full md:w-2/5 aspect-[4/5] md:aspect-auto shrink-0">
            <img src="/photo.png" alt={siteConfig.name} />
          </div>

          <div className="flex-1 flex flex-col justify-between">
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

              <p className="mt-6 max-w-lg text-lg" style={{ color: "var(--text-muted)" }}>
                {siteConfig.tagline}
              </p>
            </div>

            <div>
              <div className="mt-6">
                <CommitTicker />
              </div>
              <div className="mt-6">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* every project, one line each - click through to its own page */}
      <section className="pt-10 pb-6">
        <p className="eyebrow">// projects</p>
        <div className="mt-2">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="flow-row">
              <p className="text-lg font-semibold" style={{ color: "var(--text)" }}>{p.name}</p>
              <p className="text-base mt-0.5" style={{ color: "var(--text-muted)" }}>{p.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="pt-6 pb-6">
        <p className="eyebrow">// experience</p>
        <p className="mt-2 max-w-lg text-lg" style={{ color: "var(--text-muted)" }}>
          Where I&apos;ve worked and what I worked on — from early internships
          to full-time engineering roles.
        </p>
        <div className="flex justify-center mt-4">
          <Link href="/experience" className="btn-outline">
            view full experience
          </Link>
        </div>
      </section>

      <section className="pt-6 pb-16">
        <p className="eyebrow">// blog</p>
        <p className="mt-2 max-w-lg text-lg" style={{ color: "var(--text-muted)" }}>
          Notes on building software, career decisions, and things I&apos;m
          learning as I go.
        </p>
        <div className="flex justify-center mt-4">
          <Link href="/blog" className="btn-outline">
            read the blog
          </Link>
        </div>
      </section>
    </>
  );
}
