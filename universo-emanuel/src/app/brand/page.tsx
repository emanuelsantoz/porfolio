import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { EmanuelIcon } from "@/components/brand/EmanuelIcon";
import { EmanuelLogo } from "@/components/brand/EmanuelLogo";
import { NexusField } from "@/components/brand/NexusField";

const colors = [
  ["Azul Conexão", "#2166C9"],
  ["Azul Sinal", "#79AEF4"],
  ["Azul Campo", "#2F7DE1"],
  ["Azul Noturno", "#07111F"],
  ["Papel", "#F8F7F3"],
  ["Grafite Azul", "#526174"],
  ["Laranja Decisão", "#F24E1E"],
  ["Grafite UX/UI", "#1E1E1E"],
];

export default function BrandLibraryPage() {
  return <main className="min-h-screen bg-[#f8f7f3] px-6 py-8 text-[#07111f] lg:px-10 lg:py-10">
    <div className="mx-auto max-w-7xl">
      <header className="flex flex-wrap items-center justify-between gap-6 border-b border-[#07111f]/15 pb-7">
        <EmanuelLogo tone="dark" variant="full" />
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#526174] transition hover:text-[#2166c9]"><ArrowLeft size={16} /> Voltar ao ES/0</Link>
      </header>

      <section className="py-14 lg:py-20"><p className="font-mono text-xs uppercase tracking-[.22em] text-[#2166c9]">Biblioteca de ativos de marca · v0.1</p><h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-medium tracking-[-.06em] sm:text-7xl">Emanuel Santos / ES/0</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#526174]">Uma marca construída para assinar produtos diferentes sem apagar a essência de cada um.</p></section>

      <section className="grid gap-5 lg:grid-cols-2"><AssetCard title="Logo principal · fundo escuro" className="bg-[#07111f]"><EmanuelLogo tone="light" variant="full" /></AssetCard><AssetCard title="Logo principal · fundo claro"><EmanuelLogo tone="dark" variant="full" /></AssetCard></section>

      <section className="mt-5 grid gap-5 lg:grid-cols-[1.25fr_.75fr]"><AssetCard title="Monograma mínimo"><div className="flex items-end justify-between gap-4"><EmanuelIcon className="h-4 w-4 text-[#07111f]" /><EmanuelIcon className="h-8 w-8 text-[#07111f]" /><EmanuelIcon className="h-14 w-14 text-[#2166c9]" /><EmanuelIcon className="h-24 w-24 text-[#07111f]" /></div><div className="mt-5 flex justify-between font-mono text-[10px] text-[#526174]"><span>16 px</span><span>32 px</span><span>64 px</span><span>128 px</span></div></AssetCard><AssetCard title="Lockup compacto"><EmanuelLogo tone="dark" variant="compact" /></AssetCard></section>

      <section className="mt-5 grid gap-5 md:grid-cols-3 lg:grid-cols-5"><AssetCard title="Favicon"><div className="grid h-20 w-20 place-items-center rounded-[1.35rem] bg-[#f8f7f3]"><EmanuelIcon title="Ícone ES/0" className="h-12 w-12 text-[#2166c9]" /></div></AssetCard><AssetCard title="Avatar"><div className="grid h-20 w-20 place-items-center rounded-full bg-[#07111f]"><EmanuelIcon title="Avatar ES/0" className="h-12 w-12 text-[#79aef4]" /></div></AssetCard><AssetCard title="Ícone escuro"><div className="grid h-20 w-20 place-items-center rounded-[1.25rem] bg-[#07111f]"><EmanuelIcon className="h-12 w-12 text-white" /></div></AssetCard><AssetCard title="App icon · claro"><img src="/brand/es0-app-icon-light.svg" alt="Ícone de aplicativo ES/0 claro" className="h-20 w-20" /></AssetCard><AssetCard title="App icon · escuro"><img src="/brand/es0-app-icon-night.svg" alt="Ícone de aplicativo ES/0 escuro" className="h-20 w-20" /></AssetCard></section>

      <section className="mt-16 border-t border-[#07111f]/15 pt-10"><p className="font-mono text-xs uppercase tracking-[.22em] text-[#2166c9]">Paleta Emanuel Santos / ES/0</p><div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">{colors.map(([name, hex]) => <div key={hex}><div className="aspect-square rounded-2xl border border-[#07111f]/10" style={{ background: hex }} /><p className="mt-3 text-xs font-medium">{name}</p><p className="font-mono text-[10px] text-[#526174]">{hex}</p></div>)}</div></section>

      <section className="mt-16 grid gap-5 lg:grid-cols-2"><AssetCard title="Tipografia"><p className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-.05em]">Space Grotesk</p><p className="mt-1 text-sm text-[#526174]">Títulos e manifesto</p><p className="mt-8 text-3xl">Inter</p><p className="mt-1 text-sm text-[#526174]">Texto e navegação</p><p className="mt-8 font-mono text-2xl">JetBrains Mono · ES/0</p><p className="mt-1 text-sm text-[#526174]">Código, estados e rótulos técnicos</p></AssetCard><AssetCard title="Sistema visual"><div className="relative min-h-64 overflow-hidden rounded-2xl bg-[#eaf1fb]"><div className="editorial-grid absolute inset-0" /><NexusField labels className="relative mx-auto w-full max-w-sm p-6" /></div><p className="mt-5 text-sm leading-6 text-[#526174]">Grid editorial, campo de conexões e luz controlada. Movimento existe como feedback, não como enfeite.</p></AssetCard></section>
    </div>
  </main>;
}

function AssetCard({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return <article className={`min-h-44 rounded-[1.75rem] border border-[#07111f]/10 bg-white p-7 ${className}`}><p className="font-mono text-[10px] uppercase tracking-[.16em] text-[#526174]">{title}</p><div className="mt-10">{children}</div></article>;
}
