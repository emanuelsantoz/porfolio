# Arquitetura do Sistema - Universo Emanuel

## Visão Geral
O projeto utiliza uma arquitetura baseada em **Micro-Frontends Lógicos** dentro de um monorepo Next.js, onde cada "Persona" atua como um domínio visual e funcional distinto, mas compartilhando o mesmo núcleo de dados e lógica.

## Stack Tecnológica

### Core
- **Framework:** Next.js 14+ (App Router)
- **Linguagem:** TypeScript 5.x
- **Estilização:** Tailwind CSS + Tailwind Merge + CLSX
- **Gerenciamento de Estado:** Zustand (Global) + React Context (Local)
- **Animações:** Framer Motion (Transições de Layout e Elementos)
- **Ícones:** Lucide React

### Estrutura de Diretórios
```bash
src/
├── app/                  # Next.js App Router
│   ├── (site)/           # Rotas públicas principais
│   ├── (ecosystem)/      # Ferramentas e laboratório
│   └── layout.tsx        # Injeção do PersonaProvider
├── core/                 # Lógica de Negócio Pura
│   ├── store/            # Gerenciamento de estado (Zustand)
│   ├── types/            # Definições de tipos TypeScript
│   └── hooks/            # Hooks customizados reutilizáveis
├── components/
│   ├── atoms/            # UI básica (Buttons, Inputs)
│   ├── molecules/        # Componentes compostos
│   ├── organisms/        # Seções completas
│   ├── personas/         # Componentes específicos de cada tema
│   └── providers/        # Context Providers
├── lib/                  # Utilitários e helpers
└── styles/               # Configurações globais de CSS
```

## Persona Engine
O sistema de personas é o coração da aplicação. Ele controla não apenas as cores (via variáveis CSS), mas também a renderização condicional de componentes de fundo e interações.

### Fluxo de Mudança de Persona
1. Usuário seleciona persona (clique).
2. `usePersonaStore` atualiza `activePersona`.
3. `PersonaProvider` detecta mudança e atualiza o atributo `data-theme` no `<body>`.
4. Componentes reagem via CSS Variables e Framer Motion `layoutId`.
