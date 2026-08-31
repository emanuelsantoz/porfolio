import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Layers3, Linkedin, Mail } from "lucide-react";
import { EmanuelLogo } from "@/components/brand/EmanuelLogo";
import { HomeHero } from "@/components/pages/HomeHero";
import { NexusSection } from "@/components/pages/NexusSection";
import { PortfolioPointerLight } from "@/components/pages/PortfolioPointerLight";
import { TechnicalFoundationSection } from "@/components/pages/TechnicalFoundationSection";
import { TrajectorySection } from "@/components/pages/TrajectorySection";

type WorkItem = {
  code: string;
  title: string;
  status: string;
  summary: string;
  description: string;
  role: string;
  audience: string;
  connections: string[];
  nextStep: string;
  href: string;
  image?: string;
  featured?: boolean;
};

const products: WorkItem[] = [
  {
    code: "ES/02",
    title: "Criative Lab",
    status: "Produto · em lançamento",
    summary: "Uma casa para que projetos acadêmicos continuem visíveis depois da apresentação.",
    description: "Recebe, organiza, avalia e publica a produção acadêmica com mais contexto para estudantes, docentes e instituições.",
    role: "Estratégia de produto, identidade, experiência e desenvolvimento.",
    audience: "Estudantes, docentes e instituições de ensino.",
    connections: ["Educação", "Comunidade", "Visibilidade", "Tecnologia"],
    nextStep: "Preparar a primeira edição institucional e validar o fluxo de publicação.",
    href: "#contato",
    image: "/images/creative-lab.png",
    featured: true,
  },
  {
    code: "ES/03",
    title: "Aegon",
    status: "Operação · em revisão",
    summary: "Uma operação digital para transformar ideias em iniciativas que conseguem continuar.",
    description: "O papel, o nome e o posicionamento ainda estão sendo definidos antes de ampliar qualquer presença pública.",
    role: "Estrutura de produto e experimentação contínua.",
    audience: "Pessoas e organizações com problemas que pedem clareza e construção digital.",
    connections: ["Estratégia", "Operação", "Produto", "Continuidade"],
    nextStep: "Definir naming, proposta e relação definitiva com a marca Emanuel Santos.",
    href: "https://aegon-com-88qe.vercel.app/",
  },
];

const cases: WorkItem[] = [
  {
    code: "CASE/01",
    title: "Rotas Inteligentes",
    status: "Case autoral · protótipo",
    summary: "Mobilidade urbana com mais clareza, contexto e possibilidades de escolha.",
    description: "Um estudo criado para transformar dúvidas comuns de deslocamento em uma experiência simples de consultar, comparar e organizar trajetos.",
    role: "Conceito, pesquisa, experiência e protótipo por Emanuel Santos.",
    audience: "Pessoas que precisam decidir como se deslocar no dia a dia.",
    connections: ["Mobilidade", "Comunicação", "Segurança", "Experiência"],
    nextStep: "Testar o protótipo com pessoas que usam diferentes rotas e meios de transporte.",
    href: "https://www.figma.com/proto/p2nGg4cLvSvimsAAhEkviB/Rotas-Inteligentes?node-id=214-1010&starting-point-node-id=214%3A1010",
    image: "/images/rotas-inteligentes.png",
    featured: true,
  },
  {
    code: "CASE/02",
    title: "Fince",
    status: "Case autoral · protótipo",
    summary: "Uma experiência financeira pessoal feita para reduzir ruído e apoiar decisões.",
    description: "Protótipo de gestão financeira que explora visualização de dados, organização de gastos, investimentos e metas em uma interface clara.",
    role: "UX/UI, arquitetura da informação e prototipagem.",
    audience: "Pessoas que desejam entender melhor a própria vida financeira.",
    connections: ["Finanças", "Dados", "Decisão", "Interface"],
    nextStep: "Transformar a visualização em testes de compreensão e priorização de decisões reais.",
    href: "https://www.figma.com/proto/2y4ZguUBWlXnD2smvVHWTR/Fince?node-id=2762-1833&t=dKDqNAVuE4h8a7lr-0&scaling=scale-down&content-scaling=fixed&page-id=8%3A4",
  },
];

