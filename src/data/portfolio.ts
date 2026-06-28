// Single source of truth for all portfolio content.
// Update this file to change anything shown on the site.

export const profile = {
  name: "Sooryan K",
  role: "Full Stack Developer",
  location: "Kochi, India",
  available: true,
  avatar: "/images/Profile-Photo.webp",
  resume: "/Resume.pdf",
  email: "sooryanoff@gmail.com",
  intro:
    "I build and ship scalable, end-to-end web applications with Next.js, React, and PostgreSQL.",
  bio: "I'm a Full Stack Developer with 6+ months of professional experience building and optimizing scalable web applications using Next.js and PostgreSQL. I work across the stack with React, Node.js, TypeScript, Prisma, and Supabase, designing secure APIs and authentication systems. I've integrated third-party services like Razorpay, OpenWeatherMap, and Resend, with a strong focus on performance, SEO, and responsive UI/UX. I enjoy executing projects end-to-end and turning business requirements into clean, maintainable solutions.",
};

export const socials = {
  github: "https://github.com/Sooryan-k",
  linkedin: "https://www.linkedin.com/in/sooryan-k/",
  email: "mailto:sooryanoff@gmail.com",
};

export const focusAreas = [
  "End-to-end delivery",
  "Secure APIs & Auth",
  "Performance & SEO",
  "Responsive UI/UX",
];

export type Project = {
  title: string;
  image: string;
  type: string;
  description: string;
  technologies: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "ZooperChat",
    image: "/images/projects/zooperchat.svg",
    type: "Individual Project",
    description:
      "A ChatGPT style AI chat application where conversations are saved to the cloud and stay in sync across every device a user signs in on. Replies appear live as the model generates them, sign in happens with Google or a one time email link, and chats can be grouped into projects or shared through a short read only link. It also has a hands free voice mode and live collaborative rooms where multiple people join by link and chat with the AI together in real time, with presence, typing indicators, usernames, and a per message AI memory.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vercel AI SDK",
      "Supabase (PostgreSQL, Auth, Realtime, RLS)",
      "Web Speech API",
      "OpenRouter",
      "Vercel",
    ],
    link: "https://zooperchat.vercel.app/",
  },
  {
    title: "London News",
    image: "/images/projects/london-news-logo.webp",
    type: "Professional Project",
    description:
      "London News is a full stack news publishing platform built with Next.js and PostgreSQL, designed for both readers and administrators. It features category based article browsing, detailed stories, authentication, subscriptions, surveys, and a live weather widget powered by OpenWeatherMap. An admin dashboard supports full CRUD operations, role based access control, and image storage using Supabase and Prisma ORM. The platform is secured with NextAuth.js (JWT) and deployed on Vercel with real time monitoring via Sentry and newsletter delivery through Resend.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL with Supabase",
      "Supabase Storage",
      "NextAuth.js",
      "Sentry",
      "OpenWeatherMap API",
      "Resend",
      "Vercel",
    ],
  },
  {
    title: "PETme Web Application",
    image: "/images/projects/petmelogo.webp",
    type: "Individual Project",
    description:
      "A peer to peer marketplace enabling users to list pets and purchase pet food and accessories. The application features secure authentication, online payments, RESTful APIs, and a responsive frontend designed for smooth user experience.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
      "Bootstrap",
      "Razorpay",
      "Material-UI",
      "CSS",
    ],
    link: "https://petmebysooryan.vercel.app/",
  },
];

export type TimelineEntry = {
  role: string;
  org: string;
  period: string;
};

export const experience: TimelineEntry[] = [
  {
    role: "Full Stack Developer",
    org: "K4rm4 Social Feedback Systems",
    period: "Feb 2025 – Sep 2025",
  },
];

export const education: TimelineEntry[] = [
  {
    role: "B.Tech. in Computer Science & Engineering",
    org: "LBS College of Engineering, Kasaragod",
    period: "2018 – 2022",
  },
];

export type Certification = {
  title: string;
  org: string;
  period: string;
};

export const certifications: Certification[] = [
  {
    title: "MERN Stack Web Development",
    org: "Internship – Luminar Technolab, Kochi",
    period: "2023",
  },
];

export const skillGroups = [
  {
    label: "Frontend & Backend",
    items: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    label: "Databases & ORM",
    items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Supabase"],
  },
  {
    label: "Tools & Platforms",
    items: ["VS Code", "Git", "Cursor", "Vercel", "Sentry", "SEO"],
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const lastUpdated = "Jun 2026";
