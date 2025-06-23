type Props = {
  children: React.ReactNode;
  Event?: () => void;
  size: 1 | 2;
  color: 'azul' | 'preto' | 'preto/50';
};

export default function Button({ children, Event, size, color }: Props) {
  return (
    <button
      onClick={Event}
      className={`rounded-md py-2 flex gap-2 items-center group
        ${size === 1 && 'px-5'}
        ${size === 2 && 'w-full'}
        ${color === 'azul' && 'bg-blue-500 hover:bg-blue-600 relative text-white'}
        ${color === 'preto' && 'bg-[#434343] hover:bg-[#303030] text-white'}
        ${color === 'preto/50' && 'bg-[#000000]/50 text-white'}`}
    >
      {children}
    </button>
  );
}