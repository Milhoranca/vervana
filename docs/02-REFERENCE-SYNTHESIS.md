# 02 — Síntese de referências

> Estado: `EM REVISÃO`
> Atualizado em: `2026-08-07`
> Referências são matéria-prima para princípios. Não são layouts a serem remontados.

## Método

Para cada referência, separamos: o que foi observado · o princípio por trás · o que pode ser adaptado · a assinatura reconhecível que **não** será copiada · adequação ao projeto.

**Verificação:** as fichas de Scale, Ramp, Hebbia, Forze e PJStack foram levantadas a partir do conteúdo real das páginas (estrutura, headlines, ordem de seção, tom). A ficha de Aetheris está **não verificada** — a página é renderizada por JavaScript e não retornou conteúdo. Ver §Pendências.

---

## Mapa de cinco faixas

| Referência | Tipografia/hierarquia | Cor/material | Composição/grid | Motion | Copy/tom |
|---|---|---|---|---|---|
| **Scale** | Sans neutra, alta densidade, títulos curtos e afirmativos | Escura, acento contido, superfícies técnicas | Grid rígido, muitas fileiras, logo wall extenso | Discreto — a autoridade vem da densidade, não do movimento | Problema→solução→prova. "Most AI deployments in enterprise and government fail" |
| **Ramp** | Sans apertada, número como elemento tipográfico principal | Clara, acento em dose mínima | Blocos largos, screenshot de produto como prova | Contido, funcional | Métrica de cliente como argumento: "8VC: 325 hours saved" |
| **Hebbia Max** | Editorial, título grande, respiro generoso | Clara, densidade moderada | Feature por feature, cada uma com um verbo | Sóbrio | Linguagem de **resultado**, não de recurso: "Staff AI on your next deal" |
| **Forze** | Títulos afirmativos curtos, separador `//` mono | — | Estatísticas → capacidades → processo numerado → FAQ → insights → newsletter | — | "Build your ideas. Scale with AI." Processo em `// 01–04` |
| **PJStack** | Título com código embutido | — | Comparação lado a lado, hub de features, planos, bio do fundador, FAQ | — | Nativo de dev em PT-BR: `git commit -m "refactor: migrei minha contabilidade"` |
| **Aetheris** | *não verificado* | *não verificado* | *não verificado* | *não verificado* | *não verificado* |

---

## Fichas

### Scale AI — `scale.com`

- **Função:** modelo de **autoridade sem barulho**. Como uma empresa técnica constrói credibilidade sem depoimento emocional.
- **O que funciona:** abre nomeando a falha do mercado ("Most AI deployments in enterprise and government fail") antes de falar de si. Prova concentrada em duas estatísticas fortes e em 13 casos nomeados, não em vinte números fracos. Densidade alta lida como competência.
- **Princípio extraído:** **autoridade vem de admitir o problema real antes de vender.** E de poucos números fortes, não de muitos fracos.
- **Como adaptar:** a home da Vervana abre pela falha do processo atual — volume sem sinal — e só depois apresenta o método. Duas provas fortes no máximo por seção.
- **Assinatura que não será copiada:** o logo wall gigantesco de clientes enterprise. A Vervana não tem esse inventário e forjar isso é o oposto do posicionamento.
- **Risco de uso superficial:** copiar a densidade sem ter o que preencher gera uma página que parece cheia e não diz nada.

### Ramp — `ramp.com`

