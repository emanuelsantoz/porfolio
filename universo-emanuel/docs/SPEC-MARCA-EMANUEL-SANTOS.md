# Emanuel Santos — Especificação de marca v0.1

## 1. Essência

**Nome:** Emanuel Santos  
**Sistema / portal:** ES/0  
**Posicionamento:** desenvolvimento é a base; conectar pessoas, contexto e tecnologia é o método.  
**Ideia central:** ideias ganham força quando se tornam úteis para alguém.

Emanuel não se apresenta como especialista em tudo. É desenvolvedor com profundidade e um pensamento nexialista: aproxima áreas diferentes para compreender um problema inteiro e transformá-lo em produto.

### Referência catalogada

`docs/brand-assets/biblioteca-de-ativos-v0.1.jpg` registra a primeira prancha visual aprovada como direção do sistema. Ela documenta o monograma em E, os lockups, o favicon, o avatar, a paleta, a tipografia e o campo de conexões. Esta imagem é uma referência de direção, não substitui os arquivos SVG editáveis da biblioteca.

### Tom

- Claro, próximo e confiante; nunca corporativo demais.
- Técnico quando ajuda a entender; humano quando fala de pessoas e impacto.
- Curioso, construtivo, direto e em evolução.
- Evitar: “inovação” sem evidência, promessas grandiosas, visual genérico de IA, excesso de jargão.

## 2. Arquitetura da marca

**Emanuel Santos / ES/0** é a marca-mãe. Ela assina o portal, o método e os produtos.

Cada produto pode ganhar sua própria identidade, cor e atmosfera. Para manter o reconhecimento subconsciente de que Emanuel participou da construção, todos devem preservar pelo menos quatro elementos:

1. assinatura discreta `ES/0` ou `Emanuel Santos`;
2. tipografia e hierarquia claras;
3. uso intencional de grid, conexões ou continuidade;
4. uma interação útil — nunca movimento decorativo sem propósito.

**Regra importante:** a cor azul não precisa ser a cor dominante de um produto. Ela é o sinal do ecossistema Emanuel Santos. O produto pode usar a cor que melhor responde ao seu contexto.

Exemplo: UX/UI usa laranja; mobilidade pode usar azul elétrico; educação pode usar uma combinação mais aberta e acolhedora. A assinatura ES/0 entra de forma secundária e coerente.

## 3. Logo

### Direção consolidada para desenvolvimento

Criar um monograma baseado na letra **E**, com estética minimalista, tecnológica e precisa. A forma consolidada usa três traços arredondados, uma espinha vertical e uma quebra/conector no traço central.

O símbolo deve ter:

- três traços horizontais arredondados;
- uma espinha vertical simples;
- um pequeno ponto ou ruptura no traço central, representando conexão, continuidade e próxima ação;
- desenho monocolor, sem gradiente dentro do símbolo;
- leitura forte em 16 px, favicon, avatar, app icon e assinatura de apresentação.

### Lockups

- **Principal:** símbolo + `EMANUEL` + `SANTOS · ES/0`.
- **Compacto:** símbolo + `Emanuel Santos`.
- **Assinatura mínima:** símbolo sozinho.

### Regras de uso

- A logo é sempre monocromática: azul, azul-noturno, branco ou preto.
- Não aplicar sombras, contornos, texturas ou gradientes no símbolo.
- Área de respiro mínima: a largura do ponto do símbolo em todos os lados.
- Nunca usar a logo como elemento central de uma tela de produto; ela assina e orienta, não compete com a solução.

### Ativos criados

- `public/brand/es0-symbol.svg` — monograma vetorial.
- `public/brand/es0-lockup-dark.svg` — logo para fundo claro.
- `public/brand/es0-lockup-light.svg` — logo para fundo escuro.
- `public/brand/es0-favicon.svg` — favicon e ícone claro.
- `public/brand/es0-avatar.svg` — avatar do ecossistema.
- `src/components/brand/EmanuelLogo.tsx` — componente de marca aplicado no portal.
- `public/brand/es0-icon-traced.svg` — ícone traçado fornecido por Emanuel; usado para favicon, avatar e assinaturas mínimas. Não substitui o lockup principal.
- `public/brand/es0-icon-blue.svg`, `es0-icon-night.svg` e `es0-icon-white.svg` — variações institucionais do ícone.
- `public/brand/es0-app-icon-light.svg` e `es0-app-icon-night.svg` — aplicações prontas para ícones de aplicativo.

## 4. Paleta

### Cores-mãe — Emanuel Santos / ES/0

