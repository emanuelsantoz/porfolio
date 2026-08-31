import { Braces, Component, GitBranch, ShieldCheck } from "lucide-react";

const foundations = [
  { icon: Braces, title: "Software que sustenta", text: "Desenvolvimento é a base que permite transformar uma boa ideia em uma experiência que funciona além da primeira tela." },
  { icon: Component, title: "Interface implementada", text: "Design e engenharia se encontram quando a interface preserva intenção, clareza, acessibilidade e comportamento real." },
  { icon: GitBranch, title: "Integrações e continuidade", text: "Regras, dados, fluxos e documentação precisam acompanhar a evolução do produto sem transformar cada mudança em recomeço." },
  { icon: ShieldCheck, title: "Qualidade como escolha", text: "Testar cenários, observar bordas e reduzir dúvida faz parte da construção — antes e depois da entrega." },
];

export function TechnicalFoundationSection() {
  return <section id="base-tecnica" className="bg-[#f8f7f3] px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end"><div><p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2166c9]">Base de construção</p><h2 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-6xl">Conectar perspectivas só funciona quando existe profundidade para construir.</h2></div><p className="max-w-xl text-base leading-7 text-slate-600 lg:text-lg">Não é uma lista de porcentagens. É a base técnica que permite que uma hipótese avance até se tornar software, aprendizado e próxima decisão.</p></div><div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-[#07111f]/10 bg-[#07111f]/10 md:grid-cols-2 lg:grid-cols-4">{foundations.map(({ icon: Icon, title, text }) => <article key={title} className="min-h-64 bg-white p-7 lg:p-8"><Icon size={21} className="text-[#2166c9]" /><h3 className="mt-14 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">{title}</h3><p className="mt-4 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></div></section>;
}
