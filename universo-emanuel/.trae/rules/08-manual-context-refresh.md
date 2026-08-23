---
alwaysApply: false
---

# Manual — Context Refresh

Use esta regra quando mencionado `#context-refresh`.

## Procedimento

1. Releia a estrutura atual do projeto (`src/`, `docs/`, `.trae/`).
2. Compare código atual com `docs/context/`.
3. Atualize:
   - `00-context-index.md` (se projeto mudou)
   - `04-codebase-map.md` (se estrutura mudou)
   - `08-changelog.md` (se做了什么 novo)
4. Liste:
   - Contexto novo encontrado
   - Documentação atualizada
   - Inconsistências entre código e docs
   - Próximos passos

## Comando de Atalho

```
#context-refresh
```
