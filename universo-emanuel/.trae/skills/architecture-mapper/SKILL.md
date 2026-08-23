---
name: architecture-mapper
description: Use para mapear arquitetura, fluxo de dados, módulos, integrações e decisões técnicas do projeto.
---

# Architecture Mapper

## Description

Mapeia a arquitetura real do projeto com base no código e documentação.

## When to use

Use quando:
- Criar ou revisar arquitetura
- Alterar módulos centrais
- Mexer em banco, APIs, integrações ou camadas
- Eu pedir "mapear arquitetura" ou "architecture review"

## Instructions

1. Leia a estrutura do projeto (`src/`, `docs/`, `app/`).
2. Identifique camadas e módulos:
   - UI Components
   - Persona Components
   - Providers/Context
   - State Management
   - Core Logic
3. Gere ou atualize diagrama Mermaid em `docs/context/03-architecture-map.md`.
4. Registre decisões em `docs/context/05-decisions-log.md`.
5. Atualize `docs/context/03-architecture-map.md` com:
   - Visão geral
   - Diagrama
   - Fluxo de dados
   - Módulos e responsabilidades
   - Pontos críticos
   - Dívidas técnicas
6. Liste riscos e dívidas técnicas.
