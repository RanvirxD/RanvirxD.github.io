# Ranvir Singh — Portfolio

A single-page portfolio styled as an engineer's field notebook: graph-paper
light mode, a blueprint dark mode, and a full-bleed sketch reveal at the end.
Plain HTML/CSS/JS — no build step, ready for GitHub Pages.

## Deploy

1. Create a repo named exactly `RanvirxD.github.io` on GitHub (must match your
   username exactly, or GitHub Pages won't auto-serve it at the root domain).
2. Push these files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/RanvirxD/RanvirxD.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages** and confirm the source is
   "Deploy from a branch" → `main` / `root`. It usually auto-detects.
4. Your site goes live at `https://ranvirxd.github.io/` within a minute or two.

## Files

- `index.html` — all content and structure
- `style.css` — design system (see CSS variables at the top for the palette)
- `script.js` — theme toggle (saved to localStorage) + scroll-reveal animation
- `assets/blueprint-bg.jpeg` — your background image for the closing section

## Things to fill in later

Search `index.html` for `data-project-link` — there are three placeholder
"Live link — coming soon" buttons for MINDSPACE, MedFlow, and Redditor.
Once you have URLs, just replace the `href="#"` and remove the `disabled`
class + placeholder text, e.g.:

```html
<a href="https://your-live-url.com" target="_blank" rel="noopener">Live demo →</a>
```

## Customizing

- **Colors**: all defined as CSS variables at the top of `style.css` under
  `:root` (light) and `html[data-theme="dark"]` (dark). Change the hex values
  there and the whole site updates.
- **GitHub contribution graph**: uses `ghchart.rshah.org`, a free public
  service that renders your public GitHub contribution graph as an SVG —
  no API key needed, updates automatically as you commit.
- **CodeChef stats**: hardcoded in `index.html` (`.cc-stats` block) since
  CodeChef has no public API for this. Update the numbers manually as your
  rating changes — current snapshot: 705 rating (1★), 753 highest, 20 problems
  solved, 4 contests.
- **Fonts**: Fraunces (headings), IBM Plex Sans (body), IBM Plex Mono (labels/data),
  loaded from Google Fonts in `index.html`.

## Browser support

Works without JavaScript (theme just defaults to system preference / light,
content is all visible). JS only adds the toggle and the scroll-reveal effect.
