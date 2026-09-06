"use client";

import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(navLinks[0].id);
  const [open, setOpen] = useState(false);

  // glassy background once the user scrolls past the hero top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll-spy: highlight the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-page/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        {/* logo */}
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-fg"
          onClick={() => setOpen(false)}
        >
          Sooryan<span className="text-accent">.</span>
        </a>

        {/* desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded-lg px-3 py-1.5 font-mono text-xs tracking-wide transition-colors ${
                active === link.id
                  ? "text-accent"
                  : "text-muted hover:text-fg"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-3 py-1.5 font-mono text-xs font-medium text-accent transition hover:bg-accent/20"
          >
            <FileText size={14} />
            Resume
          </a>

          {/* mobile menu toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-fill text-muted transition hover:text-fg md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* mobile dropdown */}
      {open && (
        <div className="border-t border-border bg-page/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-2 py-3 font-mono text-sm transition-colors ${
                  active === link.id
                    ? "text-accent"
                    : "text-muted hover:text-fg"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