| Papel | Nome | Hex | Uso |
| --- | --- | --- | --- |
| Primária | Azul Conexão | `#2166C9` | marca, links, foco, nós e detalhes de conexão |
| Primária clara | Azul Sinal | `#79AEF4` | textos técnicos em fundo escuro, estados ativos leves |
| Primária profunda | Azul Campo | `#2F7DE1` | chamadas, destaque e superfícies de universo |
| Fundo escuro | Azul Noturno | `#07111F` | portal, hero, fundos imersivos e texto em negativo |
| Fundo claro | Papel | `#F8F7F3` | páginas editoriais e áreas de leitura |
| Apoio claro | Névoa Azul | `#EAF1FB` | cards, superfícies suaves e chips |
| Texto principal | Tinta | `#07111F` | títulos e leitura principal |
| Texto secundário | Grafite Azul | `#526174` | descrição, legenda e interface auxiliar |
| Branco | Branco | `#FFFFFF` | contraste e superfícies limpas |

### Cor de universo — exemplo atual UX/UI

| Papel | Nome | Hex | Uso |
| --- | --- | --- | --- |
| Acento UX/UI | Laranja Decisão | `#F24E1E` | interação, protótipo, foco e chamadas no universo UX/UI |
| Fundo UX/UI | Grafite | `#1E1E1E` | universo independente UX/UI |
| Superfície UX/UI | Grafite Elevado | `#242424` | cards e barras |

O laranja não substitui o azul Emanuel Santos. Ele identifica o recorte UX/UI.

### Proporção sugerida

- Marca-mãe: 60% azul-noturno/papel, 30% neutros, 10% azul conexão.
- Produtos: a cor do produto pode ocupar até 25% da tela; a assinatura da marca-mãe permanece pontual.
- Evitar arco-íris, gradientes gratuitos e usar mais de uma cor de destaque por seção.

## 5. Tipografia

| Função | Fonte | Uso |
| --- | --- | --- |
| Display | Space Grotesk | títulos, frases de manifesto, números grandes |
| Texto | Inter | parágrafos, navegação, interfaces e leitura longa |
| Técnica | JetBrains Mono | códigos ES/0, rótulos, metadados, estados e pequenas legendas |

### Hierarquia

- Títulos: Space Grotesk, peso 500–600, tracking levemente negativo.
- Texto: Inter, peso 400–500, entrelinha generosa.
- Metadados: JetBrains Mono, caixa alta, tracking amplo, tamanho pequeno.
- O wordmark da logo deve ser redesenhado como forma vetorial na etapa final; não depender da fonte como solução definitiva.

## 6. Sistema visual e layout

### Estrutura

- Grid desktop: 12 colunas, largura máxima de 1280 px, margens de 40 px.
- Grid mobile: 4 colunas, margens de 24 px.
- Escala de espaçamento: múltiplos de 8 px.
- Seções principais: respiro vertical amplo, normalmente 96–128 px em desktop.
- Cards: cantos arredondados de 24–32 px, bordas discretas, sombra apenas quando ajudar na profundidade.

### Assinaturas visuais

1. **Grid editorial:** linhas muito suaves no fundo para sugerir organização e construção.
2. **Campo de conexões:** nós e curvas que representam Pessoas, Contexto, Tecnologia, Produto e Continuidade.
3. **Luz controlada:** halos azuis em fundo escuro; nunca neon exagerado.
4. **Contraste calmo:** grandes áreas limpas, uma informação principal por bloco e pouco ruído.
5. **Fotografia real:** retratos escuros e diretos, luz controlada, azul presente como detalhe e não como fantasia.

### Movimento

- Movimento deve ser lento, suave e funcional.
- Linhas e nós podem pulsar entre 4 e 7 segundos.
- No hover de um nó, os demais elementos diminuem e apenas o selecionado permanece em evidência.
- Respeitar `prefers-reduced-motion`.
- Não usar movimento lateral contínuo, partículas aleatórias ou animações que atrapalhem leitura.

## 7. Estrutura de uma página de produto / universo

Cada universo deve parecer um site próprio, mas carregar a assinatura Emanuel Santos.

1. **Pergunta central:** qual problema humano está sendo enfrentado?
2. **Contexto:** para quem, em que cenário e por que isso importa?
3. **Demonstração:** protótipo, fluxo, interação ou evidência real.
4. **Construção:** decisões, tecnologia, aprendizados e limites.
5. **Continuidade:** próximo passo, evolução ou ponte de volta ao ES/0.

## 8. Entregáveis esperados do designer

- Logo vetorial final: símbolo, lockup horizontal, lockup compacto e favicon.
- Variantes monocromáticas: azul-noturno, azul conexão, branco e preto.
- Paleta em Figma com tokens de marca-mãe e tokens por universo.
- Estilos tipográficos com Space Grotesk, Inter e JetBrains Mono.
- Biblioteca inicial: botão, chip, card, rótulo técnico, navegação, seção e campo de conexões.
- Guia de motion para os nós/linhas e estados de hover.
- Aplicações: portal ES/0, header de produto, capa de apresentação e avatar social.

## 9. Referência visual para o designer

A referência enviada é valorizada pela simplicidade, peso e leitura do monograma. O objetivo não é copiar a marca Eros MD. A tradução para Emanuel Santos deve ser mais conectiva do que médica, mais construída do que luxuosa e mais humana do que futurista.
