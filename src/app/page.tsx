import React from "react";
import DotGrid from "@/components/reactbits/DotGrid";
import TargetCursor from "@/components/reactbits/TargetCursor";
import ReadingProgressBar from "@/components/ReadingProgressBar";
import Navbar from "@/components/Navbar";
import ArticleHeader from "@/components/ArticleHeader";
import ChapterNav from "@/components/ChapterNav";
import ArticleContent from "@/components/ArticleContent";
import AppreciationSection from "@/components/AppreciationSection";
import Footer from "@/components/Footer";

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-[#09090B] text-foreground relative selection:bg-zinc-800 selection:text-zinc-100">
      {/* Target Cursor dari ReactBits */}
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
        cursorColor="#ffffff"
        cursorColorOnTarget="#38bdf8"
        targetSelector=".cursor-target"
        showLabel={true}
      />

      {/* Background DotGrid Interaktif dari ReactBits di area hero */}
      <DotGrid
        gap={26}
        dotSize={1.35}
        maxDotSize={2.8}
        proximity={125}
        baseColor="rgba(244, 244, 245, 0.22)"
        activeColor="rgba(255, 255, 255, 0.95)"
      />

      {/* Reading Progress Bar di bagian paling atas */}
      <ReadingProgressBar />

      {/* Navigasi Bersih */}
      <Navbar />

      {/* Kolom Baca Utama di Tengah */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8">
        {/* Header Artikel dengan BlurText & DecryptedText */}
        <ArticleHeader />

        {/* Milestone / Chapter Jump Navigation */}
        <ChapterNav />

        {/* Isi Artikel Storytelling dengan SpotlightCards & DecryptedText */}
        <ArticleContent />

        {/* Bagian Apresiasi dengan ClickSpark & 1x Like Lock */}
        <AppreciationSection postSlug="dari-flowchart-sampai-ruang-qc" initialLikes={24} />
      </div>

      {/* Footer Minimalis */}
      <Footer />
    </main>
  );
}
