import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { HomeHero } from "@/components/pages/HomeHero";
import { CreationLenses } from "@/components/pages/CreationLenses";

const projects = [
  {
    number: "01",
    title: "Rotas Inteligentes",
    summary: "Mobilidade urbana com mais clareza, contexto e possibilidades de escolha.",
    description:
      "Um projeto autoral criado para transformar dúvidas comuns de deslocamento em uma experiência simples de consultar, comparar e organizar trajetos.",
    role: "Conceito, pesquisa, experiência e protótipo por Emanuel Santos.",
    href: "https://www.figma.com/proto/p2nGg4cLvSvimsAAhEkviB/Rotas-Inteligentes?node-id=214-1010&starting-point-node-id=214%3A1010",
    image: "/images/rotas-inteligentes.png",
    featured: true,
  },
  {
    number: "02",
    title: "Creative Lab",
    summary: "Uma casa para que projetos acadêmicos continuem visíveis depois da apresentação.",
    description:
      "Produto digital para receber, organizar, avaliar e publicar a produção acadêmica com contexto para estudantes, docentes e instituições.",
    role: "Estratégia de produto, identidade, experiência e desenvolvimento.",
    href: "#contact",
    image: "/images/creative-lab.png",
    featured: false,
  },
  {
    number: "03",
    title: "Fince",
    summary: "Uma experiência financeira pessoal feita para reduzir ruído e apoiar decisões.",
    description:
      "Protótipo de gestão financeira que explora visualização de dados, organização de gastos, investimentos e metas em uma interface clara.",
    role: "UX/UI, arquitetura da informação e prototipagem.",
    href: "https://www.figma.com/proto/2y4ZguUBWlXnD2smvVHWTR/Fince?node-id=2762-1833&t=dKDqNAVuE4h8a7lr-0&scaling=scale-down&content-scaling=fixed&page-id=8%3A4",
    featured: false,
  },
];

const timeline = [
  ["2023–2024", "Formação Barracred Conecta", "O início de uma vivência prática em tecnologia, segurança e desenvolvimento."],
  ["2024–2025", "Jovem Aprendiz em TI", "Suporte, documentação, gestão de acessos e a construção de uma base profissional."],
  ["2025–hoje", "Analista de Desenvolvimento Jr.", "Atuação em sistemas internos, melhoria contínua e soluções que atendem pessoas reais."],
];

