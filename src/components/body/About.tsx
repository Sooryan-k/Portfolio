import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "ZooperChat",
    image: "/images/projects/zooperchat.svg",
    type: "Individual Project",
    description:
      "A ChatGPT style AI chat application where conversations are saved to the cloud and stay in sync across every device a user signs in on. Replies appear live as the model generates them, sign in happens through a one time email link, chats can be grouped into projects, and any chat can be shared through a short read only link. All data is isolated per user with database row level security.",
    technologies:
      "Next.js, React, TypeScript, Tailwind CSS, Vercel AI SDK, Supabase (PostgreSQL, Auth, RLS), OpenRouter, Vercel",
    link: "https://zooperchat.vercel.app/",
  },
  {
    title: "London News",
    image: "/images/projects/london-news-logo.webp",
    type: "Professional Project",
    description:
      "London News is a full stack news publishing platform built with Next.js and PostgreSQL, designed for both readers and administrators. It features category based article browsing, detailed stories, authentication, subscriptions, surveys, and a live weather widget powered by OpenWeatherMap. An admin dashboard supports full CRUD operations, role based access control, and image storage using Supabase and Prisma ORM. The platform is secured with NextAuth.js (JWT) and deployed on Vercel with real time monitoring via Sentry and newsletter delivery through Resend.",
    technologies:
      "Next.js, Tailwind CSS, Prisma ORM, PostgreSQL with Supabase, Supabase Storage, NextAuth.js, Sentry, OpenWeatherMap API, Resend,Vercel",
  },
  {
    title: "PETme Web Application",
    image: "/images/projects/petmelogo.webp",
    type: "Individual Project",
    description:
      "A peer to peer marketplace enabling users to list pets and purchase pet food and accessories. The application features secure authentication, online payments, RESTful APIs, and a responsive frontend designed for smooth user experience.",
    technologies:
      "React.js, Node.js, Express.js, MongoDB, Firebase Authentication, Bootstrap, Razorpay, Material-UI, CSS",
    link: "https://petmebysooryan.vercel.app/",
  },
];

export default function About() {
  return (
    <section className="space-y-10 max-w-5xl mx-auto px-4">
      {/* about me  */}
      <div className="space-y-4 py-2 md:py-0 font-mono text-zinc-300">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white underline underline-offset-8">
          About Me
        </h2>

        <p className="leading-relaxed text-sm md:text-md">
          I’m a Full Stack Developer with 6+ months of professional experience
          building and optimizing scalable web applications using Next.js and
          PostgreSQL. I work across the stack with React, Node.js, TypeScript,
          Prisma, and Supabase, designing secure APIs and authentication
          systems. I’ve integrated third-party services like Razorpay,
          OpenWeatherMap, and Resend, with a strong focus on performance, SEO,
          and responsive UI/UX. I enjoy executing projects end-to-end and
          turning business requirements into clean, maintainable solutions.
        </p>
      </div>

      {/* projects */}
      <div className=" space-y-5 md:space-y-14">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white underline underline-offset-8 font-mono">
          Projects
        </h2>

        {projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 items-start border-b border-white/10 pb-10"
          >
            {/* left: project image */}
            <div className="relative h-auto w-full overflow-hidden rounded-xl border border-white/10 bg-black">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={50}
                className="object-center"
              />

              {/* project type badge */}
              <span className="absolute top-2 left-2 rounded-md bg-red-400 px-2 py-0.5 text-[10px] font-mono text-black">
                {project.type}
              </span>
            </div>

            {/* right: description */}
            <div className="relative space-y-3 font-mono">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed text-left tracking-tight md:text-justify md:tracking-tighter">
                {project.description}
              </p>

              <p className="text-xs text-zinc-500 leading-relaxed pr-3">
                <span className="text-zinc-300">Technologies:</span>{" "}
                {project.technologies}
              </p>

              {/* arrow button */}
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Project link"
                  className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white"
                >
                  <ArrowUpRight size={16} />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
