# 12 — Prompt consolidado de implementação

> Use somente depois que contexto, direção e storyboard estiverem aprovados. Substitua os campos ou instrua o Codex a consolidá-los a partir dos documentos.

## Prompt

```text
Use $cinematic-web-director como diretor criativo e engenheiro frontend sênior.

Leia AGENTS.md e use como fonte de verdade:
- docs/00-PROJECT-CONTEXT.md
- docs/01-CREATIVE-DIRECTION.md
- docs/02-REFERENCE-SYNTHESIS.md
- docs/03-DESIGN-SYSTEM.md
- docs/04-CONTENT-COPY.md
- docs/05-ASSET-PLAN.md
- docs/06-EXPERIENCE-STORYBOARD.md
- docs/07-MOTION-SYSTEM.md
- docs/08-RESPONSIVE-MOBILE.md
- docs/09-PERFORMANCE-ACCESSIBILITY.md
- docs/11-DECISION-LOG.md

Antes de editar:
1. Confirme que a direção criativa está aprovada.
2. Examine a implementação existente, stack, componentes, dependências e assets.
3. Liste divergências entre documentação e código.
4. Não invente conteúdo, métricas, provas ou assets.
5. Não troque a stack nem instale dependências redundantes sem justificativa.

Implemente em passes coerentes:

1. Estrutura semântica, conteúdo e conversão.
2. Direção de arte estática: grid, tipografia, cor, imagem e primeiro frame.
3. Composição responsiva com mobile tratado como nova sequência.
4. Mecanismo cinematográfico dominante aprovado.
5. Microinterações com função de feedback, hierarquia ou navegação.
6. Progressive enhancement, acessibilidade e performance.
7. Auditoria visual e pacote coeso de correções.

Regras de movimento:
- Use somente o owner definido em docs/07-MOTION-SYSTEM.md para cada comportamento.
- Não controle a mesma propriedade com múltiplas bibliotecas.
- Conteúdo e CTA devem funcionar sem vídeo, WebGL, hover ou motion complexo.
- Implemente touch/coarse pointer, prefers-reduced-motion e fallback estático.
- Faça cleanup de timelines, listeners, observers, animation frames e recursos WebGL.

Verificação:
- Execute build, lint, typecheck e testes existentes em proporção ao risco.
- Inspecione visualmente 375px, 768px e 1440px, uma largura intermediária e viewport baixo.
- Teste teclado, touch, focus, menu, overlays, resize, back/forward e reduced motion.
- Verifique overflow, clipping, crops, console, assets, cleanup e layout shift.
- Avalie LCP ≤ 2,5s, INP ≤ 200ms e CLS ≤ 0,1 quando mensurável.

Ao finalizar:
1. Atualize docs/10-QA-RELEASE.md com evidências.
2. Registre decisões novas em docs/11-DECISION-LOG.md.
3. Resuma arquivos alterados, verificações executadas, limitações e riscos restantes.
```

## Prompt para revisão sem edição

```text
Use $cinematic-web-director para auditar a página sem alterar arquivos.

Leia AGENTS.md e os documentos relevantes. Veja a página real e avalie ponto de vista, hierarquia, tipografia, cor, imagem, composição, copy, movimento, mobile, acessibilidade, performance e coerência com as decisões registradas.

Para cada issue, informe evidência, viewport/input, prioridade, impacto, correção e condição de aceite. Priorize as três mudanças de maior impacto e proponha um pacote coeso. Não implemente até receber aprovação.
```

## Prompt para atualizar a documentação

```text
Leia a implementação e a documentação do projeto. Identifique divergências, mas não assuma automaticamente que o código está correto. Proponha quais documentos devem ser atualizados e quais diferenças representam bugs. Preserve o histórico em docs/11-DECISION-LOG.md.
```

