# 09 — Performance e acessibilidade

## Progressive enhancement

Cada camada precisa funcionar sem a próxima:

1. Conteúdo semântico e ações.
2. Layout responsivo e direção estática.
3. Feedback e motion CSS.
4. Sequências coordenadas.
5. Vídeo e WebGL.

## Metas de experiência

| Métrica | Meta | Ambiente/dados | Resultado |
|---|---:|---|---|
| LCP | ≤ 2,5s | p75 quando disponível | A MEDIR |
| INP | ≤ 200ms | p75 quando disponível | A MEDIR |
| CLS | ≤ 0,1 | p75 quando disponível | A MEDIR |
| Frame pacing | Estável no dispositivo-alvo | Lab/real | A MEDIR |

Dados de laboratório são diagnóstico; não substituem dados de campo.

## Caminho crítico

- **Conteúdo acima da dobra:** A DEFINIR
- **Recurso LCP:** A DEFINIR
- **Fontes críticas:** A DEFINIR
- **JS necessário para a primeira ação:** A DEFINIR
- **O que pode ser lazy:** A DEFINIR
- **O que não pode bloquear:** vídeo, 3D e motion decorativo.

## Assets

- [ ] Dimensões/aspect ratio reservados.
- [ ] `srcset`/sizes ou mecanismo equivalente.
- [ ] Formatos modernos quando suportados.
- [ ] Imagens não críticas lazy-loaded.
- [ ] Vídeo possui poster e preload consciente.
- [ ] 3D e animação pesada são carregados depois do HTML crítico.
- [ ] Fontes limitadas a pesos/eixos necessários.
- [ ] Nenhum asset ausente causa erro ou layout shift.

## JavaScript e render

- [ ] Sem updates de estado por frame.
- [ ] Leituras e writes de layout não alternam no mesmo frame.
- [ ] `will-change` é estreito e temporário.
- [ ] Observers/listeners/frames possuem cleanup.
- [ ] Canvas limita DPR e trabalho offscreen.
- [ ] Recursos repetidos são instanciados/reutilizados.
- [ ] Interação primária não espera bundles cinematográficos.

## Semântica e teclado

- [ ] Landmarks e heading order.
- [ ] Links e buttons usados corretamente.
- [ ] Focus-visible evidente.
- [ ] Ordem de foco previsível.
- [ ] Menu/modal contém e devolve foco.
- [ ] Skip link quando necessário.
- [ ] Formulários possuem labels, instruções e erros associados.

## Mídia

- [ ] Imagens relevantes possuem alt adequado.
- [ ] Imagens decorativas são ignoradas corretamente.
- [ ] Vídeo autoplay é mudo e inline.
- [ ] Áudio depende de ação do usuário.
- [ ] Canvas/3D possui alternativa semântica.
- [ ] Controles não dependem apenas de cor, hover ou gesto.

## Movimento e percepção

- [ ] `prefers-reduced-motion` testado.
- [ ] Sem flashing de risco.
- [ ] Motion não bloqueia ação.
- [ ] Conteúdo não depende de trigger frágil.
- [ ] Contraste atende ao alvo do projeto.
- [ ] Zoom e text resize funcionam.

## Orçamento por rota

| Rota | JS inicial | Imagens críticas | Vídeo | 3D | Observação |
|---|---:|---:|---:|---:|---|
| `/` | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |

## Riscos aceitos

| Risco | Motivo | Mitigação | Aprovado por |
|---|---|---|---|
| A DEFINIR | A DEFINIR | A DEFINIR | A DEFINIR |

