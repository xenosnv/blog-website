"use client";

import React from "react";
import BlurText from "./reactbits/BlurText";
import DecryptedText from "./reactbits/DecryptedText";
import { Github, Linkedin } from "lucide-react";

export const ArticleHeader: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-32">
      {/* Label kecil di atas judul */}
      <div className="mb-4">
        <DecryptedText
          text="LEARNING IN PUBLIC // SEMESTER 1–5"
          speed={35}
          maxIterations={10}
          sequential={true}
          revealDirection="start"
          animateOn="load"
          parentClassName="font-mono text-xs tracking-wider text-zinc-400 uppercase"
          className="font-mono text-xs tracking-wider text-zinc-400 uppercase"
          encryptedClassName="text-zinc-600 font-mono"
        />
      </div>

      {/* Judul Utama dengan BlurText (Sans-serif modern, tegas) */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-zinc-100 leading-[1.2]">
          <BlurText
            text="Dari Flowchart Sampai Ruang QC: Catatan Perjalanan Kuliah Informatika dan Jatuh Cinta pada UI/UX"
            delay={70}
            animateBy="words"
            direction="top"
            trigger="load"
            className="text-zinc-100 font-bold tracking-tight font-sans"
          />
        </h1>
      </div>

      {/* Kalimat pengantar yang manusiawi, lugas, dan apa adanya */}
      <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal mb-8 max-w-2xl">
        Catatan proses belajar selama lima semester di Teknik Informatika: dari
        awalnya pusing memetakan flowchart dan alur data hardware, kenapa
        akhirnya lebih klik di mobile dan web bisnis, sampai diajak magang
        memegang peran UI/UX Designer sekaligus Quality Check di Diskominfo.
      </p>

      {/* Info Penulis, Metadata & Tautan Sosial (Jarak atas & bawah simetris diapit border-y) */}
      <div className="border-y border-zinc-850/80 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700/80 flex items-center justify-center text-zinc-200 font-semibold font-mono text-xs shrink-0">
              MN
            </div>
            <div className="min-w-0">
              <div className="text-zinc-200 font-medium">
                Moch Naufal Ar Karim
              </div>
              <div className="flex flex-wrap items-center text-zinc-500 text-[11px]">
                <span>Mahasiswa Informatika</span>
                <span className="mx-2 text-zinc-600 shrink-0 select-none" aria-hidden="true">|</span>
                <span>UI/UX Designer & QC Intern (Diskominfo 2026–2027)</span>
              </div>
            </div>
          </div>

          {/* Info Log & Social Links (Sejajar satu baris horizontal) */}
          <div className="flex items-center flex-nowrap whitespace-nowrap text-[11px] font-mono text-zinc-500 shrink-0 pt-1 sm:pt-0">
            <span className="shrink-0">Semester 1–5 Log</span>
            <span className="mx-2 text-zinc-600 shrink-0 select-none" aria-hidden="true">|</span>
            <a
              href="https://github.com/xenosnv"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="GitHub"
              className="cursor-target inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 transition-colors shrink-0 group px-1 py-0.5 rounded"
              title="Kunjungi GitHub xenosnv"
            >
              <Github className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-100 transition-colors shrink-0" />
              <span>GitHub</span>
            </a>
            <span className="mx-2 text-zinc-600 shrink-0 select-none" aria-hidden="true">|</span>
            <a
              href="https://www.linkedin.com/in/mochnaufalarkarim/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-label="LinkedIn"
              className="cursor-target inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 transition-colors shrink-0 group px-1 py-0.5 rounded"
              title="Kunjungi profil LinkedIn Moch Naufal Ar Karim"
            >
              <Linkedin className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-100 transition-colors shrink-0" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
