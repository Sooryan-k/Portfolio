import Image from "next/image";
import { Github, Linkedin, Mail, Moon } from "lucide-react";

export default function Head() {
  return (
    <section className="flex flex-col items-center text-center pt-20 sm:pt-24">
      {/* Avatar */}
      <div className="mb-6 h-40 w-40 sm:h-52 sm:w-52 overflow-hidden rounded-full">
        <Image
          src="/images/Profile-Photo.jpeg"
          alt="Profile"
          width={208}
          height={208}
          priority
          className="h-full w-full object-cover grayscale"
        />
      </div>

      {/* Name */}
      <h1 className="font-mono text-2xl sm:text-3xl font-semibold text-white">
        Sooryan K
      </h1>

      {/* Role */}
      <p className="mt-2 font-mono text-sm sm:text-lg text-zinc-400">
        Engineer <span className="mx-1">|</span> Full Stack Developer
      </p>

      {/* Social links */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <IconLink
          href="https://github.com/Sooryan-k"
          label="GitHub"
          icon={<Github size={16} />}
        />
        <IconLink
          href="mailto:sooryanoff@gmail.com"
          label="Mail"
          icon={<Mail size={16} />}
        />
        <IconLink
          href="https://www.linkedin.com/in/sooryan-k/"
          label="LinkedIn"
          icon={<Linkedin size={16} />}
        />
        {/* <IconLink href="#" label="Theme" icon={<Moon size={16} />} /> */}
      </div>

      {/* Location */}
      <p className="mt-8 font-mono text-lg sm:text-2xl font-light tracking-tight text-zinc-300">
        Kochi, India
      </p>
    </section>
  );
}

/* ---------- Icon Link Button ---------- */

function IconLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="
        flex items-center gap-2
        rounded-xl border border-white/10
        bg-black/60 px-4 py-2
        font-mono text-xs sm:text-sm text-zinc-300
        backdrop-blur-md
        transition
        hover:border-white/30 hover:bg-black/80 hover:text-white
      "
    >
      {icon}
    </a>
  );
}
