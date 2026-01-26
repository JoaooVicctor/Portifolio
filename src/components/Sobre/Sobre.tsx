export default function Sobre() {
  return (
    <header className="w-full min-h-screen bg-linear-to-r from-[#010408] to-[#162542] flex flex-col items-center px-6 text-white text-center pt-55">
      
      <h1 className="text-5xl border-b-4 p-2.5 border-blue-500 mb-10 sm:text-5xl font-bold -mt-20">
        Sobre <span className="text-blue-500">Mim</span>
      </h1>

      <section className="w-full max-w-6xl flex flex-col md:flex-row gap-10 mt-10">
        
        {/* Primeira div - lado esquerdo */}
        <div className="flex-1 border-2 border-blue-500 p-8 rounded-xl text-left flex flex-col justify-between bg-[#0f172a] shadow-lg">
          
          {/* Texto sobre mim */}
          <p className="mb-8 text leading-relaxed font-light">
            <span className="block text-3xl font-extrabold text-blue-400 mb-4">👋 Olá, eu sou João!</span>
            Tenho 19 anos e sou um desenvolvedor frontend apaixonado por criar interfaces de usuário intuitivas e performáticas. 
            Com experiência sólida em <span className="font-semibold">React</span>, <span className="font-semibold">TypeScript</span> e <span className="font-semibold">Next.js</span>, 
            transformo designs em código limpo e eficiente.
          </p>

          {/* Destaques */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            
            {/* Card */}
            <div className="flex items-center gap-2 border-2 border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition shadow-sm">
              <img src="/code.png" alt="Clean Code" className="w-6 h-6" />
              <span className="text-sm font-medium">Clean Code</span>
            </div>

            {/* Card */}
            <div className="flex items-center gap-2 border-2 border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition shadow-sm">
              <img src="/bolt.png" alt="Design Moderno" className="w-6 h-6" />
              <span className="text-sm font-medium">Design Moderno</span>
            </div>

            {/* Card */}
            <div className="flex items-center gap-2 border-2 border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition shadow-sm">
              <img src="/paint.png" alt="Performance" className="w-6 h-6" />
              <span className="text-sm font-medium">Performance</span>
            </div>
          </div>
        </div>

        {/* Segunda div - lado direito */}
        <div className="flex-1 border-2 border-blue-500 p-6 rounded-lg text-left bg-[#0f172a] shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">🚀 Habilidades Técnicas</h2>

          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <li className="flex items-center gap-3 bg-[#1e293b] p-3 rounded-md hover:bg-blue-500 hover:text-white transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-6 h-6" />   
              <span>React</span>
            </li>
            <li className="flex items-center gap-3 bg-[#1e293b] p-3 rounded-md hover:bg-blue-500 hover:text-white transition">    
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-6 h-6" />
              <span>TypeScript</span>
            </li>
            <li className="flex items-center gap-3 bg-[#1e293b] p-3 rounded-md hover:bg-blue-500 hover:text-white transition">  
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-6 h-6" />
              <span>JavaScript</span>
            </li>
            <li className="flex items-center gap-3 bg-[#1e293b] p-3 rounded-md hover:bg-blue-500 hover:text-white transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-6 h-6" />
              <span>Next.js</span>
            </li>
            <li className="flex items-center gap-3 bg-[#1e293b] p-3 rounded-md hover:bg-blue-500 hover:text-white transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-6 h-6" />
              <span>Tailwind CSS</span>
            </li>
            <li className="flex items-center gap-3 bg-[#1e293b] p-3 rounded-md hover:bg-blue-500 hover:text-white transition">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-6 h-6" />
              <span>Html</span>
            </li>
            <li className="flex items-center gap-3 bg-[#1e293b] p-3 rounded-md hover:bg-blue-500 hover:text-white transition">            
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-6 h-6" />         
              <span>Css</span>
            </li>
            <li className="flex items-center gap-3 bg-[#1e293b] p-3 rounded-md hover:bg-blue-500 hover:text-white transition"> 
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-6 h-6" />
              <span>Git</span>
            </li>
            <li className="flex items-center gap-3 bg-[#1e293b] p-3 rounded-md hover:bg-blue-500 hover:text-white transition">            
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" className="w-6 h-6" />
              <span>GitHub</span>
            </li>
          </ul>
        </div>
      </section>
    </header>
  )
}
