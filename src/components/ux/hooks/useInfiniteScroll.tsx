"use client";
import { useState, useEffect, useRef } from "react";

interface InfiniteScrollProps {
  speed?: number; // Velocidade da animação (pixels por frame)
}

interface InfiniteScrollReturn {
  scrollRef: React.RefObject<HTMLDivElement>;
  isPaused: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useInfiniteScroll({
  speed = 1,
}: InfiniteScrollProps = {}): InfiniteScrollReturn {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null!); // ✅ Corrigido aqui
  const animationRef = useRef<number | null>(null);
  const singleSetWidthRef = useRef<number>(0);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const children = Array.from(scrollElement.children).filter(
      (child): child is HTMLElement => child instanceof HTMLElement
    );

    singleSetWidthRef.current = children.reduce(
      (acc, child) => acc + child.offsetWidth + 16, // 16px de margem
      0
    );

    let currentPosition = 0;

    const animate = () => {
      if (isPaused) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      currentPosition -= speed;

      if (Math.abs(currentPosition) >= singleSetWidthRef.current) {
        currentPosition += singleSetWidthRef.current;
      }

      scrollElement.style.transform = `translateX(${currentPosition}px)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, speed]);

  return { scrollRef, isPaused, setIsPaused };
}
