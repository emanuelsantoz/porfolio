# Codebase Map — Universo Emanuel

## 1. Estrutura de Diretórios

```
universo-emanuel/
├── .trae/
│   ├── rules/              # Trae Rules
│   │   ├── 00-always-project-context.md
│   │   ├── 01-always-code-quality.md
│   │   ├── 02-specific-frontend.md
│   │   ├── 03-specific-backend.md
│   │   ├── 04-specific-tests.md
│   │   ├── 05-intelligent-architecture.md
│   │   ├── 06-intelligent-refactor.md
│   │   ├── 07-intelligent-changelog.md
│   │   ├── 08-manual-context-refresh.md
│   │   ├── 09-manual-architecture-review.md
│   │   └── 10-git-commit-message.md
│   └── skills/             # Trae Skills
│       ├── context-extractor/
│       ├── architecture-mapper/
│       ├── changelog-writer/
│       ├── rules-generator/
│       └── project-continuation/
├── docs/
│   ├── ARCHITECTURE.md      # (Antigo - migrar para context/)
│   ├── ROADMAP.md           # (Antigo - migrar para context/)
│   └── context/             # Nova camada de contexto
│       ├── 00-context-index.md
│       ├── 01-product-idea.md
│       ├── 02-business-rules.md
│       ├── 03-architecture-map.md
│       ├── 04-codebase-map.md
│       ├── 05-decisions-log.md
│       ├── 06-open-questions.md
│       ├── 07-roadmap.md
│       ├── 08-changelog.md
│       ├── 09-ai-commands.md
│       └── 10-idea-architecture-changelog-flow.md
└── src/
    ├── app/                 # Next.js App Router
    │   ├── globals.css      # Design tokens + temas CSS
    │   ├── layout.tsx       # Root layout
    │   └── page.tsx         # Home page
    ├── components/
    │   ├── organisms/       # Seções completas
    │   │   ├── Navbar.tsx
    │   │   ├── HeroSection.tsx
    │   │   ├── ProjectsSection.tsx
    │   │   └── ContactSection.tsx
    │   ├── personas/        # Componentes visuais por persona
    │   │   ├── BackendTerminal.tsx
    │   │   ├── UxGrid.tsx
    │   │   ├── MobileFrame.tsx
    │   │   └── QaBug.tsx
    │   ├── providers/       # Context providers
    │   │   └── PersonaProvider.tsx
    │   ├── atoms/           # (Futuro) Botões, inputs
    │   └── molecules/       # (Futuro) Cards, listas
    ├── core/               # Lógica de negócio
    │   ├── store/          # Zustand stores
    │   │   └── personaStore.ts
    │   └── types/          # Definições TypeScript
    │       └── persona.ts
    └── lib/                # Utilitários
        ├── utils.ts        # cn() helper
        └── hooks/          # (Futuro) Custom hooks
```

## 2. Responsabilidade de Cada Pasta

| Pasta | Responsabilidade |
|-------|-----------------|
| `app/` | Rotas Next.js, layout global, estilos base |
| `components/organisms/` | Seções de página completas e reutilizáveis |
| `components/personas/` | Componentes visuais específicos de cada persona |
| `components/providers/` | Context providers (PersonaProvider) |
| `core/store/` | Estado global da aplicação (Zustand) |
| `core/types/` | Tipos TypeScript compartilhados |
| `lib/` | Funções utilitárias e helpers |
| `.trae/rules/` | Regras de comportamento da IA |
| `.trae/skills/` | Procedures reutilizáveis carregadas sob demanda |
| `docs/context/` | Memória persistente do projeto |

## 3. Arquivos Principais

### `src/core/types/persona.ts`
Define os tipos e interfaces do sistema de personas.

```typescript
export type PersonaType = 
  | 'fullstack' 
  | 'ux-ui' 
  | 'mobile' 
  | 'backend' 
  | 'qa' 
  | 'automation' 
  | 'data' 
  | 'ai';

export interface PersonaState {
  activePersona: PersonaType;
  setPersona: (persona: PersonaType) => void;
  isSoundEnabled: boolean;
  toggleSound: () => void;
}
```

### `src/core/store/personaStore.ts`
Zustand store para gerenciamento de estado global.

### `src/components/providers/PersonaProvider.tsx`
Gerencia troca de tema e animações de transição.

### `src/app/globals.css`
Tokens CSS e definições de tema por persona.

## 4. Convenções Observadas

1. **Componentes:** PascalCase, arquivos `.tsx`
2. **Hooks:** camelCase com prefixo `use`
3. **Stores:** camelCase, export default
4. **Types:** PascalCase, export
5. **CSS Classes:** Tailwind utilities (kebab-case)
6. **Async/Await:** Preferido sobre .then()

## 5. Import Alias

```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

Uso: `import { Button } from "@/components/atoms/Button"`

## 6. Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build produção
npm run start    # Servidor produção
npm run lint     # ESLint
```