export function HomePage(_: { initialPersona?: string } = {}) {
  return (
    <main className="bg-[#f8f7f3] text-[#07111f]">
      <HomeHero />

      <section id="historia" className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] border border-[#2166c9]/20" />
            <Image
              src="/images/emanuel-at-work.jpeg"
              alt="Emanuel Santos trabalhando em um produto digital"
              width={1200}
              height={1600}
              sizes="(max-width: 1024px) 85vw, 36vw"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover"
            />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2166c9]">Por trás do produto</p>
            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-5xl">
              Desenvolvimento é a ferramenta. Resolver é o trabalho.
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-slate-600 lg:text-lg">
              <p>Minha jornada em tecnologia começou pela curiosidade de entender como as coisas funcionam. Com o tempo, essa curiosidade se tornou uma forma de observar problemas, organizar caminhos e dar forma a soluções digitais.</p>
              <p>Hoje, entre produtos autorais e desafios do ambiente profissional, conecto contexto, experiência e construção. O objetivo não é só entregar uma interface ou sistema: é criar algo que tenha motivo para existir.</p>
            </div>
            <div className="mt-12 space-y-7 border-l border-[#2166c9]/25 pl-6">
              {timeline.map(([period, title, description]) => (
                <div key={title}>
                  <p className="font-mono text-xs text-[#2166c9]">{period}</p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold tracking-[-0.03em]">{title}</h3>
                  <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-7xl">
          <div className="flex flex-col justify-between gap-4 border-t border-[#07111f]/10 pt-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2166c9]">Experiências em movimento</p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">O trabalho também acontece fora da tela.</h3>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-500">Momentos que carregam a parte mais importante de construir: pessoas, responsabilidade e troca.</p>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            <article className="group overflow-hidden rounded-[1.5rem] bg-[#07111f] text-white">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/experience-barracred.jpg"
                  alt="Emanuel Santos em frente à Cooperativa Barracred"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/90 via-transparent to-transparent" />
                <p className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#07111f]/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#b9d6ff] backdrop-blur">Barracred</p>
              </div>
              <div className="px-6 py-6">
                <h4 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">Onde a prática ganhou responsabilidade.</h4>
                <p className="mt-2 text-sm leading-6 text-white/65">É no contato com desafios reais que tecnologia deixa de ser só estudo e passa a gerar confiança, colaboração e impacto.</p>
              </div>
            </article>

            <article className="group overflow-hidden rounded-[1.5rem] bg-[#10243f] text-white">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/experience-presentation.jpeg"
                  alt="Emanuel Santos apresentando uma solução digital"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-[center_35%] transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10243f]/90 via-transparent to-transparent" />
                <p className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#10243f]/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#b9d6ff] backdrop-blur">Compartilhar</p>
              </div>
              <div className="px-6 py-6">
                <h4 className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">Boas ideias também precisam ser explicadas.</h4>
                <p className="mt-2 text-sm leading-6 text-white/65">Construir é só parte do caminho. Ouvir, apresentar e transformar uma solução em conversa também faz parte do produto.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="projetos" className="bg-[#eaf1fb] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#2166c9]">Produtos selecionados</p>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-6xl">Três formas de transformar uma pergunta em produto.</h2>
          </div>
          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className={`group flex min-h-[31rem] flex-col overflow-hidden rounded-[1.75rem] border border-[#07111f]/10 bg-[#fdfdfb] ${project.featured ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""}`}>
                {project.featured && (
                  <div className="relative min-h-64 overflow-hidden bg-[#07111f] lg:order-2 lg:min-h-full">
                    <Image src={project.image!} alt="Tela do projeto Rotas Inteligentes" fill sizes="(max-width: 1024px) 100vw, 35vw" className="object-cover object-top transition duration-500 group-hover:scale-105" />
                  </div>
                )}
                {project.image && !project.featured && (
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#07111f]">
                    <Image src={project.image} alt="Tela da plataforma Creative Lab" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover object-top transition duration-500 group-hover:scale-105" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-7 lg:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#2166c9]">{project.number}</span>
                    <span className="rounded-full border border-[#07111f]/10 px-3 py-1 text-[11px] text-slate-500">{project.featured ? "Projeto autoral" : "Em foco"}</span>
                  </div>
                  <div className="mt-auto pt-16">
                    <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.045em]">{project.title}</h3>
                    <p className="mt-4 text-lg leading-7 text-[#07111f]">{project.summary}</p>
                    <p className="mt-5 text-sm leading-6 text-slate-600">{project.description}</p>
                    <p className="mt-5 border-l-2 border-[#2166c9] pl-3 text-xs leading-5 text-slate-500">{project.role}</p>
                    <a href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noreferrer" : undefined} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#2166c9] transition group-hover:gap-3">
                      {project.title === "Creative Lab" ? "Acompanhar o projeto" : "Ver protótipo"} <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CreationLenses />

      <section id="contato" className="bg-[#07111f] px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#79aef4]">Vamos começar por uma conversa</p>
            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-6xl">Tem um problema que merece uma boa solução?</h2>
          </div>
          <div className="space-y-4">
            <a href="mailto:emanuelsantossouzajesus@gmail.com" className="flex items-center justify-between border-b border-white/20 pb-4 text-lg transition hover:border-[#79aef4] hover:text-[#79aef4]">
              emanuelsantossouzajesus@gmail.com <Mail size={19} />
            </a>
            <div className="flex gap-5 pt-3 text-sm text-white/65">
              <a className="inline-flex items-center gap-2 transition hover:text-white" href="https://github.com/emanuelsantoz" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a className="inline-flex items-center gap-2 transition hover:text-white" href="https://www.linkedin.com/in/emanu-ell/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-20 flex max-w-7xl items-center justify-between border-t border-white/10 pt-6 text-xs text-white/45">
          <span>Emanuel Santos</span>
          <span>ES/02 · 2026</span>
        </div>
      </section>
    </main>
  );
}
