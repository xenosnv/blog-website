"use client";

import React, { useState, useEffect } from "react";
import { Clock, Share2, Check } from "lucide-react";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // fallback
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-[#09090B]/90 backdrop-blur-md border-b border-zinc-850 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-3xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Title minimal */}
        <div className="flex items-center gap-2.5">
          <span className="font-sans text-sm font-semibold tracking-tight text-zinc-200">
            Catatan Perjalanan
          </span>
          <span className="text-zinc-600">/</span>
          <span className="font-mono text-xs text-zinc-400">
            Informatika & UI/UX
          </span>
        </div>

        {/* Right meta */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
            <Clock className="w-3.5 h-3.5 text-zinc-500" />
            <span>4 min baca</span>
          </div>

          <div className="h-3 w-px bg-zinc-800" />

          <button
            onClick={handleShare}
            aria-label="Salin tautan artikel"
            data-cursor-label="Bagikan"
            className="cursor-target flex items-center gap-1.5 text-xs font-sans px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Tersalin</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Bagikan</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
