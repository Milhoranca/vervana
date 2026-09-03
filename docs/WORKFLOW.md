# Fluxo de trabalho — Vervana

> Atualizado em: `2026-08-07`
> Fase atual: **0 — Descoberta e marca** *(aguardando aprovação para fechar)*

Este documento define como o projeto anda: em que ordem, com que gate, e quem destrava o quê. Ele existe para uma coisa — impedir que a gente construa em cima de decisão não tomada.

---

## Princípios do fluxo

1. **Nada é implementado antes da direção ser aprovada.** `01-CREATIVE-DIRECTION.md` marcado como `PENDENTE DE APROVAÇÃO` bloqueia código de interface.
2. **Documento e implementação nunca divergem em silêncio.** Se o código precisar contrariar o doc, a divergência é reportada e o doc é atualizado — nunca o contrário sem registro.
3. **Decisão tomada não volta à mesa** sem evidência nova. Registrada em `11-DECISION-LOG.md`.
4. **Cada fase tem um gate objetivo.** Gate não é opinião — é uma lista que passa ou não passa.
5. **Pergunta só quando muda o trabalho.** Detalhe ajustável vira premissa explícita e segue.

---

## Papéis

| Papel | Quem | Decide sobre |
|---|---|---|
| **Cliente / aprovador** | Lucas Garcia | Negócio, provas, copy final, preço, prazo |
| **Direção e execução** | Felipe | Direção criativa, design system, arquitetura, implementação |
| **Marca (consultivo)** | Miguel Maziero | Interpretação do brand book, assets originais |
| **Assistente técnico** | Claude Code | Documentação, implementação, auditoria — sempre dentro dos docs |

---

## Fases

### Fase 0 — Descoberta e marca ← *estamos aqui*

**Objetivo:** transformar briefing + brand book em sistema operável.

| Entregável | Status |
|---|---|
| `BRAND-SYSTEM.md` — marca destilada em regras aplicáveis | ✅ |
| `03-DESIGN-SYSTEM.md` — tokens, tipografia, componentes, contraste verificado | ✅ |
| `design-system/tokens.css` — implementação dos tokens, dois temas | ✅ |
| `brand-assets/` — ícone, chevron e pattern em vetor | ✅ |
| `00-PROJECT-CONTEXT.md` — negócio, público, rotas, escopo, restrições | ✅ |
| `02-REFERENCE-SYNTHESIS.md` — referências decompostas em princípios | ✅ |
| `01-CREATIVE-DIRECTION.md` — tese visual e mecanismo dominante | ⏳ pendente de aprovação |

**Gate para fechar a Fase 0:**
- [ ] Direção criativa aprovada (A, B ou C)
- [ ] Rótulo do selo decidido (colisão com a palavra "elite")
- [ ] Respondidas as perguntas 1, 2 e 3 de `00-PROJECT-CONTEXT.md` (provas, fontes dos números, preço público)
- [ ] Referência Aetheris esclarecida ou descartada formalmente
- [ ] Logotipo em SVG solicitado ao Miguel

---

### Fase 1 — Storyboard e copy estruturante

**Objetivo:** definir o que cada página diz, em que ordem, antes de desenhar qualquer tela.

- `06-EXPERIENCE-STORYBOARD.md` — seção a seção: hook, orientação, prova, escalada, resolução
- `04-CONTENT-COPY.md` — copy real em EN e PT-BR, não lorem
- Mapa de CTAs e o que cada um dispara

**Gate:**
- [ ] Toda seção tem função narrativa declarada — nenhuma existe "porque site tem"
- [ ] Copy passa no checklist anti-IA de `BRAND-SYSTEM.md` §6
- [ ] Toda headline testada nas duas línguas
- [ ] Nenhuma afirmação sem lastro
- [ ] Lucas aprovou o texto

---

### Fase 2 — Fundação técnica e design system em código

**Objetivo:** o sistema existe e é navegável antes da primeira página.

- Next.js 15 + TypeScript strict + Tailwind v4 lendo `tokens.css`
- `next-intl` com rotas e slugs traduzidos
- Componentes base: Button, Chip, Card, Input, SectionHeader, Stat, Seal, ChevronField, Header, Footer, LangSwitch, ThemeToggle
- Página `/styleguide` (fora do sitemap) renderizando todo o sistema nos dois temas e nas duas línguas

**Gate:**
- [ ] `/styleguide` mostra todo componente em todos os estados
- [ ] Troca de tema e de idioma funcionam em toda a página
- [ ] Contraste auditado nos dois temas
- [ ] Navegação completa por teclado
- [ ] Nenhum componente referencia token primitivo

---

### Fase 3 — Páginas institucionais

