import { useEffect, useState } from 'react';
import { useTheme } from '@/components/theme/ThemeProvider';

/** simple = Simple Icons CDN (monochrome); devicon = Devicon SVG */
const STACK_ICON = {
  React: { type: 'simple', slug: 'react' },
  'React PWA': { type: 'simple', slug: 'react' },
  'Next.js': { type: 'simple', slug: 'nextdotjs' },
  'Tailwind CSS': { type: 'simple', slug: 'tailwindcss' },
  TypeScript: { type: 'simple', slug: 'typescript' },
  JavaScript: { type: 'simple', slug: 'javascript' },
  Python: { type: 'simple', slug: 'python' },
  Java: { type: 'devicon', slug: 'java/java-plain' },
  'C++': { type: 'simple', slug: 'cplusplus' },
  Kotlin: { type: 'simple', slug: 'kotlin' },
  PHP: { type: 'simple', slug: 'php' },
  Ruby: { type: 'simple', slug: 'ruby' },
  Supabase: { type: 'simple', slug: 'supabase' },
  Docker: { type: 'simple', slug: 'docker' },
  Vercel: { type: 'simple', slug: 'vercel' },
  Cloudflare: { type: 'simple', slug: 'cloudflare' },
  Flask: { type: 'simple', slug: 'flask' },
  PostgreSQL: { type: 'simple', slug: 'postgresql' },
  Redis: { type: 'simple', slug: 'redis' },
  MongoDB: { type: 'simple', slug: 'mongodb' },
  'Node.js': { type: 'simple', slug: 'nodedotjs' },
  'Express.js': { type: 'simple', slug: 'express' },
  'Ruby on Rails': { type: 'simple', slug: 'rubyonrails' },
  AWS: { type: 'devicon', slug: 'amazonwebservices/amazonwebservices-plain-wordmark' },
  MySQL: { type: 'simple', slug: 'mysql' },
  Git: { type: 'simple', slug: 'git' },
  GitHub: { type: 'simple', slug: 'github' },
  Linux: { type: 'simple', slug: 'linux' },
  Redux: { type: 'simple', slug: 'redux' },
  Geospatial: { type: 'simple', slug: 'mongodb' },
  'LLM Integration': { type: 'simple', slug: 'huggingface' },
  OpenAI: { type: 'simple', slug: 'huggingface' },
};

function iconUrl(name, theme) {
  const entry = STACK_ICON[name];
  if (!entry) return null;
  if (entry.type === 'simple') {
    const color = theme === 'dark' ? 'E8E8E8' : '1A1A1A';
    return `https://cdn.simpleicons.org/${entry.slug}/${color}`;
  }
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${entry.slug}.svg`;
}

function FallbackGlyph({ name }) {
  const letter = name.replace(/[^a-zA-Z0-9]/g, '').charAt(0) || '?';
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none" fontFamily="monospace">
        {letter}
      </text>
    </svg>
  );
}

function StackIcon({ name }) {
  const { theme } = useTheme();
  const [failed, setFailed] = useState(false);
  const entry = STACK_ICON[name];
  const url = iconUrl(name, theme);

  useEffect(() => {
    setFailed(false);
  }, [theme, name]);

  if (!entry || failed || !url) {
    return <FallbackGlyph name={name} />;
  }

  const isDevicon = entry.type === 'devicon';

  return (
    <img
      key={`${name}-${theme}`}
      src={url}
      alt=""
      onError={() => setFailed(true)}
      className={`w-full h-full object-contain ${isDevicon ? 'dark:invert dark:brightness-200' : ''}`}
      loading="lazy"
    />
  );
}

export default function StackBadges({ items, className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      {items.map((name) => (
        <div
          key={name}
          className="group inline-flex items-center h-9 min-w-9 max-w-9 hover:max-w-[240px] rounded-full border border-border bg-background/80 overflow-hidden transition-[max-width] duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
          title={name}
        >
          <span className="flex shrink-0 w-9 h-9 items-center justify-center p-1.5 text-foreground">
            <StackIcon name={name} />
          </span>
          <span className="min-w-0 max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:pr-3 overflow-hidden whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-all duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)]">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}
