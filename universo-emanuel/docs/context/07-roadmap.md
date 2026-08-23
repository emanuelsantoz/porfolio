# Roadmap — Universo Emanuel

## Agora (MVP Polish)

### ✅ Completo
- [x] Fundação Next.js + TypeScript + Tailwind
- [x] Sistema de Personas (Store + Provider)
- [x] 8 Personas visuais implementadas
- [x] Design System com CSS Variables
- [x] Seções fixas (Hero, Projects, Contact)
- [x] Navbar responsiva
- [x] Canvas de desenho (UX/UI)
- [x] Camada de contexto Trae

### 🚧 Em Progresso
- [ ] SEO básico (metadata dinâmica)
- [ ] Dados reais de projetos
- [ ] Bio/História completa

### 📋 A Fazer
- [ ] Corrigir warnings de lint
- [ ] Adicionar favicon otimizado
- [ ] Meta tags dinâmicas por persona

---

## Próximo (Content & polish)

### 📋 A Fazer
- [ ] Migrar conteúdo do portfólio antigo
- [ ] Implementar dados de projetos reais
- [ ] Adicionar seção "Sobre" detalhada
- [ ] Implementar experiência mobile otimizada
- [ ] Sitemap.xml e robots.txt
- [ ] Open Graph images

---

## Depois (Features)

### 📋 A Fazer
- [ ] Integração GitHub API (repositórios)
- [ ] Área Study-Dev com YouTube
- [ ] Webkits (ferramentas úteis)
- [ ] Sistema de conquistas (badges)
- [ ] Konami Code Easter Egg
- [ ] Toggle "Modo Performance"

---

## Backlog

### 📋 A Fazer
- [ ] PWA Support (offline)
- [ ] Multi-idioma (EN/PT)
- [ ] Storybook para componentes
- [ ] Testes E2E (Playwright)
- [ ] CMS com Contentlayer/MDX
- [ ] Analytics (Vercel Analytics)

---

## Critérios de Aceite por Fase

### MVP (Agora)
- [ ] Site carrega em <3s
- [ ] Todas personas funcionam sem crash
- [ ] Animações suaves em desktop
- [ ] Mobile responsivo (básico)

### Content & Polish
- [ ] Lighthouse score >90
- [ ] SEO básico funcionando
- [ ] Conteúdo real (não placeholders)

### Features
- [ ] GitHub API <500ms response
- [ ] Canvas responsivo em mobile
- [ ] Sem memory leaks em long sessions

---

## Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Performance em mobile | Alta | Médio | Modo Performance |
| Canvas consume CPU | Média | Baixo | Delimitar área |
| GitHub API rate limit | Baixa | Baixo | Cache local |
| Conteúdo desatualizado | Média | Alto | Processo de update |
