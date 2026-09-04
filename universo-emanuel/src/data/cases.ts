export type CaseCategory = "real" | "academic" | "personal";
export type CaseMaturity = "production" | "validated" | "prototype" | "hypothesis";

export type PortfolioCase = {
  slug: string;
  title: string;
  productName: string;
  category: CaseCategory;
  maturity: CaseMaturity;
  summary: { context: string; conflict: string; evidence: string };
  objective: string;
  actors: Array<{ name: string; need: string }>;
  constraints: string[];
  options: Array<{ name: string; appeal: string; cost: string }>;
  decision: string;
  tradeoff: { gained: string; sacrificed: string; risk: string; mitigation: string };
  evidence: Array<{ value: string; meaning: string; kind: "metric" | "observation" | "artifact" | "proxy" }>;
  outcome: { improved: string[]; worsened: string[]; unknown: string[] };
  role: string;
  retrospective: string;
  media: Array<{ type: "image" | "video"; src: string; alt: string; caption?: string }>;
  externalLink?: { href: string; label: string };
  validationNeeded: string[];
};

export const maturityLabel: Record<CaseMaturity, string> = {
  production: "Em produção",
  validated: "Usado em contexto real",
  prototype: "Protótipo em exploração",
  hypothesis: "Hipótese em evolução",
};

