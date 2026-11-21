"use client";

import React, { useEffect, useState } from "react";

export const ReadingProgressBar: React.FC = () => {
  const [completion, setCompletion] = useState<number>(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(3)) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-zinc-900/40 backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-400 transition-all duration-100 ease-out shadow-[0_0_8px_rgba(56,189,248,0.6)]"
        style={{ width: `${completion}%` }}
        role="progressbar"
        aria-valuenow={Math.round(completion)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
};

export default ReadingProgressBar;
