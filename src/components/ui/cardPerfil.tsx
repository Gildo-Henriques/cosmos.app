import TiposDePerfil from "../ux/perfilTypes";
type Props = {
   icon: 'Brain' | 'Rocket' | 'Link' | 'Circle';
  titulo: string;
  texto: string;
  extra?: string
};
export default function CardPerfilTypes() {
  const CardsData: Props[] = [
    {
      icon: "Brain",
      titulo: "Perfil para talentos",
      texto: "Ideal para programadores, designers, marketeers, gestores de produto, criativos, etc.",
    },
     {
      icon: 'Rocket',
      titulo: 'Perfil para startups',
      texto: 'Para fundadores ou representantes de startups que querem encontrar talentos, mentores, investidores e resolver desafios reais.',
    },
    {
      icon: 'Link',
      titulo: 'Perfil para investidores',
      texto: 'patrocinadores que procuram startups alinhadas com suas teses. Cadastra hackathons, summits e workshops, com inscrições, regras e visibilidade máxima dentro da COSMOS.',
      
    },
  ];
  return (
    <div className="flex w-full lg:w-auto flex-wrap gap-6">
      {CardsData.map((card, index) => (
        <TiposDePerfil
          key={index}
          icon={card.icon}
          titulo={card.titulo}
          texto={card.texto}
        />
      ))}
    </div>
  );
}
