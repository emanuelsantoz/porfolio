---
name: rules-generator
description: Use para gerar, revisar ou reorganizar regras Trae em .trae/rules, usando Always Apply, Specific Files, Intelligent e Manual.
---

# Rules Generator

## Description

Gera regras Trae modulares, pequenas e sem conflito.

## When to use

Use quando:
- Criar rules do projeto
- Melhorar comportamento da IA
- Organizar padrões de código
- Separar regras por frontend, backend, testes, arquitetura ou changelog

## Instructions

1. Leia regras existentes em `.trae/rules/`.
2. Identifique padrões já cobertos.
3. Evite duplicação e conflito.
4. Separe regras por objetivo:
   - `alwaysApply: true` para regras essenciais
   - `globs` para regras de arquivos específicos
   - `description` para regras inteligentes
   - `manual` quando a regra só deve ativar via referência
5. Mantenha cada regra objetiva (< 100 linhas ideal).
6. Após alterar rules, recomende iniciar nova conversa.

## Estrutura de Regras

```
.trae/rules/
├── 00-always-*.md      # Regras essenciais
├── 01-always-*.md       # Qualidade de código
├── 02-specific-*.md    # Frontend
├── 03-specific-*.md    # Backend/Core
├── 04-specific-*.md     # Tests
├── 05-intelligent-*.md   # Arquitetura
├── 06-intelligent-*.md   # Refatoração
├── 07-intelligent-*.md   # Changelog
├── 08-manual-*.md       # Refresh
├── 09-manual-*.md       # Review
└── 10-*.md              # Commits
```
