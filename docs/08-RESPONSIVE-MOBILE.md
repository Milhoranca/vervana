# 08 — Responsividade e mobile

> Responsividade é reorganizar prioridade, narrativa, mídia e interação. Não apenas reduzir dimensões.

## Estratégia por faixa

Defina breakpoints a partir do conteúdo real.

| Faixa | Composição | Navegação | Mídia | Motion | Densidade |
|---|---|---|---|---|---|
| Mobile pequeno | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |
| Mobile grande | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |
| Tablet | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |
| Desktop | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |
| Wide | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |

## Prioridade mobile

1. A DEFINIR
2. A DEFINIR
3. A DEFINIR

### Remover, simplificar ou substituir

| Elemento | Desktop | Mobile | Motivo |
|---|---|---|---|
| Hero media | A DEFINIR | A DEFINIR | A DEFINIR |
| Elementos decorativos | A DEFINIR | A DEFINIR | A DEFINIR |
| 3D | A DEFINIR | A DEFINIR | A DEFINIR |
| Pin/parallax | A DEFINIR | A DEFINIR | A DEFINIR |

## Ordem e semântica

- **Ordem visual mobile:** A DEFINIR
- **Ordem no DOM:** A DEFINIR
- **Ordem de foco:** A DEFINIR
- **Uso de CSS `order`:** evitar quando cria divergência semântica.

## Tipografia

- **Headline mobile:** escala fluida e line breaks testados.
- **Comprimento máximo:** A DEFINIR
- **Palavras críticas que não podem isolar:** A DEFINIR
- **Zoom do navegador permanece funcional:** Sim

## Navegação

- **Padrão mobile:** A DEFINIR
- **Abertura/fechamento:** A DEFINIR
- **Focus trap:** A DEFINIR
- **Retorno de foco:** A DEFINIR
- **Scroll lock:** A DEFINIR
- **Escape/back:** A DEFINIR

## Touch e input

- Alvos importantes confortavelmente operáveis; 44×44 CSS px é uma referência mínima útil.
- Espaçamento evita toques acidentais.
- Não há ação disponível apenas em hover.
- Gestos possuem controles alternativos visíveis.
- Custom cursor não aparece em touch/coarse pointer.

## Viewports de teste

- [ ] 320px
- [ ] 375px
- [ ] 390px
- [ ] 768px
- [ ] 1024px
- [ ] 1440px
- [ ] Uma largura intermediária onde o conteúdo quebra
- [ ] Viewport baixo
- [ ] Orientação paisagem quando relevante

## Checklist

- [ ] Sem overflow horizontal.
- [ ] Sem palavras, mídia ou controles cortados.
- [ ] CTA principal aparece no momento certo.
- [ ] Imagem possui crop mobile.
- [ ] Vídeo/3D possui fallback.
- [ ] Pin e scrub foram adaptados ou removidos.
- [ ] Menu funciona com touch e teclado.
- [ ] Leitura e foco seguem ordem lógica.
- [ ] Safe areas e browser chrome não escondem controles.

