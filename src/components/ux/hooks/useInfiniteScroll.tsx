"use client";
import * as React from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const singleSetWidthRef = useRef<number>(0);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    // Calcular a largura total de uma única cópia dos elementos
    const children = Array.from(scrollElement.children);
    singleSetWidthRef.current = children.reduce(
      (acc, child) =>
        acc + (child instanceof HTMLElement ? child.offsetWidth + 16 : 0),
      0
    ); // 16px = margem

    let currentPosition = 0;

    const animate = () => {
      if (isPaused) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      currentPosition -= speed;

      // Resetar a posição quando ultrapassar a largura de uma cópia
      if (Math.abs(currentPosition) >= singleSetWidthRef.current) {
        currentPosition += singleSetWidthRef.current;
      }

      // Aplicar a transformação apenas se scrollElement existir
      if (scrollElement) {
        scrollElement.style.transform = `translateX(${currentPosition}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, speed]);

  return { scrollRef, isPaused, setIsPaused };
}