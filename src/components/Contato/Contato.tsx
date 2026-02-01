export default function Contato() {
  return (
    <section>
      <header className="w-full bg-linear-to-r from-[#010408] to-[#162542] flex flex-col items-center px-6 text-white text-center pt-55">
        <h1 className="text-5xl border-b-4 p-2.5 border-blue-500 mb-10 sm:text-5xl font-bold -mt-40">
          Vamos <span className="text-blue-500">Conversar?</span>
        </h1>
        <p className="font-medium text-gray-300">
          Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de colaboração
        </p>

        <section className="py-15">
          <div className="flex flex-row text-center justify-center items-center gap-6">
            
            {/* WhatsApp (mantém estilo cheio) */}
            <a
              className="flex w-52 h-14 justify-center items-center gap-3 font-bold rounded-lg px-4 
              bg-linear-to-r from-green-400 to-green-600 
              hover:scale-105 hover:brightness-110 transition-all duration-300"
              href=""
            >
              <img className="w-6 h-6" src="/whatsapp.png" alt="WhatsApp" />
              WhatsApp
            </a>

            {/* LinkedIn (borda azul, fundo só no hover) */}
            <a
              className="flex w-52 h-14 justify-center items-center gap-3 font-bold rounded-lg px-4 
              border border-blue-500 text-blue-500 
              hover:bg-blue-600 hover:text-white 
              hover:scale-105 transition-all duration-300"
              href=""
            >
              <img className="w-6 h-6" src="/linkedin.png" alt="LinkedIn" />
              LinkedIn
            </a>

            {/* GitHub (borda cinza, fundo só no hover) */}
            <a
              className="flex w-52 h-14 justify-center items-center gap-3 font-bold rounded-lg px-4 
              border border-gray-500 text-gray-300 
              hover:bg-gray-800 hover:text-white 
              hover:scale-105 transition-all duration-300"
              href=""
            >
              <img className="w-6 h-6" src="/logotipo.png" alt="GitHub" />
              GitHub
            </a>
          </div>
        </section>
      </header>
    </section>
  );
}
