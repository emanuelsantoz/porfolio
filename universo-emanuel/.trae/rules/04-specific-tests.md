---
alwaysApply: false
globs: "**/*.{test,spec}.{ts,tsx,js,jsx},tests/**/*,e2e/**/*,__tests__/**/*"
---

# Specific Files — Tests

Use esta regra ao criar ou alterar testes.

## Padrões

- Testes devem validar comportamento, não implementação interna.
- Priorize casos críticos de regra de negócio, API e fluxos principais.
- Use nomes descritivos: `describe('FeatureName')` → `it('should do X when Y')`.

## Evitar

- Testes frágeis que quebram com refatoração.
- Mockar demais (perde valor).
- Testes sem assertion.

## Estrutura

```typescript
describe('ComponentName', () => {
  it('should render correctly', () => {
    // Arrange
    // Act
    // Assert
  });
});
```

## Ao Corrigir Bug

- Adicione teste de regressão quando viável.
- Registre em `docs/context/08-changelog.md` na seção Fixed.