- **Função:** modelo de **prova quantificada** e de contenção cromática.
- **O que funciona:** o número é o elemento tipográfico principal — "27M+ hours saved", "75% faster close", casos com valor atribuído a cliente nomeado. Acento usado em dose homeopática numa página majoritariamente neutra. Produto mostrado, não descrito.
- **Princípio extraído:** **um número atribuído a alguém vale mais que dez adjetivos.** E acento raro é acento que funciona.
- **Como adaptar:** a disciplina cromática do Ramp é exatamente a proporção que o brand book da Vervana já exige (lime ≤ 7%). O tratamento de número vira o componente `Stat`, em IBM Plex Mono tabular — mas **só entra quando houver dado real**. Sem dado, a seção não existe.
- **Assinatura que não será copiada:** a estética clara e a densidade de screenshot de produto. A Vervana é escura por definição de marca e não tem produto de tela para mostrar.
- **Risco de uso superficial:** montar a moldura de "grid de métricas" e preencher com número inventado. Isso é o que o `00-PROJECT-CONTEXT.md` proíbe.

### Hebbia Max — `hebbia.com/max`

- **Função:** modelo de **linguagem de resultado**.
- **O que funciona:** cada feature vira um verbo do ofício do cliente — "Model the LBO", "Screen the target list", "Spread the comps". O produto nunca é descrito por si; é descrito pelo trabalho que ele faz. Respiro generoso, um argumento por tela.
- **Princípio extraído:** **descreva o trabalho do cliente, não o seu.**
- **Como adaptar:** as seções da Vervana são nomeadas pelo que o founder precisa resolver — "abrir a vaga", "separar sinal de ruído", "fechar sem risco" — e não por "nossos serviços" / "nosso diferencial".
- **Assinatura que não será copiada:** o padrão de feature-com-screenshot repetido em sequência longa. Vira catálogo, e a Vervana precisa de narrativa.
- **Risco de uso superficial:** adotar o respiro sem ter argumento — página longa e vazia.

### Forze — `forze.com.br`

- **Função:** modelo de **estrutura de empresa de serviço**, e a referência mais próxima do tipo de negócio.
- **O que funciona:** a espinha estatísticas → capacidades → processo numerado (`// 01–04`) → FAQ → insights → newsletter. É a arquitetura correta para quem vende serviço com metodologia. O separador `//` em mono dá assinatura técnica barata e eficaz.
- **Princípio extraído:** **serviço se vende explicando o método, passo a passo, com numeração visível.** A numeração transforma processo em produto.
- **Como adaptar:** `/how-it-works` é construída assim, com o número da etapa em IBM Plex Mono e o **chevron da marca como conector** entre etapas — em vez do `//`, que é do Forze. Blog/insights e newsletter entram na fase 6, com a estrutura já reservada.
- **Assinatura que não será copiada:** o separador `//`, a estatística com formato `$0M` e o vocabulário de agência de IA.
- **Risco de uso superficial:** herdar a estrutura inteira e virar "mais uma agência". O que diferencia a Vervana é o **mecanismo de risco** (paga na entrega, reposição gratuita), que o Forze não tem — isso precisa de peso próprio na página.

### PJStack — `pjstack-lp.vercel.app`

- **Função:** modelo de **como falar com dev brasileiro sem soar constrangedor**. A referência mais importante para `/para-talentos`.
- **O que funciona:** headline com código embutido (`por quem entende </código>`), depoimento em formato de commit, seção "Mas nem sempre a rotina é assim" que nomeia o incômodo real antes de oferecer solução. Preço aberto e explícito. Bio do fundador com rosto — quem está do outro lado.
- **Princípio extraído:** **credibilidade com dev vem de mostrar que você é do mesmo mundo, não de dizer que é.** Uma referência técnica bem colocada vale mais que um parágrafo sobre cultura.
- **Como adaptar:** `/para-talentos` nomeia o incômodo antes de oferecer ("você mandou 40 candidaturas e recebeu 2 respostas automáticas"). O vocabulário autorizado do brand book — `hands-on`, `battle-tested`, `sharp` — cobre isso sem precisar de gíria forçada. A bio do fundador vira a página Sobre: quem avalia, com nome e histórico.
- **Assinatura que não será copiada:** o `git commit` como formato de depoimento e o tom de humor explícito. A Vervana é premium; a leveza dela é mais seca.
- **Risco de uso superficial:** gíria de dev usada por quem não é dev soa falso na hora. Só entra o que o time realmente fala.

