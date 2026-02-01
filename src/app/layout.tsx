import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Header from "@/components/Header/Header";
import Sobre from "@/components/Sobre/Sobre";
import Projetos from "@/components/Projetos/Projetos";
import Contato from "@/components/Contato/Contato";
import "./globals.css";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Nav />
        <Header />
        <Sobre />
        <Projetos />
        <Contato />
      </body>
    </html>
  );
}