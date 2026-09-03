import React from 'react';
import { ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { ButtonWithIcon } from './ui/ButtonWithIcon';

export const FinalCTASection = () => {
  const { locale } = useI18n();

  return (
    <section className="final-cta-section" id="start-hiring">
      {/* Imagem de Fundo Cinemática 100% Full-Width */}
      <div className="final-cta-bg-frame" aria-hidden="true">
        <img 
          src="/brand/final_cta_landscape.jpg" 
          alt="Vervana Sanctuary Architecture" 
          className="final-cta-bg-image" 
        />
        <div className="final-cta-mist-overlay" />
        <div className="final-cta-bottom-vignette" />
      </div>

      <div className="final-cta-container">
        {/* Conteúdo Central em Destaque */}
        <div className="final-cta-content">
          <h2 className="final-cta-headline">
            {locale === 'pt' ? 'Escale seu time, alcance seu sonho.' : 'Scale your team, achieve your dream.'}
          </h2>

          <p className="final-cta-subhead">
            {locale === 'pt'
              ? 'Conecte-se a engenheiros de software seniores avaliados por operadores técnicos que já construíram e escalaram startups nos EUA.'
              : 'Partner with battle-tested Brazilian software engineers evaluated by technical operators who built and scaled high-growth startups.'}
          </p>

          <div className="final-cta-action-wrap">
            <ButtonWithIcon 
              href="mailto:contact@vervana.com?subject=Start%20a%20Search%20-%20Vervana" 
              variant="neon"
              className="final-cta-hero-btn"
            >
              {locale === 'pt' ? 'Iniciar Contratação' : 'Start Hiring'}
            </ButtonWithIcon>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
