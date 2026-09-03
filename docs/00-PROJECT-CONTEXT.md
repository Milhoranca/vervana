# 00 — Contexto do projeto

> Estado: `EM REVISÃO`
> Atualizado em: `2026-08-07`
> Responsável pela aprovação: Lucas Garcia — lucasgarcia@workoast.com

## Identidade

- **Marca/empresa:** Vervana
- **Nome do projeto:** Site institucional Vervana + plataforma de conteúdo e vagas
- **Tipo:** Novo (greenfield)
- **Escopo inicial:** Institucional bilíngue, com blog e vagas em fase posterior
- **URL atual:** Nenhuma conhecida. Domínio citado no brand book: `vervana.io` — **confirmar propriedade**
- **Mercado/localidade:** Estados Unidos (demanda) + Brasil (oferta de talento)
- **Idiomas:** Inglês e Português-BR, cobertura completa nos dois

## Verdade do negócio

- **Oferta:** Recrutamento e seleção de engenheiros de software brasileiros para posições remotas em startups de tecnologia americanas. Curadoria feita por engenheiros.
- **Problema resolvido:** Founders e líderes técnicos americanos não conseguem separar candidato bom de candidato que entrevista bem, não têm tempo para recrutar, e os processos disponíveis entregam volume em vez de sinal.
- **Diferencial comprovável:**
  1. Quem avalia é engenheiro, não recrutador generalista — o time já foi dev, já construiu startup, já fez exit
  2. Pagamento só quando a vaga é preenchida
  3. Garantia de reposição gratuita se não houver fit
  4. Custo até 50% menor que o mercado americano *(número do brand book — precisa de base de cálculo antes de ir ao ar)*
- **Provas disponíveis hoje:** **nenhuma confirmada.** Sem cases, sem números de placement, sem depoimentos, sem logos de clientes autorizados. Ver §Perguntas materiais.
- **O que não pode ser afirmado:**
  - Qualquer número de contratações, clientes, tempo médio de fechamento ou taxa de retenção sem dado real
  - Nome ou logo de cliente sem autorização por escrito
  - Depoimento sem pessoa real identificada
  - As palavras `elite level`, `top-tier`, `top 1`, `world-class` (proibição do brand book 1.12)
  - Estatísticas de mercado sem fonte pública citável

## Público e contexto

- **Público primário:** Founders/CEOs e líderes de tecnologia (CTO, VP Eng, Head of Eng) de startups americanas pré-seed a Série D. 25-50 anos. São Francisco, NY, Austin, Dallas, Toronto. 20-100 funcionários, $2M-$40M/ano de faturamento.
- **Público secundário:** Engenheiros de software brasileiros, dois recortes — 21-28 anos (risco, crescimento acelerado, autodidatas) e 30-45 anos (família, estabilidade, mais experiência).
- **O que procuram:**
  - *Empresa* — reduzir custo e risco de contratação técnica, contratar rápido sem baixar a régua
  - *Talento* — trabalhar remoto para startup americana, receber em dólar, ter autonomia
- **Objeções e medos:**
  - *Empresa* — "já perdi tempo e dinheiro com agência que mandou dezenas de desqualificados"; medo da contratação errada; dúvida sobre fuso, idioma e jurídico
  - *Talento* — "vou virar número numa plataforma"; processo longo sem retorno; vaga que não existe de verdade
- **Conhecimento prévio:** Alto sobre tecnologia, baixo sobre o mercado brasileiro de engenharia (lado empresa). Alto sobre o próprio ofício, baixo sobre como startups americanas contratam (lado talento).
- **Dispositivo/contexto provável:** Founder em desktop, no meio do dia de trabalho, comparando fornecedores. Dev em mobile, à noite, em conexão variável. **Mobile e conexão limitada não são caso de borda — são metade do público.**
- **Acessibilidade:** Nenhuma necessidade específica declarada. Alvo padrão WCAG 2.2 AA.

## Conversão

- **Objetivo principal:** Gerar conversas qualificadas com founders e líderes técnicos.
- **Ação principal:** Agendar uma call de diagnóstico de vaga.
- **Ações secundárias:**
  - Entrar no banco de talentos (lado dev)
  - Assinar conteúdo (fase 6)
  - Ver vagas abertas (fase 6)
- **Critério de sucesso:** Volume e qualidade de calls agendadas com o ICP correto — não sessões nem tempo de página.
- **Métrica ou evidência:** **A definir com o Lucas.** Sem baseline hoje. Precisa de ferramenta de agendamento e destino de lead definidos antes do lançamento.

## Promessa

> Em uma frase, o visitante deve entender que:
>
> A Vervana encontra o engenheiro certo — não uma pilha de candidatos — porque quem faz a seleção é engenheiro, e ela só cobra quando a pessoa entra.

### Transformação

- **Estado de entrada (empresa):** Precisa contratar, já se queimou com processo que entrega volume, não confia em fornecedor de recrutamento e não tem tempo de conduzir sozinho.
- **Estado desejado ao final:** Entende o método, vê onde o risco foi retirado dele, e considera a conversa barata o suficiente para agendar.
- **Ação esperada:** Agendar a call.

