"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  animateOn?: "view" | "hover" | "load";
}

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = true,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~|}{[]:;?><,./-=",
  className = "",
  parentClassName = "",
  encryptedClassName = "text-sky-400/80 font-mono",
  animateOn = "load",
}) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isScrambling, setIsScrambling] = useState<boolean>(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const getNextIndex = useCallback((revealed: Set<number>) => {
    const textLength = text.length;
    switch (revealDirection) {
      case "start":
        return revealed.size;
      case "end":
        return textLength - 1 - revealed.size;
      case "center": {
        const middle = Math.floor(textLength / 2);
        const offset = Math.floor(revealed.size / 2);
        const nextIndex =
          revealed.size % 2 === 0 ? middle + offset : middle - offset - 1;
        if (nextIndex >= 0 && nextIndex < textLength && !revealed.has(nextIndex)) {
          return nextIndex;
        }
        for (let i = 0; i < textLength; i++) {
          if (!revealed.has(i)) return i;
        }
        return 0;
      }
      default:
        return revealed.size;
    }
  }, [text.length, revealDirection]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let currentIteration = 0;

    const getAvailableChars = () => {
      if (useOriginalCharsOnly) {
        const unique = Array.from(new Set(text.split(""))).filter((c) => c !== " ");
        return unique.length > 0 ? unique.join("") : characters;
      }
      return characters;
    };

    const availableChars = getAvailableChars();

    const shuffleText = (originalText: string, currentRevealed: Set<number>) => {
      return originalText
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (currentRevealed.has(i)) return originalText[i];
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join("");
    };

    if (isScrambling) {
      interval = setInterval(() => {
        setRevealedIndices((prevRevealed) => {
          if (sequential) {
            if (prevRevealed.size < text.length) {
              const nextIndex = getNextIndex(prevRevealed);
              const newRevealed = new Set(prevRevealed);
              newRevealed.add(nextIndex);
              setDisplayText(shuffleText(text, newRevealed));
              return newRevealed;
            } else {
              clearInterval(interval);
              setIsScrambling(false);
              setDisplayText(text);
              return prevRevealed;
            }
          } else {
            setDisplayText(shuffleText(text, prevRevealed));
            currentIteration++;
            if (currentIteration >= maxIterations) {
              clearInterval(interval);
              setIsScrambling(false);
              setDisplayText(text);
            }
            return prevRevealed;
          }
        });
      }, speed);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [
    isScrambling,
    text,
    speed,
    maxIterations,
    sequential,
    characters,
    useOriginalCharsOnly,
    getNextIndex,
  ]);

  const triggerAnimation = () => {
    setRevealedIndices(new Set());
    setIsScrambling(true);
  };

  useEffect(() => {
    if (animateOn === "load") {
      triggerAnimation();
      setHasAnimated(true);
      return;
    }

    if (animateOn === "view") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              triggerAnimation();
              setHasAnimated(true);
            }
          });
        },
        { threshold: 0.1 }
      );

      const el = containerRef.current;
      if (el) observer.observe(el);

      return () => {
        if (el) observer.unobserve(el);
      };
    }
  }, [animateOn, hasAnimated]);

  const handleMouseEnter = () => {
    if (animateOn === "hover" && !isScrambling) {
      setIsHovering(true);
      triggerAnimation();
    }
  };

  const handleMouseLeave = () => {
    if (animateOn === "hover") {
      setIsHovering(false);
    }
  };

  return (
    <span
      ref={containerRef}
      className={`inline-block ${parentClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className={className}>
        {displayText.split("").map((char, index) => {
          const isRevealedOrDone =
            revealedIndices.has(index) || !isScrambling || char === " ";
          return (
            <span
              key={index}
              className={isRevealedOrDone ? undefined : encryptedClassName}
            >
              {char}
            </span>
          );
        })}
      </span>
    </span>
  );
};

export default DecryptedText;
