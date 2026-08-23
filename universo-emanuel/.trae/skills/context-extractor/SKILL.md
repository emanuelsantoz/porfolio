---
name: context-extractor
description: Use quando precisar extrair contexto da conversa, do código e da estrutura do projeto para atualizar a camada docs/context.
---

# Context Extractor

## Description

Extrai contexto explícito e implícito do projeto e transforma em documentação persistente.

## When to use

Use quando:
- O projeto mudou bastante
- Uma nova janela/sessão começou
- Houver necessidade de resumir estado atual
- Eu pedir para atualizar contexto
- Eu mencionar "extrair contexto", "context layer", "snapshot" ou "context-refresh"

## Instructions

1. Leia `docs/context/00-context-index.md`, se existir.
2. Leia arquivos centrais do projeto:
   - `package.json`
   - `src/core/store/personaStore.ts`
   - `src/core/types/persona.ts`
   - `src/components/providers/PersonaProvider.tsx`
   - `src/app/globals.css`
3. Identifique:
   - Stack e tecnologias
   - Arquitetura
   - Features implementadas
   - Decisões recentes
   - Pendências
   - Riscos
4. Atualize os arquivos em `docs/context/`:
   - 00-context-index.md (estado atual)
   - 04-codebase-map.md (se estrutura mudou)
   - 05-decisions-log.md (se nova decisão)
   - 08-changelog.md (se feature nova)
5. Não invente fatos - marque incertezas em `06-open-questions.md`.
6. Finalize com um resumo do que foi atualizado.
