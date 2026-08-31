import { NexusField } from "@/components/brand/NexusField";

export function NexusSection() {
  return <section id="nexo" className="relative overflow-hidden bg-[#f8f7f3] px-6 py-24 lg:px-10 lg:py-32">
    <div className="editorial-grid absolute inset-0 opacity-60" />
    <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.92fr] lg:items-center">
      <div><p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2166c9]">O nexo</p><h2 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl">Uma boa solução raramente pertence a uma área só.</h2><div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-slate-600 lg:text-lg"><p>Um problema de mobilidade também envolve comunicação, segurança, comportamento, dados e experiência. Um produto educacional também envolve comunidade, reconhecimento, processo e continuidade.</p><p>Desenvolvimento é minha base. Conectar pessoas, contexto e tecnologia é como eu penso.</p></div><p className="mt-8 border-l-2 border-[#2166c9] pl-4 text-sm leading-6 text-slate-500">Essa forma de aproximar áreas para compreender o problema inteiro é o que chamamos de pensamento nexialista.</p></div>
      <div className="relative mx-auto w-full max-w-md rounded-[2rem] border border-[#07111f]/10 bg-white/80 p-8 shadow-[0_28px_80px_-42px_rgba(7,17,31,.42)] backdrop-blur"><NexusField labels className="mx-auto w-full" /></div>
    </div>
  </section>;
}
