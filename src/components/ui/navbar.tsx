import Link from "next/link";
import LogoCosmos from "./logo";
export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-40 flex justify-center lg:py-8 p-5">
      <nav className="w-full flex justify-between items-center px-3 py-2 max-w-5xl bg-white/90 rounded-md shadow-md shadow-gray-400/15">
        <Link href={"/"} className="flex items-center">
          <LogoCosmos />
          <span className="lg:text-sm text-xs">COSMOS</span>
        </Link>
        <div className="lg:flex items-center space-x-8 hidden text-[#3a3a3a] text-sm">
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Eventos</Link>
          <Link href={"#"}>Desafios</Link>
          <Link href={"#"}>Premiações</Link>
        </div>
        <div className="flex items-center space-x-3 text-sm text-[#3a3a3a] *:rounded-lg">
          <Link href={"#"} className="px-3 py-2 shadow-md bg-white">
            Entrar
          </Link>
          <Link
            href={"#"}
            className="bg-[#434343] hover:bg-[#313131] transition-all text-white px-3 py-2"
          >
            Criar conta
          </Link>
        </div>
      </nav>
    </header>
  );
}
