const STACK_SLUG = {
  'React PWA': 'react',
  React: 'react',
  'Next.js': 'nextdotjs',
  'Tailwind CSS': 'tailwindcss',
  Supabase: 'supabase',
  Docker: 'docker',
  Vercel: 'vercel',
  Cloudflare: 'cloudflare',
  Flask: 'flask',
  PostgreSQL: 'postgresql',
  Redis: 'redis',
  MongoDB: 'mongodb',
  'Node.js': 'nodedotjs',
  'Express.js': 'express',
  Python: 'python',
  Java: 'java',
  'Ruby on Rails': 'rubyonrails',
  AWS: 'amazonwebservices',
  MySQL: 'mysql',
  Git: 'git',
  GitHub: 'github',
  Linux: 'linux',
  'IBM Cloud': 'ibm',
  TypeScript: 'typescript',
  JavaScript: 'javascript',
  PHP: 'php',
  Kotlin: 'kotlin',
  Ruby: 'ruby',
  Redux: 'redux',
  'LLM Integration': 'openai',
  Geospatial: 'mongodb',
};

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
  const slug = STACK_SLUG[name];
  if (slug) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${slug}`}
        alt=""
        className="w-full h-full object-contain dark:brightness-110"
        loading="lazy"
      />
    );
  }
  return <FallbackGlyph name={name} />;
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
