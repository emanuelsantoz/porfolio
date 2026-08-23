"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const personas = [
  {
    id: "fullstack",
    number: "01",
    title: "Fullstack",
    question: "Como todas as partes se conectam para uma ideia realmente funcionar?",
    description: "A visão completa do produto: experiência, regras, dados e entrega trabalhando juntos para resolver o problema inteiro — não apenas uma parte dele.",
    signal: "Visão de ponta a ponta",
  },
  {
    id: "ux-ui",
    number: "02",
    title: "UX/UI Design",
    question: "Como isso pode fazer sentido para quem vai usar?",
    description: "Interface não é acabamento. É a parte do produto que recebe uma pessoa, reduz dúvidas e transforma intenção em ação.",
    signal: "Clareza para pessoas",
  },
  {
    id: "mobile",
    number: "03",
    title: "Mobile Dev",
    question: "Como essa solução acompanha a vida real, onde ela acontece?",
    description: "Produtos mobile pedem proximidade, foco e contexto. A experiência precisa ser útil no ritmo das pessoas, não só bonita em uma tela.",
    signal: "Presença no dia a dia",
  },
  {
    id: "backend",
    number: "04",
    title: "Backend",
    question: "O que precisa existir por trás para a solução se sustentar?",
    description: "Uma boa experiência precisa de uma base confiável: regras claras, organização e espaço para o produto crescer sem se perder.",
    signal: "Fundação que acompanha",
  },
  {
    id: "quality",
    number: "05",
    title: "QA & Testing",
    question: "Como garantir que a solução funciona quando alguém precisa dela?",
    description: "Qualidade é respeito pelo tempo de quem usa. Testar, revisar e antecipar falhas é parte de entregar algo em que se pode confiar.",
    signal: "Cuidado antes da entrega",
  },
  {
    id: "automation",
    number: "06",
    title: "Automation",
    question: "O que pode deixar de ser repetitivo para abrir espaço ao que importa?",
    description: "Processos sempre podem melhorar. Automação é uma forma de dar ritmo ao trabalho, reduzir atrito e criar tempo para pensar melhor.",
    signal: "Melhoria contínua",
  },
  {
    id: "data",
    number: "07",
    title: "Data Eng.",
    question: "O que os sinais do produto ajudam a enxergar?",
    description: "Dados não substituem escuta, mas ajudam a fazer perguntas melhores. São uma lente para entender comportamento, prioridade e impacto.",
    signal: "Contexto para decidir",
  },
  {
    id: "ai",
    number: "08",
    title: "AI & LLMs",
    question: "Como ampliar uma solução sem perder o olhar humano?",
    description: "Inteligência artificial é uma ferramenta para explorar caminhos, acelerar descobertas e dar novas capacidades aos produtos — sempre com intenção.",
    signal: "Tecnologia com critério",
  },
];

export function CreationLenses() {
  const [activeId, setActiveId] = useState(personas[0].id);
  const activePersona = personas.find((persona) => persona.id === activeId) ?? personas[0];

  return (
    <section id="lentes" className="overflow-hidden bg-[#fdfdfb] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2166c9]">Minhas personas</p>
            <h2 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl">
              Um produto ganha força quando diferentes habilidades trabalham juntas.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-slate-600 lg:pb-1 lg:text-lg">
            Cada persona mostra uma camada da minha atuação. Explore a que melhor conversa com o desafio que você quer resolver.
          </p>
        </div>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {personas.map((persona) => {
            const isActive = persona.id === activeId;
            return (
              <motion.button
                key={persona.id}
                type="button"
                onClick={() => setActiveId(persona.id)}
                onMouseEnter={() => setActiveId(persona.id)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.985 }}
                aria-pressed={isActive}
                className={`min-h-44 rounded-2xl border p-5 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2166c9] ${
                  isActive
                    ? "border-[#2166c9] bg-[#07111f] text-white shadow-[0_18px_40px_rgba(7,17,31,0.14)]"
                    : "border-[#07111f]/10 bg-white text-[#07111f] hover:border-[#2166c9]/45"
                }`}
              >
                <span className={`font-mono text-xs ${isActive ? "text-[#79aef4]" : "text-[#2166c9]"}`}>{persona.number}</span>
                <h3 className="mt-8 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">{persona.title}</h3>
                <p className={`mt-2 text-sm leading-6 ${isActive ? "text-white/65" : "text-slate-500"}`}>{persona.signal}</p>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-5 overflow-hidden rounded-[1.75rem] bg-[#07111f] text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePersona.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#79aef4]">{activePersona.number} · {activePersona.title}</p>
                <h3 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-4xl">{activePersona.question}</h3>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">{activePersona.description}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#79aef4]">Lente ativa</p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">{activePersona.signal}</p>
                <div className="mt-8 flex items-center gap-3" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-[#79aef4]" />
                  <span className="h-px flex-1 bg-gradient-to-r from-[#79aef4] to-white/10" />
                  <span className="h-2 w-2 rounded-full border border-[#79aef4]" />
                  <span className="h-px flex-1 bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/30" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
