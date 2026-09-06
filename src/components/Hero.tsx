import type { CSSProperties } from "react";
import Image from "next/image";
import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";
import { profile, socials } from "@/data/portfolio";

// Staggered entrance, expressed as CSS animation delays. Kept short so the
// hero is visually settled almost immediately (Speed Index / LCP).
const step = (i: number) => ({ "--d": `${i * 0.04}s` } as CSSProperties);

export default function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-5 pb-20 pt-28 sm:px-6 md:flex-row md:justify-between md:gap-12 md:pb-28 md:pt-36"
    >
      {/* text column */}
      <div className="flex-1 text-center md:text-left">
        <p
          style={step(0)}
          className="anim-up font-mono text-xs uppercase tracking-[0.3em] text-accent sm:text-sm"
        >
          {profile.location}
        </p>

        <h1
          style={step(1)}
          className="anim-up mt-4 font-display text-4xl font-semibold leading-[1.05] text-fg sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </h1>

        <p
          style={step(2)}
          className="anim-up mt-3 font-display text-2xl italic text-muted sm:text-3xl"
        >
          {profile.role}
        </p>

        <p
          style={step(3)}
          className="anim-up mx-auto mt-6 max-w-xl font-sans text-sm leading-relaxed text-muted sm:text-base md:mx-0"
        >
          {profile.intro}
        </p>

        {profile.available && (
          <div
            style={step(4)}
            className="anim-up mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-fill px-3 py-1 font-mono text-xs text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Open to opportunities
          </div>
        )}

        <div
          style={step(5)}
          className="anim-up mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-mono text-sm font-medium text-on-accent transition hover:bg-accent-soft"
          >
            View Work
            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-fill px-5 py-2.5 font-mono text-sm text-fg transition hover:bg-fill-strong"
          >
            <FileText size={16} />
            Resume
          </a>
        </div>

        <div
          style={step(6)}
          className="anim-up mt-7 flex items-center justify-center gap-3 md:justify-start"
        >
          <SocialIcon href={socials.github} label="GitHub">
            <Github size={18} />
          </SocialIcon>
          <SocialIcon href={socials.email} label="Email">
            <Mail size={18} />
          </SocialIcon>
          <SocialIcon href={socials.linkedin} label="LinkedIn">
            <Linkedin size={18} />
          </SocialIcon>
        </div>
      </div>

      {/* portrait */}
      <div className="anim-pop relative shrink-0">
        <div
          className="absolute -inset-4 rounded-full bg-accent/20 blur-2xl"
          aria-hidden
        />
        <div className="relative h-44 w-44 overflow-hidden rounded-full border border-accent/30 ring-1 ring-border sm:h-56 sm:w-56 lg:h-72 lg:w-72">
          {/* Largest element above the fold, so it decides LCP. The source
              is already a 10KB WebP, so `unoptimized` skips the image-optimizer
              round trip while `priority` still preloads it at high priority. */}
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={413}
            height={531}
            priority
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-fill text-muted transition hover:border-accent/40 hover:text-accent"
    >
      {children}
    </a>
  );
}
