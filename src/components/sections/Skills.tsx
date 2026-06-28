import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-24">
      <Reveal>
        <SectionHeading index="04" eyebrow="Toolbox" title="My tech stack" />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05} className="h-full">
            <div className="h-full rounded-2xl border border-border bg-surface/40 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {group.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-fill px-3 py-1 font-mono text-xs text-muted transition hover:border-accent/30 hover:text-fg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
