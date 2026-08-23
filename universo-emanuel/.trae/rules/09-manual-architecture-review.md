---
alwaysApply: false
---

# Manual — Architecture Review

Use esta regra quando mencionado `#architecture-review`.

## Procedimento

1. Leia `docs/context/03-architecture-map.md`.
2. Analise estrutura real do código.
3. Identifique:
   - Acoplamento excessivo
   - Duplicações
   - Camadas misturadas
   - Riscos de escalabilidade
   - Problemas de segurança
   - Inconsistências de nomenclatura

## 4. Gere Recomendações

Priorizadas:
- **P0 - Crítico**: Deve ser corrigido agora
- **P1 - Importante**: Corrigir no próximo sprint
- **P2 - Melhoria**: Considerar para futuro

## 5. Atualização

Se uma decisão for tomada durante a review:
- Registre em `docs/context/05-decisions-log.md`
- Atualize `docs/context/03-architecture-map.md` se necessário
- Adicione notas em `docs/context/08-changelog.md`

## Comando de Atalho

```
#architecture-review
```