const method = [
  { number: "01", title: "Entender", text: "Escutar pessoas, observar o contexto e encontrar a tensão que realmente precisa ser resolvida." },
  { number: "02", title: "Estruturar", text: "Transformar descobertas em proposta, fluxos, arquitetura e critérios claros de decisão." },
  { number: "03", title: "Construir", text: "Conectar design, engenharia, conteúdo e testes em algo que as pessoas consigam usar." },
  { number: "04", title: "Continuar", text: "Publicar, acompanhar, documentar e evoluir sem deixar uma boa ideia terminar na primeira entrega." },
];

export function HomePage() {
  return (
    <main className="portfolio-shell bg-[#f8f7f3] text-[#07111f]">
      <PortfolioPointerLight />
      <HomeHero />
      <NexusSection />

      <section id="produtos" className="bg-[#eaf1fb] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Produtos em construção" title="Ideias que não terminam na entrega." text="Produtos representam uma pergunta que continua viva: têm público, evolução e próximos marcos. Eles vêm antes porque mostram visão, autoria e continuidade." />
          <div className="project-list mt-16 grid gap-5 lg:grid-cols-2">
            {products.map((product) => <WorkCard key={product.title} item={product} kind="Produto" />)}
          </div>
        </div>
      </section>

      <section id="trabalhos" className="bg-[#f8f7f3] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Trabalhos selecionados" title="Cases para aprender, testar e tornar o próximo produto melhor." text="Nem toda construção precisa virar uma operação contínua. Alguns projetos existem para investigar um problema, testar uma hipótese e gerar repertório para o que vem depois." />
          <div className="project-list mt-16 grid gap-5 lg:grid-cols-2">
            {cases.map((item) => <WorkCard key={item.title} item={item} kind="Case" />)}
          </div>
        </div>
      </section>

      <section id="metodo" className="overflow-hidden bg-[#07111f] px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading dark eyebrow="Método Emanuel" title="Uma ideia ganha forma quando o processo também ganha clareza." text="Estratégia, design e engenharia não são etapas isoladas. São partes de uma mesma construção, guiada pelo que as pessoas precisam conseguir fazer no fim." />
          <ol className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {method.map((step) => <li key={step.number} className="group min-h-64 bg-[#07111f] p-7 transition hover:bg-[#0d1f37] lg:p-8"><span className="font-mono text-xs tracking-[0.2em] text-[#2f7de1]">{step.number}</span><h3 className="mt-14 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.045em]">{step.title}</h3><p className="mt-4 text-sm leading-6 text-white/63">{step.text}</p></li>)}
          </ol>
        </div>
      </section>

      <TechnicalFoundationSection />

      <section id="universos" className="overflow-hidden bg-[#10243f] px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-end">
          <div className="absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full bg-[#2166c9]/25 blur-3xl" />
          <div className="relative"><p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2f7de1]">Universos de criação</p><h2 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl">A mesma intenção muda de forma conforme o problema muda.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">Os universos mostram habilidades que entram na construção de cada produto. O primeiro está aberto: UX/UI, onde uma pergunta começa a encontrar uma interface.</p></div>
          <Link href="/p/ux-ui" className="relative group overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.05] p-7 transition hover:-translate-y-1 hover:border-[#f24e1e]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f7de1]"><div className="flex items-center justify-between"><span className="font-mono text-xs tracking-[0.18em] text-[#f24e1e]">UNIVERSO 01</span><ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={19} /></div><Layers3 className="mt-16 text-[#f24e1e]" size={30} /><h3 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-[-0.05em]">UX/UI</h3><p className="mt-3 max-w-sm text-sm leading-6 text-white/62">Do problema ao rascunho: contexto, jornada, decisão e um canvas para explorar caminhos.</p><span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#f24e1e]">Entrar no espaço <ArrowUpRight size={16} /></span></Link>
        </div>
      </section>

      <TrajectorySection />

      <section id="contato" className="bg-[#07111f] px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 border-t border-white/10 pt-24 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2f7de1]">Vamos começar por uma conversa</p><h2 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl">Tem um problema que merece uma boa solução?</h2></div><div className="space-y-4"><a href="mailto:emanuelsantossouzajesus@gmail.com" className="flex items-center justify-between border-b border-white/20 pb-4 text-lg transition hover:border-[#2f7de1] hover:text-[#2f7de1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f7de1]">emanuelsantossouzajesus@gmail.com <Mail size={19} /></a><div className="flex gap-5 pt-3 text-sm text-white/65"><a className="inline-flex items-center gap-2 transition hover:text-white" href="https://github.com/emanuelsantoz" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a className="inline-flex items-center gap-2 transition hover:text-white" href="https://www.linkedin.com/in/emanu-ell/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div></div></div>
        <div className="mx-auto mt-20 flex max-w-7xl items-center justify-between border-t border-white/10 pt-6 text-xs text-white/45"><EmanuelLogo tone="light" variant="compact" className="opacity-80" /><div className="flex items-center gap-5"><Link href="/brand" className="transition hover:text-white">Biblioteca de marca</Link><span>ES/0 · 2026</span></div></div>
      </section>
    </main>
  );
}

