# 03 — Design System Vervana

> Estado: `EM REVISÃO`
> Atualizado em: `2026-08-07`
> Deriva de: `BRAND-SYSTEM.md` (fonte de verdade da marca)
> Implementação: `design-system/tokens.css`

O sistema deve permitir consistência sem transformar todas as seções no mesmo template.

---

## 1. Fundamentos

| Item | Decisão |
|---|---|
| Direção associada | `01-CREATIVE-DIRECTION.md` |
| Temas | **Ambos.** Escuro é padrão e canônico; claro é alternativo |
| Estratégia de tokens | Três camadas: primitivo → semântico → componente. CSS custom properties como fonte única, Tailwind v4 lendo via `@theme` |
| Biblioteca existente | Nenhuma. Componentes próprios sobre Radix Primitives (comportamento) — sem shadcn default, que traria estética genérica e raio arredondado incompatível com a marca |
| Princípio governante | **Geometria angular.** O brand book diz "não há curvas, não há suavizações". O sistema honra isso: raio zero é o padrão, arredondamento é exceção autorizada |

### Arquitetura de tokens

```
--vv-lime-500: #9AFF1C          camada 1 · primitivo · nunca usado direto em componente
      ↓
--vv-accent: var(--vv-lime-500)  camada 2 · semântico · troca entre temas
      ↓
--vv-btn-primary-bg: var(--vv-accent)   camada 3 · componente
```

**Regra:** nenhum componente referencia um primitivo. Se um componente precisa de uma cor que não existe na camada semântica, a camada semântica está incompleta — corrija lá, não no componente.

---

## 2. Cor

### 2.1 Primitivos

Valores oficiais do brand book. Não inventar tons intermediários sem registrar em `11-DECISION-LOG.md`.

```
Lounge Lizard   100 #EBFFCC · 200 #D8FF99 · 300 #C4FF66 · 400 #B1FF33 · 500 #9AFF1C · 600 #7ECC00
Beetle Wing     100 #CCF8FF · 300 #00B1CC · 700 #008599 · 800 #005866 · 900 #003740 · 950 #001F24
Ink (Black 6C)  500 #4A5B6D · 700 #253242 · 800 #1A2332 · 850 #101820 · 900 #0A0F16 · 950 #030303
Gray            100 #E6E6E6 · 200 #CCCCCC · 300 #B3B3B3 · 400 #999999
Briliance       #FEFEFE
```

> `ink-850` é o rótulo que damos ao **Black 6C `#101820`** para encaixá-lo na escala. `ink-950` é o **Black C `#030303`**. Os hex são oficiais; só os rótulos numéricos são nossos.

### 2.2 Semânticos — tema escuro (padrão)

| Token | Valor | Função | Contraste verificado |
|---|---|---|---|
| `--vv-bg` | `ink-850` `#101820` | Fundo da página | — |
| `--vv-bg-sunken` | `ink-900` `#0A0F16` | Faixas recuadas, footer | — |
| `--vv-bg-max` | `ink-950` `#030303` | Modais, overlays, peso máximo | — |
| `--vv-surface` | `ink-800` `#1A2332` | Cards, painéis | 1.13:1 vs bg — **exige borda** |
| `--vv-surface-brand` | `beetle-900` `#003740` | Seções de destaque institucional | 1.38:1 vs bg — só superfície |
| `--vv-border` | `ink-700` `#253242` | Divisores, contorno de card | 1.37:1 — decorativo |
| `--vv-border-strong` | `ink-500` `#4A5B6D` | Contorno de input, foco secundário | 2.56:1 |
| `--vv-text` | `briliance` `#FEFEFE` | Texto principal | **17.7:1** ✅ |
| `--vv-text-secondary` | `gray-300` `#B3B3B3` | Texto de apoio | **8.5:1** ✅ |
| `--vv-text-muted` | `gray-400` `#999999` | Legendas, metadados | **6.3:1** ✅ |
| `--vv-text-disabled` | `ink-500` `#4A5B6D` | Desabilitado | 2.56:1 — não-informativo |
| `--vv-accent` | `lime-500` `#9AFF1C` | Ação, link, foco, destaque | **14.2:1** ✅ |
| `--vv-accent-hover` | `lime-400` `#B1FF33` | Hover de ação | ✅ |
| `--vv-accent-fg` | `ink-850` `#101820` | Texto **sobre** preenchimento lime | **14.2:1** ✅ |
| `--vv-accent-soft` | `rgba(154,255,28,.12)` | Fundo de chip, halo | — |
| `--vv-info` | `beetle-300` `#00B1CC` | Informação, estado neutro | 7.0:1 ✅ |
| `--vv-danger` | `#FF5A47` | Erro | 5.8:1 ✅ |
| `--vv-success` | `lime-400` `#B1FF33` | Sucesso | ✅ |
| `--vv-warning` | `#FFB020` | Alerta | 9.8:1 ✅ |

