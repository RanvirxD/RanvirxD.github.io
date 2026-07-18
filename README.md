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
  blog/page.jsx        post list with hover-preview + blur
  blog/[slug]/page.jsx individual post with cover banner
  bookshelf/page.jsx   books
  papers/page.jsx      paper shelf
  resume/page.jsx       resume + printable box net
components/
  Header.jsx
  Footer.jsx
  ThemeToggle.jsx  white/black theme switch
  CommitTicker.jsx live latest-commit fetch
  SocialIcons.jsx
  SearchModal.jsx  cmd/ctrl+k search, blog posts only for now
  CoverArt.jsx     procedural abstract cover art per blog post
  Reveal.jsx       scroll-triggered fade-up animation wrapper
lib/
  config.js       all site content lives here — name, contact, socials,
                   experience, projects, skills, education, certifications,
                   blog posts, books, papers
```
