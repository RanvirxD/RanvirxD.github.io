"use client";

import {
  siteConfig,
  experience,
  projects,
  skills,
  education,
  certifications,
} from "@/lib/config";

export default function ResumePage() {
  return (
    <div className="pt-14 pb-20">
      {/* screen view */}
      <div className="screen-only">
        <div>
          <p className="eyebrow">// resume</p>
          <h1 className="text-3xl font-semibold mt-1" style={{ color: "var(--text)" }}>
            {siteConfig.name}
          </h1>
          <p className="font-mono text-base mt-1" style={{ color: "var(--text-muted)" }}>
            {siteConfig.role} · {siteConfig.location}
          </p>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          <a href="/resume.pdf" download className="btn-outline">
            download pdf
          </a>
          <button onClick={() => window.print()} className="btn-outline">
            print as a box
          </button>
        </div>

        <p className="mt-3 text-sm text-center" style={{ color: "var(--text-faint)" }}>
          hit &ldquo;print as a box&rdquo; and use your browser&apos;s print dialog (Ctrl/Cmd + P) —
          the printout folds into an actual box.
        </p>

        <div className="mt-12">
          <p className="eyebrow">experience</p>
          <div className="mt-4 space-y-6">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex justify-between flex-wrap gap-x-4">
                  <p className="font-semibold" style={{ color: "var(--text)" }}>{job.company}</p>
                  <p className="font-mono text-sm" style={{ color: "var(--text-faint)" }}>
                    {job.start} – {job.end}
                  </p>
                </div>
                <p className="text-sm italic" style={{ color: "var(--text-muted)" }}>
                  {job.role} · {job.mode}{job.location ? ` · ${job.location}` : ""}
                </p>
                {job.points.map((p) => (
                  <p key={p} className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <p className="eyebrow">projects</p>
          <div className="mt-4 space-y-6">
            {projects.map((proj) => (
              <div key={proj.name}>
                <p className="font-semibold" style={{ color: "var(--text)" }}>{proj.name}</p>
                <p className="text-sm italic" style={{ color: "var(--text-muted)" }}>{proj.tag}</p>
                <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>{proj.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <p className="eyebrow">skills</p>
          <div className="mt-4 space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
            <p><span className="font-semibold" style={{ color: "var(--text)" }}>Languages: </span>{skills.languages.join(", ")}</p>
            <p><span className="font-semibold" style={{ color: "var(--text)" }}>Backend & Systems: </span>{skills.backend.join(", ")}</p>
            <p><span className="font-semibold" style={{ color: "var(--text)" }}>Cloud & Tools: </span>{skills.cloud.join(", ")}</p>
            <p><span className="font-semibold" style={{ color: "var(--text)" }}>Spoken: </span>{skills.spoken.join(", ")}</p>
          </div>
        </div>

        <div className="mt-10">
          <p className="eyebrow">education</p>
          <div className="mt-4 space-y-4">
            {education.map((ed) => (
              <div key={ed.school} className="flex justify-between flex-wrap gap-x-4">
                <div>
                  <p className="font-semibold" style={{ color: "var(--text)" }}>{ed.school}</p>
                  <p className="text-sm italic" style={{ color: "var(--text-muted)" }}>{ed.degree}</p>
                </div>
                <p className="font-mono text-sm" style={{ color: "var(--text-faint)" }}>{ed.start} – {ed.end}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pb-4">
          <p className="eyebrow">certification & co-curricular</p>
          <div className="mt-4 space-y-3">
            {certifications.map((c) => (
              <div key={c.title} className="flex justify-between flex-wrap gap-x-4">
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{c.title} — {c.org}</p>
                <p className="font-mono text-sm" style={{ color: "var(--text-faint)" }}>{c.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* print-only box net - cuts and folds into a cube, tab on every free edge */}
      <div className="print-only box-net">
        <div className="face top">
          <p className="face-label">skills</p>
          <p>{skills.languages.slice(0, 4).join(", ")}</p>
          <p>{skills.backend.slice(0, 3).join(", ")}</p>
        </div>

        <div className="face left">
          <p className="face-label">experience</p>
          {experience.map((job) => (
            <p key={job.company}><b>{job.company}</b> — {job.start.split(" ")[1]}</p>
          ))}
        </div>

        <div className="face front">
          <p className="big-name">{siteConfig.name}</p>
          <p className="sub">{siteConfig.role}</p>
          <p className="contact">{siteConfig.email}</p>
          <p className="contact">{siteConfig.phone}</p>
          <p className="contact">{siteConfig.location}</p>
        </div>

        <div className="face right qr-face">
          <p className="face-label">scan me</p>
          <img src="/qr.svg" alt="QR code to ranvirxd.github.io" className="qr-img" />
          <p className="qr-url">ranvirxd.github.io</p>
        </div>

        <div className="face back">
          <p className="face-label">education</p>
          {education.map((ed) => (
            <p key={ed.school}>{ed.school.split(",")[0]} — {ed.degree}</p>
          ))}
          <p className="face-label" style={{ marginTop: "0.3in" }}>connect</p>
          <p>github.com/{siteConfig.githubUsername}</p>
        </div>

        <div className="face bottom">
          <p className="face-label">certifications</p>
          {certifications.map((c) => (
            <p key={c.title}>{c.title.split(" — ")[0].slice(0, 34)}</p>
          ))}
        </div>

        {/* glue tabs - one per free edge, so the box closes on all sides */}
        <div className="tab tab-top-outer" />
        <div className="tab tab-top-left" />
        <div className="tab tab-top-right" />
        <div className="tab tab-back-right" />
        <div className="tab tab-bottom-left" />
        <div className="tab tab-bottom-right" />
        <div className="tab tab-bottom-outer" />
      </div>
    </div>
  );
}
