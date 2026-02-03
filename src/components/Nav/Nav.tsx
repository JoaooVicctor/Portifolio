"use client";
import { Link } from "react-scroll";

export default function Nav() {
  return (
    <div className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md border-b border-blue-500 z-50">
      <nav className="flex flex-row justify-between items-center max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold cursor-pointer">
          <Link
            to="header"
            smooth={true}
            duration={800}
            offset={-80}
            className="flex items-center gap-1 cursor-pointer"
          >
            <span className="text-white">&lt;</span>
            <span className="text-blue-500">Dev</span>
            <span className="text-white">/&gt;</span>
          </Link>
        </h1>
        <div className="flex gap-6 text-gray-300">
          <Link to="sobre" smooth={true} duration={800} offset={-80} className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
            Sobre
          </Link>
          <Link to="projetos" smooth={true} duration={800} offset={-80} className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
            Projetos
          </Link>
          <Link to="contato" smooth={true} duration={800} offset={-80} className="cursor-pointer hover:text-blue-500 transition-colors duration-300">
            Contato
          </Link>
        </div>
      </nav>
    </div>
  );
}