export const portfolioCases: PortfolioCase[] = [
  {
    slug: "events",
    title: "Do cadastro à presença, sem fazer a operação voltar ao papel",
    productName: "Events / Cadastro e presença",
    category: "real",
    maturity: "validated",
    summary: {
      context: "Evento infantil de três dias, com seis pessoas na operação.",
      conflict: "Cadastro, presença, elegibilidade, sorteio e equipes precisavam acontecer no mesmo fluxo.",
      evidence: "43 crianças acompanhadas em aproximadamente 15 horas de operação.",
    },
    objective: "Dar à equipe uma forma única de conduzir cadastro, presença e regras do evento durante a operação.",
    actors: [
      { name: "Equipe de operação", need: "Acompanhar as pessoas sem depender de papel ou controles paralelos." },
      { name: "Crianças e responsáveis", need: "Passar por um cadastro e acolhimento claros." },
      { name: "Organização do evento", need: "Aplicar regras de elegibilidade, sorteio e formação de equipes." },
    ],
    constraints: ["Três dias de evento", "Operação presencial", "Infraestrutura proporcional ao contexto"],
    options: [],
    decision: "Usar Lovable e Google Sheets como infraestrutura proporcional e concentrar no fluxo as regras de presença, elegibilidade, faixa etária e ordem de chegada.",
    tradeoff: {
      gained: "Uma solução alinhada ao porte do evento e ao fluxo operacional necessário.",
      sacrificed: "Ainda não documentado publicamente.",
      risk: "Ainda não validado: maior risco operacional identificado na edição.",
      mitigation: "Ainda não validado: intervenções manuais e medidas de contingência.",
    },
    evidence: [
      { value: "43", meaning: "crianças acompanhadas no fluxo", kind: "metric" },
      { value: "3 dias", meaning: "de operação do evento", kind: "metric" },
      { value: "~15 horas", meaning: "de operação registrada", kind: "metric" },
      { value: "6 pessoas", meaning: "na operação", kind: "metric" },
    ],
    outcome: {
      improved: ["O evento contou com um fluxo para cadastro, presença, validação, elegibilidade, sorteio e equipes."],
      worsened: [],
      unknown: ["Redução de erros, tempo economizado e pontos frágeis ainda não foram medidos ou documentados."],
    },
    role: "Concepção do fluxo, regras de negócio, experiência, suporte à operação e infraestrutura.",
    retrospective: "A retrospectiva da primeira edição ainda precisa ser validada antes de uma publicação conclusiva.",
    media: [{ type: "video", src: "/videos/works/cadastro-presenca.mp4", alt: "Demonstração do fluxo de cadastro e presença do evento", caption: "Recorte da solução usada durante o evento." }],
    externalLink: { href: "https://ipb-forms-flow.lovable.app", label: "Abrir solução" },
    validationNeeded: ["Alternativas consideradas antes da escolha", "Maior risco operacional", "Intervenções manuais necessárias", "Limitações percebidas e o que seria diferente na segunda edição", "Quais dados podem ser exibidos publicamente"],
  },
  {
    slug: "itesam",
    title: "Uma plataforma institucional que continua operando sem complexidade desnecessária",
    productName: "ITESAM",
    category: "real",
    maturity: "production",
    summary: {
      context: "Plataforma institucional com cadastro, consulta de dados e abertura de chamados.",
      conflict: "A solução precisava atender uma necessidade recorrente com confiabilidade e manutenção compatíveis com o uso real.",
      evidence: "Ativa em produção, com suporte, deploy, versionamento e entrega contínua.",
    },
    objective: "Oferecer uma plataforma institucional simples de operar e sustentável para cadastro, consulta e atendimento.",
    actors: [
      { name: "Instituição", need: "Uma presença digital que também resolva necessidades operacionais." },
      { name: "Pessoas usuárias", need: "Cadastrar, consultar dados e abrir chamados." },
      { name: "Time de entrega", need: "Manter e evoluir o sistema com responsabilidade técnica delimitada." },
    ],
    constraints: ["Necessidade institucional recorrente", "Volume real de uso", "Trabalho desenvolvido em parceria"],
    options: [],
    decision: "Manter uma arquitetura monolítica em PHP com MySQL e modelagem compacta, evitando complexidade sem necessidade documentada.",
    tradeoff: {
      gained: "Uma base compatível com as necessidades atuais de cadastro, consulta, chamados e manutenção.",
      sacrificed: "Alternativas arquiteturais avaliadas não foram documentadas publicamente.",
      risk: "Limitações e incidentes relevantes ainda precisam de validação para publicação.",
      mitigation: "Versionamento, deploy, suporte e uma esteira de entrega contínua fazem parte da responsabilidade técnica assumida.",
    },
    evidence: [
      { value: "Em produção", meaning: "plataforma publicada e mantida", kind: "observation" },
      { value: "PHP + MySQL", meaning: "base monolítica e modelagem compacta", kind: "artifact" },
      { value: "CI/CD", meaning: "alterações revisadas seguem para produção", kind: "artifact" },
    ],
    outcome: {
      improved: ["Uma mesma plataforma reúne presença institucional, cadastro, consulta e chamados."],
      worsened: [],
      unknown: ["Volume de uso, incidentes, feedbacks e evoluções após publicação aguardam validação."],
    },
    role: "Projeto desenvolvido em parceria. O sócio definiu o layout dentro do padrão do cliente; Emanuel assumiu backend, endpoints, modelagem, regras de negócio, integração com frontend, deploy, versionamento, suporte e evolução da entrega contínua.",
    retrospective: "O motivo documentado para a escolha monolítica e os aprendizados da operação ainda precisam ser consolidados.",
    media: [],
    externalLink: { href: "https://itesam.org.br/", label: "Visitar plataforma" },
    validationNeeded: ["Volume ou frequência de uso divulgável", "Alternativas arquiteturais avaliadas", "Incidentes, limitações e aprendizados", "Evoluções a partir de feedback", "Justificativa documentada da arquitetura monolítica"],
  },
  {
    slug: "criative-lab",
    title: "Quando um projeto acadêmico precisa continuar existindo depois da apresentação",
    productName: "Criative Lab",
    category: "academic",
    maturity: "hypothesis",
    summary: {
      context: "Uma proposta de espaço digital para dar continuidade e visibilidade a projetos acadêmicos.",
      conflict: "Projetos podem perder contexto e conversa assim que a apresentação termina.",
      evidence: "Produto em evolução; não é apresentado como validado ou em produção.",
    },
    objective: "Explorar uma forma de receber, organizar e apresentar projetos com contexto para quem cria, acompanha e descobre o que foi feito.",
    actors: [
      { name: "Estudantes", need: "Manter seus projetos visíveis e contextualizados." },
      { name: "Docentes e instituições", need: "Acompanhar e dar continuidade à produção acadêmica." },
      { name: "Pessoas que descobrem projetos", need: "Entender o que foi criado e iniciar novas conversas." },
    ],
    constraints: ["Produto em evolução", "Sem validação de mercado documentada", "Escopo inicial ainda em definição"],
    options: [],
    decision: "Construir uma base de produto que recebe, organiza e apresenta projetos, com estratégia, identidade, experiência e desenvolvimento conectados.",
    tradeoff: {
      gained: "Uma direção de produto capaz de transformar a apresentação pontual em continuidade e repertório compartilhado.",
      sacrificed: "A hipótese, o público inicial e o comportamento de valor ainda não foram validados publicamente.",
      risk: "Depender de um recorte institucional estreito sem evidência de continuidade de uso.",
      mitigation: "A decisão de produto e o recorte inicial permanecem abertos para pesquisa e validação.",
    },
    evidence: [{ value: "Em evolução", meaning: "estado atual da proposta", kind: "observation" }],
    outcome: {
      improved: [],
      worsened: [],
      unknown: ["Não há resultado de uso, comportamento ou validação publicado até o momento."],
    },
    role: "Estratégia de produto, identidade, experiência e desenvolvimento da plataforma.",
    retrospective: "Antes de tratar a proposta como case validado, é preciso definir hipótese, público inicial, sinal de valor e principal risco de produto.",
    media: [{ type: "image", src: "/images/creative-lab.png", alt: "Identidade visual do Criative Lab", caption: "Identidade da proposta em evolução." }],
    validationNeeded: ["Hipótese principal", "Público inicial", "Comportamento que indicará valor", "Maior risco de produto", "Aprendizados até agora", "Decisão que afasta o produto da dependência exclusiva da Fatec"],
  },
];

export const explorations: Array<{ name: string; state: "Hipótese" | "Protótipo" | "Estudo" | "Experimento" | "Demonstração acadêmica"; description: string; href?: string }> = [
  { name: "Rotas Inteligentes", state: "Protótipo", description: "Exploração de uma jornada para comparar deslocamentos com mais contexto.", href: "https://www.figma.com/proto/p2nGg4cLvSvimsAAhEkviB/Rotas-Inteligentes?node-id=214-1010&starting-point-node-id=214%3A1010" },
  { name: "Fince", state: "Protótipo", description: "Estudo de clareza e priorização em informações financeiras pessoais.", href: "https://www.figma.com/proto/2y4ZguUBWlXnD2smvVHWTR/Fince?node-id=2762-1833" },
  { name: "ChamaAI e estudos de LLM", state: "Estudo", description: "Explorações técnicas e de interface ainda sem evidência suficiente para um case principal." },
];

export function getCaseBySlug(slug: string) {
  return portfolioCases.find((item) => item.slug === slug);
}
