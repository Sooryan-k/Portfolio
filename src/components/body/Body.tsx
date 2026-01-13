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
    <section className="w-full max-w-5xl mx-auto mt-5 md:mt-10 px-2 md:px-4">
      {/* tabs container */}
      <div className="flex justify-center">
        <div
          className="
            relative flex w-full max-w-md
            rounded-2xl border border-white/10
            bg-black/50 backdrop-blur-md
            p-1
          "
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className=" cursor-pointer
                  relative z-10 flex-1
                  rounded-xl py-2
                  font-mono text-sm sm:text-base
                  transition-colors
                "
              >
                {/* active background */}
                {isActive && (
                  <span
                    className="
                      absolute inset-0
                      rounded-xl
                      bg-white/10
                      shadow-[0_0_0_1px_rgba(255,255,255,0.25)]
                    "
                  />
                )}

                {/* label */}
                <span
                  className={`
                    relative
                    ${
                      isActive ? "text-white" : "text-zinc-400 hover:text-white"
                    }
                  `}
                >
                  {tab}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* content */}
      <div className="mt-12 rounded-2xl border border-white/10 bg-black/10  p-0 sm:p-8">
        {activeTab === "About" && <About />}
        {activeTab === "Experience" && <Experience />}
        {activeTab === "Certifications" && <Certifications />}
      </div>
    </section>
  );
}
