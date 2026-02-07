import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Header from "@/components/Header/Header";
import Sobre from "@/components/Sobre/Sobre";
import Projetos from "@/components/Projetos/Projetos";
import Contato from "@/components/Contato/Contato";
import "animate.css";
import "aos/dist/aos.css";
import "./globals.css";
import AOSInitializer from "././AOSInitialize"; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <AOSInitializer />
        <Nav />
        <Header />
        <Sobre />
        <Projetos />
        <Contato />
        <Footer />
        {children}
      </body>
    </html>
  );
}
