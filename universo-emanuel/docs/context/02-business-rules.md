# Business Rules — Universo Emanuel

## 1. Regras de Negócio Explícitas

### 1.1 Sistema de Personas
- Apenas **uma persona** pode estar ativa por vez
- A persona padrão (inicial) é sempre **Fullstack**
- A troca de persona deve ser **instantânea** (via Zustand store)
- Cada persona deve ter seu próprio **tema CSS** distinto

### 1.2 Design System
- Paleta principal: **Azul (#2563EB)**, Prata (#F1F5F9), Branco (#FFFFFF), Preto (#020617)
- O azul deve ser a cor mais nítida/visível
- Cada persona pode ter cores secundárias específicas
- Usar CSS Variables para permitir troca dinâmica de tema

### 1.3 Responsividade
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Navbar deve colapsar em menu hamburger em mobile

## 2. Regras Implícitas (Código)

### 2.1 Componentes React
- Todos componentes são **Client Components** (`"use client"`)
- Componentes usam **Framer Motion** para animações
- Store Zustand usa **React hooks pattern** (`create`)

### 2.2 Canvas de Desenho (UX/UI)
- Canvas é **delimitado** (600x400px), não tela cheia
- Ferramentas: Lápis, Borracha, Cores, Limpar
- Cores disponíveis: #E85D3F, #00C2FF, #00FF94, #FFFFFF
- Ao trocar de persona, canvas **não persiste** (resetado)

### 2.3 Animações
- Transições de persona: **500ms** com easing customizado
- Usar `AnimatePresence` do Framer Motion paraentradas/saídas
- Cada persona pode ter **componentes específicos** (Backgrounds, Easter Eggs)

## 3. Restrições Técnicas

- **Sem Backend:** Site é totalmente estático (SSG)
- **Sem Database:** Dados hardcoded ou via arquivos MDX futuros
- **Sem Auth:** Nenhum sistema de login
- **Sem API Calls Client-Side:** Exceto integrações futuras (GitHub, YouTube)

## 4. Permissões

- Usuário pode trocar de persona **livremente**
- Usuário pode desenhar no canvas **livremente**
- Usuário pode acessar links externos (GitHub, LinkedIn, Email)

## 5. Validações

- Links externos devem abrir em **nova aba** (`target="_blank"`)
- Email deve usar formato `mailto:`
- Canvas deve ignorar cliques fora da área delimitada

## 6. Estados Possíveis

### PersonaState
```typescript
{
  activePersona: PersonaType;
  setPersona: (persona: PersonaType) => void;
  isSoundEnabled: boolean;
  toggleSound: () => void;
}
```

### CanvasState
```typescript
{
  isDrawing: boolean;
  tool: 'pen' | 'eraser';
  color: string;
}
```

## 7. Edge Cases

| Caso | Comportamento |
|------|---------------|
| Resize janela durante desenho | Canvas **não redimensiona** (tamanho fixo) |
| Troca de persona durante desenho | Desenho é **perdido** |
| Click no bug QA | Mostra **alert** de parabéns |
| Hover em frame UX/UI | Toolbar aparece com **opacity transition** |
