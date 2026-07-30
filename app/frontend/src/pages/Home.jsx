import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { LineMask, FadeUp, ChapterHead, easeOutExpo } from '@/components/motion/Reveal';
import { profile, experience, projects /* , blogPosts */ } from '@/data/portfolio';
// import BlogList from '@/components/blog/BlogList';
import StackBadges from '@/components/projects/StackBadges';

const socials = [
  {
    label: 'Twitter',
    url: 'https://x.com/ranvir_singh_15',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>,
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/rait-ranvir-singh',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/RanvirxD',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>,
  },
  {
    label: 'YouTube',
    url: 'https://youtube.com/@ranvir_singh',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>,
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/ranvir._.singh',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
  },
  {
    label: 'Mail',
    url: 'mailto:ranvirsingh.15h@gmail.com',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div data-testid="home-page">
      <section ref={heroRef} className="relative min-h-[100svh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="content-column">
          <div className="flex items-center justify-between mono-label">
            <LineMask delay={0.1}><span>Portfolio · MMXXV</span></LineMask>
            <LineMask delay={0.15}><span>Gurugram · India</span></LineMask>
          </div>

          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-6 md:gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: easeOutExpo, delay: 0.2 }}
              className="shrink-0 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border border-border bg-muted"
            >
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover object-[center_15%] scale-110"
              />
            </motion.div>

            <div className="flex-1 w-full min-w-0">
              <h1 className="font-serif tracking-tight leading-[1.05] text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5rem] text-right">
                <span className="block"><LineMask delay={0.25}>Ranvir</LineMask></span>
                <span className="block italic text-foreground/85">
                  <LineMask delay={0.45}>Singh.</LineMask>
                </span>
              </h1>

              <div className="mt-4 flex items-center gap-0.5 sm:gap-1 flex-wrap justify-start max-w-full">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.65 + i * 0.04 }}
                    className="inline-flex items-center justify-center w-9 h-9 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: easeOutExpo, delay: 0.85 }}
            className="mt-8 md:mt-10 text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {profile.tagline}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mono-label"
        >
          <span>scroll</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ArrowDown className="w-4 h-4" />
          </motion.span>
        </motion.div>
      </section>

      <section id="about" className="home-section border-t border-border">
        <div className="content-column">
          <FadeUp><ChapterHead number="01" kicker="About" title="A quiet study of loud systems." /></FadeUp>
          <FadeUp delay={0.15}>
            <p className="mt-8 font-serif text-3xl md:text-5xl leading-[1.2]">
              {profile.aboutHeadline}
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              {profile.aboutBody}
            </p>
          </FadeUp>
          <FadeUp delay={0.35}>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Freelance', 'DSA', 'Competitive Programming', 'Open Source'].map((t) => (
                <span key={t} className="mono-label px-3 py-1.5 border border-border">
                  {t}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section id="work" className="home-section border-t border-border">
        <div className="content-column">
          <FadeUp><ChapterHead number="02" kicker="Work" title="Three seasons, three environments." /></FadeUp>
          <div className="mt-12 divide-y divide-border">
            {experience.map((e, i) => (
              <FadeUp key={e.company} delay={i * 0.08}>
                <div className="flow-row grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-6 md:py-8">
                  <div className="md:col-span-2 font-mono text-sm text-muted-foreground pt-2">{e.period}</div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-4xl md:text-5xl leading-none">{e.company}</h3>
                    <p className="mt-2 text-base text-muted-foreground">{e.role} · {e.location}</p>
                  </div>
                  <p className="md:col-span-6 text-base text-muted-foreground leading-relaxed">{e.points[0]}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.2}>
            <Link to="/work" className="mt-8 inline-flex items-center gap-2 link-underline" data-testid="home-work-more">
              Read the full work log <ArrowUpRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      <section id="projects" className="home-section border-t border-border">
        <div className="content-column">
          <FadeUp><ChapterHead number="03" kicker="Projects" title="Things that shipped." /></FadeUp>
        </div>
        <div className="mt-12 divide-y divide-border">
          {projects.map((p, i) => (
            <ProjectSpotlight key={p.slug} project={p} index={i} />
          ))}
        </div>
        <div className="content-column mt-10">
          <FadeUp>
            <Link to="/projects" className="inline-flex items-center gap-2 link-underline" data-testid="home-projects-more">
              Everything I&apos;ve built <ArrowUpRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Blog section — uncomment to show on home page
      <section id="blog" className="home-section border-t border-border">
        <div className="content-column">
          <FadeUp><ChapterHead number="04" kicker="Blog" title="Field notes." /></FadeUp>
          <div className="mt-10">
            <BlogList posts={blogPosts.slice(0, 4)} />
          </div>
          <FadeUp>
            <Link to="/blog" className="mt-8 inline-flex items-center gap-2 link-underline" data-testid="home-blog-more">
              Every post <ArrowUpRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </section>
      */}

      <section id="contact" className="home-section border-t border-border">
        <div className="content-column">
          <FadeUp><ChapterHead number="04" kicker="Say hi" title="Let's build a small, honest thing." /></FadeUp>
          <FadeUp delay={0.15}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Freelance slots open. Open-source contributions welcome. The best way to reach me is a plain email.
            </p>
          </FadeUp>
          <FadeUp delay={0.25}>
            <a
              href={`mailto:${profile.email}`}
              data-testid="contact-email-link"
              className="mt-8 inline-block font-serif text-4xl md:text-6xl leading-none link-underline"
            >
              {profile.email}
            </a>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}

function ProjectSpotlight({ project, index }) {
  return (
    <Link to="/projects" className="flow-row block py-8 md:py-9 hover:opacity-90 transition-opacity">
      <div className="content-column">
        <FadeUp delay={0.05}>
          <p className="mono-label">0{index + 1} · {project.context}</p>
          <h3 className="mt-2 font-serif text-4xl md:text-5xl leading-[0.95]">{project.name}</h3>
          <p className="mt-2 text-xl text-muted-foreground">{project.subtitle}</p>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">{project.points[0]}</p>
          <StackBadges items={project.stack} className="mt-3" />
        </FadeUp>
      </div>
    </Link>
  );
}
