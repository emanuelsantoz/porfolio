# Plano de desenvolvimento — ES/0 orientado a problemas e decisões

## 1. Objetivo

Transformar o ES/0 de uma landing page autobiográfica e visualmente extensa em um portfólio multipágina orientado pelas necessidades de pessoas e organizações com processos, fluxos ou ideias mal estruturados.

O portfólio deve construir uma percepção principal:

> Emanuel Santos é uma pessoa resolvedora: consegue entrar em um contexto confuso, compreender o problema e transformá-lo em uma solução digital utilizável e capaz de evoluir.

O resultado não deve tentar exibir todas as habilidades de Emanuel simultaneamente. Deve reduzir a incerteza de quem avalia seu trabalho e conduzir a pessoa até um contato, oportunidade profissional, parceria ou contratação.

## 2. Público e resultado esperado

### Público primário

Pessoas responsáveis por problemas, fluxos, processos ou ideias que:

- estão inconformadas com a situação atual;
- percebem retrabalho, ruído, fragmentação ou falta de continuidade;
- precisam de uma visão externa com experiência técnica e de produto;
- ainda não sabem exatamente qual sistema, software, aplicativo ou mudança construir.

### Público secundário

- recrutadores e lideranças de tecnologia ou produto;
- instituições e potenciais parceiros;
- designers e desenvolvedores interessados em colaboração.

### Trabalho que a experiência precisa cumprir

Nos primeiros 60 segundos, a pessoa deve compreender:

1. quais tipos de problema Emanuel ajuda a resolver;
2. como ele transforma contexto em solução;
3. qual evidência demonstra essa capacidade;
4. como entrar em contato.

Mensagem de referência:

> Transformo processos confusos — no papel, em planilhas ou em sistemas fragmentados — em produtos digitais claros, utilizáveis e capazes de evoluir, combinando desenvolvimento de software, experiência e pensamento de produto.

## 3. Princípio de produto

O ES/0 deve funcionar como um sistema de evidências, não como uma galeria.

Cada elemento deve passar pelo filtro:

> Isto ajuda alguém com um problema confuso a confiar que Emanuel consegue organizar e construir uma solução?

Não usar estética, animação, terminologia de marca ou quantidade de conteúdo como substitutos de prova. A marca continua presente, mas serve à leitura e ao reconhecimento.

## 4. Arquitetura da informação

Manter Next.js e App Router. A mudança é de arquitetura de conteúdo, não uma reescrita para uma SPA pura. As páginas devem ter URLs compartilháveis e transições rápidas.

### Navegação principal

- Início
- Casos
- Como trabalho
- Sobre
- Conversar

Usar nomes reconhecíveis na navegação. Termos como “Nexo”, “Universos”, “Construções em movimento” e “ES/0” podem existir dentro da narrativa, mas não devem ser necessários para compreender como navegar.

### Rotas propostas

```text
/
/casos
/casos/events
/casos/itesam
/casos/criative-lab
/exploracoes
/como-trabalho
/sobre
/contato
/brand                 rota secundária já existente
/p/[persona]           preservar, fora da navegação principal nesta fase
```

Se uma página de contato isolada não acrescentar valor, `/contato` pode ser substituída por uma seção final global e um link direto. A URL dos cases é obrigatória.

## 5. Estrutura da home

### 5.1 Hero

Objetivo: reconhecer a dor e apresentar a capacidade de transformação.

Conteúdo esperado:

- título sobre processos confusos se tornando produtos claros;
- frase de apoio com papel, planilhas, sistemas fragmentados e ideias sem forma;
- CTA primário: `Conte o que não está funcionando`;
- CTA secundário: `Ver casos reais`;
- identidade de Emanuel como assinatura, sem autobiografia longa.

### 5.2 Reconhecimento do problema

Apresentar situações reconhecíveis:

- processo manual com retrabalho;
- fluxo espalhado entre planilhas e mensagens;
- sistema existente que não acompanha a operação;
- ideia boa que ainda não encontrou uma forma testável.

