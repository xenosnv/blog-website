"use client";

import React, { useRef, useEffect, useCallback } from "react";

interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  maxDotSize?: number;
  className?: string;
}

export const DotGrid: React.FC<DotGridProps> = ({
  dotSize = 1.35,
  gap = 26,
  baseColor = "rgba(244, 244, 245, 0.22)", // Kontras jelas & elegan
  activeColor = "rgba(255, 255, 255, 0.95)", // Respons kursor terang halus
  proximity = 120, // Radius pengaruh kursor
  maxDotSize = 2.8, // Ukuran membesar saat kursor mendekat
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Posisi kursor nyata & terinterpolasi untuk animasi mulus (smooth dampening)
  const pointerRef = useRef<{
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    active: boolean;
  }>({
    x: -9999,
    y: -9999,
    targetX: -9999,
    targetY: -9999,
    active: false,
  });

  const animFrameId = useRef<number | null>(null);

  // Resize canvas dengan penyesuaian devicePixelRatio untuk layar Retina/High-DPI
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const dpr = window.devicePixelRatio || 1;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    // Deteksi kursor pada window agar tidak terhalang teks atau tombol di depannya
    const handlePointerMove = (e: PointerEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Pantau saat pointer berada di dalam atau dekat dengan area hero
      if (
        x >= -80 &&
        x <= rect.width + 80 &&
        y >= -80 &&
        y <= rect.height + 80
      ) {
        pointerRef.current.targetX = x;
        pointerRef.current.targetY = y;
        pointerRef.current.active = true;
      } else {
        pointerRef.current.active = false;
      }
    };

    const handlePointerLeave = () => {
      pointerRef.current.active = false;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [handleResize]);

  // Loop rendering canvas dengan respon proximity kursor
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let isRunning = true;

    const render = () => {
      if (!isRunning) return;

      const width = container.offsetWidth;
      const height = container.offsetHeight;
      if (width === 0 || height === 0) {
        animFrameId.current = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth interpolation posisi kursor (lerp)
      const p = pointerRef.current;
      if (p.active) {
        p.x += (p.targetX - p.x) * 0.18;
        p.y += (p.targetY - p.y) * 0.18;
      } else {
        // Perlahan bergerak keluar area
        p.x += (-9999 - p.x) * 0.1;
        p.y += (-9999 - p.y) * 0.1;
      }

      const cols = Math.ceil(width / gap) + 1;
      const rows = Math.ceil(height / gap) + 1;
      const offsetX = (width % gap) / 2;
      const offsetY = 12;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const originX = c * gap + offsetX;
          const originY = r * gap + offsetY;

          let currentX = originX;
          let currentY = originY;
          let currentRadius = dotSize;
          let currentColor = baseColor;

          if (p.active) {
            const dx = originX - p.x;
            const dy = originY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < proximity) {
              const force = 1 - dist / proximity; // 0..1
              const ease = force * force; // Kurva kuadratik lembut

              // Pergeseran elastis halus menjauh dari pointer (repel)
              const angle = Math.atan2(dy, dx);
              const push = ease * 3.5;
              currentX = originX + Math.cos(angle) * push;
              currentY = originY + Math.sin(angle) * push;

              // Pembesaran titik dan pencerahan opacity
              currentRadius = dotSize + ease * (maxDotSize - dotSize);

              // Interpolasi warna ke activeColor
              if (ease > 0.4) {
                currentColor = activeColor;
              } else {
                currentColor = `rgba(255, 255, 255, ${0.22 + ease * 0.6})`;
              }
            }
          }

          ctx.beginPath();
          ctx.arc(currentX, currentY, currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = currentColor;
          ctx.fill();
        }
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      isRunning = false;
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [gap, dotSize, maxDotSize, proximity, baseColor, activeColor]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-x-0 top-0 h-[640px] overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
      style={{
        maskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.15) 75%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.15) 75%, transparent 100%)",
      }}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
};

export default DotGrid;
