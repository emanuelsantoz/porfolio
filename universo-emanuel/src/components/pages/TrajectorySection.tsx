"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const tabs = ["História", "Acadêmico", "Profissional", "Pessoal"] as const;
type Tab = (typeof tabs)[number];

const timeline = [
  ["2023–2024", "Formação Barracred Conecta", "O início de uma vivência prática em tecnologia, segurança e desenvolvimento."],
  ["2024–2025", "Jovem Aprendiz em TI", "Suporte, documentação, gestão de acessos e a construção de uma base profissional."],
  ["2025–hoje", "Analista de Desenvolvimento Jr.", "Atuação em sistemas internos, melhoria contínua e soluções que atendem pessoas reais."],
];

const connectionsByTab: Record<Tab, string[]> = {
  "História": ["Curiosidade", "Contexto", "Construção", "Continuidade"],
  "Acadêmico": ["Conhecimento", "Fatec", "Comunidade", "Produto"],
  "Profissional": ["Pessoas", "Responsabilidade", "Processos", "Impacto"],
  "Pessoal": ["Exploração", "Hipóteses", "Protótipos", "Repertório"],
};

export function TrajectorySection() {
  const [active, setActive] = useState<Tab>("História");

  return (
    <section id="historia" className="bg-[#f8f7f3] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2166c9]">Percurso</p>
        <div className="mt-5 flex flex-col justify-between gap-8 border-b border-[#07111f]/10 pb-8 lg:flex-row lg:items-end">
          <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-6xl">A história muda de foco. O que me move continua o mesmo.</h2>
          <p className="max-w-sm text-base leading-7 text-slate-600">Cada recorte mostra uma parte diferente da construção: contexto, prática, formação e aquilo que continua sendo explorado fora do expediente.</p>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Recortes do percurso">
          {tabs.map((tab) => <button key={tab} type="button" onClick={() => setActive(tab)} role="tab" aria-selected={active === tab} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${active === tab ? "border-[#07111f] bg-[#07111f] text-white" : "border-[#07111f]/15 bg-white text-slate-600 hover:border-[#2166c9] hover:text-[#2166c9]"}`}>{tab}</button>)}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }} className="mt-10">
            {active === "História" && <History />}
            {active === "Acadêmico" && <Academic />}
            {active === "Profissional" && <Professional />}
            {active === "Pessoal" && <Personal />}
          </motion.div>
        </AnimatePresence>
        <div className="mt-10 rounded-2xl border border-[#07111f]/10 bg-white/70 p-5"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2166c9]">Conexões deste recorte</p><div className="mt-4 flex flex-wrap items-center gap-2">{connectionsByTab[active].map((connection, index) => <span key={connection} className="flex items-center gap-2"><span className="rounded-full bg-[#eaf1fb] px-3 py-1.5 text-xs text-[#35587f]">{connection}</span>{index < connectionsByTab[active].length - 1 && <span aria-hidden="true" className="h-px w-5 bg-[#2166c9]/35" />}</span>)}</div></div>
      </div>
    </section>
  );
}

function History() {
  return <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start"><div className="relative overflow-hidden rounded-[2rem] bg-[#07111f]"><Image src="/images/emanuel-at-work.jpeg" alt="Emanuel Santos trabalhando em um produto digital" width={1200} height={1600} sizes="(max-width: 1024px) 100vw, 36vw" className="aspect-[4/5] w-full object-cover" /></div><div><p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2166c9]">Por trás do produto</p><h3 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-5xl">Desenvolvimento é a ferramenta. Resolver é o trabalho.</h3><div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-slate-600 lg:text-lg"><p>Minha jornada em tecnologia começou pela curiosidade de entender como as coisas funcionam. Com o tempo, essa curiosidade se tornou uma forma de observar problemas, organizar caminhos e dar forma a soluções digitais.</p><p>Hoje, entre produtos autorais e desafios do ambiente profissional, conecto contexto, experiência e construção. O objetivo não é só entregar uma interface ou sistema: é criar algo que tenha motivo para existir.</p></div><div className="mt-12 space-y-7 border-l border-[#2166c9]/25 pl-6">{timeline.map(([period, title, description]) => <div key={title}><p className="font-mono text-xs text-[#2166c9]">{period}</p><h4 className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.03em]">{title}</h4><p className="mt-1 max-w-xl text-sm leading-6 text-slate-500">{description}</p></div>)}</div></div></div>;
}

function Academic() {
  return <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]"><article className="rounded-[1.75rem] bg-[#07111f] p-8 text-white lg:p-10"><p className="font-mono text-xs uppercase tracking-[0.2em] text-[#79aef4]">Aprender construindo</p><h3 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.04] tracking-[-0.05em]">Uma ideia não precisa acabar quando a apresentação termina.</h3><p className="mt-7 max-w-xl leading-7 text-white/70">O Criative Lab nasce dessa vontade: dar continuidade, contexto e visibilidade à produção acadêmica para estudantes, docentes e instituições.</p></article><article className="rounded-[1.75rem] border border-[#07111f]/10 bg-white p-8 lg:p-10"><p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2166c9]">Em prática</p><ul className="mt-7 space-y-5 text-slate-600"><li><strong className="block font-[family-name:var(--font-display)] text-xl text-[#07111f]">Criative Lab</strong>Estratégia, identidade, experiência e desenvolvimento de um espaço para projetos continuarem visíveis.</li><li><strong className="block font-[family-name:var(--font-display)] text-xl text-[#07111f]">Apresentar também é construir</strong>Explicar uma solução, ouvir devolutivas e transformar uma proposta em conversa faz parte do caminho.</li></ul></article></div>;
}

function Professional() {
  return <div className="grid gap-5 md:grid-cols-2"><ExperienceCard image="/images/experience-barracred.jpg" label="Barracred" title="Onde a prática ganhou responsabilidade." text="É no contato com desafios reais que tecnologia deixa de ser só estudo e passa a gerar confiança, colaboração e impacto." /><ExperienceCard image="/images/experience-presentation.jpeg" label="Compartilhar" title="Boas ideias também precisam ser explicadas." text="Construir é só parte do caminho. Ouvir, apresentar e transformar uma solução em conversa também faz parte do produto." dark={false} /></div>;
}

function Personal() {
  return <div className="grid gap-5 md:grid-cols-2"><article className="rounded-[1.75rem] border border-[#07111f]/10 bg-white p-8 lg:p-10"><p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2166c9]">Explorar</p><h3 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.04em]">Produtos autorais são um jeito de aprender olhando para pessoas reais.</h3><p className="mt-5 leading-7 text-slate-600">Rotas Inteligentes e Fince carregam essa exploração: partir de uma dúvida cotidiana, organizar possibilidades e testar como uma experiência pode ser mais clara.</p></article><article className="rounded-[1.75rem] bg-[#eaf1fb] p-8 lg:p-10"><p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2166c9]">Continuar</p><h3 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.04em]">Conhecimento não é coleção. É prática em movimento.</h3><p className="mt-5 leading-7 text-slate-600">Este espaço reúne experiências, estudos e perguntas que seguem evoluindo fora de uma entrega específica.</p></article></div>;
}

function ExperienceCard({ image, label, title, text, dark = true }: { image: string; label: string; title: string; text: string; dark?: boolean }) {
  const background = dark ? "bg-[#07111f]" : "bg-[#10243f]";
  return <article className={`group overflow-hidden rounded-[1.5rem] ${background} text-white`}><div className="relative aspect-[16/10] overflow-hidden"><Image src={image} alt={label} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" /><div className={`absolute inset-0 bg-gradient-to-t ${dark ? "from-[#07111f]" : "from-[#10243f]"}/90 via-transparent to-transparent`} /><p className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#07111f]/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#b9d6ff] backdrop-blur">{label}</p></div><div className="px-6 py-6"><h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">{title}</h3><p className="mt-2 text-sm leading-6 text-white/65">{text}</p></div></article>;
}
