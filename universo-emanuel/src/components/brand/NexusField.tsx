"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type NexusFieldProps = {
  className?: string;
  tone?: "light" | "dark" | "ux";
  labels?: boolean;
};

const palette = {
  light: { line: "#2166C9", node: "#2166C9", text: "#526174" },
  dark: { line: "#79AEF4", node: "#79AEF4", text: "#B9D6FF" },
  ux: { line: "#F24E1E", node: "#F24E1E", text: "#FFC2B0" },
};

const points = [
  { x: 46, y: 82, label: "Pessoas", detail: "Necessidades, comportamento e confiança de quem vai usar." },
  { x: 176, y: 42, label: "Contexto", detail: "A rotina real, as restrições e o cenário onde a solução precisa existir." },
  { x: 298, y: 108, label: "Tecnologia", detail: "A base que torna a solução possível, sustentável e segura." },
  { x: 256, y: 208, label: "Produto", detail: "A solução concreta onde decisões, experiência e tecnologia se encontram." },
  { x: 108, y: 228, label: "Continuidade", detail: "O aprendizado e a evolução que continuam depois da primeira entrega." },
];

const impulses = [
  { path: "M46 82 C108 91 186 158 256 208", delay: "0s" },
  { path: "M176 42 C192 102 215 164 256 208", delay: "0.85s" },
  { path: "M298 108 C289 147 272 181 256 208", delay: "1.7s" },
  { path: "M108 228 C149 224 207 218 256 208", delay: "2.55s" },
];

export function NexusField({ className = "", tone = "light", labels = false }: NexusFieldProps) {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const colors = palette[tone];
  const activePoint = points.find((point) => point.label === activeLabel);

  const field = <svg viewBox="0 0 344 270" fill="none" aria-label={labels ? "Mapa de conexões que formam um produto" : undefined} aria-hidden={labels ? undefined : true} className={labels ? "block w-full" : className}>
    <defs>
      <filter id={`nexus-glow-${tone}`} x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="3" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
    </defs>
    <motion.path d="M46 82 C88 67 124 48 176 42 S255 84 298 108 S288 178 256 208 S160 241 108 228 S52 135 46 82" stroke={colors.line} strokeWidth="1.5" strokeDasharray="5 8" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: activeLabel ? 0.1 : [0, 0.46, 0.31, 0.46] }} transition={{ pathLength: { duration: shouldReduceMotion ? 0 : 1.4, ease: "easeOut" }, opacity: { duration: activeLabel ? 0.18 : shouldReduceMotion ? 0 : 5.8, repeat: activeLabel || shouldReduceMotion ? 0 : Infinity, ease: "easeInOut" } }} />
    <motion.path d="M46 82 C121 112 178 164 256 208 M176 42 C190 113 207 164 256 208 M108 228 C139 175 196 133 298 108" stroke={colors.line} strokeWidth="1" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: activeLabel ? 0.07 : [0, 0.32, 0.18, 0.32] }} transition={{ pathLength: { delay: shouldReduceMotion ? 0 : 0.2, duration: shouldReduceMotion ? 0 : 1.25, ease: "easeOut" }, opacity: { duration: activeLabel ? 0.18 : shouldReduceMotion ? 0 : 6.4, repeat: activeLabel || shouldReduceMotion ? 0 : Infinity, ease: "easeInOut" } }} />
    {!shouldReduceMotion && !labels && impulses.map((impulse) => <circle key={impulse.path} r="2.8" fill={colors.node} filter={`url(#nexus-glow-${tone})`}>
      <animateMotion dur="4.2s" begin={impulse.delay} repeatCount="indefinite" path={impulse.path} />
      <animate attributeName="opacity" values="0;1;1;0" dur="4.2s" begin={impulse.delay} repeatCount="indefinite" />
    </circle>)}
    {points.map((point, index) => {
      const isActive = point.label === activeLabel;
      const baseRadius = point.label === "Produto" ? 7 : 4.5;
      return <g key={point.label} role={labels ? "button" : undefined} tabIndex={labels ? 0 : undefined} aria-label={labels ? `${point.label}: ${point.detail}` : undefined} className={labels ? "cursor-pointer outline-none" : undefined} onMouseEnter={() => labels && setActiveLabel(point.label)} onMouseLeave={() => labels && setActiveLabel(null)} onFocus={() => labels && setActiveLabel(point.label)} onBlur={() => labels && setActiveLabel(null)} onClick={() => labels && setActiveLabel((current) => current === point.label ? null : point.label)}>
        {labels && <circle cx={point.x} cy={point.y} r="18" fill="transparent" />}
        <motion.circle cx={point.x} cy={point.y} fill={colors.node} fillOpacity={point.label === "Produto" ? 1 : 0.82} filter={`url(#nexus-glow-${tone})`} initial={{ r: 0, opacity: 0 }} animate={{ r: isActive ? baseRadius * 1.52 : [baseRadius, baseRadius * (point.label === "Produto" ? 1.24 : 1.12), baseRadius], opacity: activeLabel && !isActive ? 0.12 : 1 }} transition={{ delay: shouldReduceMotion ? 0 : 0.35 + index * 0.11, duration: shouldReduceMotion ? 0 : isActive ? 0.22 : 3.6 + index * 0.2, repeat: shouldReduceMotion || isActive ? 0 : Infinity, ease: "easeInOut" }} />
        {labels && <motion.text x={point.x + 10} y={point.y - 10} fill={isActive ? colors.line : colors.text} fontSize="10" fontFamily="var(--font-mono), monospace" letterSpacing="1" animate={{ opacity: activeLabel && !isActive ? 0.18 : 1 }} transition={{ duration: 0.18 }}>{point.label.toUpperCase()}</motion.text>}
      </g>;
    })}
  </svg>;

  if (!labels) return field;

  return <div className={className}>
    {field}
    <div className="mt-2 min-h-12 text-center">
      <AnimatePresence mode="wait" initial={false}>
        {activePoint ? <motion.div key={activePoint.label} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: shouldReduceMotion ? 0 : 0.18 }} className="rounded-xl border border-[#2166c9]/15 bg-[#2166c9]/[.06] px-4 py-2.5 text-left"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2166c9]">{activePoint.label}</p><p className="mt-1 text-xs leading-5 text-slate-600">{activePoint.detail}</p></motion.div> : <motion.p key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-2 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">Passe pelas conexões para explorar</motion.p>}
      </AnimatePresence>
    </div>
  </div>;
}
