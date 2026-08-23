---
name: changelog-writer
description: Use quando uma tarefa modificar comportamento, arquitetura, documentação, APIs, features, bugs ou decisões do projeto.
---

# Changelog Writer

## Description

Atualiza o changelog de forma útil para futuras sessões de IA.

## When to use

Use ao finalizar:
- Feature
- Bugfix
- Refatoração
- Mudança de arquitetura
- Atualização de documentação
- Alteração em regra de negócio

## Instructions

1. Leia `docs/context/08-changelog.md`.
2. Adicione entrada em `[Unreleased]`.
3. Categorize em:
   - `Added` - Nova feature
   - `Changed` - Alteração de existente
   - `Fixed` - Bug corrigido
   - `Removed` - Feature removida
   - `Technical Notes` - Mudança técnica

4. Inclua "Context for next AI session":
   - O que foi feito
   - O que falta
   - Arquivos mais importantes alterados
   - Decisões recentes
   - Próximo melhor passo

5. Liste arquivos alterados:
   ```markdown
   **Arquivos alterados:**
   - `src/file1.ts`
   - `src/file2.tsx`
   ```

6. Registre pendências se houver.
