
"use client";
import React, { useState, useRef, useEffect } from "react";
import NextImage from "next/image"; // Renomeado para evitar conflito com window.Image

const imageData = [
  {
    src: "/images/slideInfinito/talento.jpg",
    title: "Hackathon 2025",
    text: "Participe do maior evento de inovação tecnológica do ano!",
  },
  {
    src: "/images/slideInfinito/startups.jpg",
    title: "Startups em Ascensão",
    text: "Conheça as empresas que estão transformando o mercado.",
  },
  {
    src: "/images/slideInfinito/investidor.jpg",
    title: "Desafios Tecnológicos",
    text: "Colabore e crie soluções inovadoras em tempo real.",
  },
  {
    src: "/images/slideInfinito/competicoes.jpg",
    title: "Empreendedorismo Digital",
    text: "Impulsione sua ideia com as melhores ferramentas.",
  },
];

const InfiniteImageScroll: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const singleSetWidthRef = useRef<number>(0);
  const duplicatedImageData = [...imageData, ...imageData];

  useEffect(() => {
    imageData.forEach((item) => {
      const img = new window.Image(); // Usando o construtor global corretamente
      img.src = item.src;
    });
  }, []);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    singleSetWidthRef.current = Array.from(scrollElement.children)
      .slice(0, imageData.length)
      .reduce((acc, child) => acc + (child as HTMLElement).offsetWidth + 16, 0);

    let currentPosition = 0;
    const speed = 1;

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
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <>
      <style jsx>{`
        .scroll-container {
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }
        .scroll-content {
          display: inline-flex;
          will-change: transform;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 16px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .image-container:hover .overlay {
          opacity: 1;
        }
      `}</style>
      <div className="scroll-container relative flex justify-between">
        <div className="bg-gradient-to-l to-white/30 from-transparent top-0 z-30 left-0 h-[320px] absolute lg:w-20 w-10"></div>
        <div ref={scrollRef} className="scroll-content">
          {duplicatedImageData.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="relative lg:w-[500px] w-[350px] lg:h-[320px] h-52 lg:mr-4 mr-2"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <NextImage
                src={item.src}
                alt={item.title}
                className="lg:w-[500px] w-full lg:h-80 h-52 rounded-lg object-cover"
                loading="lazy"
                width={500}
                height={320}
              />
              <div className="absolute flex justify-end py-5 px-5 flex-col bg-gradient-to-b to-[#3a3a3a] text-[#bcbcbc] from-transparent w-[350px] lg:w-full lg:h-full h-52 top-0">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r to-white/30 from-transparent top-0 z-30 h-[320px] absolute right-0 lg:w-20 w-10"></div>
      </div>
    </>
  );
};

export default InfiniteImageScroll;
