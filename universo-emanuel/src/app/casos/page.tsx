import type { Metadata } from "next";
import { CaseCard } from "@/components/portfolio/CaseCard";
import { PortfolioLayout } from "@/components/portfolio/PortfolioLayout";
import { portfolioCases } from "@/data/cases";

export const metadata: Metadata = { title: "Casos", description: "Casos de produtos e operações: contexto, decisão, trade-off e evidência.", alternates: { canonical: "/casos" } };
export default function CasesPage() { return <PortfolioLayout><section className="px-6 py-16 lg:px-10 lg:py-24"><div className="mx-auto max-w-7xl"><p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2166c9]">Casos reais e propostas em evolução</p><h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl">Evidência antes de promessa.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">Cada case mostra o contexto, o conflito, a decisão e o que ainda permanece em aberto. Dados que não foram medidos não viram resultado de marketing.</p><div className="mt-14 grid gap-5">{portfolioCases.map((item, index) => <CaseCard key={item.slug} item={item} featured={index === 0} />)}</div></div></section></PortfolioLayout>; }
