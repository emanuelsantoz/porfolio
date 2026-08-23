# Context Index — Universo Emanuel

## 00. Informações do Projeto

**Nome:** Universo Emanuel  
**Tipo:** Portfólio Digital / Ecossistema Interativo  
**Versão:** 0.1.0 (MVP)  
**Última Atualização:** 2026-06-30

## 01. Resumo (10 linhas)

O **Universo Emanuel** é um portfólio digital inovador que transcende a experiência tradicional de apresentação profissional. O projeto implementa um **"Persona Engine"** que transforma completamente a interface conforme a especialidade selecionada (Fullstack, Backend, UX/UI, Mobile, QA, etc.). Cada persona altera não apenas cores, mas layouts, animações, componentes visuais e elementos interativos. O design system é baseado em Tailwind CSS com temas dinâmicos via CSS Variables. A interatividade é powered by Framer Motion para animações fluidas.

## 02. Stack Principal

| Categoria | Tecnologia |
|-----------|------------|
| Framework | Next.js 14 (App Router) |
| Linguagem | TypeScript 5.x |
| Estilização | Tailwind CSS 3.4 |
| Estado Global | Zustand |
| Animações | Framer Motion 11 |
| Ícones | Lucide React |
| UI Utilities | clsx + tailwind-merge |
| Package Manager | npm |

## 03. Como Rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

## 04. Links para Documentação de Contexto

| Arquivo | Descrição |
|---------|-----------|
| [01-product-idea.md](./01-product-idea.md) | Ideia do produto, público-alvo, features |
| [02-business-rules.md](./02-business-rules.md) | Regras de negócio e validações |
| [03-architecture-map.md](./03-architecture-map.md) | Arquitetura do sistema, módulos, fluxos |
| [04-codebase-map.md](./04-codebase-map.md) | Estrutura de código, componentes |
| [05-decisions-log.md](./05-decisions-log.md) | Log de decisões técnicas |
| [06-open-questions.md](./06-open-questions.md) | Dúvidas pendentes |
| [07-roadmap.md](./07-roadmap.md) | Roadmap de implementação |
| [08-changelog.md](./08-changelog.md) | Changelog do projeto |

## 05. Arquitetura Resumida

```
┌─────────────────────────────────────────────────────┐
│                    App Layout                         │
│              (PersonaProvider + Navbar)               │
└──────────────────────┬──────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
┌───────────────┐ ┌──────────┐ ┌─────────────┐
│ HeroSection   │ │Projects  │ │ Contact     │
│               │ │Section   │ │ Section     │
└───────────────┘ └──────────┘ └─────────────┘
        │
        ▼
┌─────────────────────────────────────────────────────┐
│              PersonaProvider (Dynamic)                │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐  │
│  │Backend  │ │  UX/UI  │ │  Mobile │ │   QA    │  │
│  │Terminal │ │  Grid   │ │  Frame  │ │   Bug   │  │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘  │
└─────────────────────────────────────────────────────┘
```

## 06. Estado Atual do Projeto

- ✅ Fundação Next.js + TypeScript + Tailwind
- ✅ Persona Engine (Store + Provider)
- ✅ 8 Personas Implementadas (Fullstack, Backend, UX/UI, Mobile, QA, Automation, Data, AI)
- ✅ Componentes Visuais por Persona (Matrix, Grid, Mobile Frame, Bug)
- ✅ Design System com CSS Variables
- ✅ Seções Fixas (Hero, Projects, Contact)
- ✅ Navbar Adaptativa
- ✅ Canvas de Desenho (UX/UI Mode)
- 🚧 Content Migration (Parcial)
- 🚧 SEO e Metadata
- 🚧 Deploy

## 07. Próximos Passos Recomendados

1. **Alta Prioridade:**
   - Completar conteúdo real (Bio, Projetos, Contato)
   - Implementar SEO dinâmico
   - Adicionar mais personas visuais (Mobile Frame para Android, etc.)

2. **Média Prioridade:**
   - Integração com GitHub API (repositórios reais)
   - Integração com YouTube API (vídeos)
   - Implementar Webkits (ferramentas)
   - Sistema de conquistas/Easter Eggs

3. **Baixa Prioridade:**
   - PWA Support
   - Analytics
   - Multi-idioma

## 08. Contato do Projeto

- **Dono:** Emanuel Santos
- **GitHub:** https://github.com/emanuelsantoz
- **Portfólio Antigo:** https://portifolio-emanuelsantos.vercel.app/
- **LinkedIn:** https://www.linkedin.com/in/emanu-ell
