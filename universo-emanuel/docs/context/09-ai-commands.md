# AI Commands — Universo Emanuel

Comandos reutilizáveis para usar no chat do Trae.

---

## `/load-context`

Carrega o estado atual do projeto e resume para continuidade.

```
Use a skill `project-continuation`.

Carregue:
- docs/context/00-context-index.md
- docs/context/08-changelog.md
- docs/context/07-roadmap.md
- docs/context/06-open-questions.md

Me diga:
1. Estado atual do projeto
2. Última coisa feita
3. Próxima tarefa recomendada
4. Riscos antes de continuar
```

---

## `/context-refresh`

Atualiza toda a camada de contexto com base no estado real do código.

```
Use a skill `context-extractor`.

Revise o código atual e atualize:
- docs/context/00-context-index.md
- docs/context/04-codebase-map.md
- docs/context/08-changelog.md

Liste:
- Contexto novo encontrado
- Documentação atualizada
- Inconsistências
- Próximos passos
```

---

## `/architecture-review`

Revisa a arquitetura atual e gera recomendações.

```
Use a skill `architecture-mapper`.

Leia docs/context/03-architecture-map.md e analise:
- Estrutura real do código
- Acoplamento excessivo
- Camadas misturadas
- Riscos de escalabilidade

Gere recomendações priorizadas:
- P0: Crítico
- P1: Importante
- P2: Melhoria
```

---

## `/idea-to-architecture`

Transforma uma ideia em arquitetura e plano técnico.

```
Quando eu descrever uma ideia, transforme em:

1. Requisitos funcionais
2. Requisitos não funcionais
3. Regras de negócio
4. Impacto arquitetural
5. Plano técnico
6. Tarefas
7. Atualização no roadmap
8. Estimativa de complexidade

Use docs/context/01-product-idea.md como referência.
```

---

## `/done-to-changelog`

Analisa mudanças recentes e atualiza o changelog.

```
Use a skill `changelog-writer`.

Analise as mudanças desde a última atualização e atualize:
- docs/context/08-changelog.md

Inclua:
- Added / Changed / Fixed / Removed
- Arquivos alterados
- Impacto técnico
- Pendências
- Contexto para próxima sessão
```

---

## `/rules-refresh`

Revisa as regras Trae e propõe melhorias.

```
Leia .trae/rules/ e .trae/skills/

Identifique:
- Duplicações
- Conflitos
- Regras desatualizadas
- Gaps

Proponha melhorias mantendo compatibilidade.
```

---

## `/next-task`

Recomenda a próxima tarefa mais valiosa.

```
Com base em:
- docs/context/07-roadmap.md
- docs/context/08-changelog.md
- docs/context/06-open-questions.md

Recomende a próxima tarefa considerando:
- Prioridade de negócio
- Dependências
- Esforço vs Impacto
- Riscos
```

---

## `/handoff`

Gera resumo para próxima sessão de IA.

```
Gere um resumo completo:

1. Estado atual do projeto
2. Decisões recentes
3. Arquivos mais importantes modificados
4. Pendências
5. Próximo passo recomendado
6. Riscos em aberto

Use docs/context/08-changelog.md como base.
```

---

## `/persona-check [nome]`

Verifica e testa uma persona específica.

```
Verifique a persona "[nome]" em:
- src/components/personas/*.tsx
- src/app/globals.css [data-theme="..."]
- src/core/types/persona.ts

Teste:
- Cores estão corretas?
- Componentes visuais funcionam?
- Animações são suaves?
- Conteúdo é contextual?
```
