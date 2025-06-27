import Image from "next/image";
import Link from "next/link";
import CardPerfilTypes from "@/components/ui/cardPerfil";
import DivBlur from "@/components/widgets/blur";
import Hero from "@/components/ui/hero";
import DivCardAnimado from "@/components/widgets/divCardAnimado";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="">
        <div className="mt-20 text-center lg:px-32 px-5">
          <span className="text-blue-400 text-center">COMO FUNCIONA</span>
          <h2 className="text-3xl font-bold text-center text-[#2c2c2c] font-gil">
            Tudo começa com um bom perfil
          </h2>
          <p className="mt-5 text-[#2c2c2c] lg:text-lg text-base">
            O teu perfil é a tua porta de entrada no ecossistema da COSMOS. É
            ele que te representa, te conecta com oportunidades e te posiciona
            dentro da comunidade. Quanto mais completo e autêntico for, mais
            visibilidade e relevância tu ganhas.
          </p>
        </div>
        <section className="lg:mt-20 mt-5 lg:px-20 gap-5 flex w-full lg:justify-between lg:flex-row flex-col">
          <div className="flex w-full flex-col justify-between *:lg:p-5">
            <CardPerfilTypes />
          </div>
          <div className="lg:w-[1150] lg:h-[650] w-full lg:rounded-lg overflow-hidden relative">
            <div className="absolute w-full h-full flex items-end top-0 bg-gradient-to-b px-5 py-5 to-[#2c2c2c]/80 from-transparent">
              <div className="w-full lg:h-52 h-72 rounded-md bg-white/10 backdrop-blur-xs flex justify-between flex-col p-5 text-left">
                <p className="text-[#c2c2c2] ">
                  O teu talento merece ser descoberto. A tua startup precisa das
                  conexões certas. A COSMOS é a porta de entrada para
                  oportunidades reais no ecossistema tech de Angola. Cria o teu
                  perfil e faz parte do futuro.
                </p>
                <Link
                  href={"#"}
                  className="bg-[#000000]/50 text-white text-center py-2 space-x-3 rounded-md"
                >
                  Criar Perfil
                </Link>
              </div>
              {/* */}
            </div>
            <Image
              src={"/images/page/comoFunciona/perfil.jpg"}
              className="w-full h-full object-cover"
              width={500}
              height={500}
              alt="como funciona"
            ></Image>
          </div>
        </section>
      </section>
        
         <DivBlur className="size-[500px] absolute -z-20 blur-3xl rotate-180 top-0 right-0 lg:right-[550px] bg-conic from-blue-300 from-5% to-gray-800/30 to-90% rounded-full"/>

      <section className="mt-20 z-20">
        <div className="text-center space-y-3 z-50">
          <h2 className="text-3xl font-bold text-center z-50 text-[#2c2c2c] font-gil">Identify value much faster</h2>
          <p className="text-lg text-[#2c2c2c]">Use powerful yet familiar tools to create your ultimate website design. Import your files everywhere, including Figma.</p>
        </div>
        
      </section>
      <DivCardAnimado/>
      {/* <section className="w-full flex justify-center lg:flex-row flex-col lg:px-48 px-5 gap-5 mt-5">
        
          <div className="space-y-2">
            <div className="flex  items-center space-x-1">
              <Rocket className="text-blue-500" />
              <h2 className="font-semibold font-gil">Optimization</h2>
            </div>
            <p className="text-[#434343]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo vero deleniti fugiat magni esse, nesciunt sint ducimus modi obcaecati, molestiae unde voluptatum iure aliquam. Fuga itaque in voluptas id quis?</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-1">
              <Rocket className="text-blue-500" />
              <h2 className="font-semibold font-gil">Optimization</h2>
            </div>
            <p className="text-[#434343]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo vero deleniti fugiat magni esse, nesciunt sint ducimus modi obcaecati, molestiae unde voluptatum iure aliquam. Fuga itaque in voluptas id quis?</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-1">
              <Rocket className="text-blue-500" />
              <h2 className="font-semibold font-gil">Optimization</h2>
            </div>
            <p className="text-[#434343]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo vero deleniti fugiat magni esse, nesciunt sint ducimus modi obcaecati, molestiae unde voluptatum iure aliquam. Fuga itaque in voluptas id quis?</p>
          </div>

      </section> */}
    </main>
  );
}
