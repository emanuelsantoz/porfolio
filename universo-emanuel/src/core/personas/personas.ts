import { PersonaType } from "@/core/types/persona";

export type PersonaSeo = {
  title: string;
  description: string;
};

export type PersonaInfo = {
  id: PersonaType;
  label: string;
  headline: string;
  seo: PersonaSeo;
};

export const PERSONAS: PersonaInfo[] = [
  {
    id: "fullstack",
    label: "Fullstack",
    headline: "Fullstack Developer",
    seo: {
      title: "Universo Emanuel | Fullstack",
      description:
        "Do pixel ao banco de dados: produtos completos com UI, backend, integrações e performance.",
    },
  },
  {
    id: "backend",
    label: "Backend",
    headline: "Backend Architect",
    seo: {
      title: "Universo Emanuel | Backend",
      description:
        "Arquitetura limpa, microsserviços e performance: APIs escaláveis e observáveis.",
    },
  },
  {
    id: "ux-ui",
    label: "UX/UI Design",
    headline: "Product Designer",
    seo: {
      title: "Universo Emanuel | UX/UI",
      description:
        "Interfaces que contam histórias: foco em experiência, acessibilidade e design systems.",
    },
  },
  {
    id: "mobile",
    label: "Mobile Dev",
    headline: "Mobile Engineer",
    seo: {
      title: "Universo Emanuel | Mobile",
      description:
        "Apps mobile com experiência fluida, performance e engenharia de produto (Flutter/iOS/Android).",
    },
  },
  {
    id: "qa",
    label: "QA & Testing",
    headline: "QA Specialist",
    seo: {
      title: "Universo Emanuel | QA",
      description:
        "Qualidade é inegociável: estratégias de teste, automação e pipelines confiáveis.",
    },
  },
  {
    id: "automation",
    label: "Automation",
    headline: "DevOps Engineer",
    seo: {
      title: "Universo Emanuel | Automação",
      description:
        "Automação de processos, CI/CD, observabilidade e produtividade de engenharia.",
    },
  },
  {
    id: "data",
    label: "Data Eng",
    headline: "Data Engineer",
    seo: {
      title: "Universo Emanuel | Dados",
      description:
        "Pipelines, modelagem e análises: dados confiáveis para decisões melhores.",
    },
  },
  {
    id: "ai",
    label: "AI & LLMs",
    headline: "AI Enthusiast",
    seo: {
      title: "Universo Emanuel | IA",
      description:
        "Integração com LLMs, prompt engineering e aplicações práticas de IA em produtos.",
    },
  },
];

export function isPersonaType(value: string): value is PersonaType {
  return PERSONAS.some((p) => p.id === value);
}

export function getPersonaInfo(persona: PersonaType): PersonaInfo {
  const info = PERSONAS.find((p) => p.id === persona);
  return info ?? PERSONAS[0];
}

