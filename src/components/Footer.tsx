import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-10 space-y-14 px-4 pb-12 text-center font-mono text-zinc-300">
      {/* tech stack  */}
      <div className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          My Tech Stack
        </h2>

        <div className="mx-auto max-w-5xl space-y-8">
          {/* frontend & backend */}
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-widest text-zinc-400">
              Frontend & Backend
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Next.js",
                "React.js",
                "Node.js",
                "Express.js",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-200 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* databases & ORM */}
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-widest text-zinc-400">
              Databases & ORM
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["PostgreSQL", "MongoDB", "Prisma ORM", "Supabase"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-200 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* tools & platforms */}
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-widest text-zinc-400">
              Tools & Platforms
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["VS Code", "Git", "Cursor", "Vercel", "Sentry", "SEO"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-200 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* resume */}
      <div className="flex justify-center">
        <Link
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
      inline-flex items-center gap-3
      rounded-xl
      border border-white/20
      bg-white/10
      px-5 py-2
      font-mono text-lg font-semibold tracking-wider text-white
      backdrop-blur-md
      hover:bg-white/15
    "
        >
          Resume
          <ArrowUpRight size={20} />
        </Link>
      </div>

      {/* footer text */}
      <p className="text-xs sm:text-sm text-zinc-500">
        Built by Sooryan K · Last updated: Jan, 2026
      </p>
    </footer>
  );
}
