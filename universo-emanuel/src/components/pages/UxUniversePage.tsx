"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Eye, MousePointer2, Route, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { UxGrid } from "@/components/personas/UxGrid";
import { PrototypeGallery } from "@/components/pages/PrototypeGallery";
import { usePersonaStore } from "@/core/store/personaStore";

const steps = [
  { number: "01", title: "Entender", text: "Antes de desenhar, existe uma pergunta: o que está dificultando a vida de quem vai usar?" },
  { number: "02", title: "Organizar", text: "Uma jornada clara transforma dúvida em próximo passo e intenção em ação." },
  { number: "03", title: "Dar forma", text: "Interface não é acabamento. É a parte do produto que recebe uma pessoa." },
  { number: "04", title: "Testar", text: "Uma boa decisão precisa encontrar o contexto real antes de se tornar padrão." },
];

export function UxUniversePage() {
  const [activeStep, setActiveStep] = useState(0);
  const setPersona = usePersonaStore((state) => state.setPersona);

  useEffect(() => {
    setPersona("ux-ui");
    return () => setPersona("fullstack");
  }, [setPersona]);

  return <main className="min-h-screen bg-[#1E1E1E] text-[#F5F5F5]">
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-white/10 bg-[#242424]/90 px-5 backdrop-blur lg:px-8"><Link href="/" className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"><ArrowLeft size={16} /> <span className="hidden sm:inline">Voltar ao portal</span><span className="sm:hidden">ES/01</span></Link><div className="flex items-center gap-3"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#F24E1E]">UX/UI · Universo 01</span><span className="h-2 w-2 rounded-full bg-[#F24E1E]" /></div></header>

    <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 lg:px-10 lg:py-28" style={{ backgroundImage: "radial-gradient(circle at 80% 5%, rgba(242,78,30,.24), transparent 30%), linear-gradient(#ffffff08 1px, transparent 1px), linear-gradient(90deg, #ffffff08 1px, transparent 1px)", backgroundSize: "auto, 40px 40px, 40px 40px" }}><div className="relative mx-auto max-w-7xl"><p className="font-mono text-xs uppercase tracking-[0.22em] text-[#F24E1E]">Experiência e interface</p><h1 className="mt-6 max-w-5xl font-[family-name:var(--font-display)] text-5xl font-medium leading-[.98] tracking-[-0.06em] sm:text-7xl">Como isso pode fazer sentido para quem vai usar?</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">Este não é um portfólio de telas prontas. É um espaço para mostrar como uma pergunta passa por contexto, jornada e decisão antes de virar interface.</p><a href="#processo" className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#F24E1E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ff6538]">Ver como penso <ArrowUpRight size={17} /></a></div></section>

    <section id="processo" className="border-b border-white/10 bg-[#242424] px-6 py-16 lg:px-10"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.72fr_1.28fr]"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-[#F24E1E]">Da ideia ao uso</p><h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.05em]">A interface é uma consequência de boas perguntas.</h2><p className="mt-6 leading-7 text-white/60">Cada camada funciona como uma lente de decisão. Clique para entender o que ela procura resolver.</p></div><div className="grid gap-3 sm:grid-cols-2">{steps.map((step, index) => <button type="button" key={step.number} onClick={() => setActiveStep(index)} className={`rounded-xl border p-5 text-left transition ${activeStep === index ? "border-[#F24E1E] bg-[#F24E1E] text-white" : "border-white/10 bg-[#1E1E1E] text-white/70 hover:border-white/35"}`}><p className={`font-mono text-[11px] ${activeStep === index ? "text-white/70" : "text-[#F24E1E]"}`}>{step.number}</p><h3 className="mt-8 font-[family-name:var(--font-display)] text-2xl font-semibold">{step.title}</h3><p className={`mt-2 text-sm leading-6 ${activeStep === index ? "text-white/85" : "text-white/50"}`}>{step.text}</p></button>)}</div></div></section>

    <section className="bg-[#1E1E1E] px-6 py-20 lg:px-10 lg:py-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.76fr] lg:items-start"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-[#F24E1E]">Frame de decisão</p><h2 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-5xl">Chegar ao ponto não pode ser uma dúvida.</h2><p className="mt-6 max-w-2xl leading-7 text-white/60">No Rotas Inteligentes, a experiência começa antes da van aparecer no mapa. A pessoa precisa saber onde está, o que vem a seguir e se pode confiar naquele caminho.</p><div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#111827]"><div className="flex items-center justify-between border-b border-white/10 px-5 py-4"><span className="font-mono text-[11px] text-white/45">PROTO / ROTA-EMBARQUE</span><Eye size={16} className="text-[#F24E1E]" /></div><div className="grid gap-5 p-6 sm:grid-cols-[.65fr_1.35fr]"><div className="rounded-xl border border-white/10 bg-[#0b1220] p-5"><p className="text-xs text-white/50">Usuário</p><p className="mt-2 text-lg font-semibold">“A van já passou?”</p><p className="mt-6 text-sm leading-6 text-white/60">A pergunta real revela a dor: falta de contexto e previsibilidade.</p></div><div className="rounded-xl bg-[#1267e8] p-5"><p className="text-xs text-white/70">Resposta da interface</p><p className="mt-2 text-3xl font-semibold">Chega em 04 min</p><p className="mt-5 text-sm text-white/75">Van a caminho · ponto confirmado · destino: Fatec Jaú</p><div className="mt-7 h-1.5 overflow-hidden rounded-full bg-white/25"><div className="h-full w-2/3 rounded-full bg-white" /></div></div></div></div></div><aside className="rounded-2xl border border-white/10 bg-[#242424] p-7"><Route size={22} className="text-[#F24E1E]" /><p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">Princípio aplicado</p><p className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium leading-tight">Informação certa, no tempo certo.</p><p className="mt-6 text-sm leading-7 text-white/60">Design não é apenas como se parece, é como funciona. Uma interface deve diminuir a distância entre a dúvida de alguém e a próxima ação.</p></aside></div></section>

    <section className="border-y border-white/10 bg-[#242424] px-6 py-20 lg:px-10"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.68fr_1.32fr]"><div><Sparkles size={22} className="text-[#F24E1E]" /><p className="mt-7 font-mono text-xs uppercase tracking-[0.2em] text-[#F24E1E]">Rascunho livre</p><h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.05em]">Uma ideia pode começar torta. O importante é colocá-la em conversa.</h2><p className="mt-6 leading-7 text-white/60">O canvas continua aqui porque desenhar, apagar e reorganizar ainda é uma forma honesta de descobrir caminhos.</p><div className="mt-8 flex items-center gap-3 text-sm text-white/45"><MousePointer2 size={16} /> Clique ou toque no frame para começar.</div></div><UxGrid /></div></section>

    <PrototypeGallery />
  </main>;
}
