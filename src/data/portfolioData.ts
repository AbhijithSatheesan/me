export interface Project {
  title: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  github?: string;
  live?: string;
  slug?: string;
  details?: {
    overview: string;
    challenges: { title: string; description: string }[];
    features: string[];
  };
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "React Native", "Tailwind CSS", "Redux"],
  },
  {
    category: "Backend",
    items: ["Django", "PostgreSQL", "Redis", "REST APIs", "WebSockets"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "AWS EC2", "DigitalOcean", "Cloudflare Stream", "Git"],
  },
  {
    category: "Security & Testing",
    items: ["OWASP Top 10", "Kali Linux", "Nmap", "Penetration Testing"],
  },
];

export const projects: Project[] = [
  {
    title: "Respawn Nation",
    role: "Lead Full-Stack Developer",
    slug: "respawn-nation",
    description:
      "A high-performance esports and media-streaming platform built to handle real-time tournaments and live broadcast feeds.",
    highlights: [
      "Engineered automated tournament brackets and real-time score updates.",
      "Integrated Cloudflare Stream for low-latency live video streaming.",
      "Configured Razorpay integration for automated entry fee processing.",
    ],
    stack: ["React", "TypeScript", "Django", "PostgreSQL", "Cloudflare Stream", "Razorpay"],
    github: "https://github.com",
    live: "https://example.com",
    details: {
      overview:
        "Respawn Nation is a comprehensive esports ecosystem. The platform required marrying a robust Django backend with a highly reactive real-time frontend to manage live competitive environments, streaming, and instant payouts.",
      challenges: [
        {
          title: "Mobile Screen-Sharing Architecture",
          description:
            "Initial streaming tools lacked proper mobile screen-sharing capabilities. I pivoted the technology stack to ensure seamless mobile broadcasting support, allowing mobile gamers to stream directly to the platform without third-party bottlenecks.",
        },
        {
          title: "Complex Middleware Orchestration",
          description:
            "Managing custom real-time states and standard HTTP requests caused deep middleware ordering conflicts (including CSS loading failures in the Django admin). I restructured the application initialization and middleware pipeline to ensure rock-solid stability.",
        },
        {
          title: "Low-Latency Live Feeds",
          description:
            "Integrated Cloudflare Stream while meticulously tuning low-latency testing parameters to balance real-time viewer experience with optimized cloud infrastructure costs.",
        },
      ],
      features: [
        "Live Tournament Bracket Generation",
        "Low-Latency Video Broadcasting",
        "Automated Prize Pool Payouts (Razorpay)",
        "Real-Time Match Chat & Notifications",
      ],
    },
  },
  {
    title: "Comprehensive School ERP",
    role: "Full-Stack Architect",
    slug: "school-erp",
    description:
      "A secure management ecosystem for educational institutions handling student data, real-time messaging, and fee processing.",
    highlights: [
      "Role-based access control for students, parents, teachers, and admins.",
      "Real-time chat, notifications, and announcement feeds powered by Redis.",
      "Hardened backend security aligned strictly with OWASP Top 10 guidelines.",
    ],
    stack: ["React", "TypeScript", "Django", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com",
  },
];