import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const REPO = 'RanvirxD.github.io';

function formatRelativeTime(isoDate) {
  const diffMs = Date.now() - new Date(isoDate).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(isoDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

export default function LatestGitHubCommit() {
  const [commit, setCommit] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://api.github.com/repos/RanvirxD/${REPO}/commits?per_page=1`, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => {
        const latest = data[0];
        if (!latest) return;
        const message = latest.commit.message.split('\n')[0];
        setCommit({
          message: message.length > 72 ? `${message.slice(0, 69)}…` : message,
          url: latest.html_url,
          time: formatRelativeTime(latest.commit.author.date),
        });
      })
      .catch(() => {});

    return () => controller.abort();
  }, []);

  if (!commit) return null;

  return (
    <motion.p
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1], delay: 0.95 }}
      className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
    >
      <a
        href={commit.url}
        target="_blank"
        rel="noreferrer"
        className="link-underline inline-flex flex-wrap items-center gap-x-2 gap-y-1"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3.5 h-3.5 shrink-0"
          aria-hidden
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
        <span>Latest commit</span>
        <span className="text-foreground/70 normal-case tracking-normal font-sans text-sm">{commit.message}</span>
        <span>· {commit.time}</span>
      </a>
    </motion.p>
  );
}
