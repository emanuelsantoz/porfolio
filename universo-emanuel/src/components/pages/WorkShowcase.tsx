"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, ExternalLink, Play, X } from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";

export type ShowcaseItem = {
  id: string;
  code: string;
  category: string;
  status: string;
  title: string;
  headline: string;
  question: string;
  decision: string;
  result: string;
  role: string;
  signals: string[];
  connections: string[];
  flow: string[];
  disciplines: string[];
  video?: string;
  link?: { href: string; label: string };
  visualTone: "blue" | "orange" | "violet" | "green";
};

const visualTones = {
  blue: "from-[#133d75] via-[#0b1d34] to-[#07111f]",
  orange: "from-[#662819] via-[#261616] to-[#07111f]",
  violet: "from-[#33236f] via-[#141738] to-[#07111f]",
  green: "from-[#16443b] via-[#0d282b] to-[#07111f]",
};

export function WorkShowcase({ items }: { items: ShowcaseItem[] }) {
  const shouldReduceMotion = useReducedMotion();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = useMemo(() => items.find((item) => item.id === selectedId) ?? null, [items, selectedId]);

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedId(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item, index) => (
          <motion.article
            key={item.id}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: index * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="group overflow-hidden rounded-[1.75rem] border border-[#07111f]/10 bg-white shadow-[0_22px_55px_-44px_rgba(7,17,31,.6)]"
          >
            <WorkVisual item={item} />
            <div className="p-6 lg:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.17em] text-[#2166c9]">{item.category}</p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.045em] text-[#07111f]">{item.title}</h3>
                </div>
                <span className="shrink-0 rounded-full border border-[#07111f]/10 px-3 py-1 text-[10px] text-slate-500">{item.status}</span>
              </div>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-700">{item.headline}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.signals.slice(0, 4).map((signal) => <span key={signal} className="rounded-full bg-[#eaf1fb] px-2.5 py-1 text-[11px] font-medium text-[#35587f]">{signal}</span>)}
              </div>
              <button type="button" onClick={() => setSelectedId(item.id)} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#2166c9] transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2166c9] focus-visible:ring-offset-4">
                Ver construção <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selected ? <CaseModal item={selected} onClose={() => setSelectedId(null)} reduceMotion={Boolean(shouldReduceMotion)} /> : null}
      </AnimatePresence>
    </>
  );
}

function WorkVisual({ item }: { item: ShowcaseItem }) {
  if (item.video) {
    return <div className="relative aspect-[16/9] overflow-hidden bg-[#07111f]"><video src={item.video} muted loop autoPlay playsInline preload="metadata" className="h-full w-full object-cover" /><div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07111f]/75 to-transparent p-5"><span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.17em] text-white/80"><Play size={12} fill="currentColor" /> Processo em movimento</span></div></div>;
  }

  return <div className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${visualTones[item.visualTone]}`}>
    <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(rgb(255 255 255 / .13) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / .13) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
    <div className="absolute -right-12 top-9 h-48 w-48 rounded-full border border-white/20" />
    <div className="absolute right-12 top-16 h-24 w-24 rounded-full border border-white/15" />
    <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-[#07111f]/55 px-4 py-3 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#79aef4]">{item.code}</span><span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">vídeo em preparação</span></div>
      <div className="mt-3 h-1.5 w-3/4 rounded-full bg-white/15"><div className="h-full w-2/5 rounded-full bg-[#2f7de1]" /></div>
    </div>
  </div>;
}

function CaseModal({ item, onClose, reduceMotion }: { item: ShowcaseItem; onClose: () => void; reduceMotion: boolean }) {
  return <motion.div initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reduceMotion ? undefined : { opacity: 0 }} className="fixed inset-0 z-50 flex items-end justify-center bg-[#020914]/75 p-3 backdrop-blur-sm sm:items-center sm:p-6" onMouseDown={onClose}>
    <motion.article role="dialog" aria-modal="true" aria-labelledby={`case-title-${item.id}`} initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.98 }} transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }} onMouseDown={(event) => event.stopPropagation()} className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[1.75rem] bg-[#f8f7f3] text-[#07111f] shadow-2xl">
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#07111f]/10 bg-[#f8f7f3]/95 px-6 py-5 backdrop-blur lg:px-8"><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2166c9]">{item.code} · {item.category}</p><p className="mt-1 text-xs text-slate-500">{item.status}</p></div><button type="button" autoFocus onClick={onClose} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#07111f]/15 transition hover:border-[#07111f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2166c9]" aria-label="Fechar detalhes da construção"><X size={18} /></button></div>
      <div className="grid gap-10 p-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:p-8">
        <div><h2 id={`case-title-${item.id}`} className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl">{item.title}</h2><p className="mt-5 text-lg leading-8 text-slate-700">{item.headline}</p><div className="mt-8 space-y-6"><Detail title="A pergunta"><p>{item.question}</p></Detail><Detail title="A decisão"><p>{item.decision}</p></Detail><Detail title="O resultado"><p>{item.result}</p></Detail><Detail title="Meu papel"><p>{item.role}</p></Detail></div></div>
        <aside className="space-y-7"><div className="rounded-2xl bg-[#eaf1fb] p-5"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2166c9]">Sinais do caso</p><div className="mt-4 flex flex-wrap gap-2">{item.signals.map((signal) => <span key={signal} className="rounded-full border border-[#2166c9]/15 bg-white px-2.5 py-1 text-xs text-[#35587f]">{signal}</span>)}</div></div><Detail title="Fluxo construído"><ol className="space-y-3">{item.flow.map((step, index) => <li key={step} className="flex gap-3"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2166c9] text-[10px] font-bold text-white">{index + 1}</span><span>{step}</span></li>)}</ol></Detail><Detail title="Conexões mobilizadas"><div className="flex flex-wrap gap-2">{item.connections.map((connection) => <span key={connection} className="rounded-full border border-[#07111f]/10 px-2.5 py-1 text-xs text-slate-600">{connection}</span>)}</div></Detail><Detail title="Disciplinas no processo"><ul className="space-y-2">{item.disciplines.map((discipline) => <li key={discipline} className="flex items-center gap-2"><Check size={14} className="text-[#2166c9]" />{discipline}</li>)}</ul></Detail>{item.link ? <a href={item.link.href} target="_blank" rel="noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#07111f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2166c9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2166c9] focus-visible:ring-offset-4">{item.link.label} <ExternalLink size={15} /></a> : null}</aside>
      </div>
    </motion.article>
  </motion.div>;
}

function Detail({ title, children }: { title: string; children: ReactNode }) {
  return <section><h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2166c9]">{title}</h3><div className="mt-3 text-sm leading-6 text-slate-600">{children}</div></section>;
}
