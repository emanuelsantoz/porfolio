---
alwaysApply: true
---

# Always Apply — Project Context

Sempre considere `docs/context/00-context-index.md` como ponto de entrada do contexto do projeto.

## Antes de Implementar Mudanças Relevantes

1. Leia `docs/context/00-context-index.md`.
2. Leia os arquivos de contexto relacionados à tarefa:
   - 01-product-idea.md (se feature nova)
   - 03-architecture-map.md (se mudar estrutura)
   - 07-roadmap.md (se ordenar tarefas)
3. Confirme se a mudança respeita a arquitetura descrita.
4. Atualize `docs/context/08-changelog.md` ao concluir mudanças significativas.

## Nunca Assuma

- Nunca assuma contexto antigo se houver documentação atualizada em `docs/context/`.
- Se encontrar conflito entre código e documentação, informe o conflito e proponha atualização.
- Sempre cite de onde cada informação veio.

## Regras de Contexto

- Preserve o estilo existente do projeto.
- Prefira soluções simples, legíveis e pequenas.
- Evite arquivos grandes com responsabilidades misturadas.
- Não introduza dependências sem justificar.
- Trate erros de forma explícita.
- Ao finalizar tarefa, informe:
  - Arquivos alterados
  - Motivo das alterações
  - Riscos
  - Próximos passos
