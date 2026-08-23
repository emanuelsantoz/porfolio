"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";
import { usePersonaStore } from "@/core/store/personaStore";
import { useGamificationStore } from "@/core/store/gamificationStore";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function GamificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const activePersona = usePersonaStore((s) => s.activePersona);

  const unlock = useGamificationStore((s) => s.unlock);
  const trackPersona = useGamificationStore((s) => s.trackPersona);

  const konamiIndexRef = useRef(0);

  const routeAchievement = useMemo(() => {
    if (pathname === "/") return "visit_home" as const;
    if (pathname === "/study-dev") return "visit_study_dev" as const;
    if (pathname === "/webkits") return "visit_webkits" as const;
    if (pathname.startsWith("/webkits/")) return "visit_webkits" as const;
    if (pathname === "/badges") return "visit_badges" as const;
    return null;
  }, [pathname]);

  useEffect(() => {
    if (!routeAchievement) return;
    unlock(routeAchievement);
  }, [routeAchievement, unlock]);

  useEffect(() => {
    trackPersona(activePersona);
  }, [activePersona, trackPersona]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const expected = KONAMI[konamiIndexRef.current];
      if (event.key === expected) {
        konamiIndexRef.current += 1;
      } else {
        konamiIndexRef.current = event.key === KONAMI[0] ? 1 : 0;
      }

      if (konamiIndexRef.current >= KONAMI.length) {
        konamiIndexRef.current = 0;
        unlock("konami_code");
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [unlock]);

  return <>{children}</>;
}

