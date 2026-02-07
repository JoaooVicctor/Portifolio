

import "aos/dist/aos.css"; // importa o CSS do AOS
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu Portifólio",
  description: "Descrição da aplicação",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
