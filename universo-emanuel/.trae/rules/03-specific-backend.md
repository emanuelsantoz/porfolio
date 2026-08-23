---
alwaysApply: false
globs: "src/**/*.{ts,js},server/**/*.{ts,js},api/**/*.{ts,js},app/api/**/*.{ts,js},lib/**/*.{ts,js},services/**/*.{ts,js},core/**/*.{ts,tsx}"
---

# Specific Files — Core/Logic

Use esta regra ao trabalhar em lógica de negócio, stores, types ou utilitários.

## TypeScript

- Use types para dados.
- Evite `any`, use `unknown` quando necessário.
- Exportar tipos utilizados em múltiplos arquivos.

## Zustand Store

- Stores em `src/core/store/*.ts`.
- Types em `src/core/types/*.ts`.
- Use hook pattern: `const { state, setState } = useStore()`.

## Validação

- Valide entradas em nível de componente ou hook.
- Não retorne stack trace cru para usuário.

## Arquitetura

- Separe regra de negócio de camada de apresentação.
- Mantenha stores lean (estado UI, não lógica de negócio pesada).

## Arquivos Importantes

- `src/core/store/personaStore.ts` - Estado global de personas
- `src/core/types/persona.ts` - Tipos do sistema de personas

## Mudanças em Store

- Se alterar modelo de dados, registre impacto em `docs/context/03-architecture-map.md`.
- Atualize `docs/context/08-changelog.md`.
