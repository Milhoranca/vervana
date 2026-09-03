import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

export const CaseStudiesSection = () => {
  const { locale } = useI18n();

  return (
    <section className="metaview-cases-section" id="case-studies" data-dark="true">
      <div className="cases-container">
        
        {/* ========================================================
            HEADER DA SEÇÃO (Metaview Pixel Perfect)
           ======================================================== */}
        <div className="cases-header">
          <div className="cases-header-left">
            <span className="cases-eyebrow">
              {locale === 'pt' ? 'Estudos de caso' : 'Case studies'}
            </span>
            <h2 className="cases-headline">
              {locale === 'pt' ? (
                <>
                  Feito para quem se importa<br />com contratações eficazes.
                </>
              ) : (
                <>
                  Designed for people who<br />care about effective hiring.
                </>
              )}
            </h2>
          </div>

          <div className="cases-header-right">
            <a href="#about" className="wall-of-love-link">
              <span>{locale === 'pt' ? 'Mural de depoimentos' : 'Wall of love'}</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* ========================================================
            GRID MOSAICO 4x3 - 12 CARDS EXATOS
           ======================================================== */}
        <div className="cases-mosaic-grid">
          
          {/* ----------------- LINHA 1 ----------------- */}
          
          {/* CARD 1: CITAÇÃO REPLIT */}
          <div className="case-tile quote-tile">
            <blockquote className="tile-quote-body">
              {locale === 'pt'
                ? '“Posso dizer com total convicção: se você não está usando a Vervana, está perdendo mais de 10h semanais e entregando uma experiência inferior aos candidatos. O produto é indiscutivelmente um dos melhores do mercado para empresas contratando ativamente.”'
                : '“I can confidently say that if you’re not using Vervana, you are wasting at least 10+ hours a week and giving your candidates a worse experience. The product is easily one of the best out there for companies actively hiring.”'}
            </blockquote>
            
            <div className="tile-author-footer">
              <div className="author-meta-wrap">
                <div className="author-avatar-frame">
                  <img src="/avatars/avatar_founder_lead.jpg" alt="Chase Johnson" className="author-avatar-img" />
                </div>
                <div className="author-text-col">
                  <span className="author-name">CHASE JOHNSON</span>
                  <span className="author-role">TECHNICAL RECRUITING · REPLIT</span>
                </div>
              </div>
              <div className="client-logo-replit">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 3H14V9H8V15H2V3Z"/>
                  <path d="M8 9H20V15H8V9Z"/>
                  <path d="M2 15H14V21H2V15Z"/>
                </svg>
                <span className="replit-text">replit</span>
              </div>
            </div>
          </div>

          {/* CARD 2: VÍDEO FOTO DEEL */}
          <div className="case-tile media-tile">
            <img 
              src="/avatars/avatar_founder_lead.jpg" 
              alt="Deel Hiring Lead" 
              className="media-tile-bg" 
            />
            <div className="media-tile-overlay" />
            <div className="media-top-brand">
              <span className="deel-wordmark">deel.</span>
            </div>
            <div className="media-bottom-action">
              <button className="metaview-watch-btn" type="button">
                <Play size={10} fill="#FFFFFF" />
                <span>{locale === 'pt' ? 'Assistir' : 'Watch'}</span>
              </button>
            </div>
          </div>

          {/* CARD 3: MÉTRICA WORKLEAP */}
          <div className="case-tile metric-brand-tile">
            <div className="metric-top-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.8">
                <path d="M3 6L8 18L12 10L16 18L21 6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="metric-bottom-info">
              <span className="metric-company-name">Workleap</span>
              <span className="metric-highlight-tag">
                {locale === 'pt' ? 'REDUÇÃO DE 50% NO TEMPO DE TRIAGEM' : 'REDUCED SCREENING TIME BY 50%'}
              </span>
            </div>
          </div>

          {/* CARD 4: CITAÇÃO QONTO */}
          <div className="case-tile quote-tile">
            <blockquote className="tile-quote-body">
              {locale === 'pt'
                ? '“A Vervana capta nuances que passariam despercebidas, nos fornecendo avaliações técnicas ricas e calibradas que destacam pontos-chave e potenciais riscos antes mesmo das entrevistas.”'
                : '“Vervana catches nuances that might otherwise slip through the cracks, providing us with rich, AI-analyzed, interview content that highlights key points and potential red flags.”'}
            </blockquote>

            <div className="tile-author-footer">
              <div className="author-meta-wrap">
                <div className="author-avatar-frame">
                  <img src="/avatars/avatar_engineer_male.jpg" alt="Samy Aumar" className="author-avatar-img" />
                </div>
                <div className="author-text-col">
                  <span className="author-name">SAMY AUMAR</span>
                  <span className="author-role">PEOPLE SYSTEMS · QONTO</span>
                </div>
              </div>
            </div>
          </div>


          {/* ----------------- LINHA 2 ----------------- */}

          {/* CARD 5: VÍDEO EQUIPE EM EXTERNA */}
          <div className="case-tile media-tile">
            <img 
              src="/avatars/case_customer_fem.jpg" 
              alt="Engineering Team Leader" 
              className="media-tile-bg" 
            />
            <div className="media-tile-overlay" />
            <div className="media-top-brand">
              <svg viewBox="0 0 220.215 179.149" width="22" height="18" fill="none" stroke="#FFFFFF" strokeWidth="16">
                <path fillRule="nonzero" d="M36.352 65.566 L132.504 116.859 L96.695 65.566 L220.215 0 L145.148 179.148 L0 65.773 L220.215 0 Z"/>
              </svg>
            </div>
            <div className="media-bottom-action">
              <button className="metaview-watch-btn" type="button">
                <Play size={10} fill="#FFFFFF" />
                <span>{locale === 'pt' ? 'Assistir' : 'Watch'}</span>
              </button>
            </div>
          </div>

          {/* CARD 6: CITAÇÃO DELIVEROO */}
          <div className="case-tile quote-tile">
            <blockquote className="tile-quote-body">
              {locale === 'pt'
                ? '“Não é apenas pelas horas economizadas, mas também pelo tempo que você pode usar para focar no que realmente importa: obter o sinal exato que precisamos para tomar as melhores decisões de contratação.”'
                : '“It’s not just the hours saved, but also the time you can use to focus on what really matters: getting the signal we need to make the best hiring decisions.”'}
            </blockquote>

            <div className="tile-author-footer">
              <div className="author-text-col single">
                <span className="author-name">MARISA URANGA BRADWELL</span>
                <span className="author-role">DIRECTOR OF RECRUITING OPS · DELIVEROO</span>
              </div>
            </div>
          </div>

          {/* CARD 7: RETRATO DELIVEROO COM FUNDO CIANO */}
          <div className="case-tile media-tile">
            <img 
              src="/avatars/case_customer_deliveroo.jpg" 
              alt="Deliveroo Team Member" 
              className="media-tile-bg" 
            />
            <div className="media-tile-overlay" />
            <div className="media-top-brand">
              <div className="deliveroo-logo-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/>
                </svg>
              </div>
            </div>
            <div className="media-bottom-info">
              <span className="media-company-name">Deliveroo</span>
              <span className="media-highlight-tag">
                {locale === 'pt' ? 'EXPERIÊNCIA APRIMORADA DO CANDIDATO' : 'IMPROVED CANDIDATE EXPERIENCE'}
              </span>
            </div>
          </div>

          {/* CARD 8: ENGINE MINIMAL METRIC */}
          <div className="case-tile metric-brand-tile">
            <span className="engine-top-title">Engine</span>
            <div className="metric-bottom-info">
              <span className="metric-company-name">Engine</span>
              <span className="metric-highlight-tag">
                {locale === 'pt' ? 'CAPACITAÇÃO DE ENTREVISTADORES' : 'IMPROVED INTERVIEWER ENABLEMENT'}
              </span>
            </div>
          </div>


          {/* ----------------- LINHA 3 ----------------- */}

          {/* CARD 9: AUTOMATTIC */}
          <div className="case-tile metric-brand-tile">
            <span className="automattic-wordmark">A U T O M A T T I C</span>
            <div className="metric-bottom-info">
              <span className="metric-company-name">Automattic</span>
              <span className="metric-highlight-tag">
                {locale === 'pt' ? '50 HORAS ECONOMIZADAS POR MÊS' : '50 HOURS SAVED A MONTH'}
              </span>
            </div>
          </div>

          {/* CARD 10: RETRATO CATAWIKI */}
          <div className="case-tile media-tile">
            <img 
              src="/avatars/case_customer_male.jpg" 
              alt="Catawiki Tech Leader" 
              className="media-tile-bg" 
            />
            <div className="media-tile-overlay" />
            <div className="media-top-brand">
              <div className="catawiki-square-logo">
                <span className="catawiki-c">c</span>
              </div>
            </div>
            <div className="media-bottom-info">
              <span className="media-company-name">Catawiki</span>
              <span className="media-highlight-tag">
                {locale === 'pt' ? '2-6H ECONOMIZADAS POR RECRUTADOR / SEM' : '2-6H SAVED PER RECRUITER WEEKLY'}
              </span>
            </div>
          </div>

          {/* CARD 11: CITAÇÃO CATAWIKI */}
          <div className="case-tile quote-tile">
            <blockquote className="tile-quote-body">
              {locale === 'pt'
                ? '“É inimaginável voltar a uma época antes da Vervana, onde tínhamos que fazer anotações manuais durante as entrevistas e depender de palpites para calibrar nossos processos.”'
                : '“It’s unimaginable to go back to a time before Vervana where we’d have to take notes during interviews and rely on guesswork for improving our processes.”'}
            </blockquote>

            <div className="tile-author-footer">
              <div className="author-text-col single">
                <span className="author-name">JAMES LESNER</span>
                <span className="author-role">DIRECTOR OF TALENT MANAGEMENT · CATAWIKI</span>
              </div>
            </div>
          </div>

          {/* CARD 12: BREX VÍDEO CASE */}
          <div className="case-tile media-tile">
            <img 
              src="/avatars/case_customer_male.jpg" 
              alt="Brex Leadership" 
              className="media-tile-bg" 
            />
            <div className="media-tile-overlay" />
            <div className="media-top-brand">
              <div className="brex-logo-wrap">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M4 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H4V4zm0 8h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H4v-8z"/>
                </svg>
                <span className="brex-text">Brex</span>
              </div>
            </div>
            <div className="media-bottom-action">
              <button className="metaview-watch-btn" type="button">
                <Play size={10} fill="#FFFFFF" />
                <span>{locale === 'pt' ? 'Assistir' : 'Watch'}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;
