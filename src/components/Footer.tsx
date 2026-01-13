import { ArrowUpRight } from "lucide-react";
export default function Footer() {
  return (
    <footer className="mt-28 space-y-14 px-4 pb-12 text-center font-mono text-zinc-300">
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
      <div>
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-lg font-semibold tracking-wider underline underline-offset-4 hover:text-white transition"
        >
          Resume
          <span aria-hidden>
            <ArrowUpRight size={20} />
          </span>
        </a>
      </div>

      {/* footer text */}
      <p className="text-xs sm:text-sm text-zinc-500">
        Built by Sooryan K · Last updated: Jan, 2026
      </p>
    </footer>
  );
}
