export default function Projetos() {
  return (
    <section id="projetos" className="bg-[#0d0d16] text-white w-full py-20 px-6">
      <div className="text-center mb-12">
        <h1 data-aos="fade-up" className="text-5xl border-b-4 p-2.5 border-blue-500 font-bold inline-block">
          Meus <span className="text-blue-500">Projetos</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* Projeto 1 */}
        <div className="bg-[#0f172a] rounded-xl shadow-lg overflow-hidden flex flex-col border border-transparent transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/40">
          <img src="/calculadora.jpg" alt="Projeto 1" className="w-full h-48 object-cover" />
          <div data-aos="fade-right" className="p-7 flex flex-col grow">
            <h2 className="text-xl font-bold mb-2 text-blue-500">Calculadora</h2>
            <p className="text-sm mb-3">Calculadora simples e funcional.</p>
            <p className="text-xs mb-5 text-gray-300">Ferramentas: Next, Tailwind e TypeScript</p>
            <div className="mt-auto flex gap-3">
              <a href="https://github.com/JoaooVicctor/Calculadora" target="_blank" className="flex-1 bg-blue-500 text-white py-2 text-sm rounded-md font-medium hover:bg-blue-600 transition text-center">
                GitHub
              </a>
              <a href=" https://astonishing-figolla-0ffb76.netlify.app/" target="_blank" className="flex-1 border border-blue-500 text-blue-500 py-2 text-sm rounded-md font-medium hover:bg-blue-500 hover:text-white transition text-center">
                Deploy
              </a>
            </div>
          </div>
        </div>

        {/* Projeto 2 */}
        <div className="bg-[#0f172a] rounded-xl shadow-lg overflow-hidden flex flex-col border border-transparent transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/40">
          <img src="/cripto.jpeg" alt="Projeto 2" className="w-full h-48 object-cover" />
          <div data-aos="fade-right" className="p-7 flex flex-col grow">
            <h2 className="text-xl font-bold mb-2 text-blue-500">Cripto Moedas</h2>
            <p className="text-sm mb-3">Carteira de cripto moedas em tempo real. </p>
            <p className="text-xs mb-5 text-gray-300">Ferramentas: React.js, TypeScript, APIs, Router e Css</p>
            <div className="mt-auto flex gap-3">
              <a href="https://github.com/JoaooVicctor/site-cripto" target="_blank" className="flex-1 bg-blue-500 text-white py-2 text-sm rounded-md font-medium hover:bg-blue-600 transition text-center">
                GitHub
              </a>
              <a href=" https://brilliant-smakager-8b7a07.netlify.app/" target="_blank" className="flex-1 border border-blue-500 text-blue-500 py-2 text-sm rounded-md font-medium hover:bg-blue-500 hover:text-white transition text-center">
                Deploy
              </a>
            </div>
          </div>
        </div>

        {/* Projeto 3 */}
        <div className="bg-[#0f172a] group rounded-xl shadow-lg overflow-hidden flex flex-col border border-transparent transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/40">
          <img src="/frases.jpeg" alt="Projeto 3" className="w-full h-48 object-cover" />
          <div data-aos="fade-right" className="p-7 flex flex-col grow">
            <h2 className="text-xl font-bold mb-2 text-blue-500">Gerador de Frases</h2>
            <p className="text-sm mb-3">Gerador de frases motivacionais e Bom dia.</p>
            <p className="text-xs mb-5 text-gray-300">Ferramentas: React.js, JavaScript, TypeScript, HTML e CSS</p>
            <div className="mt-auto flex gap-3">
              <a href="https://github.com/JoaooVicctor/devFrases" target="_blank" className="flex-1 bg-blue-500 text-white py-2 text-sm rounded-md font-medium hover:bg-blue-600 transition text-center">
                GitHub
              </a>
              <a href=" https://incomparable-cassata-fe0eeb.netlify.app/" target="_blank" className="flex-1 border border-blue-500 text-blue-500 py-2 text-sm rounded-md font-medium hover:bg-blue-500 hover:text-white transition text-center">
                Deploy
              </a>
            </div>
          </div>
        </div>
        {/* Projeto 4 */}
        {/* 
        <div className="bg-[#0f172a] rounded-xl shadow-lg overflow-hidden flex flex-col border border-transparent transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/40">
          <img src="/projeto4.png" alt="Projeto 4" className="w-full h-48 object-cover" />
          <div className="p-7 flex flex-col grow">
            <h2 className="text-xl font-bold mb-2 text-blue-500">Projeto 4</h2>
            <p className="text-sm mb-3">Descrição breve do projeto.</p>
            <p className="text-xs mb-5 text-gray-300">Ferramentas: React, Tailwind</p>
            <div className="mt-auto flex gap-3">
              <a href="#" target="_blank" className="flex-1 bg-blue-500 text-white py-2 text-sm rounded-md font-medium hover:bg-blue-600 transition text-center">
                GitHub
              </a>
              <a href="#" target="_blank" className="flex-1 border border-blue-500 text-blue-500 py-2 text-sm rounded-md font-medium hover:bg-blue-500 hover:text-white transition text-center">
                Deploy
              </a>
            </div>
          </div>
        </div>
        */}

        {/* Projeto 5 */}
        {/* 
        <div className="bg-[#0f172a] rounded-xl shadow-lg overflow-hidden flex flex-col border border-transparent transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/40">
          <img src="/projeto5.png" alt="Projeto 5" className="w-full h-48 object-cover" />
          <div className="p-7 flex flex-col grow">
            <h2 className="text-xl font-bold mb-2 text-blue-500">Projeto 5</h2>
            <p className="text-sm mb-3">Descrição breve do projeto.</p>
            <p className="text-xs mb-5 text-gray-300">Ferramentas: Next.js, TypeScript</p>
            <div className="mt-auto flex gap-3">
              <a href="#" target="_blank" className="flex-1 bg-blue-500 text-white py-2 text-sm rounded-md font-medium hover:bg-blue-600 transition text-center">
                GitHub
              </a>
              <a href="#" target="_blank" className="flex-1 border border-blue-500 text-blue-500 py-2 text-sm rounded-md font-medium hover:bg-blue-500 hover:text-white transition text-center">
                Deploy
              </a>
            </div>
          </div>
        </div>
        */}

        {/* Projeto 6 */}
        {/* 
        <div className="bg-[#0f172a] rounded-xl shadow-lg overflow-hidden flex flex-col border border-transparent transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-blue-500/40">
          <img src="/projeto6.png" alt="Projeto 6" className="w-full h-48 object-cover" />
          <div className="p-7 flex flex-col grow">
            <h2 className="text-xl font-bold mb-2 text-blue-500">Projeto 6</h2>
            <p className="text-sm mb-3">Descrição breve do projeto.</p>
            <p className="text-xs mb-5 text-gray-300">Ferramentas: React, Tailwind, GitHub</p>
            <div className="mt-auto flex gap-3">
              <a href="#" target="_blank" className="flex-1 bg-blue-500 text-white py-2 text-sm rounded-md font-medium hover:bg-blue-600 transition text-center">
                GitHub
              </a>
              <a href="#" target="_blank" className="flex-1 border border-blue-500 text-blue-500 py-2 text-sm rounded-md font-medium hover:bg-blue-500 hover:text-white transition text-center">
                Deploy
              </a>
            </div>
          </div>
        </div>
        */}


      </div>
    </section>
  );
}
