"use client";

import React from "react";
import { ArrowUp, Github, Linkedin } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-zinc-850/80 bg-[#09090B] py-12 text-zinc-500 text-xs font-sans">
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:items-start items-center gap-1.5 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start text-zinc-300 font-medium">
            <span>Catatan Belajar Terbuka</span>
            <span className="mx-2 text-zinc-600 shrink-0 select-none" aria-hidden="true">|</span>
            <span>Teknik Informatika &amp; UI/UX</span>
          </div>
          <p className="flex flex-wrap items-center justify-center sm:justify-start text-zinc-500 text-[11px]">
            <span>Ditulis oleh Moch Naufal Ar Karim</span>
            <span className="mx-2 text-zinc-600 shrink-0 select-none" aria-hidden="true">|</span>
            <span>Dibangun dengan Next.js App Router, Tailwind CSS, dan ReactBits.</span>
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://github.com/xenosnv"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="GitHub"
            className="cursor-target inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 transition-colors font-mono text-[11px] px-1 py-0.5 rounded"
            title="GitHub xenosnv"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-zinc-600 shrink-0 select-none" aria-hidden="true">|</span>
          <a
            href="https://www.linkedin.com/in/mochnaufalarkarim/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="LinkedIn"
            className="cursor-target inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 transition-colors font-mono text-[11px] px-1 py-0.5 rounded"
            title="LinkedIn Profile Moch Naufal Ar Karim"
          >
            <Linkedin className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="text-zinc-600 shrink-0 select-none" aria-hidden="true">|</span>
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas halaman"
            data-cursor-label="Ke Atas"
            className="cursor-target flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors text-xs font-mono"
          >
            <ArrowUp className="w-3 h-3" />
            <span>Atas</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
