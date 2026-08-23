---
alwaysApply: true
---

# Always Apply — Code Quality

Siga estas regras em todo o projeto:

## Estilo de Código

- Preserve o estilo existente do projeto.
- Use `import alias @/*` para imports de `src/`.
- Componentes React: PascalCase.
- Hooks customizados: `use` prefix.
- Tipos TypeScript: PascalCase com `export`.

## Performance

- Não faça renderizações desnecessárias.
- Use `useMemo` e `useCallback` quando apropriado.
- Lazy load componentes pesados.

## Segurança

- Nunca exponha segredos, tokens ou variáveis sensíveis.
- Links externos sempre com `target="_blank"` e `rel="noopener"`.
- Valide inputs de usuário.

## Documentação

- Ao alterar comportamento, atualize documentação em `docs/context/`.
- Registre decisões técnicas em `docs/context/05-decisions-log.md`.
- Marque incertezas em `docs/context/06-open-questions.md`.

## Ao Finalizar Tarefa

Informe sempre:
- Arquivos alterados
- Motivo das alterações
- Riscos
- Próximos passos
