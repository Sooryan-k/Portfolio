import Link from "next/link";
import { ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { lastUpdated, profile, socials } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-5xl px-5 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <div className="rounded-3xl border border-white/10 bg-surface/40 px-6 py-14 text-center sm:px-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Get in touch
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
            Let&apos;s build something great together.
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-sm text-zinc-400 sm:text-base">
            I&apos;m currently open to new opportunities. Whether you have a role
            in mind or just want to connect, my inbox is always open.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={socials.email}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-mono text-sm font-medium text-black transition hover:bg-accent-soft"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <Link
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-mono text-sm text-white transition hover:bg-white/10"
            >
              <FileText size={16} />
              Resume
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <SocialIcon href={socials.github} label="GitHub">
              <Github size={18} />
            </SocialIcon>
            <SocialIcon href={socials.linkedin} label="LinkedIn">
              <Linkedin size={18} />
            </SocialIcon>
          </div>
        </div>
      </Reveal>

      <p className="mt-10 text-center font-mono text-xs text-zinc-600">
        Built by {profile.name} · Last updated {lastUpdated}
      </p>
    </footer>
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
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition hover:border-accent/40 hover:text-accent"
    >
      {children}
    </a>
  );
}
