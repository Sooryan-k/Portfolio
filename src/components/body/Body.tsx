"use client";

import { useState } from "react";
import About from "./About";
import Experience from "./Experience";
import Certifications from "./Certifications";
// import Blogs from "./Blogs";

const tabs = ["About", "Experience", "Certifications"] as const;
type Tab = (typeof tabs)[number];

export default function Body() {
  const [activeTab, setActiveTab] = useState<Tab>("About");

  return (
    <section className="w-full max-w-5xl mx-auto mt-20 px-4">
      {/* Tabs */}
      <div className="flex justify-between gap-4 text-sm sm:text-base font-mono text-zinc-300">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-2 transition cursor-pointer ${
              activeTab === tab
                ? "text-white"
                : "hover:text-white text-zinc-400"
            }`}
          >
            {tab}

            {/* Active underline */}
            {activeTab === tab && (
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white" />
            )}
          </button>
        ))}
      </div>

      {/* Content container */}
      <div className="mt-10 rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-md">
        {activeTab === "About" && <About />}
        {activeTab === "Experience" && <Experience />}
        {activeTab === "Certifications" && <Certifications />}
        {/* {activeTab === "Blogs" && <Blogs />} */}
      </div>
    </section>
  );
}
