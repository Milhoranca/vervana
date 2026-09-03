# Vervana

Site institucional bilíngue da Vervana com qualidade cinematográfica, direção de arte com modelo 3D WebGL interativo e animações GSAP fluidas.

---

## 🚀 Como Rodar o Projeto

Para executar o projeto localmente no seu computador:

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd vervana-main
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Abra no navegador:**
   Acesse `http://localhost:3000` (ou o link exibido no terminal).

---

## Por onde começar

1. **`AGENTS.md`** — regras operacionais do projeto. Leia antes de qualquer coisa.
2. **`docs/WORKFLOW.md`** — fases, gates e quem destrava o quê.
3. **`docs/BRAND-SYSTEM.md`** — a marca traduzida em regras aplicáveis.
4. **`docs/01-CREATIVE-DIRECTION.md`** — a direção proposta. ⏳ **Precisa de aprovação para o projeto andar.**

---

## Estrutura

```
Vervana/
├── AGENTS.md                       regras operacionais
├── CLAUDE.md                       ponteiro para AGENTS.md
├── Identidade Visual Vervana (1).pdf   brand book — fonte de verdade acima de tudo
│
├── brand-assets/
│   ├── vervana-icon.svg            ícone em vetor, extraído do brand book
│   ├── vervana-chevron.svg         unidade do pattern
│   └── vervana-pattern.svg         pattern tileável, geometria exata
│
├── design-system/
│   ├── tokens.css                  tokens em 3 camadas, dois temas
│   └── styleguide.html             design system navegável (abre no browser)
│
└── docs/
    ├── WORKFLOW.md                 fluxo de trabalho, fases e gates
    ├── BRAND-SYSTEM.md             marca → regras aplicáveis
    ├── 00-PROJECT-CONTEXT.md       negócio, público, rotas, escopo
    ├── 01-CREATIVE-DIRECTION.md    tese visual e mecanismo dominante  ⏳
    ├── 02-REFERENCE-SYNTHESIS.md   referências decompostas em princípios
    ├── 03-DESIGN-SYSTEM.md         tokens, tipografia, componentes, contraste
    ├── 04-CONTENT-COPY.md          copy EN/PT                        · fase 1
    ├── 05-ASSET-PLAN.md            o que existe, o que falta, o que bloqueia
    ├── 06-EXPERIENCE-STORYBOARD.md narrativa por seção                · fase 1
    ├── 07-MOTION-SYSTEM.md         animações                          · fase 4
    ├── 08-RESPONSIVE-MOBILE.md     responsividade                     · fase 3
    ├── 09-PERFORMANCE-ACCESSIBILITY.md                                · fase 5
    ├── 10-QA-RELEASE.md            QA e release                       · fase 5
    ├── 11-DECISION-LOG.md          decisões, pendências, divergências
    └── 12-BUILD-PROMPT.md          template de prompt de build
```

---

## Stack

| Camada | Escolha |
|---|---|
| Framework | Next.js 15 · App Router · TypeScript strict |
| Styling | Tailwind CSS v4 lendo `design-system/tokens.css` |
| i18n | `next-intl` — rotas e slugs traduzidos, EN e PT-BR |
| Componentes | Próprios sobre Radix Primitives |
| Backend | Supabase — Postgres, Auth, Storage, RLS |
| Admin | `/admin` próprio, protegido por Supabase Auth |
| Hospedagem | Vercel |

---

## A marca em cinco linhas

- **Cores:** Lounge Lizard `#9AFF1C` (ação) · Beetle Wing `#003740` (estrutura) · Black 6C `#101820` (fundo) · Black C `#030303` · Briliance `#FEFEFE`
- **Tipos:** Space Grotesk (título) · Inter (corpo) · IBM Plex Mono (dado técnico)
- **Geometria:** angular, sem curvas. Raio 0 é o padrão
- **Tema:** escuro é o padrão, claro é alternativo
- **Proporção:** lime nunca passa de 7% da área

---

## Pendências que travam o projeto

| # | Pendência | Quem |
|---|---|---|
| P01 | Aprovar a direção criativa | Lucas / Felipe |
| P03 | Existem provas reais? (placement, depoimento, número de processo) | Lucas |
| P04 | Fonte dos números do brand book | Lucas |
| P07 | Descrição do processo real, etapa por etapa | Lucas |
| P12 | Logotipo e ícones de sistema em SVG | Miguel Maziero |

Lista completa em `docs/11-DECISION-LOG.md`.

---

> A pasta `cinematic-project-starter - cópia/` é o template em branco que originou este projeto. Todos os documentos já foram copiados e preenchidos em `docs/` — ela pode ser removida.
