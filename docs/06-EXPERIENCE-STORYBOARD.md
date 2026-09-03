# 06 — Storyboard da experiência

> Estado: `EM CONSTRUÇÃO`
> Atualizado em: `2026-08-07`
> Protótipo vivo: `prototypes/01-header-hero.html`

Cada seção precisa de função narrativa declarada. Seção que existe "porque site tem" não entra.

---

## Home — mapa

| # | Seção | Função narrativa | Estado |
|---|---|---|---|
| 00 | Header | Orientação e saída para conversão | ✅ Especificado |
| 01 | Hero | Hook — a promessa em uma frase, com os dois caminhos abertos | ✅ Especificado |
| 02 | O problema | Nomear a falha do processo atual antes de falar da Vervana | Pendente |
| 03 | Como funciona | Método etapa por etapa — âncora `#how-it-works` | Pendente |
| 04 | Risco removido | Paga na entrega + reposição gratuita | Pendente |
| 05 | Quem avalia | "Engenheiros selecionam engenheiros", com rosto | Pendente |
| 06 | Prova | Só existe se houver lastro (P03) | Bloqueada |
| 07 | Os dois caminhos | Bifurcação: For Startups / Careers | Pendente |
| 08 | Resolução | CTA final, container estreito, um único lime | Pendente |
| 09 | Footer | Navegação, legal, idioma | Pendente |

---

## 00 — Header

**Função:** orientar sem competir com o hero, e manter a conversão sempre a um clique.

### Estrutura

```
[ícone + wordmark]   For Startups · Careers · About · Blog   [EN|PT]  [Start Hiring]  [☰]
```

| Elemento | Especificação |
|---|---|
| Posição | `fixed`, altura 72px, `z-index: 100` |
| Repouso | Fundo transparente, sem borda — o hero começa colado no topo |
| Scrolled | Após **64px**: `rgba(3,3,3,.82)` + `backdrop-filter: blur(14px) saturate(140%)` + borda inferior `--vv-border`. Transição de 280ms com `--ease-out` |
| Logo | Ícone 26px em Lounge Lizard + wordmark. No hover, o ícone desloca 2px no vetor da marca (cima/direita) |
| Nav | Inter 500, 14px, `--vv-text-secondary`. Hover clareia para `--vv-text` com fundo `rgba(254,254,254,.06)` |
| Idioma | Pill com EN/PT. Ativo recebe fundo lime com texto escuro. Único pill do header — dentro da regra de forma |
| CTA | `Button primary sm`, 38px. Some abaixo de 640px (o menu mobile assume) |
| Breakpoint do nav | Nav horizontal a partir de **1000px**. Abaixo, hambúrguer |

### Menu mobile

Overlay full-screen em `#030303`, links em Space Grotesk 500 com escala de 28→40px, divisor de 1px entre itens. CTA e microcopy no rodapé do overlay.
`Esc` fecha · foco vai para o primeiro link ao abrir e volta ao botão ao fechar · `body` trava o scroll · fecha automaticamente ao passar de 1000px.

### Acessibilidade

- Skip link como primeiro elemento focável
- `aria-expanded` e `aria-controls` no hambúrguer, `aria-label` alternando entre Abrir/Fechar menu
- Pill de idioma como `role="group"` com `aria-pressed` nos botões
- `<html lang>` muda junto com o idioma

---

## 01 — Hero

**Função:** o visitante precisa entender a promessa em uma frase e sentir que quem está do outro lado é engenheiro. Não é para admirar o site — é para reconhecer o próprio problema.

### Copy aprovada

| Slot | EN | PT-BR |
|---|---|---|
| Eyebrow | Curated by engineers | Curadoria feita por engenheiros |
| Headline | Curation and connection of exceptional people and startups | Curadoria e conexão entre pessoas excepcionais e startups |
| Lead | Vervana is the bridge between exceptional software engineers and scaling startups, curated by engineers: zero risk, up to 50% less than US market cost. | A Vervana é a ponte entre engenheiros de software excepcionais e startups em crescimento. Curadoria feita por engenheiros: risco zero e custo até 50% menor que o mercado americano. |
| CTA primário | Start a Search | Começar uma busca |
| CTA secundário | See How It Works | Ver como funciona |
| Microcopy | Every search is led by engineers | Toda busca é conduzida por engenheiros |

**Notas sobre a copy:**
- A headline vem da sinalização de escritório do brand book (pág. 30) — é canônica, não inventada.
- Corrigido `scaling startups startups` → `scaling startups` (palavra duplicada no original).
- Sugestão em aberto: `US market cost` → `US market rates` soa mais natural em inglês de negócio. Mantida a redação do cliente até decisão.
- ⚠️ O número **50%** segue sem fonte (P04). Se não houver base de cálculo, a frase precisa virar qualitativa.

