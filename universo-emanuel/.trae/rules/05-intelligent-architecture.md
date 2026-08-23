---
alwaysApply: false
description: "Use quando a tarefa envolver arquitetura, módulos, estrutura de pastas, integrações, fluxo de dados ou decisões técnicas relevantes."
---

# Intelligent — Architecture

Quando esta regra for relevante:

## 1. Análise de Impacto

1. Leia `docs/context/03-architecture-map.md`.
2. Identifique impacto arquitetural antes de codar.
3. Liste arquivos/módulos afetados.

## 2. Preservação

- Prefira mudanças incrementais.
- Não quebre contratos existentes entre módulos.
- Mantenha backwards compatibility quando possível.

## 3. Documentação

- Se houver nova decisão arquitetural, registre em `docs/context/05-decisions-log.md`.
- Se a arquitetura real divergir da documentada, atualize a documentação.
- Ao final, acrescente notas técnicas em `docs/context/08-changelog.md`.

## 4. Checklist Arquitetural

- [ ] Módulos bem definidos?
- [ ] Responsabilidades claras?
- [ ] Dependências gerenciáveis?
- [ ] Pontos de falha identificados?
- [ ] Performance considerada?