O visitante deve se reconhecer antes de receber explicações sobre metodologia.

### 5.3 Case principal

Usar `Events / Cadastro e presença` como primeira prova. Ele conecta operação física, regras, pessoas e infraestrutura proporcional.

Mostrar na leitura inicial:

- 43 crianças;
- três dias;
- aproximadamente 15 horas de operação;
- o conflito operacional;
- a decisão principal;
- link para o case completo.

Não inventar resultado, economia, conversão ou redução de erro que não tenha sido documentada.

### 5.4 Formas de ajudar

Apresentar três entradas baseadas no problema do visitante:

1. Processo existente → sistema ou melhoria operacional.
2. Produto fragmentado → reorganização e evolução.
3. Ideia ainda sem forma → hipótese, protótipo e validação.

### 5.5 Casos de apoio

- ITESAM: sistema real, produção, suporte e continuidade.
- Criative Lab: inquietação transformada em proposta de produto em evolução.

### 5.6 Como Emanuel trabalha

Manter uma versão objetiva do método:

```text
Entender → Estruturar → Construir → Continuar
```

Cada etapa deve apresentar a pergunta ou decisão que orienta o trabalho, não uma lista genérica de atividades.

### 5.7 Sobre Emanuel

Uma introdução curta conecta desenvolvimento, experiência e pensamento de produto. A trajetória completa deve ficar em `/sobre`.

### 5.8 Contato

CTA orientado à dor:

> Conte o que hoje não está funcionando.

Oferecer contato por e-mail e LinkedIn. Explicar que o contato pode iniciar um projeto, oportunidade, parceria ou conversa de diagnóstico.

## 6. Sistema de cases

Cada case deve ter três camadas de leitura.

### Camada de 6 segundos

- contexto em uma linha;
- conflito principal;
- uma evidência ou estado honesto;
- título que descreva a transformação, não apenas o nome do produto.

### Camada de 60 segundos

- contexto;
- tensão;
- decisão;
- alternativa descartada;
- trade-off;
- evidência;
- consequência.

### Camada de 6 minutos

- atores e interesses envolvidos;
- restrições reais;
- opções consideradas;
- escolha e justificativa;
- risco assumido e mitigação;
- recortes essenciais do processo;
- resultado;
- o que piorou ou permaneceu limitado;
- o que Emanuel faria diferente hoje;
- papel e responsabilidade de Emanuel;
- próximos passos.

### Modelo de dados sugerido

Criar uma fonte tipada, por exemplo `src/data/cases.ts`:

```ts
type PortfolioCase = {
  slug: string;
  title: string;
  productName: string;
  category: "real" | "academic" | "personal";
  maturity: "production" | "validated" | "prototype" | "hypothesis";
  summary: {
    context: string;
    conflict: string;
    evidence: string;
  };
  objective: string;
  actors: Array<{ name: string; need: string }>;
  constraints: string[];
  options: Array<{
    name: string;
    appeal: string;
    cost: string;
  }>;
  decision: string;
  tradeoff: {
    gained: string;
    sacrificed: string;
    risk: string;
    mitigation: string;
  };
  evidence: Array<{
    value: string;
    meaning: string;
    kind: "metric" | "observation" | "artifact" | "proxy";
  }>;
  outcome: {
    improved: string[];
    worsened: string[];
    unknown: string[];
  };
  role: string;
  retrospective: string;
  media: Array<{
    type: "image" | "video";
    src: string;
    alt: string;
    caption?: string;
  }>;
  externalLink?: { href: string; label: string };
};
```

Não preencher campos desconhecidos com linguagem genérica. Usar `unknown`, “ainda não medido” ou solicitar validação de Emanuel.

## 7. Prioridade dos cases

### 7.1 Events / Cadastro e presença

Primeiro case a ser implementado.

Evidências já conhecidas:

