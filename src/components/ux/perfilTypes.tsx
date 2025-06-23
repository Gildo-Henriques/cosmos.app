
import { Brain, Rocket, Link, Circle } from 'lucide-react';

// Definindo a interface para as props
type Props = {
  icon: 'Brain' | 'Rocket' | 'Link' | 'Circle';
  titulo: string;
  texto: string;
};

// Mapeamento de nomes de ícones para componentes
const iconMap: Record<Props['icon'], React.ComponentType<{ className?: string }>> = {
  Brain,
  Rocket,
  Link,
  Circle,
};

// Renomeei para PascalCase seguindo convenções de componentes React
export default function PerfilTypes({ icon, titulo, texto}: Props) {
  const IconComponent = iconMap[icon] || Circle; // Fallback para Circle

  return (
    <div className="flex flex-col bg-white rounded-lg p-5  w-full">
      {icon && (
        <div className="size-5 text-blue-500">
          <IconComponent className="w-full h-full" />
        </div>
      )}
      <h2 className="text-xl font-semibold mb-2 font-gil text-[#2c2c2c]">{titulo}</h2>
        <div className="border-l-4 pl-3 border-blue-200">
                <p className="text-[#2c2c2c] text-lg">{texto}</p>
        </div>
       
    </div>
  );
}