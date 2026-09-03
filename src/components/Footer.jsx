import React from 'react';
import { useI18n } from '../context/I18nContext';

export const Footer = () => {
  const { locale, t } = useI18n();

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-container">
        
        {/* Topo do Rodapé: Logo & Links Simples */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <a href="/" className="footer-logo">
              <svg viewBox="0 0 220.215 179.149" width="22" height="18" fill="currentColor">
                <path fillRule="nonzero" d="M36.352 65.566 L132.504 116.859 L96.695 65.566 L220.215 0 L145.148 179.148 L0 65.773 L220.215 0 Z"/>
              </svg>
              <span>Vervana</span>
            </a>
            <p className="footer-tagline">
              {locale === 'pt' 
                ? 'Conectando startups globais aos melhores engenheiros de software do Brasil.' 
                : 'Connecting high-growth startups with top Brazilian engineering talent.'}
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <span className="footer-col-title">{locale === 'pt' ? 'Navegação' : 'Navigation'}</span>
              <a href="#startups">{locale === 'pt' ? 'Para Startups' : 'For Startups'}</a>
              <a href="#how-it-works">{locale === 'pt' ? 'Como Funciona' : 'How It Works'}</a>
              <a href="#founder">{locale === 'pt' ? 'Quem Somos' : 'About Us'}</a>
              <a href="#case-studies">{locale === 'pt' ? 'Casos de Sucesso' : 'Case Studies'}</a>
            </div>

            <div className="footer-col">
              <span className="footer-col-title">{locale === 'pt' ? 'Talentos' : 'Talent'}</span>
              <a href="#careers">{locale === 'pt' ? 'Vagas Abertas' : 'Careers'}</a>
              <a href="#apply">{locale === 'pt' ? 'Aplicar como Dev' : 'Apply as Engineer'}</a>
              <a href="#eval">{locale === 'pt' ? 'Critérios de Avaliação' : 'Evaluation Criteria'}</a>
            </div>

            <div className="footer-col">
              <span className="footer-col-title">{locale === 'pt' ? 'Contato' : 'Contact'}</span>
              <a href="mailto:contact@vervana.com">contact@vervana.com</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
            </div>
          </div>
        </div>

        {/* Linha Divisória e Copyright */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} Vervana. {locale === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </span>
          <div className="footer-legal">
            <a href="#privacy">{locale === 'pt' ? 'Privacidade' : 'Privacy Policy'}</a>
            <span className="legal-dot">•</span>
            <a href="#terms">{locale === 'pt' ? 'Termos de Uso' : 'Terms of Service'}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
