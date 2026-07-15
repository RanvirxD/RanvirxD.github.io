# Ranvir Singh — Portfolio (Next.js)

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/
  layout.js       header, footer, fonts, theme init
  page.js         home page
  globals.css     tokens + component styles
components/
  Header.js
  Footer.js
  ThemeToggle.js  white/black theme switch
  CommitTicker.js live latest-commit fetch
  SocialIcons.js
lib/
  config.js       name, email, github username, social links
```

## Before you commit

- `lib/config.js` — swap in your real email, GitHub username, social links
- `components/CommitTicker.js` avatar initials in `app/page.js` — swap for a real photo when ready

## Notes

- theme is stored in localStorage, read before paint so there's no flash
- projects/experience/blog routes aren't built yet — home just links to them
