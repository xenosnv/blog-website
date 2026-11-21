"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ZoomIn, X, ExternalLink } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  src,
  alt,
  caption,
  width = 1200,
  height = 570,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    },
    []
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <>
      <figure className="my-8">
        {/* Thumbnail Frame */}
        <div
          onClick={() => setIsOpen(true)}
          data-cursor-label="Perbesar"
          className="cursor-target group relative block overflow-hidden rounded-xl border border-zinc-850 bg-zinc-950/70 cursor-pointer transition-all duration-300 hover:border-zinc-700/80 shadow-lg shadow-black/40"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsOpen(true);
            }
          }}
          aria-label={`Buka gambar ${alt} dalam ukuran penuh`}
        >
          {/* Subtle Top Browser-like bar */}
          <div className="flex items-center justify-between px-3.5 py-2 border-b border-zinc-850 bg-zinc-900/60 text-[11px] font-mono text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
              <span className="ml-2 text-zinc-500 hidden sm:inline">reactbits.dev/components</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-zinc-200 transition-colors">
              <ZoomIn className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-[10px] tracking-wide uppercase">Klik untuk perbesar</span>
            </div>
          </div>

          {/* Image Display */}
          <div className="relative w-full aspect-[2/1] overflow-hidden bg-[#0c0c0e]">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
              priority={false}
            />
          </div>
        </div>

        {/* Natural Caption */}
        {caption && (
          <figcaption className="mt-3 text-center text-xs text-zinc-500 font-sans leading-relaxed px-4">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200 select-none"
        >
          {/* Top Bar Modal */}
          <div
            className="w-full max-w-5xl flex items-center justify-between mb-3 text-xs font-mono text-zinc-400 px-2"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="truncate max-w-[70%]">{alt}</span>
            <button
              onClick={() => setIsOpen(false)}
              data-cursor-label="Tutup"
              aria-label="Tutup pratinjau gambar"
              className="cursor-target flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-zinc-100 hover:border-zinc-700 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              <span>Tutup (ESC)</span>
            </button>
          </div>

          {/* Large Image Frame */}
          <div
            className="relative max-w-5xl max-h-[80vh] w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="max-h-[80vh] w-auto max-w-full object-contain"
            />
          </div>

          {/* Modal Caption */}
          {caption && (
            <p
              className="mt-3 text-center text-xs text-zinc-400 max-w-2xl font-sans"
              onClick={(e) => e.stopPropagation()}
            >
              {caption}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default ImageLightbox;