### Composição

- Fundo `#030303` (Black C) — a abertura é o momento de peso e silêncio previsto em `01-CREATIVE-DIRECTION.md`
- Conteúdo **alinhado à esquerda**, largura máxima 60ch. Nada centralizado
- Campo de chevrons ocupa a direita e sangra pela borda, convergindo para cima/direita — o vetor do ícone
- Máscara em gradiente diagonal zera o pattern sob o texto: cumpre a regra "nunca atrás de corpo de texto"
- Halo radial em Beetle Wing no canto superior direito, dando profundidade sem gradiente decorativo
- Altura `min(940px, 100svh)` — `svh` evita o salto da barra de endereço no iOS
- Cue de scroll no canto inferior esquerdo, só acima de 760px de altura

### Hierarquia tipográfica

| Slot | Tratamento |
|---|---|
| Eyebrow | IBM Plex Mono 500, 12px, tracking 0.14em, uppercase, lime, precedido de régua de 26px |
| Headline | Space Grotesk 500, `clamp(2.625rem, 1.42rem + 5.15vw, 5.5rem)`, LH 1.02, tracking −0.033em, máx. 17ch |
| Lead | Inter 400, `clamp(1.0625rem, 1rem + .38vw, 1.3125rem)`, LH 1.58, máx. 54ch, `--vv-text-secondary` |
| Microcopy | IBM Plex Mono 400, 12px, tracking 0.06em, precedida do ícone da marca em lime |

### Orçamento de cor

Lime aparece em quatro pontos: eyebrow, botão primário, ícone da microcopy e o campo de chevrons a ~4% de opacidade efetiva. Total bem abaixo dos 7% da proporção do brand book.

### Motion — Convergência

O mecanismo dominante do projeto, e ele só acontece aqui.

| Aspecto | Decisão |
|---|---|
| Técnica | Canvas 2D. Sem WebGL — a compreensão não é espacial |
| Geometria | Chevron exato do brand book: 180.078 × 114.453, passo 95.34375 × 125.98047, fileiras alternando espelhamento |
| Estado inicial | Cada chevron deslocado em até ±340px/±260px, rotacionado em até ±36°, opacidade 0 |
| Estado final | Grade alinhada do pattern da marca |
| Duração | 2200ms, com atraso por chevron entre 0 e 0.54 do total |
| Curva | `1 - (1-t)⁴` — equivalente ao `--ease-out`: chega rápido, assenta |
| Determinismo | PRNG com seed fixa (`20260807`). **A composição é idêntica em todo carregamento** — sem isso o hero muda de cara a cada visita e vira ruído |
| Loop | Nenhum. A animação roda uma vez e o `requestAnimationFrame` encerra |
| Scroll | Campo desloca 70px em X e −54px em Y e desaparece ao longo de 620px de scroll, em rAF throttled com listener passivo |
| Densidade | Opacidade cresce da esquerda para a direita — o campo é mais denso longe do texto |

**Entrada do texto:** stagger de ~95ms entre eyebrow → headline → lead → CTAs → microcopy → cue, com deslocamento de −12px em X e 16px em Y. É o vetor de entrada do design system.

**`prefers-reduced-motion: reduce`:** o campo renderiza direto no estado convergido, o texto aparece sem deslocamento, `scroll-behavior` vira `auto`. Nenhuma informação depende da animação.

### Responsivo

| Largura | Comportamento |
|---|---|
| ≥1000px | Nav horizontal, cue visível, campo em escala máxima |
| 640–999px | Hambúrguer, CTA do header ainda visível |
| <640px | CTA do header some, campo reduz escala, headline em `clamp` mínimo |

Escala do chevron: `clamp(0.34, largura/2100, 0.62)` — mantém o chevron acima dos 40px mínimos exigidos pelo design system em qualquer viewport.

---

## Pendências do hero

| # | Pendência | Impacto |
|---|---|---|
| P04 | Fonte do "50%" | A frase do lead pode precisar mudar |
| P12 | Wordmark oficial em SVG | O logo do header é placeholder em Space Grotesk |
| — | Destino real de `Start a Search` e `Start Hiring` | Hoje ambos são `#` |
| — | Definir se `Start a Search` e `Start Hiring` levam ao mesmo lugar | Se sim, unificar o rótulo; dois nomes para a mesma ação dividem atenção |
