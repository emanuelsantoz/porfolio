import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PersonaType } from "@/core/types/persona";

export type AchievementId =
  | "visit_home"
  | "visit_study_dev"
  | "visit_webkits"
  | "visit_badges"
  | "use_webkit_cpf_cnpj"
  | "use_webkit_json_yaml"
  | "use_webkit_lorem"
  | "konami_code"
  | "explore_8_personas";

export type Achievement = {
  id: AchievementId;
  title: string;
  description: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "visit_home",
    title: "Portal Aberto",
    description: "Visitou a home do Universo Emanuel.",
  },
  {
    id: "visit_study_dev",
    title: "Modo Estudo",
    description: "Visitou a área Study Dev.",
  },
  {
    id: "visit_webkits",
    title: "Ferramentas em Mãos",
    description: "Visitou a área Webkits.",
  },
  {
    id: "visit_badges",
    title: "Colecionador",
    description: "Visitou a vitrine de badges.",
  },
  {
    id: "use_webkit_cpf_cnpj",
    title: "Gerador Oficial",
    description: "Gerou CPF/CNPJ no Webkit.",
  },
  {
    id: "use_webkit_json_yaml",
    title: "Converter Ninja",
    description: "Converteu JSON ↔ YAML no Webkit.",
  },
  {
    id: "use_webkit_lorem",
    title: "Conteudista",
    description: "Gerou Lorem Ipsum no Webkit.",
  },
  {
    id: "konami_code",
    title: "Easter Egg",
    description: "Descobriu o Konami Code.",
  },
  {
    id: "explore_8_personas",
    title: "Multiverso",
    description: "Explorou todas as 8 personas.",
  },
];

type Store = {
  unlocked: Record<AchievementId, boolean>;
  exploredPersonas: Partial<Record<PersonaType, boolean>>;
  unlock: (id: AchievementId) => void;
  trackPersona: (persona: PersonaType) => void;
  reset: () => void;
};

const initialUnlocked = ACHIEVEMENTS.reduce(
  (acc, a) => ({ ...acc, [a.id]: false }),
  {} as Record<AchievementId, boolean>,
);

export const useGamificationStore = create<Store>()(
  persist(
    (set, get) => ({
      unlocked: initialUnlocked,
      exploredPersonas: {},
      unlock: (id) =>
        set((state) => ({
          unlocked: {
            ...state.unlocked,
            [id]: true,
          },
        })),
      trackPersona: (persona) => {
        const nextExplored = {
          ...get().exploredPersonas,
          [persona]: true,
        };

        const exploredCount = Object.values(nextExplored).filter(Boolean).length;
        set({ exploredPersonas: nextExplored });

        if (exploredCount >= 8) {
          get().unlock("explore_8_personas");
        }
      },
      reset: () => set({ unlocked: initialUnlocked, exploredPersonas: {} }),
    }),
    {
      name: "universo-emanuel.gamification",
      version: 1,
    },
  ),
);

export function getAchievement(id: AchievementId): Achievement {
  const item = ACHIEVEMENTS.find((a) => a.id === id);
  return item ?? ACHIEVEMENTS[0];
}