### Aetheris — `aetheris-web3-72.aura.build`

- **Status: NÃO VERIFICADA.** A página é renderizada por JavaScript e não retornou conteúdo. O único dado obtido foi o título — um template de landing page de startup de blockchain Layer 1.
- **Hipótese sobre a intenção:** pelo padrão desse tipo de template, a atração provável é a **atmosfera** — fundo escuro profundo, tipografia grande, elementos geométricos animados, sensação de tecnologia de fronteira.
- **Pendência:** Felipe, me diz o que especificamente te chamou atenção nessa (a atmosfera? um efeito? o hero? o ritmo?), ou manda um print. Sem isso vou registrar a referência como **descartada por falta de leitura**, não por inadequação.
- **Alerta preventivo:** se o interesse for o vocabulário visual web3 — glow roxo, gradiente de malha, partículas, glassmorphism — ele conflita frontalmente com o brand book, que é angular, sem curvas e de paleta fechada. Nesse caso a referência entra como *o que evitar*.

---

## Concorrentes analisados

Não são referências visuais — são o mapa do que **não** repetir.

| Concorrente | Posição | Leitura |
|---|---|---|
| **WeWorkRemotely** | Job board puro | Volume total, curadoria zero. É exatamente o "algoritmo que filtra palavra-chave e não pessoa" que o brand book ataca. A Vervana é o oposto: pouco volume, muito sinal |
| **Near (hirewithnear.com)** | Staffing nearshore LATAM | Concorrente mais direto no discurso. Vende custo e velocidade. O espaço que sobra para a Vervana é **quem avalia** — engenheiro, não recrutador |
| **Revelo** | Plataforma/marketplace BR | Escala e tecnologia. Trata talento como inventário buscável. A Vervana precisa parecer o contrário de um marketplace — e isso é uma decisão de design, não só de copy |

**Consequência de design:** nada no site pode parecer catálogo de pessoas. Sem grid de foto de candidato, sem filtro de talento, sem contador de "X devs disponíveis". A prova da Vervana é o **critério**, não o estoque.

---

## Síntese original

> A direção combina **a abertura pela falha do mercado (Scale)**, **a prova quantificada e atribuída em dose mínima (Ramp)**, **a nomenclatura por trabalho do cliente (Hebbia)**, **o método numerado como produto (Forze)** e **a fluência nativa com o dev brasileiro (PJStack)** — reinterpretados pela tese da Vervana: *volume é ruído; a entrega é sinal*.
>
> Nenhuma delas é escura, angular e bilíngue ao mesmo tempo. A síntese é original porque a marca é o material, não a referência.

---

## Teste anti-cópia

- [x] A página continua justificável sem citar a referência — o argumento vem do brand book
- [x] Nenhuma seção repete estrutura, copy e movimento da mesma fonte
- [x] Fontes, cores e composição vêm do brand book, não das referências
- [x] As assinaturas mais reconhecíveis foram nomeadas e excluídas
- [x] A síntese responde ao negócio e ao público deste projeto
- [x] Cinco fontes verificadas contribuíram

---

## Referências descartadas

| Referência | Motivo | Aprendizado preservado |
|---|---|---|
| Aetheris | Não foi possível ler a página. Pendente de retorno do Felipe | — |
| WeWorkRemotely | Anti-referência — é o modelo de volume que a marca ataca | Nada no site pode parecer catálogo |
| Revelo | Anti-referência — marketplace, talento como inventário | Sem grid de perfil, sem contador de disponíveis |

---

## Pendências

1. **Aetheris:** o que exatamente atraiu? Print ou descrição resolvem.
2. Se surgirem referências novas, cada uma entra com uma **intenção declarada** — "gostei disso" não é intenção suficiente para virar decisão de design.
