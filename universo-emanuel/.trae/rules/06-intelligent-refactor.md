---
alwaysApply: false
description: "Use quando a tarefa envolver refatoração, limpeza de código, redução de duplicação, melhoria de legibilidade, performance ou manutenção."
---

# Intelligent — Refactor

Ao refatorar:

## 1. Preserve Comportamento

- Faça mudanças pequenas e verificáveis.
- Teste manual após cada mudança.
- Não mude o que não precisa mudar.

## 2. Communicate

- Explique antes o que será alterado.
- Não misture refatoração com feature nova sem avisar.
- Documente o "antes" e "depois".

## 3. Riscos

Depois da alteração, liste:
- Riscos potenciais
- Como validar que nada quebrou
- Rollback plan (se necessário)

## 4. Documentação

- Atualize o changelog com a seção `Changed` ou `Technical Notes`.
- Se afetar estrutura, atualize `docs/context/04-codebase-map.md`.

## 5. Checklist

- [ ] Comportamento preservado?
- [ ] Testes passando (se existirem)?
- [ ] Novo código mais simples que o anterior?
- [ ] Documentação atualizada?
