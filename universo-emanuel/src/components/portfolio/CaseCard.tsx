import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type PortfolioCase, maturityLabel } from "@/data/cases";

export function CaseCard({ item, featured = false }: { item: PortfolioCase; featured?: boolean }) {
  return <article className={`rounded-[1.75rem] border border-[#07111f]/10 ${featured ? "bg-[#07111f] text-white" : "bg-white"} p-6 shadow-[0_20px_50px_-40px_rgba(7,17,31,.6)] lg:p-8`}>
    <div className="flex flex-wrap items-center justify-between gap-3"><p className={`font-mono text-[10px] uppercase tracking-[0.18em] ${featured ? "text-[#79aef4]" : "text-[#2166c9]"}`}>{item.productName}</p><span className={`rounded-full border px-3 py-1 text-[10px] ${featured ? "border-white/20 text-white/65" : "border-[#07111f]/10 text-slate-500"}`}>{maturityLabel[item.maturity]}</span></div>
    <h2 className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-[-0.045em] lg:text-4xl">{item.title}</h2>
    <div className={`mt-7 grid gap-4 border-y py-5 text-sm leading-6 sm:grid-cols-3 ${featured ? "border-white/15 text-white/70" : "border-[#07111f]/10 text-slate-600"}`}><p><strong className={featured ? "text-white" : "text-[#07111f]"}>Contexto</strong><br />{item.summary.context}</p><p><strong className={featured ? "text-white" : "text-[#07111f]"}>Conflito</strong><br />{item.summary.conflict}</p><p><strong className={featured ? "text-white" : "text-[#07111f]"}>Evidência</strong><br />{item.summary.evidence}</p></div>
    <Link href={`/casos/${item.slug}`} className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2166c9] ${featured ? "text-[#b9d6ff]" : "text-[#2166c9]"}`}>Ler o caso <ArrowUpRight size={16} /></Link>
  </article>;
}
