"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const prototypes = [
  {
    id: "rotas-inteligentes",
    label: "CASE/01",
    name: "Rotas Inteligentes",
    status: "Protótipo navegável",
    question: "Como reduzir a dúvida de quem precisa decidir um trajeto?",
    description: "Mobilidade urbana com mais contexto, previsibilidade e possibilidades de escolha.",
    href: "https://www.figma.com/proto/p2nGg4cLvSvimsAAhEkviB/Rotas-Inteligentes?node-id=214-1010&starting-point-node-id=214%3A1010",
  },
  {
    id: "fince",
    label: "CASE/02",
    name: "Fince",
    status: "Protótipo navegável",
    question: "Como transformar dados financeiros em decisões mais claras?",
    description: "Uma experiência pessoal para organizar gastos, investimentos e metas sem criar mais ruído.",
    href: "https://www.figma.com/proto/2y4ZguUBWlXnD2smvVHWTR/Fince?node-id=2762-1833&t=dKDqNAVuE4h8a7lr-0&scaling=scale-down&content-scaling=fixed&page-id=8%3A4",
  },
  {
    id: "voz-feminina",
    label: "CASE/03",
    name: "Voz Feminina",
    status: "Protótipo navegável",
    question: "Como criar uma experiência que acolhe, orienta e dá espaço para ser ouvida?",
    description: "Uma experiência pensada para transformar escuta, presença e conversa em uma jornada digital clara.",
    href: "https://www.figma.com/design/CuPQ6wsqSO0oZB99ZaK0By/Voz-Feminina?node-id=3-1327&t=URBhzWLMtIW8FI5m-0",
  },
] as const;

export function PrototypeGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePrototype = prototypes[activeIndex];
  const embedUrl = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(activePrototype.href)}`;

  return (
    <section id="prototipos" className="border-y border-white/10 bg-[#1e1e1e] px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#f24e1e]">Protótipos em contexto</p>
            <h2 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-5xl">Não são telas soltas. São hipóteses que podem ser exploradas.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/60">Cada protótipo parte de uma pergunta real, organiza uma resposta possível e fica aberto para ser usado, criticado e melhorado.</p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[.38fr_.62fr]">
          <div className="rounded-2xl border border-white/10 bg-[#242424] p-3" role="tablist" aria-label="Protótipos de UX/UI">
            {prototypes.map((prototype, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={prototype.id}
                  id={`prototype-tab-${prototype.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="prototype-preview"
                  onClick={() => setActiveIndex(index)}
                  className={`w-full rounded-xl p-5 text-left transition ${isActive ? "bg-[#f24e1e] text-white shadow-[0_16px_36px_-24px_rgba(242,78,30,.85)]" : "text-white/65 hover:bg-white/[0.06] hover:text-white"}`}
                >
                  <span className={`font-mono text-[10px] uppercase tracking-[0.18em] ${isActive ? "text-white/72" : "text-[#f24e1e]"}`}>{prototype.label}</span>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">{prototype.name}</h3>
                  <p className={`mt-3 text-sm leading-6 ${isActive ? "text-white/85" : "text-white/48"}`}>{prototype.description}</p>
                  <span className={`mt-6 inline-flex border-t pt-4 font-mono text-[10px] uppercase tracking-[0.14em] ${isActive ? "border-white/25 text-white/75" : "border-white/10 text-white/40"}`}>{prototype.status}</span>
                </button>
              );
            })}
          </div>

          <div id="prototype-preview" role="tabpanel" aria-labelledby={`prototype-tab-${activePrototype.id}`} className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-2xl">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#f24e1e]">{activePrototype.label} · Figma</p>
                <p className="mt-1 text-sm text-white/60">{activePrototype.question}</p>
              </div>
              <a href={activePrototype.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs font-medium text-white transition hover:border-[#f24e1e] hover:text-[#f24e1e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f24e1e]">
                Abrir no Figma <ArrowUpRight size={14} />
              </a>
            </div>
            <iframe
              key={activePrototype.id}
              title={`Protótipo Figma: ${activePrototype.name}`}
              src={embedUrl}
              loading="lazy"
              className="h-[34rem] w-full bg-[#1e1e1e] md:h-[42rem]"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
