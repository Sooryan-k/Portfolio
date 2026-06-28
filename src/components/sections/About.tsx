import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { focusAreas, profile } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-24">
      <Reveal>
        <SectionHeading index="01" eyebrow="About" title="A bit about me" />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-8 max-w-3xl font-sans text-base leading-relaxed text-zinc-300 sm:text-lg">
          {profile.bio}
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-zinc-300"
            >
              {area}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