- **Estado de entrada (talento):** Quer trabalhar lá fora, desconfia de processo que não dá retorno.
- **Estado desejado ao final:** Entende que a seleção é técnica e conduzida por pares, e que vale entrar no radar.
- **Ação esperada:** Entrar no banco de talentos.

## Escopo

### Incluído — Fase 1

- Site institucional completo, bilíngue EN/PT-BR
- Design system implementado em código
- SEO técnico, sitemap, `hreflang`, dados estruturados
- Formulários com destino real de lead
- Estrutura de rotas já preparada para blog e vagas (sem conteúdo nem admin)

### Não incluído na Fase 1

- Blog com conteúdo publicado *(fase 6)*
- Listagem e página de vaga *(fase 6)*
- Painel administrativo *(fase 7)*
- Área logada de candidato ou de cliente
- ATS, integração com job boards externos, importador de currículo
- Produção de vídeo, fotografia ou 3D original

### Páginas/rotas

Rotas localizadas nos dois idiomas. Slug traduzido, com `hreflang` recíproco.

> **Atualizado em 2026-08-07** para refletir o nav definido pelo cliente: `For Startups · Careers · About · Blog` + CTA `Start Hiring`. Substitui o esboço anterior (`for-companies` / `for-talent` / `jobs` separados) — ver D15 em `11-DECISION-LOG.md`.

| Página | Rota EN | Rota PT | Função | CTA | Prioridade | Status |
|---|---|---|---|---|---|---|
| Home | `/en` | `/pt` | Promessa + método + prova + os dois caminhos | Start Hiring | Alta | Pendente |
| For Startups | `/en/for-startups` | `/pt/para-startups` | Funil da empresa: risco, custo, garantia, método completo | Start Hiring | Alta | Pendente |
| Careers | `/en/careers` | `/pt/carreiras` | Funil do dev: liberdade, dólar, autonomia + vagas abertas | Entrar no banco | Alta | Pendente |
| Vaga | `/en/careers/[slug]` | `/pt/carreiras/[slug]` | Detalhe + candidatura | Candidatar | Média | Fase 6 |
| About | `/en/about` | `/pt/sobre` | História, ponto de vista, quem avalia | Start Hiring | Média | Pendente |
| Start Hiring | `/en/start-hiring` | `/pt/comecar` | Formulário de diagnóstico + agendamento | Enviar | Alta | Pendente |
| Blog | `/en/blog` | `/pt/blog` | Índice de conteúdo | Assinar | Média | Fase 6 |
| Post | `/en/blog/[slug]` | `/pt/blog/[slug]` | Artigo | Start Hiring | Média | Fase 6 |
| Legal | `/en/privacy`, `/en/terms` | `/pt/privacidade`, `/pt/termos` | Jurídico | — | Alta | Pendente |
| Admin | `/admin/*` | — | Painel. Não localizado, sem indexação | — | Alta | Fase 7 |

**"How It Works" não é rota.** O CTA secundário do hero (`See How It Works`) é âncora `#how-it-works` para a seção de método na home. O método completo, etapa por etapa, vive dentro de `/for-startups`. Uma página só para isso fragmentaria o funil sem ganho — e o nav do cliente não a contempla.

**"Careers" absorve o antigo `/for-talent` + `/jobs`.** É como o público espera encontrar, e concentra o funil do dev em uma rota só: argumento + vagas abertas na mesma página.

**Decisão de idioma padrão:** raiz `/` redireciona por `Accept-Language`, com fallback em **inglês** — o público que paga é americano. A escolha manual do usuário persiste em cookie e vence a detecção. Nunca redirecionar por geolocalização de IP sozinha: quebra SEO e irrita quem viaja.

## Estado técnico

| Item | Decisão |
|---|---|
| **Framework** | Next.js 15, App Router, TypeScript strict |
| **Styling** | Tailwind CSS v4 lendo `design-system/tokens.css` via `@theme` |
| **i18n** | `next-intl` com roteamento por prefixo de idioma e slugs traduzidos |
| **Componentes** | Próprios, sobre Radix Primitives para comportamento acessível |
| **Motion** | CSS/WAAPI como base · Motion para presença e layout · GSAP+ScrollTrigger só onde houver scrub ou pin real |
| **CMS/backend** | Supabase — Postgres, Auth, Storage, RLS |
| **Admin** | Construído por nós em `/admin`, protegido por Supabase Auth |
| **Hospedagem** | Vercel |
| **Integrações** | Agendamento (Cal.com ou Calendly — a definir) · e-mail transacional (Resend) · analytics |
| **Analytics/SEO** | Nenhum existente. Sugestão: Vercel Analytics + Google Search Console. Sem GA4 se não for usado de fato |
| **Browsers mínimos** | Últimas 2 versões de Chrome, Safari, Firefox, Edge. Safari iOS 16+ |
| **Prazo** | **A definir** |
| **Manutenção aceitável** | Cliente edita blog e vagas sozinho pelo `/admin`. Estrutura de páginas institucionais muda só com desenvolvimento |

