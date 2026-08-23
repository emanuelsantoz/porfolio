---
alwaysApply: false
globs: "src/**/*.{tsx,jsx,css,scss},app/**/*.{tsx,jsx,css,scss},components/**/*.{tsx,jsx,css,scss},pages/**/*.{tsx,jsx,css,scss}"
---

# Specific Files — Frontend

Use esta regra ao trabalhar em frontend.

## Componentes React

- Componentes devem ser pequenos e reutilizáveis.
- Separe UI, estado e chamadas externas quando possível.
- Mantenha acessibilidade básica (labels, aria-* quando necessário).
- Evite lógica de negócio pesada dentro de componentes visuais.

## Estilização

- Use Tailwind CSS utilities.
- Utilize CSS Variables para temas (definidos em `src/app/globals.css`).
- Mantenha consistência com tokens existentes.
- Paleta principal: Azul (#2563EB), Prata (#F1F5F9), Branco, Preto.

## Componentes Persona

- Novos componentes de persona: `src/components/personas/*.tsx`
- Themes específicos: `[data-theme="..."]` blocks em globals.css
- Use Framer Motion para animações.
- AnimatePresence para mount/unmount.

## Responsividade

- Mobile-first approach.
- Breakpoints Tailwind: sm (640px), md (768px), lg (1024px).

## Documentação

- Se criar novo componente relevante, documente em `docs/context/04-codebase-map.md`.
