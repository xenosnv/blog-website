"use client";

import React, { useState, useEffect } from "react";
import ClickSpark from "./reactbits/ClickSpark";
import { Heart, Check } from "lucide-react";

interface AppreciationSectionProps {
  postSlug?: string;
  initialLikes?: number;
}

export const AppreciationSection: React.FC<AppreciationSectionProps> = ({
  postSlug = "dari-flowchart-sampai-ruang-qc",
  initialLikes = 24,
}) => {
  const [likeCount, setLikeCount] = useState<number>(initialLikes);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [activeTakeaway, setActiveTakeaway] = useState<number>(0);

  const takeaways = [
    {
      title: "Pondasi Logika Sebelum Visual",
      desc: "Sebelum memoles tampilan antarmuka, pastikan alur kerja data dan skenario kondisi pengguna sudah dipetakan dengan jelas.",
    },
    {
      title: "Meramu Referensi dengan Kritis",
      desc: "Kreativitas praktis sering kali lahir dari keberanian mengumpulkan referensi desain terbaik, memilih elemen yang relevan, lalu menyusunnya menjadi solusi yang terstruktur.",
    },
    {
      title: "Desain Teruji di Ruang QC",
      desc: "Mockup di Figma belum selesai sampai sistemnya diuji langsung di perangkat nyata dan terbukti tidak membingungkan pengguna.",
    },
  ];

  // Hindari Hydration Mismatch: baca localStorage hanya setelah komponen terpasang di client
  useEffect(() => {
    setIsMounted(true);
    try {
      const storageKey = `liked_post_${postSlug}`;
      const savedLikeStatus = localStorage.getItem(storageKey);
      if (savedLikeStatus === "true") {
        setHasLiked(true);
        // Pastikan angka mencerminkan vote yang sudah tersimpan
        setLikeCount((prev) => (prev === initialLikes ? prev + 1 : prev));
      }
    } catch (err) {
      // Menangani environment yang membatasi localStorage (misal iframe / private mode tertentu)
      console.warn("localStorage tidak dapat diakses:", err);
    }
  }, [postSlug, initialLikes]);

  // Handler klik tombol Like (Kunci tepat 1x like per pengunjung/browser)
  const handleLike = () => {
    if (hasLiked) {
      // Sudah pernah like, cegah spam klik dan pertahankan status
      return;
    }

    const storageKey = `liked_post_${postSlug}`;
    try {
      localStorage.setItem(storageKey, "true");
    } catch (err) {
      console.warn("Gagal menyimpan like ke localStorage:", err);
    }

    setHasLiked(true);
    setLikeCount((prev) => prev + 1);
  };

  return (
    <section className="mt-16 pt-12 pb-6 border-t border-zinc-850">
      <div className="p-7 sm:p-9 rounded-2xl bg-[#111114] border border-zinc-800 text-center relative overflow-hidden">
        <div className="max-w-md mx-auto space-y-3">
          <h3 className="text-xl font-bold text-zinc-100 tracking-tight font-sans">
            Menikmati Tulisan Ini?
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {hasLiked
              ? "Apresiasimu telah tercatat. Terima kasih sudah membaca sampai selesai!"
              : "Ketuk tombol di bawah untuk memberikan apresiasi. Setiap pembaca hanya dapat memberikan 1x apresiasi."}
          </p>

          {/* Tombol Interaksi Apresiasi dengan ClickSpark & 1x Like Lock */}
          <div className="pt-3 pb-2 flex justify-center">
            <ClickSpark
              sparkColor="#38bdf8"
              sparkColors={["#38bdf8", "#818cf8", "#e4e4e7", "#34d399"]}
              sparkCount={12}
              sparkSize={7}
              sparkRadius={30}
              duration={400}
              extraScale={1.3}
              disabled={hasLiked} // Matikan partikel jika sudah dilike
              onClick={handleLike}
            >
              <button
                type="button"
                onClick={handleLike}
                disabled={hasLiked}
                aria-pressed={hasLiked}
                aria-label={hasLiked ? "Apresiasi sudah terkirim" : "Beri apresiasi untuk artikel ini"}
                data-cursor-label={hasLiked ? "Terkirim" : "Apresiasi"}
                className={`cursor-target inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-semibold font-sans transition-all duration-200 select-none ${
                  hasLiked
                    ? "bg-rose-500/10 border border-rose-500/30 text-rose-300 cursor-default shadow-none"
                    : "bg-zinc-900 hover:bg-zinc-850 text-zinc-200 border border-zinc-700/80 hover:border-zinc-500 shadow-sm active:scale-95 cursor-pointer"
                }`}
              >
                <Heart
                  className={`w-4 h-4 transition-all duration-200 ${
                    hasLiked
                      ? "fill-rose-500 text-rose-500 scale-105"
                      : "text-zinc-400 group-hover:text-rose-400"
                  }`}
                />
                <span>{hasLiked ? "Apresiasi terkirim" : "Beri Apresiasi"}</span>
                <span
                  className={`px-2 py-0.5 rounded-full font-mono text-[11px] border transition-colors ${
                    hasLiked
                      ? "bg-rose-500/20 text-rose-200 border-rose-500/30 font-bold"
                      : "bg-zinc-800 text-zinc-300 border-zinc-750"
                  }`}
                >
                  {likeCount}
                </span>
                {hasLiked && (
                  <Check className="w-3.5 h-3.5 text-rose-400 animate-in fade-in duration-200" />
                )}
              </button>
            </ClickSpark>
          </div>

          {/* Pesan status interaktif */}
          <p className="text-[11px] text-zinc-500 font-mono transition-colors">
            {isMounted && hasLiked ? (
              <span className="text-zinc-400">
                ✓ Kamu telah mengapresiasi catatan ini (1x per pembaca).
              </span>
            ) : (
              <span>1x klik per pembaca • Tersimpan di browser lokal</span>
            )}
          </p>
        </div>

        {/* 3 Catatan Ringkas Pengalaman */}
        <div className="mt-9 pt-7 border-t border-zinc-800/70 text-left">
          <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
            3 Poin Refleksi Utama
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
            {takeaways.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTakeaway(idx)}
                className={`cursor-target p-3 rounded-lg text-left border text-xs transition-colors ${
                  activeTakeaway === idx
                    ? "bg-zinc-850 border-zinc-700 text-zinc-100 font-medium"
                    : "bg-zinc-900/40 border-zinc-800/80 text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <div className="font-mono text-[10px] text-zinc-500 mb-1">
                  0{idx + 1}
                </div>
                <div className="truncate">{item.title}</div>
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
            <span className="font-semibold text-zinc-100 block mb-1">
              {takeaways[activeTakeaway].title}
            </span>
            <p className="text-zinc-400">{takeaways[activeTakeaway].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppreciationSection;
