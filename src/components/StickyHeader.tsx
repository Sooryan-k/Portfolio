"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export default function StickyHeader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed top-0 inset-x-0 z-50
        transition-all duration-300
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
      `}
    >
      <header className="bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          {/* left: small profile + name */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <Image
                src="/images/Profile-Photo.jpeg"
                alt="profile"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="leading-tight">
              <p className="font-mono text-sm font-semibold text-white">
                Sooryan K
              </p>
              <p className="font-mono text-xs text-zinc-400">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* right: social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Sooryan-k"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
              className="h-9 w-9 flex items-center justify-center rounded-lg border border-white/10 bg-black/60 text-zinc-300 hover:bg-black/80 hover:text-white transition"
            >
              <Github size={16} />
            </a>

            <a
              href="mailto:sooryanoff@gmail.com"
              aria-label="mail"
              className="h-9 w-9 flex items-center justify-center rounded-lg border border-white/10 bg-black/60 text-zinc-300 hover:bg-black/80 hover:text-white transition"
            >
              <Mail size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/sooryan-k/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
              className="h-9 w-9 flex items-center justify-center rounded-lg border border-white/10 bg-black/60 text-zinc-300 hover:bg-black/80 hover:text-white transition"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
