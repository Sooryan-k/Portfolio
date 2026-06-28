import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  certifications,
  education,
  experience,
  type TimelineEntry,
} from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-24"
    >
      <Reveal>
        <SectionHeading
          index="03"
          eyebrow="Career"
          title="Experience & Education"
        />
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
        <Reveal>
          <TimelineColumn title="Experience" items={experience} />
        </Reveal>
        <Reveal delay={0.1}>
          <TimelineColumn title="Education" items={education} />
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            Certifications
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-xl border border-white/10 bg-surface/40 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-base font-semibold text-white">
                      {cert.title}
                    </p>
                    <p className="mt-1 font-sans text-sm text-zinc-400">
                      {cert.org}
                    </p>
                  </div>
                  <span className="whitespace-nowrap font-mono text-xs text-accent">
                    {cert.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function TimelineColumn({
  title,
  items,
}: {
  title: string;
  items: TimelineEntry[];
}) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
        {title}
      </p>
      <ol className="relative mt-6 space-y-8 border-l border-white/10">
        {items.map((item) => (
          <li key={item.org} className="ml-6">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-base" />
            <p className="font-display text-lg font-semibold text-white">
              {item.role}
            </p>
            <p className="mt-0.5 font-sans text-sm text-zinc-400">{item.org}</p>
            <p className="mt-1 font-mono text-xs text-accent">{item.period}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
