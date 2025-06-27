"use client";
import { useState, useEffect, useRef } from "react";

interface InfiniteScrollProps {
  speed?: number;          // pixels por frame
  pauseOnHover?: boolean;  // pausa ao passar o mouse
}

interface InfiniteScrollReturn {
  // ⬇️ type correto: MutableRefObject<HTMLDivElement | null>
  scrollRef: React.MutableRefObject<HTMLDivElement | null>;
  isPaused: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useInfiniteScroll(
  { speed = 1, pauseOnHover = true }: InfiniteScrollProps = {}
): InfiniteScrollReturn {
  const [isPaused, setIsPaused] = useState(false);

  // ⬇️ mantém <HTMLDivElement | null> para combinar com MutableRefObject
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const animationRef = useRef<number | null>(null);
  const singleSetWidthRef = useRef<number>(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    /* hover opcional -------------------------------------------------- */
    if (pauseOnHover) {
      const enter = () => setIsPaused(true);
      const leave = () => setIsPaused(false);
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      /* remove listeners no cleanup */
      var removeHover = () => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      };
    }
    /* ---------------------------------------------------------------- */

    singleSetWidthRef.current = Array.from(el.children).reduce(
      (acc, child) =>
        acc + (child instanceof HTMLElement ? child.offsetWidth + 16 : 0),
      0
    );

    let pos = 0;

    const animate = () => {
      if (isPaused) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      pos -= speed;
      if (Math.abs(pos) >= singleSetWidthRef.current) {
        pos += singleSetWidthRef.current;
      }
      el.style.transform = `translateX(${pos}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (removeHover) removeHover();
    };
  }, [isPaused, speed, pauseOnHover]);

  return { scrollRef, isPaused, setIsPaused };
}
