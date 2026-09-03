# 11 — Registro de decisões

> Atualizado em: `2026-08-08`
>
> Decisão registrada aqui não volta à mesa sem evidência nova. Se algo aqui estiver errado, corrija com data e motivo — não apague.

---

## Decisões tomadas

| # | Data | Decisão | Motivo | Quem |
|---|---|---|---|---|
| D01 | 2026-08-07 | Site **bilíngue completo** EN/PT-BR, todas as rotas nos dois idiomas com slugs traduzidos | A marca atende dois públicos com objeções opostas; cobertura de SEO nos dois mercados | Felipe |
| D02 | 2026-08-07 | Stack: **Next.js 15 + Supabase + admin próprio** | Controle total do design do admin, custo baixo, deploy simples, e Postgres real para vagas e candidaturas | Felipe |
| D03 | 2026-08-07 | Fase 1 = **site institucional completo**; blog, vagas e admin ficam para as fases 6 e 7 | Valida a direção visual antes de investir em backend | Felipe |
| D04 | 2026-08-07 | Idioma de fallback na raiz é **inglês** | O público que paga é americano. Escolha manual persiste em cookie e vence a detecção | Felipe |
| D05 | 2026-08-07 | **Raio 0 é o padrão** do design system; pill só em chip, tag e badge | O brand book é explícito: "não há curvas, não há suavizações". O pill é autorizado porque o próprio brand book o usa em sinalização | Felipe |
| D06 | 2026-08-07 | No **tema claro**, `--vv-accent` de texto vira **Beetle Wing `#003740`**; Lounge Lizard sobrevive só como preenchimento | Lime sobre branco dá **1.25:1**. Nem em 600 passa (1.98:1). Acessibilidade vence a preferência estética | Felipe |
| D07 | 2026-08-07 | Elevação no tema escuro é feita por **superfície + borda**, não por sombra | Sombra difusa não lê sobre `#101820`. No tema claro a sombra volta | Felipe |
| D08 | 2026-08-07 | Adicionados tokens funcionais fora do brand book: `danger #FF5A47`, `warning #FFB020`, `info` = Beetle 300, `success` = Lime 400 | Formulários e o painel admin exigem sinalização de estado. Escolhidos para conviver com a paleta sem competir com o lime. Contrastes verificados: 5.8 / 9.8 / 7.0 | Felipe |
| D09 | 2026-08-07 | Rótulos `ink-850` (Black 6C `#101820`) e `ink-950` (Black C `#030303`) criados para encaixar as neutras numa escala | Os hex são oficiais; só a numeração é nossa, para o sistema de tokens funcionar | Felipe |
| D10 | 2026-08-07 | Componentes próprios sobre **Radix Primitives**, sem shadcn default | shadcn traria estética genérica e raio arredondado, incompatíveis com a marca. Radix entrega comportamento acessível sem impor visual | Felipe |
| D11 | 2026-08-07 | Mecanismo cinematográfico dominante proposto: **Convergência** (muitos chevrons desordenados → alinhamento → ícone) | Traduz a tese comercial em forma e deriva do pattern que já existe no brand book. SVG/canvas 2D com ScrollTrigger, sem WebGL | Felipe — **pendente de aprovação** |
| D12 | 2026-08-07 | Ícone, chevron e pattern **extraídos em vetor** do PDF e versionados em `brand-assets/` | Geometria fiel: chevron 180.078×114.453, passo 95.34375 × 125.98047, `fill-rule="nonzero"` | Felipe |
| D13 | 2026-08-07 | **Banco de imagem está descartado.** Se não houver produção fotográfica, o site é feito sem foto de pessoa | Stock genérico destrói o pilar de exclusividade e faz a marca parecer as agências que ela ataca | Felipe |
| D14 | 2026-08-07 | Nenhum logo de cliente, número, métrica ou depoimento entra sem lastro. Sem lastro, a seção **não existe** — não vira placeholder | Restrição explícita do cliente e do brand book | Felipe |
| D15 | 2026-08-07 | Arquitetura de rotas revista para o nav do cliente: `For Startups · Careers · About · Blog` + CTA `Start Hiring`. `Careers` absorve o antigo `/for-talent` + `/jobs`; `How It Works` vira âncora na home, não rota | É como o público espera encontrar, e concentra o funil do dev em uma rota só. Substitui o esboço em `00-PROJECT-CONTEXT.md` | Cliente / Felipe |
| D16 | 2026-08-07 | ⚠️ *Substituída pela D23 no protótipo `03`.* Header é `fixed`, transparente sobre o hero, e vira sólido com `backdrop-filter` após 64px de scroll | Especificado no design system §10.1. O hero é `#030303` e precisa da faixa superior limpa para o headline respirar | Felipe |
| D17 | 2026-08-07 | Mecanismo de Convergência implementado em **Canvas 2D com PRNG determinístico** (seed fixa), animação de entrada única de 2,2s, sem loop contínuo | Composição idêntica em todo carregamento — sem isso o hero muda de cara a cada visita e vira ruído. Sem loop, não queima CPU depois da entrada. Com `prefers-reduced-motion`, renderiza direto o estado final convergido | Felipe |
| D18 | 2026-08-07 | Wordmark do header é **placeholder** em Space Grotesk 400 lowercase até o SVG oficial chegar | O wordmark real tem terminal quadrado no "r". Aproximar seria erro de marca; o placeholder está sinalizado no protótipo | Felipe |
| D19 | 2026-08-08 | Protótipo `02-header-hero-centered.html` criado como **variante estrutural** do `01`, com composição centralizada e links de nav agrupados à esquerda. O `01` permanece intacto para comparação | Pedido de referência estrutural externa (Vectura). Manter as duas variantes permite decidir por comparação em vez de por descrição. A escolha entre elas continua aberta | Felipe |
| D20 | 2026-08-08 | ⚠️ *Revertida pela D22 em 2026-08-08.* Referência externa aplicada **só como padrão de layout** — hierarquia, agrupamento do nav e ordem dos elementos. Composição visual, copy, assets e assinatura de motion são da Vervana | `AGENTS.md`: "extraia princípios das referências; não copie composição, copy, asset ou assinatura de motion". Clone pixel perfect violaria a regra e a propriedade do terceiro | Felipe |
| D21 | 2026-08-08 | Hero do `02` **não tem depoimento/quote**, presente na referência | Incluir exigiria inventar depoimento, proibido pelo não-negociável 7. A estrutura perde um bloco; a regra vence. Reabre quando P03 for respondida | Felipe |
| D22 | 2026-08-08 | **D20 revertida.** Protótipo `03-header-hero-vectura.html` reproduz a Vectura de forma deliberadamente próxima em header, hero e animação de entrada. Medidas extraídas do CSS do site, não estimadas: header 72px / container 1740px / padding 40px; mídia recuada 24px com raio 16px acima de 1440px e sangria total abaixo; conteúdo ancorado embaixo com 120px; h1 80px peso 300 em `max-width` 900px; lede 21px em 660px; botões 16/34 e 13/32 | Pedido explícito e reiterado do Felipe, que reabre a decisão. O `01` e o `02` permanecem intactos para comparação. **Risco registrado:** proximidade com trabalho de terceiro — a copy, os assets e a paleta são da Vervana, mas a composição e a assinatura de motion não são mais | Felipe |
| D23 | 2026-08-08 | **D16 revertida no `03`.** Header é branco **opaco** desde o topo, sem transparência e sem `backdrop-filter`; ganha só um fio inferior após 8px de scroll | O hero deixou de ser sangria escura: virou bloco de mídia recuado sobre página branca. Header transparente sobre página branca não teria contraste nem função | Felipe |
| D24 | 2026-08-08 | Entrada da mídia: **começa em tela cheia e encolhe até encaixar** (`scale 1.6 → 1`, delay 200ms, 1400ms, `cubic-bezier(.55,.06,.53,.81)`). Texto e CTAs sobem 60px com delay 1400ms/1600ms; header em 2000ms | Tempos e curvas extraídos do JSON de `appear animation` da referência. `.hero-media` não clipa e `.hero-media-in` é quem escala — é o que permite a mídia transbordar o box. Medido: 2203×1147 em `t=0` numa viewport de 1440×813, assentando em 24,72 · 1377×717 | Felipe |
| D25 | 2026-08-08 | **Raio 0 suspenso no `03`** (D05 continua valendo nos demais). Pill em botões, controles e diálogo, isolado no token `--shape-btn` | Consequência direta da D22: a Vectura é pill em tudo. `--shape-btn: 0` devolve a regra da marca em uma linha | Felipe |
| D26 | 2026-08-08 | Tema escuro ancorado em **Black C `#030303`**, não em Black 6C. Black 6C vira superfície elevada e as bordas passam a ser Briliance com alpha no lugar de `ink-700` | `ink-800/700` puxavam azul-marinho visível. `#030303` é a mesma tinta da mídia do hero, então página e hero viram contínuo — um fio de 1px devolve o enquadramento. Nenhum hex novo foi inventado. Contrastes medidos: texto 20.5, nav 8.53, CTA 14.2, eyebrow 16.4 | Felipe |
| D27 | 2026-08-08 | Seletor de idioma vira **diálogo com busca em tempo real** (`<dialog>` nativo, bandeiras, busca insensível a acento), e o header ganha **toggle claro/escuro** no padrão `toggles.dev/r/classic`, com estado em `data-theme` + `localStorage` e script anti-flash antes da primeira pintura | Pedido do Felipe. **Sem React Query:** são dois locales fixos definidos no cliente, sem fetch nem cache a gerenciar — a dependência não teria função. Reavaliar só se a lista virar dado remoto | Felipe |
| D28 | 2026-08-08 | CTA principal recebe **halo rotativo com blur** (adaptado de `toggles.dev/r/classic`), isolado na classe `.glow` e desligado em `prefers-reduced-motion` | Pedido explícito do Felipe. **Contraria** a regra do `AGENTS.md` "não use sombra difusa sobre fundo escuro" — é a única animação em loop da página. Remover a classe `.glow` do markup desfaz | Felipe |

