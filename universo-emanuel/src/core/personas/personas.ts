import { PersonaType } from "@/core/types/persona";

export type PersonaSeo = { title: string; description: string };

export type PersonaInfo = {
  id: PersonaType;
  label: string;
  headline: string;
  question: string;
  state: "disponível" | "em construção";
  seo: PersonaSeo;
};

/**
 * Universos não são cargos. São lentes que Emanuel mobiliza para construir
 * produtos a partir de problemas reais. Só uma lente deve ser publicada
 * quando ela tiver narrativa, evidência e interação próprias.
 */
export const PERSONAS: PersonaInfo[] = [
  { id: "fullstack", label: "Produto", headline: "Conexões que viram produto.", question: "Como as partes trabalham juntas para uma ideia continuar?", state: "em construção", seo: { title: "Produto — ES/0", description: "A lente que conecta estratégia, experiência e engenharia." } },
  { id: "ux-ui", label: "UX/UI", headline: "Uma pergunta começa a ganhar interface.", question: "Como isso pode fazer sentido para quem vai usar?", state: "disponível", seo: { title: "UX/UI — ES/0", description: "O universo de experiência e interface de Emanuel Santos." } },
  { id: "mobile", label: "Mobile", headline: "A experiência acompanha a vida real.", question: "Como a solução aparece no contexto em que as pessoas vivem?", state: "em construção", seo: { title: "Mobile — ES/0", description: "Uma lente para experiências em movimento." } },
  { id: "backend", label: "Sistemas", headline: "O que sustenta uma boa experiência.", question: "O que precisa existir por trás para a solução continuar?", state: "em construção", seo: { title: "Sistemas — ES/0", description: "Uma lente de regras, integrações e continuidade." } },
  { id: "qa", label: "Qualidade", headline: "Confiança também é construída.", question: "Como reduzir a incerteza antes de alguém precisar do produto?", state: "em construção", seo: { title: "Qualidade — ES/0", description: "Uma lente para cenários, testes e confiança." } },
  { id: "automation", label: "Automação", headline: "O que se repete pode abrir espaço para pensar.", question: "Que atrito pode deixar de ser manual?", state: "em construção", seo: { title: "Automação — ES/0", description: "Uma lente para fluxo e continuidade." } },
  { id: "data", label: "Dados", headline: "Sinais ganham valor quando têm contexto.", question: "O que os sinais ajudam a compreender antes da próxima decisão?", state: "em construção", seo: { title: "Dados — ES/0", description: "Uma lente para contexto e decisão." } },
  { id: "ai", label: "IA aplicada", headline: "Inteligência melhora decisões humanas.", question: "Onde a IA ajuda sem substituir a pergunta certa?", state: "em construção", seo: { title: "IA aplicada — ES/0", description: "Uma lente para aplicações de IA com intenção." } },
];

export function isPersonaType(value: string): value is PersonaType {
  return PERSONAS.some((persona) => persona.id === value);
}

export function getPersonaInfo(persona: PersonaType): PersonaInfo {
  return PERSONAS.find((item) => item.id === persona) ?? PERSONAS[0];
}
