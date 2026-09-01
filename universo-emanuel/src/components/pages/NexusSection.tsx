const proofs = [
  { code: "01", title: "Criative Lab", areas: ["Educação", "Comunidade", "Visibilidade", "Software"], text: "Uma pergunta sobre continuidade acadêmica pede produto, identidade, experiência e uma plataforma que mantenha as criações vivas." },
  { code: "02", title: "Cadastro e presença", areas: ["Operação", "Pessoas", "Regras", "Dados"], text: "Uma operação de evento não melhora só com uma tela: ela precisa de regras claras, ritmo de equipe e uma infraestrutura proporcional ao momento." },
  { code: "03", title: "Rotas Inteligentes", areas: ["Mobilidade", "Informação", "Confiança", "Interface"], text: "Uma escolha de rota combina contexto, comunicação e experiência para que uma pessoa consiga seguir em frente com mais segurança." },
];

export function NexusSection() {
  return <section id="nexo" className="relative overflow-hidden bg-[#f8f7f3] px-6 py-24 lg:px-10 lg:py-32">
    <div className="editorial-grid absolute inset-0 opacity-50" />
    <div className="relative mx-auto max-w-7xl"><div className="grid gap-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end"><div><p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2166c9]">Pensamento nexialista</p><h2 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl">Problemas reais atravessam áreas. Minha função é conectá-las.</h2></div><div className="max-w-xl space-y-5 text-base leading-7 text-slate-600 lg:text-lg"><p>Não é sobre ser especialista em tudo ou generalista por falta de profundidade. É entender quais especialidades um problema pede e conectá-las até a solução funcionar.</p><p>O ponto de partida não é uma ferramenta. É a situação que precisa avançar.</p></div></div>
      <div className="mt-16 grid gap-4 lg:grid-cols-3">{proofs.map((proof) => <article key={proof.code} className="rounded-[1.5rem] border border-[#07111f]/10 bg-white/80 p-6 shadow-[0_20px_48px_-42px_rgba(7,17,31,.55)]"><span className="font-mono text-[10px] tracking-[0.2em] text-[#2166c9]">CONEXÃO {proof.code}</span><h3 className="mt-9 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">{proof.title}</h3><div className="mt-4 flex flex-wrap gap-2">{proof.areas.map((area) => <span key={area} className="rounded-full bg-[#eaf1fb] px-2.5 py-1 text-[11px] font-medium text-[#35587f]">{area}</span>)}</div><p className="mt-6 text-sm leading-6 text-slate-600">{proof.text}</p></article>)}</div>
    </div>
  </section>;
}