function SectionHeading({ eyebrow, title, text, dark = false }: { eyebrow: string; title: string; text: string; dark?: boolean }) {
  return <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div><p className={`font-mono text-xs uppercase tracking-[0.22em] ${dark ? "text-[#2f7de1]" : "text-[#2166c9]"}`}>{eyebrow}</p><h2 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-6xl">{title}</h2></div><p className={`max-w-xl text-base leading-7 lg:text-lg ${dark ? "text-white/65" : "text-slate-600"}`}>{text}</p></div>;
}

function WorkCard({ item, kind }: { item: WorkItem; kind: "Produto" | "Case" }) {
  const isExternal = item.href.startsWith("http");

  return <article className={`portfolio-project group flex min-h-[31rem] flex-col overflow-hidden rounded-[1.75rem] border border-[#07111f]/10 bg-white ${item.featured ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""}`}>
    {item.image ? <div className={`relative overflow-hidden bg-[#07111f] ${item.featured ? "min-h-64 lg:order-2 lg:min-h-full" : "aspect-[16/9]"}`}><Image src={item.image} alt={`Tela do ${kind.toLowerCase()} ${item.title}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top transition duration-500 group-hover:scale-105" /></div> : <div className="relative min-h-48 overflow-hidden bg-[#07111f]" style={{ backgroundImage: "linear-gradient(135deg, rgb(47 125 225 / .26), transparent 55%), linear-gradient(rgb(255 255 255 / .06) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / .06) 1px, transparent 1px)", backgroundSize: "auto, 24px 24px, 24px 24px" }}><p className="absolute bottom-5 left-6 font-mono text-xs tracking-[.18em] text-[#2f7de1]">{item.code} / EM DEFINIÇÃO</p></div>}
    <div className="flex flex-1 flex-col p-7 lg:p-8"><div className="flex items-center justify-between gap-4"><span className="font-mono text-xs text-[#2166c9]">{item.code}</span><span className="rounded-full border border-[#07111f]/10 px-3 py-1 text-[11px] text-slate-500">{item.status}</span></div><div className="mt-auto pt-12"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">{kind}</p><h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.045em]">{item.title}</h3><p className="mt-4 text-lg leading-7 text-[#07111f]">{item.summary}</p><p className="mt-5 text-sm leading-6 text-slate-600">{item.description}</p><div className="mt-6 border-t border-[#07111f]/10 pt-5"><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#2166c9]">Conexões mobilizadas</p><div className="mt-3 flex flex-wrap gap-2">{item.connections.map((connection) => <span key={connection} className="rounded-full bg-[#eaf1fb] px-2.5 py-1 text-[11px] text-[#35587f]">{connection}</span>)}</div></div><dl className="mt-6 grid gap-4 border-t border-[#07111f]/10 pt-5 text-xs leading-5 text-slate-500 sm:grid-cols-2"><div><dt className="font-mono uppercase tracking-[0.14em] text-[#2166c9]">Para quem</dt><dd className="mt-1">{item.audience}</dd></div><div><dt className="font-mono uppercase tracking-[0.14em] text-[#2166c9]">Próximo marco</dt><dd className="mt-1">{item.nextStep}</dd></div></dl><p className="mt-5 border-l-2 border-[#2166c9] pl-3 text-xs leading-5 text-slate-500">{item.role}</p><a href={item.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#2166c9] transition group-hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2166c9] focus-visible:ring-offset-4">{kind === "Produto" ? "Acompanhar a construção" : "Ver protótipo"} <ArrowUpRight size={16} /></a></div></div>
  </article>;
}
