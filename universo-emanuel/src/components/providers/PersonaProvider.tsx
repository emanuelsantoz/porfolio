"use client";

import { useEffect } from "react";
import { usePersonaStore } from "@/core/store/personaStore";

/** A rota escolhe a experiência; o provider apenas publica seus tokens visuais. */
export function PersonaProvider({ children }: { children: React.ReactNode }) {
  const activePersona = usePersonaStore((state) => state.activePersona);

  useEffect(() => {
    document.body.setAttribute("data-theme", activePersona === "fullstack" ? "default" : activePersona);
  }, [activePersona]);

  return <>{children}</>;
}
