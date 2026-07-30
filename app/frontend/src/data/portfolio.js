// Single source of truth — resume-derived data only.
export const profile = {
  name: "Ranvir Singh",
  role: "Computer Science Engineer",
  tagline: "I build full-stack systems Cloud Platforms, ML pipelines, and production infrastructure.",
  location: "Gurugram, India",
  email: "ranvirsingh.15h@gmail.com",
  phone: "+91 8320263271",
  linkedin: "https://linkedin.com/in/rait-ranvir-singh",
  github: "https://github.com/RanvirxD",
  avatar: `${import.meta.env.BASE_URL}assets/avatar.png`,
  aboutHeadline: "Final-year CS student building systems that ship. Open to internships and full-time roles.",
  aboutBody:
    "I'm a computer science engineer in my final year. Right now I take on freelance work, contribute to open-source when a problem holds my attention, and spend the rest of the hours grinding DSA and competitive programming. I care about calm interfaces, honest systems and code that ages well.",
};

export const experience = [
  {
    company: "Nextgen Technologies",
    role: "Intern — On site",
    location: "Vadodara, Gujarat",
    period: "Feb 2024 — Apr 2024",
    points: [
      "Managed Linux server infrastructure and network configuration — handling subnet access, firewall rules, and service availability monitoring to ensure zero-downtime deployment across multi-tenant web environments.",
    ],
  },
  {
    company: "IBM Cloud",
    role: "AI & Cloud Intern — Virtual",
    location: "Remote",
    period: "Dec 2023 — Jan 2024",
    points: [
      "Architected end-to-end data preprocessing pipelines on IBM Cloud, converting raw unstructured datasets into ML-ready JSON-structured formats with multi-layer validation ensuring data integrity.",
    ],
  },
  {
    company: "MySphere Infotech",
    role: "PHP Intern — On site",
    location: "Vadodara, Gujarat",
    period: "Aug 2023 — Oct 2023",
    points: [
      "Built and shipped full-stack e-commerce platforms in PHP, engineering WooCommerce-REST API integrations with third-party payment gateways to automate end-to-end business transaction workflows.",
    ],
  },
];