---

## Decisões pendentes

| # | Questão | Impacto | Quem decide | Bloqueia |
|---|---|---|---|---|
| P01 | Aprovação da direção criativa (A, B ou C) | Define tudo daqui pra frente | Lucas / Felipe | Fases 1 e 2 |
| P02 | **Rótulo do selo.** O brand book chama de "Desenvolvedor de Elite", colidindo com a proibição de `elite` em 1.12. Sugestão: `Verificado pela Vervana` / `Vervana Verified` | Componente `Seal`, copy do site | Lucas | Fase 2 |
| P03 | Existem provas reais? Placement fechado, cliente disposto a depoimento, número de processo | Se não houver, a home argumenta por método em vez de resultado — decisão, não acidente | Lucas | Fase 1 |
| P04 | Fonte dos números do brand book: "custo até 50% menor", "1 milhão de vagas até 2034", "80% consideram nearshore" | Cada um sai do ar sem fonte citável | Lucas | Fase 1 |
| P05 | Preço/modelo comercial pode ser público? | Muda a página `/para-empresas` | Lucas | Fase 1 |
| P06 | Verba para produção fotográfica | Decide entre Direção A e B | Lucas | P01 |
| P07 | Descrição do processo real, etapa por etapa, com nomes e prazos | `/como-funciona` não pode ser inventada | Lucas | Fase 1 |
| P08 | Domínio `vervana.io` está registrado? | Deploy, e-mail, SEO | Lucas | Fase 5 |
| P09 | Ferramenta de agendamento e destino do lead | Formulários e CTA principal | Lucas | Fase 3 |
| P10 | Quem escreve o blog e com que frequência | Dimensiona o admin da Fase 7 | Lucas | Fase 7 |
| P11 | Referência **Aetheris** — o que exatamente atraiu? | Se for estética web3, conflita com o brand book e vira "o que evitar" | Felipe | Fase 1 |
| P12 | Logotipo e ícones de sistema em SVG | Header, footer, favicon, iconografia | Miguel | Fase 2 |
| P13 | "Paga na entrega" e "reposição gratuita" podem ir para o **hero da home**, ou só para o funil de empresa? Estão como microcopy no protótipo `02` | É promessa comercial no primeiro frame. Se a condição tiver ressalva (prazo, escopo, limite de reposições), a frase sai ou ganha qualificador | Lucas | Fase 1 |

