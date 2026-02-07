export default function Contato() {
  return (
    <section
      id="contato"
      className="w-full bg-linear-to-r from-[#010408] to-[#162542] flex flex-col items-center px-6 text-white text-center py-16 overflow-x-hidden"
    >
      <h1 data-aos="fade-up" className="text-4xl sm:text-5xl border-b-4 p-2 border-blue-500 mb-8 font-bold">
        Vamos <span className="text-blue-500">Conversar?</span>
      </h1>

      <p data-aos="fade-up" className="font-medium text-gray-300 mb-8 text-sm sm:text-base max-w-xl">
        Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de colaboração
      </p>

      {/* Responsividade: coluna no mobile, linha em telas maiores */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-2xl">
        
        {/* WhatsApp */}
        <a data-aos="flip-left"
          className="flex w-full sm:w-52 h-12 sm:h-14 justify-center items-center gap-3 font-bold rounded-lg px-4 
          bg-linear-to-r from-green-400 to-green-600 
          hover:scale-105 hover:brightness-110 transition-all duration-300"
          href="https://wa.me/5599992289887?text=Ol%C3%A1%20Jo%C3%A3o%20Victor%2C%20gostaria%20de%20contratar%20seus%20servi%C3%A7os.%20Podemos%20conversar%3F"
          target="_blank"
        >
          <img className="w-5 h-5 sm:w-6 sm:h-6" src="/whatsapp.png" alt="WhatsApp" />
          WhatsApp
        </a>

        {/* LinkedIn */}
        <a data-aos="flip-left"
          className="flex w-full sm:w-52 h-12 sm:h-14 justify-center items-center gap-3 font-bold rounded-lg px-4 
          border border-blue-500 text-blue-500 
          hover:bg-blue-600 hover:text-white 
          hover:scale-105 transition-all duration-300"
          href="https://www.linkedin.com/in/jo%C3%A3o-victor-8237b4220/"
          target="_blank"
        >
          <img className="w-5 h-5 sm:w-6 sm:h-6" src="/linkedin.png" alt="LinkedIn" />
          LinkedIn
        </a>

        {/* GitHub */}
        <a data-aos="flip-left"
          className="flex w-full sm:w-52 h-12 sm:h-14 justify-center items-center gap-3 font-bold rounded-lg px-4 
          border border-gray-500 text-gray-300 
          hover:bg-gray-800 hover:text-white 
          hover:scale-105 transition-all duration-300"
          href="https://github.com/JoaooVicctor"
          target="_blank"
        >
          <img className="w-5 h-5 sm:w-6 sm:h-6" src="/logotipo.png" alt="GitHub" />
          GitHub
        </a>
      </div>
    </section>
  );
}
