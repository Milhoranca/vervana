import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  LayoutGrid, 
  Search, 
  Code2, 
  MessageSquareQuote, 
  CheckCircle2, 
  Settings, 
  User, 
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Terminal,
  Cpu
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { Copy } from './ui/Copy';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const DecisionWorkspaceSection = () => {
  const { t, locale } = useI18n();
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const windowRef = useRef(null);

  const tabs = [
    { id: 'define', label: t('workspace_tab1') },
    { id: 'review', label: t('workspace_tab2') },
    { id: 'feedback', label: t('workspace_tab3') },
    { id: 'hire', label: t('workspace_tab4') }
  ];

  // Animação de entrada da janela do workspace
  useEffect(() => {
    if (!windowRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        windowRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.98
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: windowRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="workspace-section" id="workspace" ref={sectionRef}>
      {/* Luzes laterais de ambientação */}
      <div className="workspace-glow-left" aria-hidden="true" />
      <div className="workspace-glow-right" aria-hidden="true" />

      <div className="workspace-container">
        
        {/* ========================================================
            1. APP SHOWCASE / WORKSPACE INTERFACE WINDOW
           ======================================================== */}
        <div className="workspace-window-wrapper" ref={windowRef}>
          <div className="workspace-window">
            
            {/* Barra Lateral da Aplicação (Sidebar) com Logo Oficial Vervana */}
            <aside className="workspace-sidebar" aria-hidden="true">
              <div className="sidebar-top">
                {/* Logo Oficial da Vervana no topo da sidebar */}
                <div className="sidebar-brand-avatar" title="Vervana Talent Engine">
                  <svg className="sidebar-brand-logo-svg" viewBox="0 0 220.215 179.149" fill="none">
                    <path 
                      fill="#9AFF1C" 
                      fillRule="nonzero"
                      d="M36.352 65.566 L132.504 116.859 L96.695 65.566 L220.215 0 L145.148 179.148 L0 65.773 L220.215 0 Z"
                    />
                  </svg>
                </div>

                <nav className="sidebar-nav-icons">
                  <div className={`sidebar-icon-btn ${activeTab === 0 ? 'active' : ''}`} title="Roles">
                    <LayoutGrid size={17} />
                  </div>
                  <div className={`sidebar-icon-btn ${activeTab === 1 ? 'active' : ''}`} title="Candidates">
                    <Search size={17} />
                  </div>
                  <div className={`sidebar-icon-btn ${activeTab === 2 ? 'active' : ''}`} title="Feedback">
                    <MessageSquareQuote size={17} />
                  </div>
                  <div className={`sidebar-icon-btn ${activeTab === 3 ? 'active' : ''}`} title="Hiring">
                    <CheckCircle2 size={17} />
                  </div>
                </nav>
              </div>

              <div className="sidebar-bottom">
                <div className="sidebar-icon-btn" title="Settings">
                  <Settings size={17} />
                </div>
                <div className="sidebar-user-avatar" title="Founder Account">
                  <span className="user-initials">VF</span>
                  <span className="user-live-status" />
                </div>
              </div>
            </aside>

            {/* Conteúdo Principal do Workspace */}
            <main className="workspace-content-area">
              
              {/* Cabeçalho do Workspace com Branding e Status */}
              <div className="workspace-header-row">
                <div className="workspace-header-titles">
                  <div className="workspace-engine-badge">
                    <span className="engine-brand-label">VERVANA TALENT ENGINE</span>
                    <span className="engine-slash">/</span>
                    <span className="engine-workspace-name">US Startup Hub</span>
                  </div>
                  <h3 className="workspace-title">
                    {activeTab === 0 && (locale === 'pt' ? 'Suas Vagas Ativas' : 'Your Job Listings')}
                    {activeTab === 1 && (locale === 'pt' ? 'Avaliações Técnicas de Candidatos' : 'Candidate Technical Evaluations')}
                    {activeTab === 2 && (locale === 'pt' ? 'Feedbacks e Notas da Equipe' : 'Team Feedback & Interview Notes')}
                    {activeTab === 3 && (locale === 'pt' ? 'Pipeline de Contratação & Garantia' : 'Hiring Pipeline & Guarantee')}
                  </h3>
                  <span className="workspace-meta-status">
                    <span className="status-live-dot" />
                    {locale === 'pt' ? 'Conduzido 100% por Engenheiros Staff+' : '100% Staff+ Engineer Vetted'}
                  </span>
                </div>

                <div className="workspace-counter-badge">
                  <span className="counter-pill">{locale === 'pt' ? '2 Vagas Ativas' : '2 Active Searches'}</span>
                </div>
              </div>

              {/* Corpo Dinâmico por Estado (Tab) */}
              <div className="workspace-cards-stack">
                
                {/* ESTADO 1: DEFINE THE ROLE */}
                {activeTab === 0 && (
                  <>
                    <div className="workspace-item-card">
                      <div className="item-card-header">
                        <div className="item-title-group">
                          <h4 className="item-role-name">Staff Full Stack Engineer</h4>
                          <span className="item-status-tag active">
                            {locale === 'pt' ? 'Busca Ativa' : 'Active Listing'}
                          </span>
                        </div>
                      </div>

                      <div className="item-specs-grid">
                        <div className="specs-row">
                          <span className="spec-label">{locale === 'pt' ? 'Escopo' : 'Job Specs'}</span>
                          <div className="spec-chips">
                            <span className="spec-chip">{locale === 'pt' ? 'Longo Prazo' : 'Long-term'}</span>
                            <span className="spec-chip">40 hrs/{locale === 'pt' ? 'sem' : 'week'}</span>
                            <span className="spec-chip">{locale === 'pt' ? 'Nível Staff+' : 'Staff+ Rigor'}</span>
                            <span className="spec-chip">{locale === 'pt' ? 'Fuso EUA (EST/PST)' : 'US Overlap'}</span>
                          </div>
                        </div>

                        <div className="specs-row">
                          <span className="spec-label">Tech Stack</span>
                          <div className="spec-chips">
                            <span className="spec-chip highlight">TypeScript</span>
                            <span className="spec-chip highlight">Next.js / Node</span>
                            <span className="spec-chip highlight">Go / Microservices</span>
                            <span className="spec-chip">+ PostgreSQL</span>
                          </div>
                        </div>

                        <div className="specs-row align-start">
                          <span className="spec-label">{locale === 'pt' ? 'Descrição' : 'Description'}</span>
                          <p className="spec-desc-text">
                            {locale === 'pt'
                              ? 'Buscamos um Staff Engineer autônomo para liderar a arquitetura da plataforma principal e serviços críticos de latência, colaborando diretamente com fundadores dos EUA.'
                              : 'Looking for an autonomous Staff Engineer to own core platform architecture and latency-critical services, collaborating directly with US founders.'}
                          </p>
                        </div>
                      </div>

                      <div className="item-card-footer">
                        <button className="workspace-action-btn">
                          <span>{locale === 'pt' ? 'Ver Candidatos Calibrados' : 'View Calibrated Matches'}</span>
                          <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </div>

                    <div className="workspace-item-card">
                      <div className="item-card-header">
                        <div className="item-title-group">
                          <h4 className="item-role-name">Senior Distributed Systems Engineer</h4>
                          <span className="item-status-tag active">
                            {locale === 'pt' ? 'Busca Ativa' : 'Active Listing'}
                          </span>
                        </div>
                      </div>

                      <div className="item-specs-grid">
                        <div className="specs-row">
                          <span className="spec-label">{locale === 'pt' ? 'Escopo' : 'Job Specs'}</span>
                          <div className="spec-chips">
                            <span className="spec-chip">{locale === 'pt' ? 'Tempo Integral' : 'Full-time'}</span>
                            <span className="spec-chip">40 hrs/{locale === 'pt' ? 'sem' : 'week'}</span>
                            <span className="spec-chip">{locale === 'pt' ? '1 Posição' : '1 Opening'}</span>
                          </div>
                        </div>

                        <div className="specs-row">
                          <span className="spec-label">Tech Stack</span>
                          <div className="spec-chips">
                            <span className="spec-chip highlight">Python / Rust</span>
                            <span className="spec-chip highlight">Kafka</span>
                            <span className="spec-chip highlight">Distributed Systems</span>
                          </div>
                        </div>

                        <div className="specs-row align-start">
                          <span className="spec-label">{locale === 'pt' ? 'Descrição' : 'Description'}</span>
                          <p className="spec-desc-text">
                            {locale === 'pt'
                              ? 'Desenvolvimento de pipelines de dados em tempo real com tolerância a falhas rigorosa, arquitetura limpa e zero débito técnico.'
                              : 'Lead real-time ingestion pipelines with strict fault-tolerance standards, clean architecture, and zero tech debt.'}
                          </p>
                        </div>
                      </div>

                      <div className="item-card-footer">
                        <button className="workspace-action-btn">
                          <span>{locale === 'pt' ? 'Ver Candidatos Calibrados' : 'View Calibrated Matches'}</span>
                          <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* ESTADO 2: REVIEW CANDIDATES */}
                {activeTab === 1 && (
                  <>
                    <div className="workspace-item-card">
                      <div className="item-card-header">
                        <div className="item-title-group">
                          <h4 className="item-role-name">{locale === 'pt' ? 'Candidato V-104 — Staff Engineer' : 'Candidate V-104 — Staff Engineer'}</h4>
                          <span className="item-status-tag verified">
                            {locale === 'pt' ? '✓ Avaliado por Staff+ (100%)' : '✓ Staff+ Vetted (100%)'}
                          </span>
                        </div>
                      </div>

                      <div className="item-specs-grid">
                        <div className="specs-row">
                          <span className="spec-label">{locale === 'pt' ? 'Sinais de Rigor' : 'Vetting Rigor'}</span>
                          <div className="spec-chips">
                            <span className="spec-chip score">100% {locale === 'pt' ? 'Arquitetura' : 'Architecture'}</span>
                            <span className="spec-chip score">98% {locale === 'pt' ? 'Clareza Algorítmica' : 'Algorithm Rigor'}</span>
                            <span className="spec-chip score">C2 {locale === 'pt' ? 'Inglês Fluente' : 'Fluent English'}</span>
                          </div>
                        </div>

                        <div className="specs-row align-start">
                          <span className="spec-label">{locale === 'pt' ? 'Parecer Técnico' : 'Technical Note'}</span>
                          <p className="spec-desc-text">
                            {locale === 'pt'
                              ? '"Domínio profundo em sistemas distribuídos de alta vazão. Articula trade-offs complexos com clareza executiva e raciocínio pragmático."'
                              : '"Deep mastery of high-throughput distributed systems. Articulates complex architectural trade-offs with effortless executive clarity."'}
                          </p>
                        </div>
                      </div>

                      <div className="item-card-footer">
                        <button className="workspace-action-btn">
                          <span>{locale === 'pt' ? 'Inspecionar Avaliação Completa' : 'Inspect Full Evaluation'}</span>
                          <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </div>

                    <div className="workspace-item-card">
                      <div className="item-card-header">
                        <div className="item-title-group">
                          <h4 className="item-role-name">{locale === 'pt' ? 'Candidato V-108 — Principal UI Engineer' : 'Candidate V-108 — Principal UI Engineer'}</h4>
                          <span className="item-status-tag verified">
                            {locale === 'pt' ? '✓ Avaliado por Staff+ (99%)' : '✓ Staff+ Vetted (99%)'}
                          </span>
                        </div>
                      </div>

                      <div className="item-specs-grid">
                        <div className="specs-row">
                          <span className="spec-label">{locale === 'pt' ? 'Sinais de Rigor' : 'Vetting Rigor'}</span>
                          <div className="spec-chips">
                            <span className="spec-chip score">99% State Machines</span>
                            <span className="spec-chip score">100% Web Performance</span>
                            <span className="spec-chip score">98% Async Velocity</span>
                          </div>
                        </div>

                        <div className="specs-row align-start">
                          <span className="spec-label">{locale === 'pt' ? 'Parecer Técnico' : 'Technical Note'}</span>
                          <p className="spec-desc-text">
                            {locale === 'pt'
                              ? '"Craft de interface de nível mundial, otimização minuciosa de Web Vitals e histórico comprovado de liderança em equipes assíncronas."'
                              : '"World-class UI craft, deep Web Vitals optimization, and proven leadership in fast-moving async environments."'}
                          </p>
                        </div>
                      </div>

                      <div className="item-card-footer">
                        <button className="workspace-action-btn">
                          <span>{locale === 'pt' ? 'Inspecionar Avaliação Completa' : 'Inspect Full Evaluation'}</span>
                          <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* ESTADO 3: SHARE FEEDBACK */}
                {activeTab === 2 && (
                  <div className="workspace-item-card full-focus">
                    <div className="item-card-header">
                      <div className="item-title-group">
                        <h4 className="item-role-name">{locale === 'pt' ? 'Consenso & Notas da Equipe Técnica' : 'Team Consensus & Decision Scorecard'}</h4>
                        <span className="item-status-tag aligned">
                          {locale === 'pt' ? '● Alinhamento Unânime' : '● Unanimous Alignment'}
                        </span>
                      </div>
                    </div>

                    <div className="item-specs-grid">
                      <div className="specs-row">
                        <span className="spec-label">{locale === 'pt' ? 'Avaliadores' : 'Evaluators'}</span>
                        <div className="spec-chips">
                          <span className="spec-chip">CTO / Founder</span>
                          <span className="spec-chip">Lead Systems Engineer</span>
                          <span className="spec-chip">Vervana Senior Lead</span>
                        </div>
                      </div>

                      <div className="specs-row align-start">
                        <span className="spec-label">{locale === 'pt' ? 'Síntese' : 'Synthesis'}</span>
                        <p className="spec-desc-text highlight-box">
                          {locale === 'pt'
                            ? '"Candidato demonstrou raciocínio pragmático impecável durante a sessão técnica. Fortíssima sintonia com a velocidade do time e entrega autônoma."'
                            : '"Candidate demonstrated impeccable pragmatic reasoning during the technical sync. Strong alignment on roadmap velocity and self-driven execution."'}
                        </p>
                      </div>
                    </div>

                    <div className="item-card-footer">
                      <button className="workspace-action-btn">
                        <span>{locale === 'pt' ? 'Confirmar Decisão de Avanço' : 'Confirm Next Steps'}</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                )}

                {/* ESTADO 4: MOVE TO HIRE */}
                {activeTab === 3 && (
                  <div className="workspace-item-card full-focus">
                    <div className="item-card-header">
                      <div className="item-title-group">
                        <h4 className="item-role-name">{locale === 'pt' ? 'Proposta Calibrada & Garantia de Entrega' : 'Offer Calibrated & Delivery Guarantee'}</h4>
                        <span className="item-status-tag verified">
                          {locale === 'pt' ? '✓ Pronto para Onboarding' : '✓ Ready for Onboarding'}
                        </span>
                      </div>
                    </div>

                    <div className="item-specs-grid">
                      <div className="specs-row">
                        <span className="spec-label">{locale === 'pt' ? 'Garantia' : 'Terms'}</span>
                        <div className="spec-chips">
                          <span className="spec-chip score">{locale === 'pt' ? 'Pagamento na Entrega' : 'Pay on Delivery'}</span>
                          <span className="spec-chip score">{locale === 'pt' ? 'Reposição Gratuita em 30 Dias' : '30-Day Free Replacement'}</span>
                          <span className="spec-chip">{locale === 'pt' ? 'Zero Retainer Antecipado' : 'Zero Upfront Retainer'}</span>
                        </div>
                      </div>

                      <div className="specs-row align-start">
                        <span className="spec-label">{locale === 'pt' ? 'Prontidão' : 'Readiness'}</span>
                        <p className="spec-desc-text">
                          {locale === 'pt'
                            ? 'Contrato internacional simplificado, conformidade e integração direta no fuso horário dos EUA sem atrito operacional.'
                            : 'Streamlined international contracting, compliance, and seamless US timezone onboarding with zero operational friction.'}
                        </p>
                      </div>
                    </div>

                    <div className="item-card-footer">
                      <button className="workspace-action-btn primary">
                        <span>{locale === 'pt' ? 'Finalizar Contratação' : 'Finalize Placement'}</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </main>

          </div>
        </div>


        {/* ========================================================
            2. INTERACTIVE TAB SWITCHER (Fiel à referência onstrider)
           ======================================================== */}
        <div className="workspace-tabs-container">
          <div className="workspace-tabs-track">
            {/* Linha de Base Contínua no Topo */}
            <div className="workspace-tabs-baseline" />

            {/* Botões com o traço superior perfeitamente alinhado à largura do texto */}
            <div className="workspace-tabs-buttons">
              {tabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`workspace-tab-btn ${activeTab === idx ? 'active' : ''}`}
                >
                  <span className="tab-top-indicator" />
                  <span className="tab-label">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>


        {/* ========================================================
            3. SECTION EDITORIAL COPY (Diagramação Editorial Estilo Apple)
           ======================================================== */}
        <div className="workspace-editorial-block">
          <span className="workspace-eyebrow-text">{t('workspace_eyebrow')}</span>

          <h2 className="workspace-main-headline">
            {t('workspace_headline')}
          </h2>

          <p className="workspace-body-text">
            {t('workspace_body')}
          </p>

          <p className="workspace-reinforce-text">
            {t('workspace_reinforce')}
          </p>
        </div>

      </div>
    </section>
  );
};

export default DecisionWorkspaceSection;
