"use client";

import React, { useRef, useEffect, useCallback } from "react";

interface Spark {
  x: number;
  y: number;
  angle: number;
  speed: number;
  size: number;
  color: string;
  opacity: number;
  life: number;
  maxLife: number;
}

interface ClickSparkProps {
  children?: React.ReactNode;
  sparkColor?: string;
  sparkColors?: string[];
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  extraScale?: number;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const ClickSpark: React.FC<ClickSparkProps> = ({
  children,
  sparkColor = "#38BDF8",
  sparkColors = ["#38BDF8", "#818CF8", "#F472B6", "#34D399", "#FBBF24"],
  sparkSize = 8,
  sparkRadius = 28,
  sparkCount = 10,
  duration = 450,
  extraScale = 1.3,
  className = "",
  disabled = false,
  onClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    }
  }, []);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [resizeCanvas]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    sparksRef.current = sparksRef.current.filter((spark) => spark.life > 0);

    sparksRef.current.forEach((spark) => {
      spark.life -= 16.66; // roughly 60fps delta
      const progress = 1 - spark.life / spark.maxLife;

      const currentDistance = progress * sparkRadius * extraScale;
      const x = spark.x + Math.cos(spark.angle) * currentDistance;
      const y = spark.y + Math.sin(spark.angle) * currentDistance;
      const currentSize = spark.size * (1 - progress * 0.7);

      ctx.save();
      ctx.globalAlpha = Math.max(0, 1 - progress);
      ctx.fillStyle = spark.color;

      ctx.beginPath();
      ctx.arc(x, y, currentSize, 0, Math.PI * 2);
      ctx.fill();

      // Subtle spark glow
      ctx.shadowBlur = 6;
      ctx.shadowColor = spark.color;
      ctx.fill();

      ctx.restore();
    });

    if (sparksRef.current.length > 0) {
      animationFrameRef.current = requestAnimationFrame(draw);
    } else {
      animationFrameRef.current = null;
    }
  }, [sparkRadius, extraScale]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // If disabled, skip spark particle generation
    if (!disabled) {
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        const newSparks: Spark[] = [];
        for (let i = 0; i < sparkCount; i++) {
          const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.4;
          const color =
            sparkColors && sparkColors.length > 0
              ? sparkColors[Math.floor(Math.random() * sparkColors.length)]
              : sparkColor;

          newSparks.push({
            x: clickX,
            y: clickY,
            angle,
            speed: 1 + Math.random() * 2,
            size: (sparkSize * 0.5) + Math.random() * (sparkSize * 0.5),
            color,
            opacity: 1,
            life: duration,
            maxLife: duration,
          });
        }

        sparksRef.current.push(...newSparks);

        if (!animationFrameRef.current) {
          animationFrameRef.current = requestAnimationFrame(draw);
        }
      }
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
      onClick={handleClick}
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-50 h-full w-full"
      />
      {children}
    </div>
  );
};

export default ClickSpark;
