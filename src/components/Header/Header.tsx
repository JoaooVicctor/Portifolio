

// components/Header.tsx
export default function Header() {
  return (
    <header id="header" className="w-full h-screen bg-linear-to-r from-[#010408] to-[#162542] flex flex-col justify-center items-center px-6 pt-30 text-white text-center">
      <button data-aos="fade-up" className="mb-6 text-blue-500 text-sm border border-blue-500 rounded-3xl p-2 px-4.5
        hover:bg-white/80 hover:border-transparent transition font-bold">
        Disponível para projetos
      </button>



      <h1 data-aos="fade-up" className="text-5xl sm:text-7xl font-bold mb-3">Olá, sou <span className="text-blue-500">João Victor</span></h1>

      <h2 data-aos="fade-up" className="text-2xl sm:text-3xl text-gray-300 mb-6 font-bold">
        Frontend Developer
      </h2>

      <p data-aos="fade-up" className="max-w-2xl text-gray-400 text-base sm:texr mb-10 leading-relaxed">
        Desenvolvedor Frontend de 19 anos especializado em React, TypeScript e Next.js.  
        Criando experiências web modernas e responsivas.
      </p>

      <div data-aos="fade-up" className="flex flex-col sm:flex-row gap-4">
        <a
          href="#projetos"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Ver Projetos
        </a>
        <a
          href="#contato"
          className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-7 py-3 rounded-md font-semibold transition"
        >
          Entrar em Contato
        </a>
      </div>

      <div data-aos="fade-up" className="animate-bounce text-gray-400 mt-15">
        <a href="#projetos" >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
      </div>

    </header>
  );
}
