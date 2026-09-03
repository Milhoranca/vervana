# 07 — Sistema de movimento

> Movimento deve explicar relação, hierarquia, mudança de estado ou progressão narrativa. Se não cumprir uma função, é ruído.

## Intenção

- **Nível:** `restrito | expressivo | imersivo`
- **Sensação física:** A DEFINIR
- **Relação com a direção criativa:** A DEFINIR
- **Mecanismo dominante:** A DEFINIR
- **Movimentos proibidos:** A DEFINIR

## Ownership

| Necessidade | Tecnologia responsável | Motivo |
|---|---|---|
| Hover/focus/entrada simples | CSS ou WAAPI | Baixo custo |
| Estado/presença/layout React | Motion | Integração declarativa |
| Timeline/scrub/pin | GSAP ScrollTrigger | Controle preciso |
| Cena WebGL | Three.js ou R3F | Espaço real |

**Regra:** uma propriedade não pode ser controlada simultaneamente por CSS, Motion e GSAP.

## Tokens

### Durações

| Token | Faixa inicial | Uso |
|---|---:|---|
| `--motion-feedback` | 100–220ms | Press, hover, focus |
| `--motion-transition` | 250–600ms | Entrada e mudança de estado |
| `--motion-narrative` | timeline/distância | Beats principais |

### Easings

| Token | Valor | Personalidade/uso |
|---|---|---|
| `--ease-direct` | A DEFINIR | Feedback |
| `--ease-enter` | A DEFINIR | Entrada |
| `--ease-exit` | A DEFINIR | Saída |
| `--ease-cinematic` | A DEFINIR | Sequência principal |

### Intensidade

- **Distância curta:** A DEFINIR
- **Distância narrativa:** A DEFINIR
- **Blur máximo:** A DEFINIR
- **Scale máximo:** A DEFINIR
- **Parallax máximo:** A DEFINIR

## Coreografia por seção

| Seção | Trigger | Entrada | Ativo | Saída | Owner | Fallback |
|---|---|---|---|---|---|---|
| Hero | Load/scroll | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |

## Microinterações

| Elemento | Evento | Resposta | Duração | Touch | Teclado |
|---|---|---|---:|---|---|
| Button | hover/press/focus | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |
| Link | hover/focus | A DEFINIR | A DEFINIR | — | A DEFINIR |
| Card | hover/focus | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |
| Menu | open/close | A DEFINIR | A DEFINIR | Sim | Sim |

## Scroll

- **Native scroll por padrão:** Sim
- **Smooth scroll necessário?:** A DEFINIR com justificativa
- **Seções pinned:** A DEFINIR
- **Distâncias de scrub:** A DEFINIR
- **Comportamento em resize:** A DEFINIR
- **Comportamento mobile:** A DEFINIR
- **Anchor/focus/history preservados:** A DEFINIR

## Pointer

- Use Pointer Events.
- Normalize coordenadas uma vez.
- Agrupe writes em `requestAnimationFrame`.
- Não use `setState` por frame.
- Não serialize canvas para Base64 durante o movimento.
- Desative/substitua em touch e coarse pointer.
- Cancele frames e listeners no cleanup.

## Vídeo/3D

- **Pausa offscreen/tab oculta:** A DEFINIR
- **Render sob demanda quando possível:** A DEFINIR
- **DPR e qualidade adaptativa:** A DEFINIR
- **Poster/fallback estático:** A DEFINIR

## Reduced motion

Quando `prefers-reduced-motion: reduce`:

- [ ] Remover scrub e deslocamentos espaciais não essenciais.
- [ ] Remover parallax e auto-advance.
- [ ] Substituir vídeo ambiente por poster quando apropriado.
- [ ] Preservar opacity/feedback apenas quando útil.
- [ ] Garantir que nenhum conteúdo fique oculto.

## Cleanup

- [ ] GSAP contexts/timelines revertidos.
- [ ] ScrollTriggers mortos ao desmontar.
- [ ] Observers desconectados.
- [ ] Event listeners removidos.
- [ ] Animation frames cancelados.
- [ ] Recursos WebGL dispostos.
- [ ] Rotas, resize e remount testados.

