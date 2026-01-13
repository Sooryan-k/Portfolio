"use client";

import { useState } from "react";
import About from "./About";
import Experience from "./Experience";
import Certifications from "./Certifications";

const tabs = ["About", "Experience", "Certifications"] as const;
type Tab = (typeof tabs)[number];

export default function Body() {
  const [activeTab, setActiveTab] = useState<Tab>("About");

  return (
    <section className="w-full max-w-5xl mx-auto mt-20 px-4">
      {/* tabs */}
      <div className="flex justify-center">
        <div
          className="
            flex gap-2 sm:gap-4
            rounded-2xl border border-white/10
            bg-black/40 backdrop-blur-md
            p-2
          "
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={` cursor-pointer
                  relative px-4 py-2
                  rounded-xl
                  font-mono text-sm sm:text-base
                  transition-all
                  ${
                    isActive
                      ? "bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.2)]"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* content */}
      <div className="mt-10 rounded-2xl border border-white/10 bg-black/10 p-6 sm:p-8">
        {activeTab === "About" && <About />}
        {activeTab === "Experience" && <Experience />}
        {activeTab === "Certifications" && <Certifications />}
      </div>
    </section>
  );
}
