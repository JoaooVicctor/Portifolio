export default function Sobre() {
  return (
    <header className="w-full min-h-screen bg-linear-to-r  from-[#010408] to-[#162542] flex flex-col items-center px-6 text-white text-center pt-55">
      
      <h1 className="text-5xl border-b-4 p-2.5 border-blue-500 mb-10 sm:text-5xl font-bold -mt-20">
        Sobre <span className="text-blue-500">Mim</span>
      </h1>

      <section className="w-full max-w-6xl flex flex-col md:flex-row gap-10 mt-10">
        
        {/* Primeira div - lado esquerdo */}
        <div className="flex-1 border-2 border-blue-500 p-6 rounded-lg text-left flex flex-col justify-between">
          <p className="mb-6">
            Tenho 19 anos e sou um desenvolvedor frontend apaixonado por criar interfaces de usuário intuitivas e performáticas. Com experiência sólida em React, TypeScript e Next.js, transformo designs em código limpo e eficiente.
          </p>
          
          <div className="space-y-4">
             <div className="flex items-center gap-3 border-2 border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition">
             <img src="/code.png" alt="Clean Code" className="w-8 h-8" />
             <span className="text-lg font-medium">Clean Code</span>
          </div>
          <div className="flex items-center gap-3 border-2 border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition">
            <img src="/bolt.png" alt="Design Moderno" className="w-8 h-8" />
            <span className="text-lg font-medium">Design Moderno</span>
          </div>
          <div className="flex items-center gap-3 border-2 border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition">
            <img src="/paint.png" alt="Performance" className="w-8 h-8" />
            <span className="text-lg font-medium">Performance</span>
          </div>
          </div>
        </div>

        {/* Segunda div - lado direito */}
        <div className="flex-1 border-2 border-blue-500 p-6 rounded-lg text-left">
          <h2 className="text-3xl font-semibold mb-4">Habilidades Técnicas</h2>
          <ul className="space-y-2">
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>HTML/CSS</li>
            <li>Git/GitHub</li>
          </ul>
        </div>

      </section>
    </header>
  )
}
