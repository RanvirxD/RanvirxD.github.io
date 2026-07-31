import { Download, Mail, Printer } from 'lucide-react';
import { FadeUp, ChapterHead } from '@/components/motion/Reveal';
import { profile, experience, projects, skills, education, certifications } from '@/data/portfolio';

const RESUME_URL = '/assets/ranvir-s-resume.pdf';
const QR_URL = `${import.meta.env.BASE_URL}assets/qr.svg`;
const SITE_URL = 'RanvirxD.github.io';

const skillsSummary = Object.entries(skills)
  .map(([k, v]) => `${k}: ${v.slice(0, 4).join(', ')}`)
  .join(' · ');

export default function Resume() {
  return (
    <>
    <div className="screen-only pt-32 pb-32" data-testid="resume-page">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <FadeUp>
          <ChapterHead number="—" kicker="Resume" title="One page, plain and true." />
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          hit “print as a box” and use your browser's print dialog (Ctrl/Cmd + P) — the printout folds into an actual box.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2 rounded-full px-5 h-11 bg-foreground text-background hover:bg-foreground/90 transition-colors font-mono text-sm"
              data-testid="download-resume-btn"
            >
              <Download className="w-4 h-4" />
              <span>~/ downloads/ranvir-s-resume.pdf</span>
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-md px-5 h-11 border border-border hover:bg-foreground/[0.04] transition-colors font-mono text-sm"
              data-testid="print-resume-btn"
            >
              <Printer className="w-4 h-4" /> Print as a box
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full px-5 h-11 border border-border hover:bg-foreground/[0.04] transition-colors"
              data-testid="resume-email-btn"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="mt-16 border border-border rounded-lg bg-background/70 p-8 md:p-14 shadow-sm">
            <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-border pb-6">
              <div>
                <h1 className="font-serif text-5xl md:text-6xl leading-none">{profile.name}</h1>
                <p className="mt-2 text-muted-foreground">{profile.role} · {profile.location}</p>
              </div>
              <div className="font-mono text-xs text-muted-foreground space-y-1">
                <p>{profile.email}</p>
                <p>{profile.phone}</p>
                <p><a href={profile.linkedin} className="link-underline">linkedin.com/in/rait-ranvir-singh</a></p>
                <p><a href={profile.github} className="link-underline">github.com/RanvirxD</a></p>
              </div>
            </header>

            <ResumeSection title="Experience">
              <div className="space-y-6">
                {experience.map((e) => (
                  <div key={e.company} className="grid grid-cols-1 md:grid-cols-12 gap-3">
                    <div className="md:col-span-3 font-mono text-xs text-muted-foreground">{e.period}</div>
                    <div className="md:col-span-9">
                      <p className="font-serif text-2xl leading-tight">{e.company}</p>
                      <p className="text-sm text-muted-foreground">{e.role} · {e.location}</p>
                      <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                        {e.points.map((pt, i) => <li key={i}>{pt}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Projects">
              <div className="space-y-6">
                {projects.map((p) => (
                  <div key={p.slug}>
                    <p className="font-serif text-2xl leading-tight">{p.name}</p>
                    <p className="text-sm text-muted-foreground">{p.subtitle} · {p.context}</p>
                    <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      {p.points.map((pt, i) => <li key={i}>{pt}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Skills">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                {Object.entries(skills).map(([k, v]) => (
                  <div key={k}>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{k}: </span>
                    <span>{v.join(', ')}</span>
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Education">
              <div className="space-y-4">
                {education.map((ed) => (
                  <div key={ed.school} className="grid grid-cols-1 md:grid-cols-12 gap-3">
                    <div className="md:col-span-3 font-mono text-xs text-muted-foreground">{ed.period}</div>
                    <div className="md:col-span-9">
                      <p className="font-serif text-xl leading-tight">{ed.school}</p>
                      <p className="text-sm text-muted-foreground">{ed.degree} · {ed.place}</p>
                      {ed.score ? <p className="font-mono text-xs mt-1">{ed.score}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
            </ResumeSection>

            <ResumeSection title="Certification & Co-curricular">
              <div className="space-y-3">
                {certifications.map((c) => (
                  <div key={c.title} className="grid grid-cols-1 md:grid-cols-12 gap-3 text-sm">
                    <div className="md:col-span-3 font-mono text-xs text-muted-foreground">{c.date}</div>
                    <div className="md:col-span-9">
                      <p className="font-medium">{c.title}</p>
                      <p className="text-muted-foreground">{c.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ResumeSection>
          </div>
        </FadeUp>
      </div>
    </div>

    <div className="print-only box-net" aria-hidden>
      <div className="face top">
        <p className="face-label">skills</p>
        <p>{skillsSummary}</p>
      </div>

      <div className="face left">
        <p className="face-label">experience</p>
        {experience.map((e) => (
          <p key={e.company}><b>{e.company}</b> — {e.period.split('—')[0].trim()}</p>
        ))}
      </div>

      <div className="face front">
        <p className="big-name">{profile.name}</p>
        <p className="sub">{profile.role}</p>
        <p className="contact">{profile.email}</p>
        <p className="contact">{profile.phone}</p>
        <p className="contact">{profile.location}</p>
      </div>

      <div className="face right qr-face">
        <p className="face-label">scan me</p>
        <img src={QR_URL} alt="QR code" className="qr-img" />
        <p className="qr-url">{SITE_URL}</p>
      </div>

      <div className="face back">
        <p className="face-label">education</p>
        {education.map((ed) => (
          <p key={ed.school}>{ed.degree} — {ed.place}</p>
        ))}
        <p className="face-label" style={{ marginTop: '0.3in' }}>connect</p>
        <p>github.com/RanvirxD</p>
        <p>linkedin.com/in/rait-ranvir-singh</p>
      </div>

      <div className="face bottom">
        <p className="face-label">certifications</p>
        {certifications.map((c) => (
          <p key={c.title}>{c.title}</p>
        ))}
      </div>

      <div className="tab tab-top-outer" />
      <div className="tab tab-top-left" />
      <div className="tab tab-top-right" />
      <div className="tab tab-back-right" />
      <div className="tab tab-bottom-left" />
      <div className="tab tab-bottom-right" />
      <div className="tab tab-bottom-outer" />
    </div>
    </>
  );
}

function ResumeSection({ title, children }) {
  return (
    <section className="pt-8 mt-8 border-t border-border first:border-t-0 first:mt-0 first:pt-6">
      <h2 className="mono-label mb-6">{title}</h2>
      {children}
    </section>
  );
}
