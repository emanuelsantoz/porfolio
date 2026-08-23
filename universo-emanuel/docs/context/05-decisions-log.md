# Decisions Log — Universo Emanuel

## 2026-06-30 — Escolha da Stack Principal

**Status:** Aceita ✅

**Contexto:**
Precisei escolher entre React SPA (Vite) vs Next.js para o portfólio. O objetivo era ter SEO, performance e SSR.

**Decisão:**
Utilizar Next.js 14 com App Router.

**Motivo:**
- SSR/SSG para SEO impecável
- Rotas dinâmicas para futuras páginas de projetos
- Estrutura de pasta intuitiva (App Router)
- Suporte nativo a TypeScript
- Integração fácil com Vercel

**Impacto:**
- Curva de aprendizado mais alta que Vite
- Build mais lento em dev
- Benefício a longo prazo em SEO e performance

**Arquivos relacionados:**
- `package.json`
- `next.config.mjs`
- `tsconfig.json`

---

## 2026-06-30 — Sistema de Theming

**Status:** Aceita ✅

**Contexto:**
O projeto precisa suportar 8 personas com visuais completamente diferentes. Precisava de uma solução escalável.

**Decisão:**
Utilizar CSS Variables + Tailwind CSS para theming dinâmico.

**Motivo:**
- CSS Variables permitem troca de tema em runtime
- Tailwind já gera utilitários baseados em variáveis
- Performance superior a bibliotecas de styled-components
- Manutenção facilitada

**Impacto:**
- Tokens definidos em `globals.css`
- Cada persona tem seu `[data-theme="..."]` block
- Componentes usam classes utilitárias do Tailwind

**Arquivos relacionados:**
- `src/app/globals.css`

---

## 2026-06-30 — Gerenciamento de Estado

**Status:** Aceita ✅

**Contexto:**
Necesitava de um estado global simples para gerenciar a persona ativa. Redux seria overkill.

**Decisão:**
Utilizar Zustand para estado global.

**Motivo:**
- API minimalista e intuitiva
- Não requer providers wrappers
- TypeScript nativo
- Bundle size pequeno (~1kb)
- Perfeito para estado UI simples

**Impacto:**
- Store simples com 4 campos (activePersona, setPersona, isSoundEnabled, toggleSound)
- Acesso direto via hook em qualquer componente

**Arquivos relacionados:**
- `src/core/store/personaStore.ts`

---

## 2026-06-30 — Animações e Transições

**Status:** Aceita ✅

**Contexto:**
O conceito de "Universo" requer transições suaves e dramáticas entre personas.

**Decisão:**
Utilizar Framer Motion com AnimatePresence.

**Motivo:**
- API declarativa e poderosa
- Suporte a AnimatePresence para mount/unmount
- Layout animations para transições fluidas
- Ótima integração com React

**Impacto:**
- PersonaProvider gerencia AnimatePresence
- Transições de ~500ms com easing customizado
- Cada persona pode ter componentes de background animados

**Arquivos relacionados:**
- `src/components/providers/PersonaProvider.tsx`

---

## 2026-06-30 — Paleta de Cores Principal

**Status:** Aceita ✅

**Contexto:**
Emanuel especificou azul, prata, branco e preto como cores principais, com azul sendo o mais nítido.

**Decisão:**
```css
--primary: #2563EB;     /* Azul Vibrante */
--background: #F8FAFC;  /* Prata claro */
--foreground: #020617;  /* Preto profundo */
--border: #E2E8F0;      /* Prata médio */
```

**Motivo:**
- Azul #2563EB é acessível (WCAG AA)
- Contraste adequado entre fundo claro e texto escuro
- Profissionalismo com personalidade

**Impacto:**
- Definido em `:root` em globals.css
- Outras personas sobrescrevem conforme necessidade

**Arquivos relacionados:**
- `src/app/globals.css`

---

## 2026-06-30 — Canvas de Desenho (UX/UI Mode)

**Status:** Aceita ✅

**Contexto:**
Emanuel queria poder desenhar wireframes de baixa fidelidade diretamente no site.

**Decisão:**
Implementar canvas HTML5 com ferramentas de desenho delimitadas.

**Motivo:**
- Canvas nativo é performático
- Ferramentas simples (pen, eraser, colors)
- Container delimitado (600x400px) mantém organização

**Impacto:**
- UxGrid component agora inclui canvas funcional
- Toolbar flutua sobre frame
- Ao trocar de persona, canvas reseta

**Arquivos relacionados:**
- `src/components/personas/UxGrid.tsx`
