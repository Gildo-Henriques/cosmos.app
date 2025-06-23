"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
export default function DivCardAnimado() {
  const [isHovered, setIsHovered] = useState(false);

  // Definindo variantes com tipagem explícita para evitar erros no TypeScript
  const textVariants: Variants = {
    animate: {
      opacity: [0, 1, 1, 0], // Aparece e desaparece
      y: [20, 0, 0, 20], // Sobe e desce
      transition: {
        duration: 3, // Duração total do ciclo
        repeat: Infinity, // Repete infinitamente
        repeatType: "loop", // Garante loop contínuo
        ease: "easeInOut", // Suavidade na animação
      },
    },
    static: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  // Variantes para a div que desaparece (sobe)
  const contentVariants: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hidden: {
      opacity: 0,
      y: -50, // Sobe
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  return (
    <div
      className="w-full lg:h-[500px] h-80 flex flex-col justify-center items-center relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Div que desaparece com animação */}
      <motion.div
        className="h-full flex items-end justify-center py-10 z-30"
        variants={contentVariants}
        animate={isHovered ? "hidden" : "visible"}
      >
        <div className="w-full lg:h-80 h-60 lg:pt-14 hidden lg:flex flex-col items-center justify-between">
          <div className="space-y-2">
            <Image src={'/images/page/comoFunciona/por que.jpg'} width={500} height={500} alt="Por que usar a COSMOS" className="size-10 rounded-full "></Image>
            <p className="bg-[#4b4b4b] text-center w-auto self-start text-white px-5 py-1 rounded-md">
              <span className="text-[#a3a3a3]">Por que usar a </span>COSMOS?
            </p>
          </div>
          {/* Div branca com frase motivadora */}
          <div className="lg:w-96 w-60 lg:h-40 h-32 bg-white shadow-lg rounded-lg p-5 flex flex-col justify-center">
            <span className="font-gil font-semibold text-[#6a6a6a] text-sm">
              Transforme suas ideias em realidade com a COSMOS!
            </span>
          </div>
        </div>
      </motion.div>

      {/* Div animada principal */}
      <div className="absolute z-20 flex justify-center">
        <motion.div
          className="relative bg-[#191919] lg:w-[500px] w-72 lg:h-72 h-52 rounded-2xl overflow-hidden"
          animate={{ rotate: isHovered ? 0 : -5 }}
          transition={{ duration: 0.3 }}
        >
          {/* Três bolinhas no canto superior esquerdo */}
          <div className="absolute top-4 left-4 flex gap-2 z-10">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* Dizeres com animação infinita ou estática */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white lg:text-lg text-base p-6 text-center z-0">
            {[
              "Acesse o universo da inovação",
              "Conecte-se com a tecnologia",
              "Desenvolva sem limites",
            ].map((text, index) => (
              <motion.p
                key={index}
                variants={textVariants}
                animate={isHovered ? "static" : "animate"}
                className="opacity-80"
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* Camada de blur */}
          <div
            className={`absolute inset-0 transition-all duration-300 z-5 ${
              isHovered ? "lg:backdrop-blur-none" : "lg:backdrop-blur-sm"
            }`}
          ></div>
        </motion.div>
      </div>
    </div>
  );
}