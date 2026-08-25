"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Luz decorativa para ponteiros precisos. Ela não substitui o cursor e não
 * existe em telas touch, preservando leitura, performance e acessibilidade.
 */
export function PortfolioPointerLight() {
  const lightRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const supportsPointerLight = window.matchMedia("(hover: hover) and (pointer: fine)");
    const light = lightRef.current;

    if (!light || shouldReduceMotion || !supportsPointerLight.matches) return;

    let frameId = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const renderLight = () => {
      light.style.transform = `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`;
      light.dataset.visible = "true";
      frameId = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;

      if (!frameId) frameId = window.requestAnimationFrame(renderLight);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [shouldReduceMotion]);

  return <div ref={lightRef} aria-hidden="true" className="portfolio-pointer-light" />;
}
