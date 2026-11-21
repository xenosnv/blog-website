"use client";

import React, { useState, useEffect } from "react";

interface Milestone {
  id: string;
  label: string;
  desc: string;
}

const milestones: Milestone[] = [
  { id: "fase-algoritma", label: "01. Algoritma & Hardware PC", desc: "Awal Kuliah" },
  { id: "fase-mobile-web", label: "02. Titik Balik Mobile & Web Bisnis", desc: "Semester 4" },
  { id: "fase-kejujuran-desain", label: "03. Kejujuran Meramu Desain", desc: "Proses Kreatif" },
  { id: "fase-magang-diskominfo", label: "04. Magang UI/UX & QC Diskominfo", desc: "Juli 2026–Jan 2027" },
  { id: "fase-reactbits", label: "05. Eksplorasi ReactBits & Ke Depan", desc: "Mikro-Animasi" },
];

export const ChapterNav: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("fase-algoritma");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = milestones.length - 1; i >= 0; i--) {
        const el = document.getElementById(milestones[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(milestones[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToMilestone = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Daftar Isi Babak Cerita"
      className="my-10 p-4 sm:p-5 rounded-xl border border-zinc-850 bg-zinc-950/60"
    >
      <div className="flex items-center justify-between mb-3 text-xs font-mono text-zinc-400">
        <span className="font-semibold uppercase tracking-wider">
          Daftar Babak Cerita
        </span>
        <span className="text-zinc-500">5 Fase</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {milestones.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToMilestone(item.id)}
              data-cursor-label="Buka Babak"
              className={`cursor-target flex items-baseline justify-between p-2.5 text-left rounded-lg text-xs transition-colors border ${
                isActive
                  ? "bg-zinc-800/80 border-zinc-700 text-zinc-100"
                  : "bg-zinc-900/30 border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/70"
              }`}
            >
              <span className="font-medium truncate mr-2">{item.label}</span>
              <span className="text-[11px] font-mono text-zinc-500 shrink-0">
                {item.desc}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default ChapterNav;