- 43 crianças;
- três dias de evento;
- aproximadamente 15 horas de operação;
- seis pessoas na operação;
- cadastro, presença, elegibilidade, sorteio e formação de equipes no fluxo;
- Lovable e Google Sheets como infraestrutura proporcional.

Questões que exigem validação de Emanuel:

- quais alternativas foram consideradas;
- qual foi o maior risco operacional;
- o que exigiu intervenção manual;
- o que piorou ou permaneceu frágil;
- o que seria feito diferente numa segunda edição;
- quais dados podem ser mostrados publicamente.

### 7.2 ITESAM

Segundo case.

Evidências já conhecidas:

- ativo em produção;
- PHP monolítico e MySQL;
- cadastro, consulta e chamados;
- integração, deploy, versionamento, suporte e CI/CD;
- trabalho em parceria, com responsabilidade técnica claramente delimitada.

Questões para validação:

- volume ou frequência de uso que pode ser divulgado;
- alternativas arquiteturais avaliadas;
- incidentes, limitações ou aprendizados reais;
- exemplo de evolução após feedback;
- motivo documentado para escolher arquitetura monolítica.

### 7.3 Criative Lab

Terceiro case.

Apresentar como produto em evolução, sem sugerir validação inexistente.

Questões para validação:

- hipótese principal;
- público inicial;
- comportamento que indicará valor;
- maior risco de produto;
- o que foi aprendido até agora;
- qual decisão afastou o produto da dependência exclusiva da Fatec.

## 8. Explorações

Rotas Inteligentes, Fince, ChamaAI, estudos de LLM e trabalhos acadêmicos adicionais devem ficar em `/exploracoes` até terem evidências suficientes para funcionar como cases principais.

Cada exploração precisa declarar claramente seu estado:

- hipótese;
- protótipo;
- estudo;
- experimento;
- demonstração acadêmica.

Não apresentar exploração como produto validado ou em produção.

## 9. Fases de implementação

### Fase 1 — Auditoria e preservação

- registrar o estado atual com screenshots desktop e mobile;
- mapear componentes, rotas e ativos existentes;
- identificar alterações não commitadas e preservá-las;
- catalogar conteúdo reutilizável;
- não remover páginas ou ativos nesta fase.

Entregável: inventário do que será mantido, movido, reescrito ou arquivado.

### Fase 2 — Fundação de conteúdo

- criar o modelo tipado de cases;
- migrar os dados atuais de `HomePage.tsx`;
- preencher apenas fatos existentes;
- marcar lacunas que dependem de Emanuel;
- validar o conteúdo do case Events antes de avançar para a versão pública.

Entregável: dados centralizados e primeiro case completo em conteúdo.

### Fase 3 — Rotas e navegação

- implementar `/casos`, `/casos/[slug]`, `/como-trabalho`, `/sobre` e `/exploracoes`;
- criar navegação global simples e responsiva;
- manter identidade ES/0 sem obrigar o visitante a entender sua nomenclatura;
- preservar `/brand` e `/p/[persona]` fora da navegação principal.

Entregável: arquitetura navegável com URLs reais.

### Fase 4 — Reconstrução da home

- reescrever o hero com foco no problema do visitante;
- adicionar reconhecimento da dor;
- destacar Events;
- apresentar as três formas de ajuda;
- apresentar ITESAM e Criative Lab como apoio;
- reduzir a biografia na home;
- reposicionar método, história e contato.

Entregável: home curta, clara e orientada à ação.

### Fase 5 — Experiência dos cases

- implementar as três camadas de leitura;
- trocar modal como experiência principal por páginas próprias;
- usar imagens e vídeos como evidência contextualizada;
- incluir trade-offs, riscos, limitações e retrospectiva;
- manter leitura escaneável no mobile.

Entregável: Events completo e template reutilizável para os demais cases.

### Fase 6 — Qualidade e lançamento

