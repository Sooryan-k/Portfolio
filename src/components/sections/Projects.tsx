import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-24">
      <Reveal>
        <SectionHeading
          index="02"
          eyebrow="Selected Work"
          title="Projects I've built"
        />
      </Reveal>

      <div className="mt-12 space-y-6">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.05}>
            <article className="group relative grid grid-cols-1 gap-6 rounded-2xl border border-border bg-surface/40 p-6 transition-colors hover:border-accent/30 md:grid-cols-[180px_1fr] md:gap-8 md:p-7">
              {/* big faded index */}
              <span
                aria-hidden
                className="pointer-events-none absolute right-6 top-4 font-display text-5xl font-semibold text-fg/5 md:text-6xl"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* logo */}
              <div className="relative flex aspect-square w-24 items-center justify-center overflow-hidden rounded-xl border border-border bg-fill sm:w-28 md:w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={180}
                  height={180}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* content */}
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl font-semibold text-fg sm:text-2xl">
                    {project.title}
                  </h3>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {project.type}
                  </span>
                </div>

                <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-fill px-2 py-1 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 font-mono text-sm text-accent transition-all hover:gap-2.5"
                  >
                    Visit site
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
