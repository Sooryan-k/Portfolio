import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "London News",
    image: "/images/projects/london-news-logo.webp",
    type: "Professional Project",
    description:
      "A full-stack news publishing platform built using Next.js, TypeScript, and Tailwind CSS. The platform supports category-based article browsing, detailed stories, authentication, subscriptions, mood surveys, and a live weather widget. It also includes an admin dashboard with full CRUD operations, role-based access control, image storage, newsletter broadcasting, and real-time error tracking.",
    technologies:
      "Next.js, TypeScript, Tailwind CSS, PostgreSQL (Supabase), Prisma ORM, NextAuth.js, Sentry, OpenWeatherMap API, Resend, Vercel",
  },
  {
    title: "Washington Insider",
    image: "/images/projects/washingtoninsider-logo.webp",
    type: "Professional Project",
    description:
      "A modern news publishing web application allowing users to browse articles by category and read detailed stories through a fast, responsive interface. The project focuses on performance, scalability, clean data modeling, and maintainable architecture.",
    technologies:
      "Next.js, TypeScript, Tailwind CSS, PostgreSQL (Supabase), Prisma ORM, Vercel",
  },
  {
    title: "PETme Web Application",
    image: "/images/projects/petmelogo.png",
    type: "Individual Project",
    description:
      "A peer-to-peer marketplace enabling users to list pets and purchase pet food and accessories. The application features secure authentication, online payments, RESTful APIs, and a responsive frontend designed for smooth user experience.",
    technologies:
      "React.js, Node.js, Express.js, MongoDB, Firebase Authentication, Razorpay, Bootstrap, Material-UI",
  },
];

export default function About() {
  return (
    <section className="space-y-20">
      {/* -------- About Me -------- */}
      <div className="space-y-4 font-mono text-zinc-300">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white underline underline-offset-8">
          About Me
        </h2>

        <p className="leading-relaxed">
          I am a Full Stack Developer with professional experience building and
          optimizing modern web applications using Next.js and PostgreSQL. I
          specialize in delivering scalable, high-performance solutions across
          frontend and backend with a strong focus on clean architecture,
          responsive UI/UX, and performance optimization.
        </p>

        <p className="leading-relaxed">
          I have hands-on experience designing RESTful APIs, implementing secure
          authentication systems, integrating third-party services, and
          deploying applications to the cloud. I am comfortable executing
          end-to-end projects independently as well as collaborating within
          cross-functional teams.
        </p>
      </div>

      {/* -------- Projects -------- */}
      <div className="space-y-14">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white underline underline-offset-8 font-mono">
          Projects
        </h2>

        {projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start border-b border-white/10 pb-10"
          >
            {/* Left: Project Image */}
            <div className="relative h-80 w-full overflow-hidden rounded-xl border border-white/10 bg-black">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-center w-full grayscale transition duration-300 hover:grayscale-0"
              />

              {/* Project Type Badge */}
              <span className="absolute top-3 left-3 rounded-md bg-red-400 px-1 py-1 text-xs font-mono text-black">
                {project.type}
              </span>
            </div>

            {/* Right: Description */}
            <div className="relative space-y-3 font-mono">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {project.description}
              </p>

              <p className="text-xs text-zinc-500 leading-relaxed">
                <span className="text-zinc-300">Technologies:</span>{" "}
                {project.technologies}
              </p>

              {/* Arrow Button */}
              <button
                aria-label="Project details"
                className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white"
              >
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
