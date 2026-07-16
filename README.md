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
  layout.js          header, footer, fonts, theme init
  page.js            home page
  globals.css        tokens + component styles
  projects/page.js   full project case studies
  experience/page.js work timeline
  blog/page.js        post list
  blog/[slug]/page.js individual post
  bookshelf/page.js   books
  papers/page.js      paper shelf
  resume/page.js       resume + printable box net
components/
  Header.js
  Footer.js
  ThemeToggle.js  white/black theme switch
  CommitTicker.js live latest-commit fetch
  SocialIcons.js
lib/
  config.js       all site content lives here — name, contact, socials,
                   experience, projects, skills, education, certifications,
                   blog posts, books, papers
```

## Before you commit

- `lib/config.js` — swap in your real email, GitHub username, social links,
  project live/code links, and replace the placeholder blog posts, books,
  and papers with your real content
- `app/page.js` avatar/photo — already using `public/photo.png`, swap the
  file if you want a different shot

## Notes

- theme is stored in localStorage, read before paint so there's no flash
- blog posts live in `lib/config.js` as plain text for now — good enough to
  ship, but a markdown-based setup would scale better once you have a lot of posts
- bookshelf and paper shelf are placeholder entries — clearly marked in
  `lib/config.js`, swap for your real reading list