> `danger`, `warning` e `success` não existem no brand book. São extensões funcionais mínimas exigidas por formulários e pelo painel admin, escolhidas para conviver com a paleta sem competir com o lime. Registradas em `11-DECISION-LOG.md`.

### 2.3 Semânticos — tema claro (alternativo)

| Token | Valor | Função | Contraste |
|---|---|---|---|
| `--vv-bg` | `briliance` `#FEFEFE` | Fundo | — |
| `--vv-bg-sunken` | `gray-100` `#E6E6E6` | Faixas recuadas | — |
| `--vv-surface` | `#FFFFFF` + borda | Cards | — |
| `--vv-surface-brand` | `beetle-900` `#003740` | Bloco institucional (texto claro dentro) | 12.9:1 ✅ |
| `--vv-border` | `gray-200` `#CCCCCC` | Divisores | — |
| `--vv-text` | `ink-850` `#101820` | Texto principal | **17.7:1** ✅ |
| `--vv-text-secondary` | `ink-500` `#4A5B6D` | Apoio | **6.9:1** ✅ |
| `--vv-text-muted` | `#616F7D` | Legendas | 5.1:1 ✅ |
| `--vv-accent` | `beetle-900` `#003740` | **Link e texto de ação** | **12.9:1** ✅ |
| `--vv-accent-fill` | `lime-500` `#9AFF1C` | Preenchimento de botão | — |
| `--vv-accent-fg` | `ink-850` `#101820` | Texto sobre lime | **14.2:1** ✅ |

**A troca que define o tema claro:** no escuro, `accent` é lime e serve para texto *e* preenchimento. No claro, `accent` vira Beetle Wing para texto, e o lime sobrevive **apenas** como preenchimento. Ver `BRAND-SYSTEM.md` §8.4.

### 2.4 Distribuição

Vinculante, do brand book (pág. 59):

- **Escuro:** Black C 45% · Black 6C 25% · Beetle Wing 18% · Lounge Lizard **7%** · Briliance 5%
- **Claro:** Briliance 50% · Gray 100 15% · Beetle Wing 15% · Black 6C 12% · Black C 5% · Lounge Lizard **3%**

**Como auditar uma tela:** capture o screenshot, reduza a 32px de largura, conte os pixels lime. Se passa de 7% da área, corte destaque.

