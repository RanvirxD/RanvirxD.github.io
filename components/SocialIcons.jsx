import { siteConfig } from "@/lib/config";

export default function SocialIcons() {
  const { socials, email } = siteConfig;

  return (
    <div className="flex flex-wrap gap-2">
      <a href={socials.twitter} target="_blank" rel="noreferrer" className="icon-btn" aria-label="X / Twitter">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.5 22H1.4l8.1-9.3L1 2h7l4.9 6.1L18.9 2Z" />
        </svg>
      </a>
      <a href={socials.linkedin} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21h-4V9Z" />
        </svg>
      </a>
      <a href={socials.github} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
        </svg>
      </a>
      <a href={socials.youtube} className="icon-btn" aria-label="YouTube">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.5 6.5s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C16.7 3 12 3 12 3h0s-4.7 0-7.5.2c-.4.1-1.3.1-2.1 1-.7.7-.9 2.3-.9 2.3S1 8.4 1 10.3v1.4C1 13.6 1.5 15.5 1.5 15.5s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.2.2 7.2.2s4.7 0 7.5-.2c.4-.1 1.3-.1 2.1-1 .7-.7.9-2.3.9-2.3s.5-1.9.5-3.8v-1.4c0-1.9-.5-3.8-.5-3.8ZM9.7 14.7V8.7l6 3-6 3Z" />
        </svg>
      </a>
      <a href={socials.instagram} className="icon-btn" aria-label="Instagram">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17.2" cy="6.8" r="1" />
        </svg>
      </a>
      <a href={`mailto:${email}`} className="icon-btn" aria-label="Email">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </a>
    </div>
  );
}
