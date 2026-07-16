// swap these for your real details
export const siteConfig = {
  name: "Ranvir Singh",
  role: "Engineer · Developer",
  email: "ranvirsingh.15h@gmail.com",
  phone: "+91 8320263271",
  location: "Gurugram, India",
  githubUsername: "RanvirxD",
  tagline:
    "Building things at the intersection of code and curiosity — currently shipping full-stack products and writing about the process along the way.",
  socials: {
    twitter: "#",
    linkedin: "https://linkedin.com/in/rait-ranvir-singh",
    github: "https://github.com/RanvirxD",
    youtube: "#",
    instagram: "#",
  },
};

// used on the home + experience pages
export const experience = [
  {
    company: "Nextgen Technologies",
    role: "Intern",
    mode: "On site",
    location: "Vadodara, Gujarat",
    start: "Feb 2024",
    end: "Apr 2024",
    points: [
      "Managed Linux server infrastructure and network configuration — handling subnet access, firewall rules, and service availability monitoring for zero-downtime deployment across multi-tenant web environments",
    ],
  },
  {
    company: "IBM Cloud",
    role: "AI & Cloud Intern",
    mode: "Virtual",
    location: "",
    start: "Dec 2023",
    end: "Jan 2024",
    points: [
      "Architected end-to-end data preprocessing pipelines on IBM Cloud, converting raw unstructured datasets into ML-ready JSON-structured formats with multi-layer validation",
    ],
  },
  {
    company: "MySphere Infotech",
    role: "PHP Intern",
    mode: "On site",
    location: "Vadodara, Gujarat",
    start: "Aug 2023",
    end: "Oct 2023",
    points: [
      "Built and shipped full-stack e-commerce platforms in PHP, engineering WooCommerce–REST API integrations with third-party payment gateways to automate client transaction workflows",
    ],
  },
];

// used on the home + projects pages
export const projects = [
  {
    name: "MINDSPACE",
    tag: "Smart India Hackathon · Team Project",
    description:
      "AI-based internship recommendation engine — a hybrid system combining LLM-powered semantic reasoning with a deterministic rule-based fallback, returning ranked matches per query while preserving explainability under sparse-data conditions.",
    stack: ["React PWA", "Flask", "PostgreSQL", "Redis"],
    links: { live: "", code: "" },
  },
  {
    name: "MedFlow",
    tag: "State Level Hackathon · Finalist",
    description:
      "Distributed hospital management and inter-hospital referral system with role-based auth and real-time coordination across hospitals, plus geospatial hospital discovery for live bed, ICU, staff, and equipment visibility.",
    stack: ["MongoDB", "Node.js", "REST APIs"],
    links: { live: "", code: "" },
  },
  {
    name: "Redditor",
    tag: "Personal Project · Live in production",
    description:
      "AI-powered multi-language code translation and execution platform — an AST-based parser fused with LLM inference, supporting 19+ languages with sub-second cross-language conversion.",
    stack: ["TypeScript", "Python", "LLMs"],
    links: { live: "", code: "" },
  },
];

export const skills = {
  languages: ["C++", "Python", "JavaScript", "TypeScript", "SQL", "Kotlin"],
  backend: ["Node.js", "Express", "REST APIs", "JWT", "System Design", "DSA"],
  cloud: ["AWS", "Docker", "Linux", "Git", "MongoDB", "SQL"],
  spoken: ["English", "Hindi", "Punjabi", "Gujarati"],
};

export const education = [
  {
    school: "Shree Guru Gobind Singh Tricentenary University",
    location: "Gurugram, India",
    degree: "B.Tech, Computer Science",
    detail: "GPA: 9.01",
    start: "Jul 2024",
    end: "Jul 2027",
  },
  {
    school: "Parul University",
    location: "Vadodara, Gujarat, India",
    degree: "B.Tech, Computer Science",
    detail: "CGPA: 7.68",
    start: "Jun 2021",
    end: "Jun 2024",
  },
];

export const certifications = [
  {
    title: "Oracle Infrastructure and AI Foundations Associate",
    org: "Oracle Cloud",
    date: "Oct 2025",
  },
  {
    title: "Community Admin — Peer Mentorship, Cloud Computing",
    org: "SGT University",
    date: "Jul 2025 - Present",
  },
  {
    title: "Training and Placement Coordinator",
    org: "Parul University",
    date: "Aug 2022 - Jun 2024",
  },
];

// placeholder posts — swap in your real writing, slug is the URL (/blog/slug)
export const blogPosts = [
  {
    slug: "shipping-under-pressure",
    title: "Shipping under pressure",
    date: "2026-06-02",
    excerpt:
      "Notes from a hackathon weekend on what actually gets cut when the clock runs out, and what shouldn't.",
    body: [
      "This is placeholder content — replace it with your real post.",
      "Write about what actually happened: the decision that mattered, what you'd do differently, what surprised you.",
    ],
  },
  {
    slug: "picking-a-stack-you-can-defend",
    title: "Picking a stack you can defend",
    date: "2026-05-14",
    excerpt:
      "Why 'what's trending' is the wrong first question when choosing tech for a new project.",
    body: [
      "This is placeholder content — replace it with your real post.",
      "A good structure: the constraint you were solving for, the options you considered, why you picked what you picked.",
    ],
  },
  {
    slug: "internships-taught-me-more-than-college",
    title: "What internships taught me that college didn't",
    date: "2026-04-01",
    excerpt:
      "Three internships in, here's the gap between coursework and shipping something someone else depends on.",
    body: [
      "This is placeholder content — replace it with your real post.",
      "Good raw material: specific moments from Nextgen, IBM Cloud, or MySphere Infotech.",
    ],
  },
];

// placeholder shelf — swap in books you'd actually recommend
export const books = [
  { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", note: "The book most engineers wish they'd read earlier." },
  { title: "The Pragmatic Programmer", author: "Hunt & Thomas", note: "Still holds up." },
  { title: "Deep Work", author: "Cal Newport", note: "Reread every time I get distracted for a week straight." },
  { title: "Atomic Habits", author: "James Clear", note: "Less about willpower, more about systems." },
];

// placeholder shelf — swap in papers/articles you've actually read
export const papers = [
  {
    title: "Attention Is All You Need",
    source: "Vaswani et al., 2017",
    note: "The paper behind every LLM you've used this year.",
    link: "",
  },
  {
    title: "A Note on Distributed Computing",
    source: "Waldo et al.",
    note: "Old, but the core argument about local vs. distributed objects still lands.",
    link: "",
  },
  {
    title: "The Google File System",
    source: "Ghemawat, Gobioff, Leung",
    note: "Worth reading once you've built something that outgrows a single machine.",
    link: "",
  },
];