- validar semântica, teclado, foco, contraste e movimento reduzido;
- testar desktop e mobile sem overflow;
- validar imagens, vídeo, performance e estados de erro;
- configurar metadata por página, Open Graph, sitemap e URLs canônicas;
- executar TypeScript e build de produção;
- realizar teste de leitura de 6 e 60 segundos com pelo menos uma pessoa externa;
- registrar aprendizados antes de expandir o número de cases.

Entregável: versão pronta para avaliação pública.

## 10. Critérios de aceite

### Estratégia

- uma pessoa sem contexto entende a proposta principal sem rolar a página inteira;
- o texto descreve problemas reconhecíveis, não apenas competências;
- a home prioriza evidência real;
- a trajetória pessoal sustenta a confiança, mas não domina a entrada;
- a ação principal é clara.

### Cases

- cada case apresenta conflito, decisão, trade-off e evidência;
- métricas e resultados não são inventados;
- protótipos e hipóteses são identificados como tal;
- o papel de Emanuel é distinguível do trabalho de parceiros;
- limitações e retrospectiva estão visíveis;
- cada case possui URL própria.

### UX e acessibilidade

- navegação compreensível sem conhecer a marca ES/0;
- hierarquia legível em 6 segundos;
- conteúdo principal acessível por teclado;
- foco visível;
- movimento respeita `prefers-reduced-motion`;
- nenhuma rolagem horizontal em 390 px;
- nenhum conteúdo essencial depende exclusivamente de hover;
- modais, se mantidos como apoio, possuem foco controlado e retorno de foco.

### Engenharia

- TypeScript sem erros;
- build de produção concluído;
- nenhuma dependência nova sem justificativa;
- componentes reutilizáveis e conteúdo separado da apresentação;
- imagens usam `next/image` quando aplicável;
- páginas de case possuem metadata própria;
- alterações existentes no worktree são preservadas.

## 11. Fora de escopo

Não realizar nesta implementação:

- redesenho definitivo da logo;
- troca completa do sistema de marca;
- expansão de todas as personas;
- redesenho do Criative Lab como produto separado;
- criação de métricas ou depoimentos fictícios;
- inclusão de todos os projetos na navegação principal;
- animações decorativas sem função de leitura ou feedback.

A logo atual deve ser tratada como assinatura provisória. A percepção da marca deve ser consolidada primeiro por mensagem, casos e comportamento da experiência.

## 12. Regras para o agente executor

1. Ler este plano e os documentos existentes em `docs/` antes de alterar a arquitetura.
2. Inspecionar o worktree e preservar alterações do usuário.
3. Não inventar fatos, métricas, clientes, decisões ou resultados.
4. Quando faltar informação, registrar a lacuna no conteúdo e solicitar validação objetiva.
5. Implementar por fases pequenas e verificáveis.
6. Validar visualmente em desktop e mobile após mudanças estruturais.
7. Não remover conteúdo autoral de Emanuel; mover ou adaptar preservando a versão original em dados ou documentação.
8. Priorizar clareza e evidência sobre efeitos visuais.
9. Não alterar a identidade visual ou logo definitivamente sem nova aprovação.
10. Ao final de cada fase, informar o que mudou, o que foi validado e quais decisões permanecem abertas.

## 13. Prompt de handoff

```text
Trabalhe no projeto:
C:\Dev\Emanuel\Projetos\universo-emanuel\v2\porfolio\universo-emanuel

Leia integralmente:
docs/PLANO-PORTFOLIO-ORIENTADO-A-PROBLEMAS.md

Execute o plano por fases, começando pela auditoria do estado atual e pela fundação de conteúdo. Preserve todas as alterações existentes do usuário. Não invente métricas, decisões ou resultados. O objetivo é transformar o ES/0 em um portfólio multipágina orientado a problemas e decisões, tendo Events / Cadastro e presença como primeiro case principal.

Antes de consolidar conteúdo factual incompleto ou realizar mudanças definitivas de marca, solicite validação de Emanuel. Após cada fase, rode as verificações proporcionais, faça uma revisão visual desktop/mobile e reporte alterações, evidências e pendências.
```

