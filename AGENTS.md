# Instruções do projeto — Vervana

## Objetivo

Construir o site institucional bilíngue da Vervana e, nas fases seguintes, blog, vagas e painel administrativo. Qualidade cinematográfica é padrão de craft — não é permissão para copiar referência nem empilhar efeito.

## Antes de editar

1. Leia `docs/WORKFLOW.md` e identifique a fase atual.
2. Leia **apenas** os documentos da fase. Não carregue tudo.
3. Não implemente nada enquanto `docs/01-CREATIVE-DIRECTION.md` estiver `PENDENTE DE APROVAÇÃO`.
4. Consulte `docs/11-DECISION-LOG.md` antes de reabrir qualquer decisão.
5. Em projeto já existente, execute e veja a página antes de propor mudança.

## Fonte de verdade

| Assunto | Documento |
|---|---|
| Marca, tom de voz, cor, tipografia, regras | `docs/BRAND-SYSTEM.md` |
| Negócio, público, rotas, escopo, restrições | `docs/00-PROJECT-CONTEXT.md` |
| Tese e direção visual | `docs/01-CREATIVE-DIRECTION.md` |
| Uso de referências | `docs/02-REFERENCE-SYNTHESIS.md` |
| Tokens, escalas, componentes | `docs/03-DESIGN-SYSTEM.md` + `design-system/tokens.css` |
| Copy e mensagens | `docs/04-CONTENT-COPY.md` |
| Mídia e assets | `docs/05-ASSET-PLAN.md` |
| Seções e narrativa | `docs/06-EXPERIENCE-STORYBOARD.md` |
| Animações | `docs/07-MOTION-SYSTEM.md` |
| Responsividade | `docs/08-RESPONSIVE-MOBILE.md` |
| Performance e acessibilidade | `docs/09-PERFORMANCE-ACCESSIBILITY.md` |
| QA e release | `docs/10-QA-RELEASE.md` |
| Decisões e divergências | `docs/11-DECISION-LOG.md` |
| Fluxo, fases e gates | `docs/WORKFLOW.md` |

Acima de todos: `Identidade Visual Vervana (1).pdf`. Quando um documento e a implementação divergirem, **reporte**. Não atualize um em silêncio para justificar o outro.

## Não negociáveis da marca

1. **Lounge Lizard `#9AFF1C` nunca é texto sobre fundo claro.** Dá 1.25:1. No tema claro, texto de ação é Beetle Wing `#003740`.
2. **Beetle Wing nunca é texto sobre Black 6C.** É superfície nesse contexto.
3. **Lime ≤ 7% da área** no tema escuro, **≤ 3%** no claro. Proporção do brand book, vinculante.
4. **Raio 0 é o padrão.** Pill só em chip, tag e badge. A marca não tem curvas.
5. **Space Grotesk só em título · Inter só em corpo · IBM Plex Mono só em dado técnico.**
6. **Palavras proibidas:** `elite level`, `top-tier`, `top 1`, `world-class`.
7. **Não inventar** cliente, número, métrica, depoimento ou atributo. Sem lastro, a seção não existe.
8. Copy não pode ser agressiva nem parecer gerada por IA — critério de aceite, ver `BRAND-SYSTEM.md` §6.
9. Tudo funciona em EN **e** PT-BR. PT corre 20-30% mais longo. Layout que só funciona em inglês está quebrado.
10. Nada pode parecer catálogo de pessoas. Sem grid de rosto, sem filtro de talento, sem contador de disponíveis.

## Ordem de construção

1. Estrutura semântica e conversão
2. Direção de arte estática
3. Composição responsiva
4. Mecanismo cinematográfico dominante
5. Microinterações funcionais
6. Performance e acessibilidade
7. Auditoria e pacote coeso de correções

## Regras criativas

- Comece pela transformação do visitante e pelo ponto de vista da marca.
- Extraia princípios das referências; não copie composição, copy, asset ou assinatura de motion.
- Um mecanismo cinematográfico dominante por projeto. Hoje: **Convergência**.
- Não repita "título centralizado + parágrafo + grid de 3 cards" mais de uma vez por página.
- Não use bento, glass, gradiente roxo, custom cursor ou sombra difusa sobre fundo escuro.
- Card é para item de coleção comparável. Benefício vira lista; etapa vira sequência; argumento vira bloco editorial.
- Copy evocativa pode abrir; copy de suporte precisa orientar.

## Regras de movimento

- CSS/WAAPI: feedback e estado simples.
- Motion: presença, gesto e layout em React.
- GSAP/ScrollTrigger: só onde houver timeline, scrub ou pin real.
- Sem WebGL — a compreensão neste projeto não é espacial.
- Nunca duas tecnologias controlando a mesma propriedade.
- Nunca atualizar estado React por frame.
- Só animar `transform` e `opacity`; qualquer exceção precisa de justificativa registrada.
- Cleanup de todo timeline, listener, observer e frame.
- Respeitar touch, ponteiro grosso, `prefers-reduced-motion` e conexão limitada. O conteúdo nunca depende da animação para existir.

## Regras de entrega

- Verifique visualmente a 375px, 768px, 1024px, 1440px e num viewport de 740px de altura.
- Verifique nas duas línguas.
- Teste teclado, touch, foco, menu, overlay e movimento reduzido.
- Metas de release: LCP ≤ 2,5s · INP ≤ 200ms · CLS ≤ 0,1.
- Rode build, lint e testes na proporção do risco.
- Registre evidências, limitações e riscos restantes.
- Toda decisão nova entra em `docs/11-DECISION-LOG.md`.
