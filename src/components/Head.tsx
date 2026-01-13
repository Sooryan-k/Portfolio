import Image from "next/image";
import { Github, Linkedin, Mail, Moon } from "lucide-react";

export default function Head() {
  return (
    <section className="flex flex-col items-center text-center pt-20 sm:pt-24">
      {/* Avatar */}
      <div className="mb-6 h-[160px] w-[160px] sm:h-[200px] sm:w-[200px] overflow-hidden rounded-full">
        <Image
          src="/images/profile-photo.jpeg"
          alt="Profile"
          width={200}
          height={200}
          priority
          className="h-full w-full object-cover grayscale"
        />
      </div>

      {/* Name */}
      <h1 className="font-mono text-2xl sm:text-3xl font-semibold">
        Sooryan K
      </h1>

      {/* Role */}
      <p className="mt-2 font-mono text-sm sm:text-lg text-zinc-400">
        Engineer <span className="mx-1">|</span> Full Stack Developer
      </p>

      {/* Social icons */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <IconButton icon={<Github size={16} />} label="GitHub" />
        <IconButton icon={<Mail size={16} />} label="Mail" />
        <IconButton icon={<Linkedin size={16} />} label="LinkedIn" />
        <IconButton icon={<Moon size={16} />} label="Theme" />
      </div>

      {/* Location */}
      <p className="mt-8 font-mono text-lg sm:text-2xl font-light tracking-tight text-zinc-300">
        Kochi, India
      </p>
    </section>
  );
}

/* ---------- Icon Button ---------- */

function IconButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      aria-label={label}
      className=" cursor-pointer
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
    </button>
  );
}
