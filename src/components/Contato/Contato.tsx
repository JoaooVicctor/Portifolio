

export default function Contato() {
  return(
    <section>
      <header className="w-full  bg-linear-to-r from-[#010408] to-[#162542] flex flex-col items-center px-6 text-white text-center pt-55">
      
        <h1 className="text-5xl border-b-4 p-2.5 border-blue-500 mb-10 sm:text-5xl font-bold -mt-40">
          Vamos <span className="text-blue-500">Conversar?</span>
        </h1>
        <p className="font-medium text-gray-300">Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de colaboração</p>
      </header>
      <section>
        <div>
          <button>WhatsApp</button>
          <button>Linkedin</button>
          <button>GitHub</button>
        </div>
      </section>
    </section>
  )
}