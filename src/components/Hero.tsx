"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";
import { profile, socials } from "@/data/portfolio";

export default function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const item: Variants = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-5 pb-20 pt-28 sm:px-6 md:flex-row md:justify-between md:gap-12 md:pb-28 md:pt-36"
    >
      {/* text column */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 text-center md:text-left"
      >
        <motion.p
          variants={item}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent sm:text-sm"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-fg sm:text-6xl lg:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 font-display text-2xl italic text-muted sm:text-3xl"
        >
          {profile.role}
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl font-sans text-sm leading-relaxed text-muted sm:text-base md:mx-0"
        >
          {profile.intro}
        </motion.p>

        {profile.available && (
          <motion.div
            variants={item}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-fill px-3 py-1 font-mono text-xs text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Open to opportunities
          </motion.div>
        )}

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
        >
          <Link
            href="#work"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-mono text-sm font-medium text-on-accent transition hover:bg-accent-soft"
          >
            View Work
            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </Link>
          <Link
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-fill px-5 py-2.5 font-mono text-sm text-fg transition hover:bg-fill-strong"
          >
            <FileText size={16} />
            Resume
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-7 flex items-center justify-center gap-3 md:justify-start"
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
        </motion.div>
      </motion.div>

      {/* portrait */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative shrink-0"
      >
        <div
          className="absolute -inset-4 rounded-full bg-accent/20 blur-2xl"
          aria-hidden
        />
        <div className="relative h-44 w-44 overflow-hidden rounded-full border border-accent/30 ring-1 ring-border sm:h-56 sm:w-56 lg:h-72 lg:w-72">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={320}
            height={320}
            priority
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
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
