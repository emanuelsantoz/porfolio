---
scene: git_message
---

# Git Commit Message Rules

Gere mensagens de commit usando Conventional Commits.

## Formato

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

## Types

| Type | Uso |
|------|-----|
| `feat` | Nova feature |
| `fix` | Correção de bug |
| `refactor` | Refatoração (sem mudança de behavior) |
| `docs` | Documentação |
| `style` | Formatação, lint (sem mudança de código) |
| `test` | Adicionar/modificar testes |
| `chore` | Tarefas de build, config, deps |
| `perf` | Melhoria de performance |
| `ci` | CI/CD |

## Scope

Opcional. Áreas do projeto:
- `ui` - Interface (componentes visuais)
- `core` - Lógica (store, types)
- `persona` - Sistema de personas
- `docs` - Documentação
- `config` - Configurações
- `deps` - Dependências

## Regras

- Use português claro.
- Seja específico.
- Não use mensagem genérica como "update files".
- Imperativo: "add" não "added"
- Primeira linha: max 72 caracteres
- Body: explicações adicionais se necessário

## Exemplos

```bash
# Feature nova
feat(persona): adicionar modo UX/UI com canvas desenhável

# Bug fix
fix(ux-grid): corrigir cursor que saia do canvas

# Refatoração
refactor(ui): extrair constantes de cor para CSS variables

# Documentação
docs(context): adicionar layer de contexto persistente

# Chore
chore(deps): atualizar framer-motion para v11
```

## Commits Atômicos

Prefira commits pequenos e focados:
- ❌ `feat: adicionar várias features`
- ✅ `feat(persona): adicionar canvas para UX/UI mode`
- ✅ `feat(ui): adicionar toolbar flutuante`
