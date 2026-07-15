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
  },
  {
    name: "MedFlow",
    tag: "State Level Hackathon · Finalist",
    description:
      "Distributed hospital management and inter-hospital referral system with role-based auth and real-time coordination across hospitals, plus geospatial hospital discovery for live bed, ICU, staff, and equipment visibility.",
    stack: ["MongoDB", "Node.js", "REST APIs"],
  },
  {
    name: "Redditor",
    tag: "Personal Project · Live in production",
    description:
      "AI-powered multi-language code translation and execution platform — an AST-based parser fused with LLM inference, supporting 19+ languages with sub-second cross-language conversion.",
    stack: ["TypeScript", "Python", "LLMs"],
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