### Modelo de dados — esboço para as fases 6 e 7

Não implementar agora. Serve para não desenhar o site de um jeito que inviabilize isso depois.

```
posts          id · slug_en · slug_pt · status · published_at · author_id · cover_id
post_i18n      post_id · locale · title · excerpt · body · seo_title · seo_description
jobs           id · slug_en · slug_pt · status · seniority · stack[] · comp_min · comp_max
                 currency · location_type · timezone_overlap · company_ref · published_at
job_i18n       job_id · locale · title · summary · responsibilities · requirements
applications   id · job_id · name · email · linkedin · github · locale · resume_path · created_at
leads          id · type(company|talent) · name · email · company · role · message · locale · source
authors        id · name · role · avatar_id · bio_en · bio_pt
media          id · path · alt_en · alt_pt · width · height
```

Tudo com RLS. Leitura pública apenas de `posts`/`jobs` em `status = 'published'`. `applications` e `leads` nunca são legíveis publicamente.

## Inventário existente

| Item | Existe? | Localização | Qualidade | Ação |
|---|---:|---|---|---|
| Brand book | Sim | `Identidade Visual Vervana (1).pdf`, 62 pág. | Excelente e completo | Usar como fonte de verdade |
| Ícone (vetor) | Sim | `brand-assets/vervana-icon.svg` | Extraído do PDF, fiel | Pronto |
| Chevron / pattern | Sim | `brand-assets/vervana-chevron.svg`, `vervana-pattern.svg` | Extraído do PDF, geometria exata | Pronto |
| Logotipo completo (SVG) | **Não** | — | — | **Solicitar ao Miguel Maziero** |
| Ícones de sistema (24) | **Não** | Só rasterizados no PDF | — | **Solicitar** ou usar Phosphor `fill` |
| Fontes | Sim | Google Fonts / OFL | Licença livre | Servir via `next/font` |
| Copy | **Não** | — | — | Escrever na fase 4 |
| Fotografia | **Não** | — | — | Planejar — ver `05-ASSET-PLAN.md` |
| Vídeo | **Não** | — | — | Não assumir que existirá |
| 3D | **Não** | — | — | Não assumir |
| Cases / depoimentos | **Não** | — | — | **Bloqueio para a fase 4** |

## Restrições e não negociáveis

1. Proporção de cor do brand book: lime ≤ 7% da área no tema escuro, ≤ 3% no claro
2. Nenhuma palavra da lista proibida do brand book
3. Nenhum número, cliente, métrica ou depoimento inventado
4. O conteúdo não pode parecer gerado por IA — critério explícito do cliente, tratado como gate de aceite
5. Copy não pode ser agressiva
6. Tudo funciona nos dois idiomas; layout que só funciona em inglês está quebrado
7. Geometria angular — raio 0 é o padrão do sistema
8. Os dois mecanismos de segurança (paga só na entrega + reposição gratuita) aparecem no funil de empresa

## Perguntas materiais em aberto

Ordenadas por impacto. As três primeiras bloqueiam a fase 4 (copy).

1. **Provas.** Existe algum placement fechado, cliente disposto a dar depoimento, ou número real de processo (tempo médio, taxa de aprovação)? Sem isso, o site inteiro argumenta por método em vez de resultado — o que é viável, mas é uma decisão, não um acidente.
2. **Os números do brand book têm fonte?** "Custo até 50% menor", "1 milhão de vagas até 2034", "80% das empresas consideram nearshore". Cada um precisa de fonte citável ou sai.
3. **Preço/modelo comercial pode ser público?** Percentual sobre salário, fee fixo, faixa? Concorrentes expõem em graus diferentes. Isso muda a página de empresas.
4. **Domínio.** `vervana.io` está registrado? O brand book cita, mas não confirma.
5. **Rótulo do selo.** O brand book chama de "Desenvolvedor de Elite", o que colide com a proibição de "elite". Aprova renomear? Sugestão: `Verificado pela Vervana` / `Vervana Verified`.
6. **Ferramenta de agendamento** e para onde vai o lead (e-mail, CRM, Slack)?
7. **Quem escreve o blog** e com que frequência? Isso dimensiona o admin da fase 7.
8. **Existe time com foto e cargo** para a página Sobre? "Engenheiros selecionam engenheiros" fica muito mais forte com rosto e histórico.

## Premissas autorizadas

Assumidas para destravar o trabalho. Cada uma vira decisão registrada quando confirmada.

- Inglês é o idioma de fallback na raiz
- O funil de empresa tem prioridade sobre o de talento em disputa de espaço na home
- Sem provas na fase 1, a home argumenta por **método e mecanismo de risco**, não por resultado
- A página Sobre usa a narrativa "A Nova Fronteira" do brand book como espinha dorsal
- Fotografia será dirigida e produzida, não banco de imagem genérico — ver `05-ASSET-PLAN.md`
- O painel admin não precisa ser bilíngue na interface; o **conteúdo** que ele edita, sim
