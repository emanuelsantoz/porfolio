---
name: project-continuation
description: Use no começo de uma nova sessão para carregar contexto do projeto e continuar de onde parou.
---

# Project Continuation

## Description

Carrega o estado atual do projeto para permitir continuidade entre sessões.

## When to use

Use quando:
- Iniciar nova janela
- Eu disser "continuar projeto"
- Eu disser "carregar contexto"
- Eu mencionar "LOAD", "resume", "retomar" ou "continue"

## Instructions

1. Leia na ordem:
   - `docs/context/00-context-index.md`
   - `docs/context/08-changelog.md`
   - `docs/context/07-roadmap.md`
   - `docs/context/06-open-questions.md`

2. Resuma:
   - Estado atual do projeto
   - Última coisa feita
   - Próximo passo recomendado
   - Riscos
   - Arquivos importantes

3. Confirme antes de implementar:
   - "Encontrei que o último trabalho foi [X]. Devo continuar com [Y]?"

## Output Format

```
## Estado Atual
[Resumo do projeto]

## Última Coisa Feita
[O que foi feito no changelog]

## Próximo Passo Recomendado
[Sugerido do roadmap]

## Riscos
[Lista de riscos em aberto]

## Arquivos Importantes
- `src/...`
- `src/...`
```

## Comandos Relacionados

- `/load-context` - Carrega contexto resumido
- `/context-refresh` - Atualiza toda a camada
