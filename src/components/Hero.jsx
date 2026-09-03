import React from 'react';
import { useI18n } from '../context/I18nContext';
import { ButtonWithIcon } from './ui/ButtonWithIcon';
import { Copy } from './ui/Copy';

export const Hero = () => {
  const { lang } = useI18n();

  return (
    <section className="new-hero" id="hero">
      {/* Glows ambientais de fundo */}
      <div className="hero-glow-left" aria-hidden="true" />
      <div className="hero-glow-right" aria-hidden="true" />

      <div className="hero-inner">
        {/* Título gigante com animação de entrada de texto por linha (Copy component) */}
        <h1 className="hero-giant-title">
          <Copy animateOnScroll={false} delay={0.15}>
            <span className="title-line-1">
              {lang === 'pt' ? 'CURADORIA E CONEXÃO DE' : 'CURATION AND CONNECTION OF'}
            </span>
          </Copy>
          <Copy animateOnScroll={false} delay={0.3}>
            <span className="title-line-2">
              {lang === 'pt' ? 'PESSOAS E STARTUPS EXCEPCIONAIS' : 'EXCEPTIONAL PEOPLE AND STARTUPS'}
            </span>
          </Copy>
        </h1>

        {/* Espaçador de Layout para manter a posição original exata da Descrição */}
        <div className="hero-3d-logo-spacer" aria-hidden="true" />

        {/* Descrição (Lede) com animação de entrada de texto em máscaras por linha */}
        <div className="hero-description-container">
          <Copy animateOnScroll={false} delay={0.45}>
            <p className="hero-description">
              {lang === 'pt' ? (
                <>
                  A Vervana é a ponte entre <strong>engenheiros de software excepcionais</strong> e <strong>startups em crescimento</strong>, com curadoria feita por engenheiros: <strong>risco zero</strong>, até 50% abaixo do custo do mercado americano.
                </>
              ) : (
                <>
                  Vervana is the bridge between <strong>exceptional software engineers</strong> and <strong>scaling startups</strong>, curated by engineers: <strong>zero risk</strong>, up to 50% less than US market cost.
                </>
              )}
            </p>
          </Copy>
        </div>

        {/* Botões de CTA da Hero (Start a Search & See How It Works) */}
        <div className="hero-cta-group">
          <ButtonWithIcon href="#hire" variant="neon">
            {lang === 'pt' ? 'Iniciar Busca' : 'Start a Search'}
          </ButtonWithIcon>
          <ButtonWithIcon href="#how-it-works" variant="secondary">
            {lang === 'pt' ? 'Ver Como Funciona' : 'See How It Works'}
          </ButtonWithIcon>
        </div>
      </div>
    </section>
  );
};
