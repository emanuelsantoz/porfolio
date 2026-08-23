# Product Idea — Universo Emanuel

## 1. Problema

Portfólios tradicionais são estáticos, monótonos e falham em demonstrar a amplitude de habilidades de desenvolvedores fullstack. Um desenvolvedor com experiência em Backend, Frontend, Mobile, QA e Design precisa de uma plataforma que **represente visualmente** cada especialidade.

## 2. Público-Alvo

- **Recrutadores/Tech Recruiters:** Buscando candidatos versáteis
- **Clientes/Prospective Clients:** Avaliando habilidades
- **Hiring Managers:** Analisando fit cultural e técnico
- **Outros Desenvolvedores:** Inspiração e networking

## 3. Proposta de Valor

O **Universo Emanuel** é um ecossistema digital vivo que se metamorfoseia conforme a persona profissional ativa, demonstrando não apenas as tecnologias, mas a **maneira de pensar** e **aproximação criativa** de cada especialidade.

## 4. Personas (Casos de Uso)

| Persona | Descrição | Elemento Visual |
|---------|-----------|-----------------|
| **Fullstack** | Visão geral, modo padrão | Círculos girando, design clean |
| **Backend** | Terminal, arquitetura, microsserviços | Matrix/Terminal canvas |
| **UX/UI** | Design, wireframes, prototipagem | Grid Figma + Canvas desenhável |
| **Mobile** | Flutter, iOS, Android | Mockup de iPhone |
| **QA** | Testes, qualidade, bugs | Bug interativo que foge |
| **Automation** | CI/CD, pipelines | Logs de terminal |
| **Data** | SQL, NoSQL, dados | Queries SQL estilizadas |
| **AI** | LLMs, Prompt Engineering | Tema futurista, quote |

## 5. Features Existentes

- [x] Sistema de Personas com troca dinâmica de tema
- [x] Componentes visuais específicos por persona
- [x] Canvas de desenho livre (UX/UI Mode)
- [x] Navbar responsiva e adaptativa
- [x] Hero Section dinâmica
- [x] Seção de Projetos com cards
- [x] Seção de Contato
- [x] Animações de transição suaves

## 6. Features Planejadas

- [ ] Integração GitHub API (repositórios em tempo real)
- [ ] Integração YouTube API (vídeos de coding sessions)
- [ ] Área Study-Dev (roadmap interativo)
- [ ] Webkits (ferramentas: gerador de CPF, etc.)
- [ ] Sistema de conquistas (badges)
- [ ] Easter Eggs (Konami Code)
- [ ] CMS para gerenciar conteúdo (Contentlayer/MDX)

## 7. Fora do Escopo Atual

- Backend/API próprio (site é estático atualmente)
- Sistema de autenticação
- Blog/CMS completo
- E-commerce ou funcionalidades transacionais
- Aplicativo mobile nativo (web apenas)

## 8. Entidades de Negócio

```
Persona
├── id: string
├── label: string
├── icon: LucideIcon
├── theme: ThemeConfig
└── components: PersonaComponent[]

ThemeConfig
├── colors: ColorTokens
├── font: FontTokens
└── animations: AnimationConfig

Project
├── title: string
├── description: string
├── tech: string[]
├── link: string
└── type: 'mobile' | 'ux-ui' | 'fullstack'
```

## 9. Fluxos Principais

1. **Acesso ao Site:** Usuário chega → về Hero → entende conceito → explora personas
2. **Troca de Persona:** Usuário clica persona → tema muda → componentes específicos aparecem
3. **Interação UX/UI:** Usuário ativa UX/UI → pode desenhar no canvas → expressa criatividade
4. **Contato:** Usuário quer contatar → acessa seção contato → clica em email/LinkedIn
