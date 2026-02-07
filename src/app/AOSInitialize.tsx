"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação
      once: true,     // anima apenas uma vez
    });
  }, []);

  return null; // não renderiza nada, só inicializa
}
