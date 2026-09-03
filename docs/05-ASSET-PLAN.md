# 05 — Plano de assets

> Estado: `EM REVISÃO`
> Atualizado em: `2026-08-07`

Nada aqui é assumido como existente. O que não está marcado como pronto é risco de cronograma.

---

## 1. Marca

| Asset | Estado | Origem | Ação |
|---|---|---|---|
| Ícone (vetor) | ✅ Pronto | Extraído em vetor do brand book, pág. 41 | `brand-assets/vervana-icon.svg` |
| Chevron (unidade do pattern) | ✅ Pronto | Extraído do brand book, pág. 60 | `brand-assets/vervana-chevron.svg` |
| Pattern tileável | ✅ Pronto | Geometria exata do brand book | `brand-assets/vervana-pattern.svg` |
| **Logotipo completo (SVG)** | 🔴 **Faltando** | — | **Solicitar ao Miguel Maziero** |
| **Ícones de sistema (24)** | 🔴 **Faltando** | Só rasterizados no PDF | Solicitar; fallback Phosphor `fill` |
| Favicon / app icons | ⚪ Derivável | Do ícone pronto | Gerar na Fase 2 |
| OG images | ⚪ Derivável | Template no design system | Gerar dinamicamente por rota |

### Por que o logotipo precisa vir do designer

O wordmark é tipografia customizada — o brand book destaca que **o "r" tem terminal quadrado e reto**, detalhe que o separa do genérico. Reconstruir isso a partir do PDF produziria uma aproximação, não o logo. Aproximação de logo é erro de marca, não economia de tempo.

**Pedido ao Miguel, por escrito:**
1. Logotipo horizontal, vertical, wordmark+ícone reduzido e wordmark isolado — `.svg` com curvas convertidas, um arquivo por variação
2. Cada variação nos dois temas (Briliance e Black 6C)
3. Ícone isolado em `.svg` (para conferir contra o que extraímos)
4. Os 24 ícones de sistema em `.svg`, grid de 24px
5. Arquivo fonte `.ai` para futuras aplicações

---

## 2. Fotografia

**Situação:** não existe nenhuma foto. Esta é a maior decisão em aberto do projeto, porque ela determina qual direção criativa é viável.

### Opção 1 — Produção dirigida *(necessária para a Direção B)*

Ensaio com devs brasileiros reais, no ambiente real. Enquadramento próximo e cortado, luz dura de fonte única, luz de tela no rosto, grade com sombras puxadas para o petróleo do Beetle Wing.

- **Necessário:** 12-18 imagens aproveitáveis
- **Custo:** a orçar
- **Risco:** prazo e disponibilidade de pessoas reais

### Opção 2 — Site sem foto de pessoa *(compatível com a Direção A — recomendada)*

Composição carregada por tipografia, pattern, geometria e alternância de fundo. É o caminho coerente com o inventário atual e não compromete nada.

- **Necessário:** nada além do que já existe
- **Risco:** exige execução de layout muito boa — sem foto, não há onde esconder composição fraca

### Opção 3 — Banco de imagem

**Descartada.** Foto de escritório genérico destrói o pilar de exclusividade e faz a Vervana parecer exatamente as agências que o brand book ataca. Se a escolha for não produzir, a resposta é a Opção 2, não stock.

> **Decisão necessária do Lucas:** existe verba e disponibilidade para produção fotográfica? Ver `11-DECISION-LOG.md`.

---

## 3. Retratos do time — página Sobre

O argumento central da marca é *"engenheiros selecionam engenheiros"*. Esse argumento fica muito mais forte com rosto, nome, cargo e histórico técnico de quem avalia.

- **Necessário:** foto + bio de cada pessoa que participa da avaliação
- **Tratamento:** mesmo grade das demais imagens, enquadramento consistente, fundo neutro escuro
- **Alternativa se não houver foto:** bloco tipográfico com nome, cargo e histórico (ex-dev, ex-founder, exit). Menos forte, mas honesto
- **Bloqueio:** depende de resposta do Lucas sobre quem compõe o time

---

## 4. Logos de clientes

**Não usar nenhum** até haver autorização por escrito. Sem clientes autorizados, a seção de logo wall **não existe** — não vira placeholder, não vira "em breve", não vira logo borrado.

---

## 5. Vídeo e 3D

Nenhum planejado, nenhum assumido. O mecanismo de convergência é SVG/canvas 2D com scroll — não exige vídeo nem WebGL.

Se surgir vídeo depois: `poster` obrigatório, sem autoplay com som, `preload="none"`, desligado em movimento reduzido e em conexão limitada.

---

## 6. Tipografia

| Fonte | Licença | Entrega |
|---|---|---|
| Space Grotesk | OFL | `next/font/google`, variável, subset `latin` + `latin-ext` |
| Inter | OFL | `next/font/google`, variável, subset `latin` + `latin-ext` |
| IBM Plex Mono | OFL | `next/font/google`, pesos 400 e 500 apenas |

`latin-ext` é obrigatório — sem ele os acentos do PT-BR caem em fallback no meio da palavra. Manter `adjustFontFallback` ligado para CLS zero.

---

## 7. Textura

- `grain.png` — ruído 128×128, tileável, aplicado a 2,5% de opacidade sobre blocos `#030303`
- Gerar na Fase 2. PNG, nunca filtro SVG — filtro custa GPU sem ganho

---

## 8. Conteúdo textual

| Item | Estado | Responsável |
|---|---|---|
| Copy institucional EN | 🔴 Não existe | Fase 1 — aprovação do Lucas |
| Copy institucional PT-BR | 🔴 Não existe | Fase 1 — aprovação do Lucas |
| Descrição do método, etapa por etapa | 🔴 Não existe | **Depende do Lucas descrever o processo real** |
| Textos legais (privacidade, termos) | 🔴 Não existe | Jurídico do cliente |
| Depoimentos | 🔴 Não existe | Bloqueio — ver `00-PROJECT-CONTEXT.md` |

**A dependência mais crítica:** ninguém consegue escrever `/como-funciona` sem o Lucas descrever o processo real da Vervana, etapa por etapa, com nome e prazo de cada uma. É a página que mais sustenta o pilar Confiança, e não pode ser inventada.

---

## 9. Resumo de bloqueios

| # | Bloqueio | Impede | Responsável |
|---|---|---|---|
| 1 | Logotipo em SVG | Fase 2 (header, footer, favicon) | Miguel |
| 2 | Descrição do processo real | Fase 1 (`/como-funciona`) | Lucas |
| 3 | Decisão sobre fotografia | Escolha entre Direção A e B | Lucas |
| 4 | Existência de provas | Estrutura da home | Lucas |
| 5 | Fonte dos números do brand book | Qualquer estatística no ar | Lucas |
| 6 | Ícones de sistema | Fase 2 (mitigável com Phosphor `fill`) | Miguel |