**Mudanças de atmosfera ao longo da página:** o site alterna entre três fundos — `bg` (#101820) para a maior parte, `bg-max` (#030303) para momentos de peso e silêncio, e `surface-brand` (#003740) para blocos institucionais. Essa alternância é o principal recurso de ritmo vertical, e substitui o reflexo de cardificar tudo.

---

## 3. Tipografia

### 3.1 Famílias

| Uso | Família | Pesos | Fallback | Licença | Carregamento |
|---|---|---|---|---|---|
| Display / títulos | **Space Grotesk** | 300, 400, 500, 600 | `"Space Grotesk Fallback", system-ui, sans-serif` | OFL | `next/font/google`, variável, `display: swap`, subset `latin`+`latin-ext` |
| Corpo / UI | **Inter** | 300, 400, 500, 600 | `"Inter Fallback", system-ui, sans-serif` | OFL | `next/font/google`, variável, `display: swap` |
| Dados / técnico | **IBM Plex Mono** | 400, 500 | `ui-monospace, "SF Mono", monospace` | OFL | `next/font/google`, subset apenas dos pesos usados |

`latin-ext` é obrigatório: PT-BR usa `ç ã õ é í ú â ê ô à`. Sem ele, os títulos quebram em fallback no meio da palavra.

**Ajuste de fallback:** declarar `size-adjust`, `ascent-override` e `descent-override` nos fallbacks para eliminar CLS na troca de fonte. O `next/font` gera isso automaticamente quando `adjustFontFallback` fica ligado — não desligar.

### 3.2 Escala fluida

Base 16px. `clamp()` entre 375px e 1440px de viewport.

| Token | Uso | Min | Fluido | Max | LH | Tracking | Família / peso |
|---|---|---:|---|---:|---:|---:|---|
| `--type-display-xl` | Hero da home | 52px | `clamp(3.25rem, 1.93rem + 5.63vw, 7rem)` | 112px | 0.94 | -0.035em | Space Grotesk 500 |
| `--type-display` | Hero de página interna | 44px | `clamp(2.75rem, 1.96rem + 3.38vw, 5rem)` | 80px | 1.0 | -0.03em | Space Grotesk 500 |
| `--type-h1` | H1 de conteúdo | 36px | `clamp(2.25rem, 1.81rem + 1.88vw, 3.5rem)` | 56px | 1.06 | -0.022em | Space Grotesk 500 |
| `--type-h2` | Título de seção | 28px | `clamp(1.75rem, 1.4rem + 1.5vw, 2.75rem)` | 44px | 1.14 | -0.018em | Space Grotesk 500 |
| `--type-h3` | Subtítulo, título de card | 22px | `clamp(1.375rem, 1.24rem + 0.56vw, 1.75rem)` | 28px | 1.25 | -0.012em | Space Grotesk 500 |
| `--type-h4` | Título menor | 18px | `clamp(1.125rem, 1.08rem + 0.19vw, 1.25rem)` | 20px | 1.35 | -0.006em | Space Grotesk 500 |
| `--type-lead` | Parágrafo de abertura | 18px | `clamp(1.125rem, 1.04rem + 0.38vw, 1.375rem)` | 22px | 1.55 | 0 | Inter 400 |
| `--type-body` | Leitura | 16px | `1rem` | 16px | 1.65 | 0 | Inter 400 |
| `--type-body-sm` | Texto denso, UI | 14px | `0.875rem` | 14px | 1.55 | 0 | Inter 400 |
| `--type-label` | Rótulo de form, nav | 14px | `0.875rem` | 14px | 1.4 | 0.005em | Inter 500 |
| `--type-caption` | Legenda, metadado | 13px | `0.8125rem` | 13px | 1.45 | 0 | Inter 400 |
| `--type-mono` | Dado técnico inline | 14px | `0.875rem` | 14px | 1.5 | 0 | IBM Plex Mono 400 |
| `--type-eyebrow` | Eyebrow de seção | 12px | `0.75rem` | 12px | 1.3 | **0.14em** | IBM Plex Mono 500, `uppercase` |

### 3.3 Regras

- **Medida de leitura:** 62–68ch em corpo (`--measure: 65ch`). Prose de blog: 68ch. Nunca ultrapassar 75ch.
- **Medida de display:** máximo **20ch** por linha em `display-xl`, **24ch** em `display`. Acima disso o hero perde impacto.
- **Quebras autoradas:** títulos de hero recebem `<br>` explícito nos breakpoints principais, ou `text-wrap: balance` quando a quebra natural for aceitável. Nunca deixar órfã de uma palavra.
- **Bilíngue — regra dura:** PT-BR corre **20–30% mais longo** que EN. Toda headline é validada nas duas línguas antes de ser aprovada. Se o layout só funciona em inglês, ele está quebrado. Componentes com texto não podem ter largura fixa.
- **Hierarquia nunca depende só de tamanho.** Cada nível combina ao menos dois eixos: família, peso, cor, tracking ou caixa.
- `--type-eyebrow` em `uppercase` **precisa** do tracking de 0.14em. Mono em caixa alta sem tracking fica ilegível.
- Números em tabelas, preços, salários e métricas usam `font-variant-numeric: tabular-nums` — sempre em IBM Plex Mono.

---

## 4. Espaçamento

Base 4px. Escala não-linear (cresce por salto perceptível, não por incremento constante).

| Token | Valor | Uso |
|---|---:|---|
| `--space-1` | 4px | Microgap, entre ícone e label |
| `--space-2` | 8px | Dentro de controles |
| `--space-3` | 12px | Padding interno de input |
| `--space-4` | 16px | Entre elementos relacionados |
| `--space-5` | 24px | Entre grupos |
| `--space-6` | 32px | Padding de card |
| `--space-7` | 48px | Entre blocos |
| `--space-8` | 64px | Separação forte |
| `--space-9` | 96px | Sub-seção |
| `--space-10` | 128px | Entre seções pequenas |
| `--space-11` | 160px | Respiro máximo |
| `--space-section` | `clamp(5rem, 3.24rem + 7.51vw, 10rem)` | Ritmo vertical entre seções |
| `--space-section-tight` | `clamp(3rem, 1.94rem + 4.51vw, 6rem)` | Seções encadeadas do mesmo assunto |

**Regra de ritmo:** o espaço entre seções varia. Duas seções que argumentam a mesma coisa ficam próximas (`section-tight`); uma virada de assunto recebe `section` cheio. Espaçamento uniforme por toda a página é o que faz um site parecer template.

---

## 5. Grid e containers

| Item | Desktop ≥1024 | Tablet 768–1023 | Mobile <768 |
|---|---|---|---|
| Colunas | 12 | 8 | 4 |
| Gutter | `clamp(1.5rem, 2vw, 2rem)` | 24px | 16px |
| Margem lateral | `clamp(1.5rem, 5vw, 5rem)` | 32px | 20px |

**Containers:**

| Token | Max-width | Uso |
|---|---:|---|
| `--container-prose` | 720px | Corpo de blog, texto longo |
| `--container-content` | 1180px | Padrão de seções |
| `--container-wide` | 1440px | Grids largos, logo wall, tabelas |
| `--container-full` | 100% | Full-bleed, pattern, mídia |

**Regra de alinhamento:** existe uma linha vertical de referência à esquerda do container de conteúdo. Eyebrow, título e parágrafo de uma seção alinham nela. Quebrar esse alinhamento é permitido, mas precisa ser deliberado e ter razão narrativa — não pode acontecer por acidente de componente.

**Breakouts:** mídia e pattern podem sangrar até `container-wide` ou full-bleed. Texto nunca sangra.

**Antídoto ao template:** proibido repetir o par "título centralizado + parágrafo centralizado + grid de 3 cards" mais de uma vez na mesma página. Alterne entre: assimétrico 5/7, lista vertical numerada, comparação em duas colunas, full-bleed com texto sobreposto, e stack editorial.

---

## 6. Forma e material

A marca é angular. **Raio zero é o padrão.**

| Token | Valor | Onde se aplica |
|---|---|---|
| `--radius-none` | `0` | Cards, seções, imagens, painéis, containers — o padrão |
| `--radius-xs` | `2px` | Inputs, botões, selects — só para tirar o serrilhado ótico da aresta |
| `--radius-pill` | `999px` | **Apenas** chips, tags, badges e o toggle de tema |
| `--border-hairline` | `1px solid var(--vv-border)` | Divisores, contorno padrão de card |
| `--border-strong` | `1px solid var(--vv-border-strong)` | Input em repouso |
| `--border-accent` | `1px solid var(--vv-accent)` | Card em destaque, estado ativo |

**Por que o pill é autorizado:** o brand book usa pills em toda a sinalização (rótulos de seção, "Tema Escuro - Padrão", chips de atributo na pág. 44). É um elemento da identidade, não um reflexo de tendência. Fora de chip/tag/badge, é proibido.

### Elevação

Sombra difusa não funciona sobre `#101820` — some. A elevação no tema escuro é feita por **borda + mudança de superfície**, não por sombra.

| Token | Valor | Uso |
|---|---|---|
| `--elev-0` | superfície `bg`, sem borda | Página |
| `--elev-1` | superfície `surface` + `--border-hairline` | Card em repouso |
| `--elev-2` | superfície `surface` + `--border-strong` | Card em hover |
| `--elev-overlay` | superfície `bg-max` + `--border-hairline` + `0 24px 64px -16px rgba(0,0,0,.72)` | Modal, dropdown, popover |
| `--glow-accent` | `0 0 28px -8px rgba(154,255,28,.42)` | Estado ativo do CTA primário. Uso escasso |

No **tema claro** a lógica inverte: sombra volta a funcionar. `--elev-1: 0 1px 2px rgba(16,24,32,.06)`, `--elev-2: 0 8px 24px -8px rgba(16,24,32,.12)`.

### Textura

`--texture-grain`: ruído sutil em `opacity: .025`, aplicado como overlay em blocos `bg-max`. Combate o banding de gradiente escuro e dá materialidade. Um único PNG de 128×128 repetido — nunca SVG filter (custa GPU).

---

## 7. Pattern

Componente `<ChevronField />`, montado sobre `brand-assets/vervana-pattern.svg`.

**Regras de aplicação:**

- No máximo **uma** zona de pattern visível por viewport
- Sempre Lounge Lizard sobre Beetle Wing ou sobre `bg-max` — nunca sobre `surface`
- Opacidade entre `0.06` e `0.14` quando há conteúdo por cima; até `1.0` só em faixa decorativa isolada sem texto
- **Nunca** atrás de corpo de texto. Atrás de título display, apenas com máscara de gradiente que zera a opacidade sob a área do texto
- Escala mínima de 1 chevron = 40px de largura na tela. Menor que isso vira ruído e serrilha
- `aria-hidden="true"` sempre — é decoração
- Em `prefers-reduced-motion`, o pattern fica estático

**Variantes autorizadas:** `band` (faixa horizontal full-bleed), `corner` (canto superior direito, sangrando), `mask` (dentro de forma recortada), `divider` (fileira única de 1 chevron de altura entre seções).

---

## 8. Motion

Coerente com o significado do ícone: **avanço direcional**. Elementos não "aparecem" — eles **chegam**, ao longo de um vetor.

### Durações

| Token | Valor | Uso |
|---|---:|---|
| `--dur-instant` | 100ms | Feedback de toque, mudança de cor |
| `--dur-fast` | 180ms | Hover, foco, estado de controle |
| `--dur-base` | 280ms | Entrada de elemento, accordion |
| `--dur-slow` | 480ms | Entrada de seção, transição de layout |
| `--dur-cinematic` | 900ms | Sequência do hero. Uma vez por página |

### Curvas

| Token | Valor | Caráter |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Padrão de entrada. Chega rápido, assenta |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Transição entre dois estados |
| `--ease-sharp` | `cubic-bezier(0.4, 0, 0, 1)` | Decisão. Sem hesitação. Para o CTA |

`ease-linear` é proibido fora de progresso contínuo e loop de pattern.

### Vetor de entrada

Elementos entram deslocados ao longo do eixo do ícone — para cima e para a direita — e não apenas de baixo para cima:

```
from: opacity 0, translate(-12px, 16px)
to:   opacity 1, translate(0, 0)
```

Stagger entre irmãos: **60ms**. Máximo 6 elementos por sequência; acima disso, animar o grupo, não os filhos.

### Regras

- Uma tecnologia por propriedade. CSS/WAAPI para feedback e estado simples; Motion para presença, gesto e layout em React; GSAP + ScrollTrigger apenas onde houver scrub, pin ou timeline real
- Nunca atualizar estado React por frame
- Só animar `transform` e `opacity`. `width`, `height`, `top` e `filter` em animação exigem justificativa registrada
- Todo timeline, listener e observer tem cleanup
- `prefers-reduced-motion: reduce` → sem translate, sem scrub, sem parallax, sem autoplay. Fade de 100ms no lugar. **O conteúdo continua totalmente acessível** — nada de conteúdo que só existe após animação

---

## 9. Iconografia

- **Estilo:** sólido/preenchido, sem contorno — como o brand book (8.1). Nunca misturar com estilo de traço
- **Grid:** 24×24, com `viewBox="0 0 24 24"`. Tamanhos: 16 (inline), 20 (UI densa), 24 (padrão), 32 (destaque)
- **Cor:** `currentColor` sempre. Herda do contexto
- **Decorativo × informativo:** ícone decorativo recebe `aria-hidden="true"`. Ícone que carrega significado sozinho recebe `<title>` e `role="img"`
- **Biblioteca de apoio:** **Phosphor Icons — peso `fill`** é o melhor par disponível para o estilo do brand book. Os 24 ícones do brand book têm prioridade; Phosphor cobre o resto
- Ícone nunca substitui rótulo em ação primária

---

## 10. Componentes

### 10.1 Inventário

| Componente | Variações | Estados | Notas |
|---|---|---|---|
| `Button` | `primary` · `secondary` · `ghost` · `link` | hover, focus-visible, active, disabled, loading | Ver 10.2 |
| `Chip` | `default` · `accent` · `outline` | static, selected | Pill. Único lugar com raio total |
| `Card` | `default` · `interactive` · `feature` | rest, hover, focus | Raio 0 + borda. Sem sombra no escuro |
| `Header` | `transparent` · `solid` | scrolled, menu-open | Vira `solid` após 64px de scroll |
| `NavLink` | `desktop` · `mobile` | rest, hover, active, current | `aria-current="page"` |
| `Input` / `Textarea` / `Select` | — | rest, focus, filled, error, disabled | Label sempre visível. Placeholder não é label |
| `SectionHeader` | `left` · `center` · `split` | — | Eyebrow mono + título + lead |
| `Stat` | `default` · `large` | — | Número em Plex Mono tabular. Fonte obrigatória |
| `Seal` | `sm` · `md` · `lg` | — | Selo de verificação com o ícone. Ver 10.3 |
| `ChevronField` | `band` · `corner` · `mask` · `divider` | — | Ver §7 |
| `Accordion` | `faq` | collapsed, expanded | Headless Radix |
| `LogoWall` | `mono` · `marquee` | — | Logos em Gray 300 monocromático |
| `Testimonial` | `quote` · `card` | — | Só com pessoa real, nome e cargo |
| `ProcessStep` | `numbered` | — | Número em Plex Mono. Chevron como conector |
| `JobCard` | `list` · `featured` | rest, hover | Fase 6 |
| `PostCard` | `list` · `featured` | rest, hover | Fase 6 |
| `LangSwitch` | — | — | EN/PT. Preserva a rota traduzida |
| `ThemeToggle` | — | — | Pill. Ícone lua/sol como no brand book |
| `Footer` | — | — | `bg-sunken` |

### 10.2 Button — especificação

| Variante | Repouso | Hover | Focus-visible | Disabled |
|---|---|---|---|---|
| `primary` | fundo `accent`, texto `accent-fg`, raio `xs` | fundo `accent-hover`, `translateY(-1px)` | ring de 2px `accent` com offset 2px sobre `bg` | fundo `ink-700`, texto `text-disabled`, sem ponteiro |
| `secondary` | transparente, borda `border-strong`, texto `text` | borda `accent`, texto `accent` | mesmo ring | borda `border`, texto `text-disabled` |
| `ghost` | transparente, texto `text-secondary` | texto `text`, fundo `accent-soft` | mesmo ring | texto `text-disabled` |
| `link` | texto `accent`, sublinhado com `text-underline-offset: 4px` | sublinhado engrossa para 2px | mesmo ring | — |

- Altura: `sm` 36px · `md` 44px · `lg` 52px. **44px é o mínimo em qualquer alvo de toque.**
- Padding horizontal: `--space-5` (`md`)
- Tipo: Inter 500, `--type-label`
- `loading`: spinner substitui o ícone, largura do botão **congela**, `aria-busy="true"`, rótulo permanece
- Movimento no hover é `transform` apenas. Nunca animar `box-shadow` de blur alto

### 10.3 Seal — o componente próprio da marca

Vem do brand book (pág. 42-43): o ícone atua como selo de certificação técnica. Aplicado a um perfil, comunica verificação antes da leitura do nome.

- Composição: ícone Vervana em `accent` + rótulo em Plex Mono uppercase com tracking `0.14em`
- Fundo: `surface-brand` (#003740) ou transparente com borda `accent`
- Tamanhos: `sm` 20px de ícone · `md` 28px · `lg` 40px
- **Nunca** usar em contexto que não seja verificação real de um profissional. É uma afirmação de fato, não ornamento
- Rótulo pendente de decisão (ver `BRAND-SYSTEM.md` §5). Placeholder atual: `VERIFICADO PELA VERVANA` / `VERVANA VERIFIED`

### 10.4 Regra anti-cardificação

Card é para **item de coleção comparável** — vaga, post, membro do time. Não é para argumento, benefício ou etapa. Benefício vira lista tipográfica com divisor; etapa vira sequência numerada com conector; argumento vira bloco editorial. Se três seções seguidas são grids de card, o layout falhou.

---

## 11. Estados de interação

| Estado | Regra |
|---|---|
| **Hover** | Só em `@media (hover: hover) and (pointer: fine)`. Nunca é o único caminho para uma informação |
| **Focus-visible** | `outline: 2px solid var(--vv-accent); outline-offset: 2px`. Nunca removido. No tema claro, o anel é `#003740` |
| **Active** | `transform: translateY(1px)` + escurece um passo. `--dur-instant` |
| **Disabled** | `cursor: not-allowed`, `aria-disabled`. Contraste reduzido, mas o texto ainda precisa ser legível |
| **Loading** | Skeleton com a **mesma altura** do conteúdo final — CLS zero. Sem spinner solto em tela cheia |
| **Error** | Borda `danger` + ícone + texto abaixo do campo, ligado por `aria-describedby`. Cor nunca é o único sinal |
| **Success** | Texto + ícone. Não usar lime sozinho como confirmação — é a cor de ação, o significado se dilui |
| **Empty** | Todo estado vazio tem texto explicando o que aconteceu e o próximo passo |

---

## 12. Acessibilidade

Meta: **WCAG 2.2 AA**.

- Contraste mínimo 4.5:1 em texto, 3:1 em UI e ícone informativo. Tabela verificada em `BRAND-SYSTEM.md` §8.4
- Alvo de toque ≥ 44×44px
- Ordem de foco segue a ordem visual. Skip link para o conteúdo principal
- Um `<h1>` por página; hierarquia sem pular nível
- `lang` correto no `<html>` por rota localizada (`en` / `pt-BR`), e `hreflang` recíproco
- Formulário: `<label>` real e visível, `autocomplete`, erro associado por `aria-describedby`
- Nenhum conteúdo depende de cor, hover ou movimento para ser compreendido
- `prefers-reduced-motion` respeitado em todo o sistema
- Teste de teclado obrigatório em: menu mobile, accordion, modal, troca de tema, troca de idioma, formulário

---

## 13. Gates

- [ ] Tokens têm nomes semânticos e nenhum componente referencia primitivo
- [ ] Tipografia testada com conteúdo real, em EN **e** PT-BR
- [ ] Contraste validado nos dois temas
- [ ] Nenhum foco depende de hover
- [ ] Proporção de cor respeitada (lime ≤ 7% escuro / ≤ 3% claro)
- [ ] Raio 0 é o padrão; pill só em chip/tag/badge
- [ ] Componentes preservam personalidade sem duplicar comportamento
- [ ] O sistema aceita exceções cinematográficas — cada uma registrada em `11-DECISION-LOG.md`
- [ ] Verificado a 375px, 768px, 1024px, 1440px e num viewport baixo (740px de altura)
