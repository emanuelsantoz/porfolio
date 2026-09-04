import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const signals = [
  {
    number: "01",
    title: "Desenvolvimento é a base",
    text: "É onde aprendi a transformar intenção em algo funcional, acessível e sustentável.",
  },
  {
    number: "02",
    title: "Contexto orienta a decisão",
    text: "Antes da interface, importa entender a rotina, as pessoas e a tensão que precisa mudar.",
  },
  {
    number: "03",
    title: "Produto é continuidade",
    text: "Uma entrega só faz sentido quando consegue seguir gerando uso, aprendizado e evolução.",
  },
];

export function OriginBridge() {
  return (
    <section id="origem" className="relative overflow-hidden bg-[#f8f7f3] px-6 py-24 lg:px-10 lg:py-32">
      <div aria-hidden="true" className="editorial-grid absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20">
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden="true" className="absolute -left-9 top-14 h-36 w-36 rounded-full bg-[#2166c9]/12 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[#07111f]/10 bg-[#07111f] shadow-[0_25px_70px_rgba(7,17,31,0.13)]">
            <Image
              src="/images/emanuel-at-work.jpeg"
              alt="Emanuel Santos trabalhando em uma construção digital"
              width={1200}
              height={1600}
              sizes="(max-width: 1024px) 100vw, 36vw"
              className="aspect-[4/5] w-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07111f]/90 via-[#07111f]/18 to-transparent px-6 pb-6 pt-20">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#b9d6ff]">ES/0 · ponto de origem</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-white/78">A curiosidade por entender sistemas virou uma maneira de construir com mais intenção.</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-[#07111f]/10 bg-white px-4 py-3 shadow-lg sm:block lg:-right-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2166c9]">Em uma frase</p>
            <p className="mt-1 text-sm font-medium text-[#07111f]">Conectar para tornar real.</p>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2166c9]">Antes das construções</p>
          <h2 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-6xl">
            Eu me encontrei nas conexões entre pessoas, contexto e tecnologia.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 lg:text-lg">
            Não sou uma vitrine de especialidades isoladas. Desenvolvimento de Software é minha base; a partir dela, organizo problemas, experiências e decisões até que uma boa ideia possa existir no mundo real.
          </p>

          <ol className="mt-10 grid gap-3 sm:grid-cols-3" aria-label="Princípios que orientam a forma de Emanuel construir">
            {signals.map((signal) => (
              <li key={signal.number} className="rounded-2xl border border-[#07111f]/10 bg-white/80 p-5 shadow-[0_8px_24px_rgba(7,17,31,0.04)]">
                <span className="font-mono text-[10px] tracking-[0.18em] text-[#2166c9]">{signal.number}</span>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-lg font-semibold leading-5 tracking-[-0.03em] text-[#07111f]">{signal.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{signal.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href="#construcoes" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2166c9] transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2166c9] focus-visible:ring-offset-4">
              Ver o que está em movimento <ArrowDownRight size={16} />
            </a>
            <a href="#historia" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-[#07111f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2166c9] focus-visible:ring-offset-4">
              Explorar a história completa <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