---

## Divergências identificadas

### DV01 — "Elite" no brand book contra a própria lista de palavras proibidas

**Onde:** o brand book proíbe explicitamente `elite level`, `top-tier`, `top 1` e `world-class` (seção 1.12, Tom de Voz), mas intitula o selo do ícone como **"A Marca do Desenvolvedor de Elite"** (págs. 42-43) e descreve o dev como "ativo de elite".

**Leitura:** a proibição em 1.12 é sobre o registro de comunicação — o vocabulário inflado de agência. O título do selo é linguagem interna de conceito. Ainda assim, se o rótulo for para o site literalmente, ele quebra a própria regra.

**Recomendação:** manter a proibição de 1.12 como regra vigente para copy pública e renomear o selo. Registrado como P02.

**Status:** aberta, aguardando Lucas.

### DV02 — Lounge Lizard não funciona como texto no tema claro

**Onde:** o brand book define Lounge Lizard como cor de "botões, CTAs, links, destaques, ícones ativos" e prevê um tema claro alternativo.

**Problema:** medido contra Briliance `#FEFEFE`, o lime dá **1.25:1** — muito abaixo do mínimo 4.5:1 do WCAG AA. O tom 600 (`#7ECC00`) também falha, a 1.98:1.

**Resolução adotada:** no tema claro, links e texto de ação usam Beetle Wing `#003740` (12.9:1). O lime permanece como cor de **preenchimento**, com texto escuro por cima (14.2:1) — o que preserva a intenção da marca sem quebrar acessibilidade.

**Status:** resolvida em D06. Comunicar ao Miguel para alinhamento futuro do brand book.
