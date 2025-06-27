import DivBlur from "../widgets/blur";
import DivsAnimateHero from "../widgets/divsAnimateHero";
import Lines from "../widgets/lines";
import InfiniteImageScroll from "./infiniteScroll";
import Navbar from "./navbar";
import Link from "next/link";
import Button from "./button";
import { ArrowRight } from "lucide-react";
export default function Hero() {
  return (
    <section>
      <DivsAnimateHero />
      <DivBlur className="size-96 absolute -top-32 blur-3xl right-10 z-20  bg-conic from-blue-200 to-gray-100 to-50% rounded-full" />
      <Navbar />
      <section className="w-full text-center h-[550px] flex flex-col items-center justify-center z-20 lg:px-20 px-3">
        {/* <H1 className="" title=" "/> */}
        <Lines />
        <h1 className="lg:text-5xl text-3xl font-bold text-center z-20 text-[#3a3a3a] font-gil">
          A ponte entre talento e <br className="hidden lg:flex" />
          oportunidades globais.
        </h1>
        <div className="2xl:px-48 lg:px-40 px-2 z-30 text-[#434343] mt-5">
          <p className="z-30 lg:text-lg text-base">
            A COSMOS é uma plataforma digital que conecta talentos angolanos,
            startups inovadoras, eventos e investidores em um só ecossistema.
            Aqui, tu podes criar o teu perfil, participar em desafios, descobrir
            oportunidades reais e ganhar reconhecimento nacional e
            internacional.
          </p>
        </div>
        <div className="flex z-30 gap-3 *:py-2 * mt-5 *:rounded-md">
          <Link href={"#"} className="">
            <Button size={1} color="azul">
              <span>Começar</span>
              <ArrowRight className="text-white/50 size-4 mt-1 group-hover:translate-x-1 group-hover:text-white transition-transform duration-200" />
            </Button>
          </Link>
          <Link
            href={"#"}
            className=""
          >
             <Button size={1} color="preto">
              <span>Criar conta</span>

            </Button>
          </Link>
        </div>
      </section>
      <DivBlur className="size-96 absolute -top-48 blur-3xl lg:left-10 -left-5 z-20  bg-conic from-blue-300 to-gray-100 to-50% rounded-full" />
      <div className="z-20 relative">
        <InfiniteImageScroll />
      </div>
    </section>
  );
}