export const projects = [
  {
    slug: "dsa-versus",
    name: "DSA — Versus",
    subtitle: "Real-Time Competitive Coding Battle Platform",
    context: "In Progress · Personal Project",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Docker", "Vercel", "GitHub"],
    points: [
      "Building a full-stack platform where users compete head-to-head solving DSA problems with a shared live timer and rankings, using Next.js (App Router), React, Tailwind CSS, and Monaco Editor.",
      "Using Supabase (PostgreSQL), authentication (email and GitHub OAuth), and Realtime subscriptions to sync battle state and timers live across all connected clients.",
      "Integrating a self-hosted Judge0 CE engine via Docker and Cloudflare Tunnel for sandboxed execution, deployed on Vercel with server-side API routes and Server Actions.",
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80",
  },
  {
    slug: "medflow",
    name: "MedFlow",
    subtitle: "Hospital Management & Referral System",
    context: "State-Level Hackathon — Finalist",
    stack: ["MongoDB", "Node.js", "Express.js", "React", "Tailwind CSS"],
    points: [
      "Architected a referral and patient management system with role-based auth, enabling real-time hospital coordination with controlled state transitions (pending → accepted/rejected/completed).",
      "Engineered location-aware hospital discovery and resource tracking using MongoDB geospatial indexing, enabling real-time visibility into bed, ICU, staff, and equipment capacity.",
    ],
    image: "https://images.pexels.com/photos/5366225/pexels-photo-5366225.jpeg?auto=compress&w=1600",
  },
  {
    slug: "redditor",
    name: "Redditor",
    subtitle: "Multi-Language Code Translation Platform",
    context: "Personal Project · Live at redditorcode.vercel.app",
    stack: ["Python", "Java", "Next.js", "TypeScript", "LLM Integration"],
    points: [
      "Engineered a real-time code translation system supporting 19+ languages using an AST-based parser fused with LLM inference pipelines, achieving sub-second conversion (Java → Python/C++).",
    ],
    image: "https://images.unsplash.com/photo-1633098096956-afdc8bcc8552?w=1600&q=80",
  },
  {
    slug: "mindspace",
    name: "MINDSPACE",
    subtitle: "AI-Based Internship Recommendation Engine",
    context: "Smart India Hackathon — Team Project",
    stack: ["React", "Flask", "Python", "PostgreSQL", "Redis", "TypeScript"],
    points: [
      "Architected a hybrid recommendation engine combining LLM-powered semantic reasoning with deterministic rule-based fallback, returning 3–5 ranked internship matches per query while preserving explainability and reliability under sparse-data conditions.",
      "Co-designed a mobile-first system stack (React PWA, Flask REST APIs, PostgreSQL, Redis) with offline caching support, enabling low-latency access and horizontal scalability for concurrent users on low-bandwidth networks.",
    ],
    image: "https://images.unsplash.com/photo-1511385348-a52b4a160dc2?w=1600&q=80",
  },
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Kotlin", "PHP", "Ruby", "SQL"],
  Frameworks: ["React", "Next.js", "Redux", "Node.js", "Express.js", "Ruby on Rails", "Tailwind CSS"],
  "Developer Tools": [
    "AWS",
    "Docker",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Supabase",
    "Vercel",
    "Cloudflare",
    "Git",
    "GitHub",
    "Linux",
    "IBM Cloud",
  ],
  "Libraries & Concepts": [
    "REST APIs",
    "JWT",
    "OAuth",
    "WebSockets",
    "System Design",
    "Data Structures & Algorithms",
    "LLM Integration",
    "Prompt Engineering",
    "AST-Based Parsing",
  ],
};

export const education = [
  {
    school: "Shree Guru Gobind Singh Tricentenary University",
    place: "Gurugram, India",
    degree: "B.Tech — Computer Science",
    period: "Jul 2024 — Jul 2027",
    score: "GPA 9.01",
  },
  {
    school: "Parul University",
    place: "Vadodara, Gujarat",
    degree: "Diploma — Information Technology",
    period: "Jun 2021 — Jun 2024",
    score: "",
  },
];

export const certifications = [
  { title: "Oracle Infrastructure and AI Foundations Associate", issuer: "Oracle Cloud", date: "Oct 2025" },
  { title: "Community Admin Peer Mentorship — Cloud Computing", issuer: "SGT University", date: "Jul 2025 — Present" },
  { title: "Training and Placement Coordinator", issuer: "Parul University", date: "Aug 2022 — Jun 2024" },
];

/* ————————————— Demo content ————————————— */

export const blogPosts = [
  {
    slug: "the-quiet-part-of-systems",
    title: "The quiet part of systems",
    excerpt: "Notes on writing code that survives its authors — legibility, boundaries, and the discipline of doing less.",
    date: "2025-11-14",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1633098096956-afdc8bcc8552?w=1600&q=80",
    body: [
      "Every system I've admired had one thing in common — you could read it. Not because it was small, but because the authors held themselves to a specific kind of restraint.",
      "When I started writing production code I wanted to be clever. I wanted branches, hooks, tiny generalizations for the future. What actually helped my teammates was the opposite: obvious names, boring structure, one path through the file. The clever thing was to make the machinery invisible.",
      "The best abstractions I've written weren't invented up-front. They surfaced after the third or fourth place I copied the same pattern. Waiting is the discipline. The code will tell you what wants to exist.",
    ],
  },
  {
    slug: "dsa-is-a-language",
    title: "DSA is a language, not a leetcode ritual",
    excerpt: "Why I stopped counting problems and started reading solutions like literature.",
    date: "2025-10-22",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1600&q=80",
    body: [
      "For a long time I chased volume. 300 problems. 500. It felt like progress the way a treadmill feels like distance.",
      "The shift happened when I began reading two or three editorials in depth per week — the way you'd read a short story. The pattern isn't in the problem, it's in the mind that solved it. Once I saw that, my rating became a side effect.",
    ],
  },
  {
    slug: "on-side-projects-that-die",
    title: "On side‑projects that die (and the one that didn't)",
    excerpt: "Redditor almost joined the graveyard. Here's what kept it alive.",
    date: "2025-09-03",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80",
    body: [
      "Most of my repositories are quiet. Redditor is the exception, and I think I know why: it solved a problem I actually had every day, and I gave it exactly one job.",
      "Scope discipline is love disguised as engineering. If you can't say what your project is not, you'll ship nothing.",
    ],
  },
  {
    slug: "linux-as-a-teacher",
    title: "Linux as a teacher",
    excerpt: "What managing a small fleet of servers taught me about writing better software.",
    date: "2025-07-18",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1600&q=80",
    body: [
      "You cannot lie to a server. It will not pretend your config is fine. That kind of honesty rewires you.",
      "After a season of firewall rules and subnet arithmetic, my application code got sharper. I stopped assuming and started checking.",
    ],
  },
];

export const papers = [
  { title: "Attention Is All You Need", authors: "Vaswani et al.", year: 2017, readOn: "2025-11-30" },
  { title: "MapReduce: Simplified Data Processing on Large Clusters", authors: "Dean & Ghemawat", year: 2004, readOn: "2025-11-12" },
  { title: "The Google File System", authors: "Ghemawat, Gobioff, Leung", year: 2003, readOn: "2025-10-28" },
  { title: "Dynamo: Amazon's Highly Available Key‑value Store", authors: "DeCandia et al.", year: 2007, readOn: "2025-10-06" },
  { title: "Bigtable: A Distributed Storage System for Structured Data", authors: "Chang et al.", year: 2006, readOn: "2025-09-22" },
  { title: "In Search of an Understandable Consensus Algorithm (Raft)", authors: "Ongaro & Ousterhout", year: 2014, readOn: "2025-09-08" },
  { title: "Kafka: a Distributed Messaging System for Log Processing", authors: "Kreps, Narkhede, Rao", year: 2011, readOn: "2025-08-24" },
  { title: "Retrieval‑Augmented Generation for Knowledge‑Intensive NLP Tasks", authors: "Lewis et al.", year: 2020, readOn: "2025-08-02" },
];

export const bookshelf = [
  {
    category: "Grit & Discipline",
    books: [
      { title: "Atomic Habits", author: "James Clear", note: "Systems > goals." },
      { title: "Deep Work", author: "Cal Newport", note: "Focus is a professional advantage." },
      { title: "Can't Hurt Me", author: "David Goggins", note: "The accountability mirror." },
      { title: "The War of Art", author: "Steven Pressfield", note: "On resistance." },
    ],
  },
  {
    category: "Management & Craft",
    books: [
      { title: "High Output Management", author: "Andrew Grove", note: "The manager's textbook." },
      { title: "The Making of a Manager", author: "Julie Zhuo", note: "First‑time management, honestly." },
      { title: "Shape Up", author: "Ryan Singer", note: "Betting on work that ships." },
      { title: "The Effective Executive", author: "Peter Drucker", note: "Time as the scarcest resource." },
    ],
  },
  {
    category: "Tech & Systems",
    books: [
      { title: "Designing Data‑Intensive Applications", author: "Martin Kleppmann", note: "The one you re‑read." },
      { title: "The Pragmatic Programmer", author: "Hunt & Thomas", note: "Craft, not fashion." },
      { title: "Clean Code", author: "Robert C. Martin", note: "Reading it is enough — don't obey it." },
      { title: "Structure & Interpretation of Computer Programs", author: "Abelson & Sussman", note: "Programming as thinking." },
    ],
  },
  {
    category: "Thinking",
    books: [
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", note: "Two systems, one mind." },
      { title: "Meditations", author: "Marcus Aurelius", note: "Old notes, still useful." },
      { title: "Zero to One", author: "Peter Thiel", note: "Contrarian truths." },
      { title: "Skin in the Game", author: "N. N. Taleb", note: "Risk you cannot hide from." },
    ],
  },
];

export const searchIndex = () => [
  { kind: "page", label: "Home", href: "/" },
  { kind: "page", label: "Work", href: "/work" },
  { kind: "page", label: "Projects", href: "/projects" },
  { kind: "page", label: "Blog", href: "/blog" },
  { kind: "page", label: "Resume", href: "/resume" },
  { kind: "page", label: "Bookshelf", href: "/bookshelf" },
  { kind: "page", label: "Papershelf", href: "/papershelf" },
  ...projects.map((p) => ({ kind: "project", label: p.name + " — " + p.subtitle, href: "/projects" })),
  ...blogPosts.map((b) => ({ kind: "blog", label: b.title, href: `/blog/${b.slug}` })),
  ...papers.map((p) => ({ kind: "paper", label: p.title, href: "/papershelf" })),
  ...bookshelf.flatMap((c) => c.books.map((b) => ({ kind: "book", label: `${b.title} — ${b.author}`, href: "/bookshelf" }))),
];