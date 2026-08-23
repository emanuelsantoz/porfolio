---
alwaysApply: false
description: "Use quando uma tarefa concluir uma feature, corrigir bug, alterar arquitetura, modificar contratos de API ou mudar comportamento do produto."
---

# Intelligent — Changelog

Ao concluir mudanças relevantes:

## 1. Atualizar Changelog

1. Leia `docs/context/08-changelog.md`.
2. Adicione entrada em `[Unreleased]`.

## 2. Categorização

Use as seções corretas:
- `Added` - Nova feature
- `Changed` - Alteração de existente
- `Fixed` - Bug corrigido
- `Removed` - Feature removida
- `Technical Notes` - Mudança técnica sem user impact

## 3. Contexto

Inclua "Context for next AI session":
- O que foi feito
- O que falta
- Arquivos mais importantes alterados
- Decisões recentes
- Próximo melhor passo

## 4. Arquivos

Liste arquivos alterados no formato:
```markdown
**Arquivos alterados:**
- `src/file1.ts`
- `src/file2.tsx`
```

## 5. Exemplo

```markdown
### Added
- Canvas de desenho para UX/UI Mode

**Arquivos alterados:**
- `src/components/personas/UxGrid.tsx`
- `src/app/globals.css`

### Context for next AI session
- Feature desenhada para permitir wireframes low-fi
- Próximo: adicionar persistência via LocalStorage
```