Ordem de construção por página, conforme `AGENTS.md`:
estrutura semântica → arte estática → composição responsiva → mecanismo dominante → microinterações → performance e acessibilidade.

Ordem das páginas: **Home → Como funciona → Para empresas → Para talentos → Sobre → Contato → Legal**

**Gate por página:**
- [ ] Verificada a 375, 768, 1024, 1440 e em viewport de 740px de altura
- [ ] Funciona nas duas línguas sem quebra de layout
- [ ] Teclado, foco, touch e `prefers-reduced-motion` testados
- [ ] Proporção de cor respeitada
- [ ] Nenhuma repetição de padrão de seção

---

### Fase 4 — Motion e polimento

- Mecanismo de convergência no hero da home
- Transições de seção, microinterações, estados de carregamento
- Fallbacks completos para movimento reduzido e ponteiro grosso

**Gate:**
- [ ] Uma tecnologia por propriedade animada
- [ ] Cleanup de todo timeline, listener e observer
- [ ] Nenhum estado React atualizado por frame
- [ ] Conteúdo 100% acessível sem animação

---

### Fase 5 — Performance, acessibilidade, SEO e lançamento

- `09-PERFORMANCE-ACCESSIBILITY.md` e `10-QA-RELEASE.md`
- Metas: LCP ≤ 2,5s · INP ≤ 200ms · CLS ≤ 0,1
- `hreflang` recíproco, sitemap por idioma, dados estruturados, OG por rota
- Formulários com destino real, LGPD/GDPR, páginas legais

**Gate:**
- [ ] Metas de Core Web Vitals atingidas em 4G simulado
- [ ] Auditoria WCAG 2.2 AA
- [ ] Lead chega ao destino real e é confirmado
- [ ] Evidências, limitações e riscos restantes registrados

---

### Fase 6 — Blog e vagas

- Schema Supabase com RLS (esboço em `00-PROJECT-CONTEXT.md`)
- Páginas públicas: índice e detalhe de post e de vaga, nas duas línguas
- Formulário de candidatura com upload de currículo
- Busca e filtro de vagas por stack, senioridade e faixa

**Gate:**
- [ ] RLS testada: leitura pública só de publicados; `applications` e `leads` nunca públicos
- [ ] Upload validado por tipo, tamanho e varredura
- [ ] Conteúdo em uma língua não quebra a página na outra — fallback definido e visível
- [ ] SEO de post e vaga (canonical, structured data `JobPosting`)

---

### Fase 7 — Painel administrativo

- Auth por Supabase, papéis `admin` e `editor`
- CRUD de posts, vagas, autores e mídia
- Editor bilíngue lado a lado, com indicador de tradução faltante
- Fluxo rascunho → revisão → publicado, com agendamento
- Listagem de leads e candidaturas com exportação
- Interface em uma língua só (PT-BR); o conteúdo editado é bilíngue

**Gate:**
- [ ] Nenhuma rota admin indexável
- [ ] Toda mutação validada no servidor, não só no cliente
- [ ] Sessão, permissão e rate limit testados
- [ ] Cliente consegue publicar um post e uma vaga sozinho, sem ajuda

---

## Como cada ciclo de trabalho roda

```
1. Ler o doc da fase atual (só ele, não todos)
2. Declarar premissas para o que for ajustável
3. Perguntar apenas o que muda materialmente o resultado
4. Construir na ordem: semântica → arte → responsivo → motion → performance
5. Verificar visualmente nos 5 tamanhos
6. Rodar o gate da fase
7. Registrar decisão nova em 11-DECISION-LOG.md
8. Reportar o que ficou de fora e por quê
```

---

## Regras de divergência

Quando a implementação precisar contrariar a documentação:

1. **Pare.** Não ajuste o doc para justificar o código.
2. Reporte a divergência com a razão técnica ou de negócio.
3. Se a razão procede, atualize o doc e registre em `11-DECISION-LOG.md`.
4. Se não procede, o doc vence.

Isso vale igualmente para o brand book. Se o brand book inviabilizar acessibilidade — como o lime sobre fundo claro — a acessibilidade vence e a exceção é documentada com a solução adotada.

---

## Estado atual

| Fase | Status |
|---|---|
| 0 — Descoberta e marca | ⏳ aguardando gate |
| 1 — Storyboard e copy | 🔒 bloqueada pelo gate 0 |
| 2 — Design system em código | 🔒 bloqueada pela aprovação da direção |
| 3 a 7 | 🔒 |

**Próxima ação:** Felipe revisa `01-CREATIVE-DIRECTION.md` e leva a direção recomendada para o Lucas, junto com as perguntas 1, 2 e 3 de `00-PROJECT-CONTEXT.md`.
