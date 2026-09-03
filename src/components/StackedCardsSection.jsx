import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code2, 
  Terminal, 
  MessageSquareQuote, 
  Workflow, 
  Gauge, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers,
  Link as LinkIcon,
  RotateCcw
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { Copy } from './ui/Copy';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const StackedCardsSection = () => {
  const { t, locale } = useI18n();
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current.querySelectorAll('.bento-showcase-card');
      
      cards.forEach((card, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });

        // 1. Entrada fluida do container do card
        tl.fromTo(
          card,
          { opacity: 0, y: 36, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' }
        );

        // 2. Animação de entrada inteligente dos elementos internos de cada mock
        const visualSide = card.querySelector('.bento-visual-frame, .full-card-visual-side');
        if (visualSide) {
          const innerMocks = visualSide.querySelectorAll(
            '.floating-eval-pill, .task-mock-card, .overlap-sync-pill, .workflow-node, .tree-avatar-node, .tree-bottom-pill, .retention-score-card'
          );
          if (innerMocks.length > 0) {
            tl.fromTo(
              innerMocks,
              { opacity: 0, y: 16, scale: 0.94 },
              { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08, ease: 'back.out(1.4)' },
              '-=0.5'
            );
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bento-showcase-section" id="engineers" ref={sectionRef}>
      {/* Luzes laterais de ambientação */}
      <div className="bento-glow-left" aria-hidden="true" />
      <div className="bento-glow-right" aria-hidden="true" />

      <div className="bento-container">
        
        {/* ========================================================
            HEADER DA SEÇÃO (Headline + Subheadline)
           ======================================================== */}
        <div className="bento-header">
          <Copy animateOnScroll={true} delay={0.1} align="center">
            <h2 className="bento-main-headline">
              {t('stacked_headline')}
            </h2>
          </Copy>

          <Copy animateOnScroll={true} delay={0.3} align="center">
            <p className="bento-subheadline">
              {t('stacked_body')}
            </p>
          </Copy>
        </div>

        {/* ========================================================
            GRID DE 5 CARDS (Layout Harmonizado e com Espaçamento Amplo)
           ======================================================== */}
        <div className="bento-grid" ref={gridRef}>
          
          {/* ----------------------------------------------------
              CARD 1 (Linha 1 - Esquerda): STAFF+ CODE EVALUATION
             ---------------------------------------------------- */}
          <div className="bento-showcase-card half-card">
            {/* Visual Superior */}
            <div className="bento-visual-frame frame-eval">
              <div className="visual-dotted-bg" aria-hidden="true" />
              
              <div className="floating-eval-card-stack depth-mode">
                {/* Chip Superior em Segundo Plano Desfocado */}
                <div className="floating-eval-pill back-top-blurred">
                  <div className="pill-avatar-icon">
                    <Terminal size={14} />
                  </div>
                  <div className="pill-content">
                    <span className="pill-title">eval_protocol.ts</span>
                    <span className="pill-sub">TypeScript // Staff+</span>
                  </div>
                  <span className="pill-tag-verified">Verified</span>
                </div>

                {/* Chip Central Hero com Foco Nítido e Laser Scan */}
                <div className="floating-eval-pill hero-focused">
                  <span className="eval-laser-scanner" aria-hidden="true" />
                  <div className="pill-avatar-icon active">
                    <Code2 size={16} className="eval-code-icon" />
                  </div>
                  <div className="pill-content">
                    <div className="eval-status-row">
                      <span className="pill-title">100% Algorithmic Rigor</span>
                      <span className="live-exec-dot" />
                    </div>
                    <span className="pill-sub">Distributed State · Live Debugging</span>
                  </div>
                  <span className="pill-tag-badge live">Score 10.0</span>
                </div>

                {/* Chip Inferior em Segundo Plano Desfocado */}
                <div className="floating-eval-pill back-bottom-blurred">
                  <div className="pill-avatar-icon">
                    <Cpu size={14} />
                  </div>
                  <div className="pill-content">
                    <span className="pill-title">Architectural Reasoning</span>
                    <span className="pill-sub">Clean Architecture · Zero Fluff</span>
                  </div>
                  <span className="pill-tag-verified">100% Signal</span>
                </div>
              </div>
            </div>

            {/* Conteúdo Inferior */}
            <div className="bento-card-content">
              <h3 className="bento-card-title">{t('card1_title')}</h3>
              <p className="bento-card-desc">{t('card1_desc')}</p>
            </div>
          </div>


          {/* ----------------------------------------------------
              CARD 2 (Linha 1 - Direita): ASYNC VELOCITY & US OVERLAP
             ---------------------------------------------------- */}
          <div className="bento-showcase-card half-card">
            {/* Visual Superior */}
            <div className="bento-visual-frame frame-collab">
              <div className="visual-dotted-bg" aria-hidden="true" />

              <div className="floating-collab-cards depth-mode">
                {/* Card de Tarefa 1 (Fundo Desfocado - Trabalho Assíncrono no Fuso da Manhã) */}
                <div className="task-mock-card card-a-blurred">
                  <div className="task-card-top">
                    <span className="task-label">Async RFC & PR Review</span>
                    <span className="task-date">09:30 PST</span>
                  </div>
                  <div className="task-skeleton-bars">
                    <div className="skeleton-bar full" />
                    <div className="skeleton-bar half" />
                  </div>
                  <div className="task-user-badge left">
                    <img src="/avatars/avatar_engineer_fem.jpg" alt="Vervana Lead" className="task-user-photo" />
                    <span className="user-badge-text">Vervana Lead</span>
                  </div>
                </div>

                {/* Badge Conector Flutuante de Overlap */}
                <div className="overlap-sync-pill">
                  <span className="sync-live-pulse" />
                  <span>4h Live US Overlap</span>
                </div>

                {/* Card de Tarefa 2 (Frente Nítida - Alinhamento em Tempo Real) */}
                <div className="task-mock-card card-b-focused">
                  <div className="task-card-top">
                    <span className="task-label">Architecture Handoff</span>
                    <span className="task-date highlight">14:00 EST</span>
                  </div>
                  <div className="task-skeleton-bars">
                    <div className="skeleton-bar full" />
                    <div className="skeleton-bar short" />
                  </div>
                  <div className="task-user-badge right">
                    <img src="/avatars/avatar_founder_lead.jpg" alt="US Founder" className="task-user-photo" />
                    <span className="user-badge-text">US Founder</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Conteúdo Inferior */}
            <div className="bento-card-content">
              <h3 className="bento-card-title">{t('card2_title')}</h3>
              <p className="bento-card-desc">{t('card2_desc')}</p>
            </div>
          </div>


          {/* ----------------------------------------------------
              CARD 3 (Linha 2 - Esquerda): END-TO-END AUTONOMY
             ---------------------------------------------------- */}
          <div className="bento-showcase-card half-card">
            {/* Visual Superior */}
            <div className="bento-visual-frame frame-workflow">
              <div className="visual-dotted-bg" aria-hidden="true" />

              <div className="workflow-diagram-box">
                <div className="workflow-track-line">
                  
                  {/* Nó 1: Spec */}
                  <div className="workflow-node">
                    <div className="node-icon-circle">
                      <Layers size={15} />
                    </div>
                    <span className="node-label">Product Spec</span>
                    <span className="node-sub-num">01 Scope</span>
                  </div>

                  {/* Conector com Pulso */}
                  <div className="workflow-connector">
                    <span className="connector-pulse" />
                  </div>

                  {/* Nó 2: Integration Hub com Turbina / Overdrive Ativo */}
                  <div className="workflow-node active">
                    <div className="turbine-container">
                      <span className="turbine-orbital-ring" aria-hidden="true" />
                      <span className="turbine-glow-core" aria-hidden="true" />
                      <div className="node-icon-circle active-brand turbine-active">
                        <Workflow size={16} className="turbine-icon" />
                      </div>
                    </div>
                    <span className="node-label">Architecture</span>
                    <span className="node-sub-num active">02 Build</span>
                  </div>

                  {/* Conector com Pulso */}
                  <div className="workflow-connector">
                    <span className="connector-pulse delayed" />
                  </div>

                  {/* Nó 3: Prod Deploy */}
                  <div className="workflow-node done">
                    <div className="node-icon-circle done-check">
                      <CheckCircle2 size={15} />
                    </div>
                    <span className="node-label">Prod Deploy</span>
                    <span className="node-sub-num">03 Live</span>
                  </div>

                </div>
              </div>
            </div>

            {/* Conteúdo Inferior */}
            <div className="bento-card-content">
              <h3 className="bento-card-title">{t('card3_title')}</h3>
              <p className="bento-card-desc">{t('card3_desc')}</p>
            </div>
          </div>


          {/* ----------------------------------------------------
              CARD 4 (Linha 2 - Direita): PRAGMATIC ENGINEERING
             ---------------------------------------------------- */}
          <div className="bento-showcase-card half-card">
            {/* Visual Superior */}
            <div className="bento-visual-frame frame-tradeoff">
              <div className="visual-dotted-bg" aria-hidden="true" />

              <div className="tradeoff-tree-diagram">
                {/* 3 Nós de Engenharia com Destaque Elegante */}
                <div className="tree-top-nodes">
                  <div className="tree-avatar-node node-left">
                    <div className="tree-icon-badge">
                      <Gauge size={14} />
                    </div>
                    <span className="tree-node-title">Maintainability</span>
                  </div>

                  <div className="tree-avatar-node featured-velocity node-center">
                    <div className="tree-icon-badge highlight">
                      <Zap size={14} className="velocity-icon-anim" />
                    </div>
                    <span className="tree-node-title">Velocity</span>
                    <span className="velocity-speed-tag">2.4x</span>
                  </div>

                  <div className="tree-avatar-node node-right">
                    <div className="tree-icon-badge">
                      <ShieldCheck size={14} />
                    </div>
                    <span className="tree-node-title">Zero Debt</span>
                  </div>
                </div>

                {/* Linhas Conectoras Conectando Perfeitamente os 3 Cards ao Nó Central */}
                <div className="tree-branches-svg" aria-hidden="true">
                  <svg width="100%" height="46" viewBox="0 0 360 46" fill="none" preserveAspectRatio="none">
                    <defs>
                      {/* Gradiente de Pulso Elétrico */}
                      <linearGradient id="flowPulseLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#003740" stopOpacity="0.2" />
                        <stop offset="60%" stopColor="#9AFF1C" />
                        <stop offset="100%" stopColor="#003740" />
                      </linearGradient>
                      <linearGradient id="flowPulseCenter" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#9AFF1C" />
                        <stop offset="100%" stopColor="#003740" />
                      </linearGradient>
                      <linearGradient id="flowPulseRight" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#003740" stopOpacity="0.2" />
                        <stop offset="60%" stopColor="#9AFF1C" />
                        <stop offset="100%" stopColor="#003740" />
                      </linearGradient>
                    </defs>

                    {/* Linhas Base Sutis */}
                    <path d="M 68 0 V 16 C 68 32, 150 40, 180 46" stroke="rgba(0, 55, 64, 0.12)" strokeWidth="1.5" />
                    <path d="M 180 0 V 46" stroke="rgba(0, 55, 64, 0.12)" strokeWidth="1.5" />
                    <path d="M 292 0 V 16 C 292 32, 210 40, 180 46" stroke="rgba(0, 55, 64, 0.12)" strokeWidth="1.5" />

                    {/* Linhas de Fluxo Animadas Convergindo para o Centro */}
                    <path 
                      d="M 68 0 V 16 C 68 32, 150 40, 180 46" 
                      stroke="url(#flowPulseLeft)" 
                      strokeWidth="2" 
                      strokeDasharray="16 120" 
                      className="flow-stream-left"
                    />
                    <path 
                      d="M 180 0 V 46" 
                      stroke="url(#flowPulseCenter)" 
                      strokeWidth="2.5" 
                      strokeDasharray="12 60" 
                      className="flow-stream-center"
                    />
                    <path 
                      d="M 292 0 V 16 C 292 32, 210 40, 180 46" 
                      stroke="url(#flowPulseRight)" 
                      strokeWidth="2" 
                      strokeDasharray="16 120" 
                      className="flow-stream-right"
                    />
                  </svg>
                </div>

                {/* Nó Central Receptor com Emissão Ativa de Energia */}
                <div className="tree-receiver-wrapper">
                  <div className="receiver-glow-aura" aria-hidden="true" />
                  <div className="tree-bottom-pill receiver-active">
                    <span className="pill-pulse-dot" />
                    <span className="tree-bottom-text">
                      {locale === 'pt' ? 'Decisões Pragmáticas de Engenharia' : 'Pragmatic Engineering Decisions'}
                    </span>
                    
                    {/* Partículas de Emissão Radiante */}
                    <span className="sparkle-particle sp-1" aria-hidden="true" />
                    <span className="sparkle-particle sp-2" aria-hidden="true" />
                    <span className="sparkle-particle sp-3" aria-hidden="true" />
                    <span className="sparkle-particle sp-4" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>

            {/* Conteúdo Inferior */}
            <div className="bento-card-content">
              <h3 className="bento-card-title">{t('card4_title')}</h3>
              <p className="bento-card-desc">{t('card4_desc')}</p>
            </div>
          </div>


          {/* ----------------------------------------------------
              CARD 5 (Linha 3 - Full Width): RETENTION & GUARANTEE
             ---------------------------------------------------- */}
          <div className="bento-showcase-card full-card">
            <div className="full-card-inner">
              
              {/* Lado Esquerdo: Texto & Título */}
              <div className="full-card-text-side">
                <h3 className="bento-card-title">{t('card5_title')}</h3>
                <p className="bento-card-desc">{t('card5_desc')}</p>
                <div className="full-card-guarantee-chips">
                  <span className="guarantee-chip">
                    <CheckCircle2 size={13} className="chip-check" />
                    {locale === 'pt' ? 'Pagamento na Entrega' : 'Pay on Delivery'}
                  </span>
                  <span className="guarantee-chip">
                    <RotateCcw size={13} className="chip-check" />
                    {locale === 'pt' ? 'Reposição Gratuita 30 Dias' : '30-Day Free Replacement'}
                  </span>
                  <span className="guarantee-chip">
                    <Sparkles size={13} className="chip-check" />
                    {locale === 'pt' ? 'Zero Retainer' : 'Zero Upfront Retainer'}
                  </span>
                </div>
              </div>

              {/* Lado Direito: Visual de Telemetria Flutuante com Fotos Reais dos Candidatos */}
              <div className="full-card-visual-side">
                <div className="visual-dotted-bg" aria-hidden="true" />

                <div className="floating-retention-cards deck-mode">
                  {/* Card Flutuante 1 (Fundo com desfoque de profundidade) */}
                  <div className="retention-score-card card-deck-back">
                    <div className="score-card-left">
                      <div className="score-avatar-box">
                        <img src="/avatars/avatar_cto_exec.jpg" alt="Staff Infrastructure" className="score-avatar-img" />
                      </div>
                      <div className="score-info">
                        <span className="score-name">Staff SRE / Infra</span>
                        <span className="score-role">Placement #098 · US Fintech</span>
                      </div>
                    </div>
                    <div className="score-badge-val">
                      <span className="score-num">99.9%</span>
                      <span className="score-label">Scale</span>
                    </div>
                  </div>

                  {/* Card Flutuante 2 (Meio com leve desfoque) */}
                  <div className="retention-score-card card-deck-mid">
                    <div className="score-card-left">
                      <div className="score-avatar-box">
                        <img src="/avatars/avatar_engineer_male.jpg" alt="Staff Full Stack" className="score-avatar-img" />
                      </div>
                      <div className="score-info">
                        <span className="score-name">Staff Full Stack</span>
                        <span className="score-role">Placement #104 · US Startup</span>
                      </div>
                    </div>
                    <div className="score-badge-val">
                      <span className="score-num">100%</span>
                      <span className="score-label">Delivery</span>
                    </div>
                  </div>

                  {/* Card Flutuante 3 (Principal / Frente em Foco Nítido) */}
                  <div className="retention-score-card card-deck-front">
                    <div className="score-card-left">
                      <div className="score-avatar-box active">
                        <img src="/avatars/avatar_engineer_fem.jpg" alt="Lead Systems Architect" className="score-avatar-img" />
                      </div>
                      <div className="score-info">
                        <span className="score-name">Lead Systems Architect</span>
                        <span className="score-role">Verified Match · EST Overlap</span>
                      </div>
                    </div>
                    <div className="score-badge-val active">
                      <span className="score-num">10.0</span>
                      <span className="score-label">Rigor</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default StackedCardsSection;
