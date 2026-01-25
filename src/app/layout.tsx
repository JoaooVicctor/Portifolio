import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Header from "@/components/Header/Header";
import "./globals.css";
import Sobre from "@/components/Sobre/Sobre";


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

      </body>
    </html>
  );
}