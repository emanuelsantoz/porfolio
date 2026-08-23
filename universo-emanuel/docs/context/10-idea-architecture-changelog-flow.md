# Idea + Architecture → Changelog Flow

Este documento descreve o pipeline completo para transformar uma ideia em implementação registrada no changelog.

---

## 1. Ideia

### Entrada
Uma ideia vinda do usuário ou de uma sessão de brainstorming.

### Formato de Registro

```markdown
## [Título da Ideia]

**Problema:** Qual problema resolve?

**Usuário afetado:** Quem se beneficia?

**Valor esperado:** O que ganhamos?

**Escopo:**
- Dentro: ...
- Fora: ...

**Origem:** [conversa/data]
```

### Exemplo

```markdown
## Canvas de Desenho para UX/UI Mode

**Problema:** Usuários não podem expressar ideias de wireframe no site.

**Usuário afetado:** Designers, recrutadores querendo ver criatividade.

**Valor esperado:** Engajamento, demonstração de skills.

**Escopo:**
- Dentro: Canvas 600x400px, ferramentas básicas
- Fora: Exportar para PNG, múltiplos frames

**Origem:** Conversa 2026-06-30
```

---

## 2. Requisitos

### Converter Ideia em:

1. **Requisitos Funcionais**
   - O que o sistema deve fazer?
   - Quais interações são possíveis?
   - Quais são os fluxos principais?

2. **Requisitos Não Funcionais**
   - Performance (tempo de resposta, FPS)
   - Acessibilidade
   - Responsividade
   - Browser support

3. **Regras de Negócio**
   - O que é permitido?
   - O que é proibido?
   - Validações necessárias?

4. **Critérios de Aceite**
   - Como saber que está pronto?
   - Testes esperados?

---

## 3. Arquitetura

### Mapear Impacto em:

1. **Módulos**
   - Qual módulo/arquivo será criado?
   - Qual módulo será modificado?

2. **Entidades**
   - Novos tipos TypeScript?
   - Alterações em interfaces existentes?

3. **APIs** (se aplicável)
   - Endpoints afetados?
   - Contratos de API mudados?

4. **Componentes**
   - Novos componentes?
   - Componentes modificados?

5. **Integrações**
   - Serviços externos?
   - Bibliotecas novas?

6. **Segurança**
   - XSS, CSRF considerations?
   - Validação de input?

---

## 4. Plano Técnico

### Criar:

1. **Tarefas**
   ```markdown
   - [ ] Tarefa 1
   - [ ] Tarefa 2
   - [ ] Tarefa 3
   ```

2. **Ordem de Implementação**
   ```
   1. Setup (tipos, utils)
   2. Componente base
   3. Features
   4. Integração
   5. Testes
   ```

3. **Arquivos Prováveis**
   ```
   src/components/personas/UxGrid.tsx (modificar)
   src/app/globals.css (modificar)
   src/core/types/persona.ts (verificar)
   ```

4. **Riscos**
   ```markdown
   - Risco 1: [descrição] → Mitigação
   - Risco 2: [descrição] → Mitigação
   ```

5. **Estratégia de Teste**
   - Testar manualmente em cada persona
   - Verificar responsividade
   - Performance check

---

## 5. Implementação

### Durante Implementação:

1. **Seguir `.trae/rules/`**
   - Check Always Apply rules
   - Check Specific Files rules se relevante

2. **Usar Skills Relevantes**
   - `architecture-mapper` se arquitetura mudar
   - `changelog-writer` se comportamento mudar

3. **Preservar Arquitetura**
   - Não quebrar padrões existentes
   - Manter convenções de nomenclatura

4. **Documentar Decisões**
   - Nova decisão? → `docs/context/05-decisions-log.md`
   - Dúvida pendente? → `docs/context/06-open-questions.md`

---

## 6. Changelog

### Ao Terminar:

1. **Ler `docs/context/08-changelog.md`**

2. **Adicionar entrada em `[Unreleased]`:**

```markdown
## [Unreleased]

### Added
- Descrição da feature

### Changed
- Descrição da mudança

### Fixed
- Descrição do fix
```

3. **Categorizar Correto:**
   - `Added`: Nova feature
   - `Changed`: Alteração de existente
   - `Fixed`: Bug corrigido
   - `Removed`: Feature removida
   - `Technical Notes`: Mudança técnica sem user impact

4. **Incluir Contexto para Próxima Sessão:**

```markdown
### Context for next AI session
- O que foi feito: ...
- O que falta: ...
- Arquivos mais importantes: ...
- Decisões recentes: ...
- Próximo melhor passo: ...
```

5. **Registrar Arquivos Alterados:**

```markdown
**Arquivos alterados:**
- `src/components/personas/UxGrid.tsx`
- `src/app/globals.css`
```

---

## Template Completo

```markdown
# [Título da Feature]

## 1. Ideia

**Problema:** ...
**Usuário:** ...
**Valor:** ...

## 2. Requisitos

### Funcionais
- [ ] ...

### Não Funcionais
- Performance: ...
- Responsivo: ...

### Regras de Negócio
- Permitido: ...
- Proibido: ...

## 3. Arquitetura

**Impacto:**
- Módulos: ...
- Tipos: ...
- Componentes: ...

## 4. Plano

**Tarefas:**
- [ ] ...

**Riscos:**
- ...

## 5. Implementação

[Durante implementação]

## 6. Changelog

[Ao finalizar - atualizar docs/context/08-changelog.md]
```
