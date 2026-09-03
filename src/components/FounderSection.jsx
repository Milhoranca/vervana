import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Layers, Zap, Cpu } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

export const FounderSection = () => {
  const { locale } = useI18n();
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      id: 'pre-seed',
      title: 'Pre-Seed',
      phase: locale === 'pt' ? 'Velocidade 0→1' : '0→1 Velocity',
      spec: locale === 'pt' 
        ? 'Engenheiros generalistas e autônomos que constroem do zero com alta velocidade de entrega.' 
        : 'Autonomous generalist builders shipping fast from scratch with high velocity and zero hand-holding.'
    },
    {
      id: 'seed',
      title: 'Seed',
      phase: locale === 'pt' ? 'Tração & PMF' : 'PMF Scale',
      spec: locale === 'pt' 
        ? 'Bases arquiteturais sólidas e escaláveis, sem criar débitos técnicos prematuros.' 
        : 'Solid architectural foundations and scalable code patterns without premature tech debt.'
    },
    {
      id: 'series-ab',
      title: 'Series A/B',
      phase: locale === 'pt' ? 'Escala & Plataforma' : 'Platform Scale',
      spec: locale === 'pt' 
        ? 'Talentos Staff+ com domínio em sistemas distribuídos, resiliência e alta concorrência.' 
        : 'Staff+ engineers specialized in high-throughput distributed systems and cloud resilience.'
    }
  ];

  return (
    <section className="apple-founder-section" id="about">
      <div className="apple-founder-container">
        
        {/* ========================================================
            1. CABEÇALHO DA SEÇÃO
           ======================================================== */}
        <div className="apple-founder-header">
          <h2 className="apple-founder-headline">
            {locale === 'pt' ? 'Já estivemos onde você está.' : 'We’ve been where you are.'}
          </h2>
          <p className="apple-founder-subhead">
            {locale === 'pt'
              ? 'A Vervana foi criada por fundadores e operadores com experiência real na liderança e escala de times de tecnologia em startups em estágio inicial (pre-seed a series B).'
              : 'Vervana was built by startup founders and operators with deep, battle-tested experience leading and scaling engineering teams at early-stage startups (pre-seed to series B).'}
          </p>
        </div>

        {/* ========================================================
            2. GRID PRINCIPAL (Padrão Apple Minimalista & Profissional)
           ======================================================== */}
        <div className="apple-founder-grid">
          
          {/* CARD ESQUERDA: IDENTIDADE 3D OFICIAL + FUNDADOR */}
          <div className="apple-founder-story-card">
            
            {/* Banner Oficial com a Interface e Identidade Vervana */}
            <div className="story-card-3d-frame">
              <img 
                src="/brand/founder_interface_banner.jpg" 
                alt="Vervana Interface & Brand Interaction" 
                className="story-3d-img"
              />
              <div className="story-3d-overlay" />
            </div>

            {/* Linha de Apresentação de Lucas Garcia */}
            <div className="story-card-profile-header">
              <div className="story-avatar-frame">
                <img 
                  src="/avatars/lucas_garcia.jpg" 
                  alt="Lucas Garcia — Founder, Vervana" 
                  className="story-avatar-img"
                />
                <span className="story-online-dot" />
              </div>
              <div className="story-profile-meta">
                <div className="story-name-row">
                  <h3 className="story-founder-name">Lucas Garcia</h3>
                  <span className="story-badge-founder">Founder</span>
                </div>
                <span className="story-founder-title">
                  {locale === 'pt' ? 'Fundador & Operador Técnico, Vervana' : 'Founder & Technical Operator, Vervana'}
                </span>
                <span className="story-founder-track">
                  {locale === 'pt' ? 'Liderança técnica em startups aceleradas dos EUA' : 'Former Engineering Lead @ US Startups'}
                </span>
              </div>
            </div>

            {/* Citação Editorial de Destaque */}
            <div className="story-quote-wrapper">
              <blockquote className="story-main-quote">
                {locale === 'pt'
                  ? '“O desafio nunca foi encontrar mais candidatos. Sempre foi entender quem realmente performa em ambientes de escala acelerada.”'
                  : '“The challenge was never finding more candidates. It was understanding who could genuinely perform in scaling environments.”'}
              </blockquote>
            </div>

            {/* Parágrafo de Contexto */}
            <p className="story-context-paragraph">
              {locale === 'pt'
                ? 'Compreendemos o custo devastador de uma contratação desalinhada no início da jornada. É por isso que eliminamos recrutadores generalistas e triagens por palavras-chave: cada engenheiro é avaliado com rigor técnico por operadores que já construíram e escalaram produtos sob extrema velocidade e pressão de mercado.'
                : 'We understand the devastating cost of a bad hire at early stages. That’s why we eliminated generic recruiters: every candidate is evaluated with technical rigor by operators who actually built and scaled products under rapid growth.'}
            </p>

            {/* Link de Ação */}
            <div className="story-card-footer">
              <a href="#engineers" className="story-action-link">
                <span>{locale === 'pt' ? 'Conheça o padrão Vervana' : 'Explore the Vervana standard'}</span>
                <ArrowRight size={15} className="action-arrow" />
              </a>
            </div>

          </div>


          {/* COLUNA DA DIREITA: OS DOIS CARDS DE VALOR MINIMALISTAS */}
          <div className="apple-founder-pillars-col">
            
            {/* CARD 01: CALIBRAÇÃO POR ESTÁGIO */}
            <div className="apple-minimal-card card-stage">
              <div className="card-top-mono">
                <span className="mono-num">01</span>
                <span className="mono-divider">/</span>
                <span className="mono-label">{locale === 'pt' ? 'CALIBRAÇÃO POR ESTÁGIO' : 'STAGE-CALIBRATED HIRING'}</span>
              </div>

              <h3 className="card-headline">Pre-Seed to Series B</h3>
              
              <p className="card-description">
                {locale === 'pt'
                  ? 'Avaliamos engenheiros de acordo com a fase exata da sua empresa — desde construtores 0→1 até arquitetos de plataformas resilientes.'
                  : 'We evaluate engineers for the exact maturity stage of your startup — from agile 0→1 builders to resilient platform architects.'}
              </p>

              {/* Segmented Control Minimalista Apple */}
              <div className="apple-segmented-control">
                {stages.map((stg, i) => (
                  <button
                    key={stg.id}
                    onClick={() => setActiveStage(i)}
                    className={`segment-btn ${activeStage === i ? 'active' : ''}`}
                  >
                    <span className="segment-title">{stg.title}</span>
                    <span className="segment-phase">{stg.phase}</span>
                  </button>
                ))}
              </div>

              {/* Detalhe Editorial do Estágio Selecionado */}
              <div className="stage-spec-banner">
                <div className="spec-indicator-dot" />
                <p className="spec-text">{stages[activeStage].spec}</p>
              </div>
            </div>

            {/* CARD 02: GARANTIA DE RETENÇÃO & ZERO RISCO */}
            <div className="apple-minimal-card card-guarantee">
              <div className="card-top-mono">
                <span className="mono-num">02</span>
                <span className="mono-divider">/</span>
                <span className="mono-label">{locale === 'pt' ? 'COMPROMISSO COM O RESULTADO' : 'RISK-FREE PLACEMENT'}</span>
              </div>

              <h3 className="card-headline">30-Day Replacement Guarantee</h3>
              
              <p className="card-description">
                {locale === 'pt'
                  ? 'Você só paga após a contratação validada. Se o engenheiro não se adaptar dentro dos primeiros 30 dias, realizamos a reposição imediata e sem custo.'
                  : 'You pay strictly on successful placement. If an engineer is not the right fit within 30 days, we provide a free, immediate replacement.'}
              </p>

              {/* Matrix de 3 Pilares com Tipografia Limpa Apple & Animações Inteligentes */}
              <div className="apple-metrics-matrix animated-guarantee-deck">
                <div className="matrix-tile tile-0-dollar">
                  <span className="matrix-big">$0</span>
                  <span className="matrix-caption">{locale === 'pt' ? 'Retainer Inicial' : 'Upfront Retainer'}</span>
                  <div className="tile-shimmer-pass" />
                </div>
                <div className="matrix-tile highlight tile-100-pay">
                  <div className="live-guarantee-tag">
                    <span className="guarantee-ring-pulse" />
                    <span>{locale === 'pt' ? 'Garantido' : 'Guaranteed'}</span>
                  </div>
                  <span className="matrix-big">100%</span>
                  <span className="matrix-caption">{locale === 'pt' ? 'Na Entrega' : 'Pay on Delivery'}</span>
                  <div className="tile-shimmer-pass" />
                </div>
                <div className="matrix-tile tile-30-days">
                  <div className="days-progress-indicator">
                    <div className="days-progress-bar" />
                  </div>
                  <span className="matrix-big">30 Days</span>
                  <span className="matrix-caption">{locale === 'pt' ? 'Janela de Reposição' : 'Replacement Window'}</span>
                  <div className="tile-shimmer-pass" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FounderSection;
