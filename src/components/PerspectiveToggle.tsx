"use client";

import React, { useState } from "react";
import { Cpu, Eye, ArrowRightLeft } from "lucide-react";
import ClickSpark from "./reactbits/ClickSpark";

export const PerspectiveToggle: React.FC = () => {
  const [perspective, setPerspective] = useState<"logic" | "experience">("experience");

  return (
    <div className="my-8 p-5 sm:p-6 rounded-xl border border-zinc-800 bg-[#111114]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-zinc-800/80">
        <div className="flex items-center gap-2">
          <ArrowRightLeft className="w-4 h-4 text-zinc-400" />
          <span className="font-mono text-xs uppercase tracking-wider text-zinc-300 font-medium">
            Catatan Sudut Pandang
          </span>
        </div>

        <ClickSpark
          sparkColor="#e4e4e7"
          sparkColors={["#e4e4e7", "#a1a1aa", "#71717a", "#38bdf8"]}
          sparkCount={8}
          sparkSize={5}
          sparkRadius={20}
        >
          <div className="inline-flex p-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-sans">
            <button
              onClick={() => setPerspective("logic")}
              data-cursor-label="Informatika"
              className={`cursor-target flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                perspective === "logic"
                  ? "bg-zinc-800 text-zinc-100 font-medium shadow-sm"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Sisi Informatika</span>
            </button>
            <button
              onClick={() => setPerspective("experience")}
              data-cursor-label="UI/UX & QC"
              className={`cursor-target flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                perspective === "experience"
                  ? "bg-zinc-800 text-zinc-100 font-medium shadow-sm"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Sisi UI/UX & QC</span>
            </button>
          </div>
        </ClickSpark>
      </div>

      {perspective === "logic" ? (
        <div className="space-y-2 text-zinc-300">
          <div className="font-mono text-xs text-zinc-500 uppercase">
            {"// CARA PANDANG LOGIKA & ARSITEKTUR"}
          </div>
          <p className="text-sm leading-relaxed text-zinc-300">
            Aplikasi yang kuat butuh struktur data yang jelas, alur percabangan yang
            aman, dan performa yang tidak membebani memori. Flowchart di awal
            kuliah bukan sekadar formalitas tugas, tapi cara membedah masalah
            sebelum menulis sebaris kode pun.
          </p>
        </div>
      ) : (
        <div className="space-y-2 text-zinc-300">
          <div className="font-mono text-xs text-zinc-500 uppercase">
            {"// CARA PANDANG EMPATI & PENGUJIAN USER"}
          </div>
          <p className="text-sm leading-relaxed text-zinc-300">
            Kode secanggih apa pun bakal sia-sia kalau pengguna bingung tombolnya ada di mana,
            alur formulirnya berbelit-belit, atau tampilannya tidak meyakinkan. Di Diskominfo,
            tugas QC dan UI/UX adalah memastikan sistem benar-benar bisa dipakai orang banyak
            tanpa mereka harus diajari berkali-kali.
          </p>
        </div>
      )}
    </div>
  );
};

export default PerspectiveToggle;
