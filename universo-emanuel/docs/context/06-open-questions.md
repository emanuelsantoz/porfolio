# Open Questions — Universo Emanuel

## 1. Conteúdo Real

**Pergunta:** Devemos migrar o conteúdo real do portfólio antigo (bio, projetos, experiência) para dados estruturados?

**Por que importa:** O MVP atual usa placeholders. Dados reais dariam credibilidade ao portfólio.

**Opções:**
1. Hardcode em arquivos TypeScript (simples, rápido)
2. Arquivos JSON externos (separação, fácil edição)
3. MDX/Contentlayer (mais robusto, permite markdown rico)
4. CMS headless (Sanity, Prismic) - overkill para portfólio

**Recomendação inicial:** Arquivos JSON + TypeScript para MVP, migrar para MDX quando necessário.

---

## 2. Persistência do Canvas

**Pergunta:** O desenho no canvas UX/UI deve persistir entre sessões ou ser resetado ao trocar de persona?

**Por que importa:** Usuários podem querer continuar um wireframe depois.

**Opções:**
1. **Resetar sempre** (atual) - Simplicidade, mas perde trabalho
2. LocalStorage - Persiste no navegador, mas complexidade adicional
3. Save/Load manual - Botões para exportar PNG e importar

**Recomendação inicial:** Manter reset (MVP), adicionar LocalStorage se demandado.

---

## 3. Integração com APIs Externas

**Pergunta:** Qual nível de integração com GitHub/YouTube é desejado?

**Por que importa:** Aumentaria muito o valor do portfólio, mas adiciona complexidade.

**Opções:**
1. **Nenhuma** (atual) - Simples, dados estáticos
2. GitHub API básica - Mostrar repositórios públicos
3. GitHub API completa - Stats, linguagens, streaks
4. YouTube API - Vídeos de coding sessions

**Recomendação inicial:** GitHub API básica após MVP.

---

## 4. Estrutura de Páginas

**Pergunta:** O portfólio será One-Page (atual) ou terá múltiplas páginas?

**Por que importa:** Afeta roteamento e navegação.

**Opções:**
1. **One-Page Application** (atual) - Scroll, âncoras, simples
2. Rotas separadas - /about, /projects, /contact
3. SPA com tabs - Conteúdo trocado via state

**Recomendação inicial:** Manter One-Page para MVP, considerar rotas se conteúdo crescer.

---

## 5. Performance vs Visual

**Pergunta:** Some elementos (Matrix, Canvas) usam CPU. Como balancear?

**Por que importa:** Usuários com máquinas fracas podem ter Lag.

**Opções:**
1. Manter como está - Desktop typically poderoso
2. Adicionar toggle para desabilitar efeitos
3. Reduzir qualidade/frame rate em mobile
4. Usar WebGL/Three.js para backgrounds (overkill)

**Recomendação inicial:** Adicionar toggle simples em Navbar para "Modo Performance".

---

## 6. Deploy e Infraestrutura

**Pergunta:** Onde e como fazer deploy?

**Por que importa:** Afeta workflow de desenvolvimento.

**Opções:**
1. **Vercel** (recomendado) - Native Next.js, rápido, gratis
2. Netlify - Alternativa, também gratis
3. GitHub Pages - Limitações com Next.js
4. VPS próprio - Overkill

**Recomendação inicial:** Vercel (native Next.js support, preview deploys).

---

## 7. SEO e Metadata

**Pergunta:** Qual nível de SEO é necessário?

**Por que importa:** Portfólio precisa ser encontrável.

**Opções:**
1. Basic - Title e description estáticos (atual)
2. Dynamic - Metadata baseado na persona ativa
3. Structured Data - Schema.org para pessoa
4. sitemap.xml + robots.txt - SEO técnico

**Recomendação inicial:** SEO técnico básico + sitemap.
