import React, { useState, useEffect } from 'react';
import { useI18n } from '../context/I18nContext';
import { useTheme } from '../context/ThemeContext';
import { LangToggle } from './LangToggle';
import { ThemeToggle } from './ThemeToggle';
import { ButtonWithIcon } from './ui/ButtonWithIcon';

export const Header = () => {
  const { t } = useI18n();
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isOverLight, setIsOverLight] = useState(false);

  useEffect(() => {
    const checkHeaderBackground = () => {
      setScrolled(window.scrollY > 20);
      
      if (theme === 'light') {
        setIsOverLight(true);
        return;
      }

      const lightSections = document.querySelectorAll(
        '#engineers, .bento-showcase-section, #workspace, .workspace-section, #founder, .apple-founder-section, .final-cta-section'
      );
      
      const headerTop = 0;
      const headerBottom = 72;
      let overLight = false;

      lightSections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= headerBottom && rect.bottom >= headerTop) {
          overLight = true;
        }
      });

      setIsOverLight(overLight);
    };

    window.addEventListener('scroll', checkHeaderBackground, { passive: true });
    window.addEventListener('resize', checkHeaderBackground, { passive: true });
    checkHeaderBackground();
    return () => {
      window.removeEventListener('scroll', checkHeaderBackground);
      window.removeEventListener('resize', checkHeaderBackground);
    };
  }, [theme]);

  return (
    <header className={`hd ${scrolled ? 'solid' : ''} ${isOverLight ? 'is-over-light' : 'is-over-dark'}`}>
      <div className="hd-in">
        {/* Esquerda: Logo oficial da marca Vervana */}
        <div className="hd-left">
          <a href="/" className="logo">
            <svg viewBox="0 0 220.215 179.149" width="38" height="31" fill="currentColor">
              <path fillRule="nonzero" d="M36.352 65.566 L132.504 116.859 L96.695 65.566 L220.215 0 L145.148 179.148 L0 65.773 L220.215 0 Z"/>
            </svg>
            <span>Vervana</span>
          </a>
        </div>

        {/* Centro Absoluto: Seletor de Idioma e Alternador de Tema */}
        <div className="hd-center">
          <LangToggle />
          <ThemeToggle />
        </div>

        {/* Direita: Links de Navegação e CTA */}
        <div className="hd-right">
          <nav className="nav">
            <a href="#startups" className="active">
              <span>{t('nav1')}</span>
            </a>
            <a href="#careers">{t('nav2')}</a>
            <a href="#about">{t('nav3')}</a>
            <a href="#blog">{t('nav4')}</a>
          </nav>

          {/* Botão CTA "Start Hiring" na Navbar */}
          <ButtonWithIcon href="#hire" variant={theme === 'dark' ? "neon" : "primary"}>
            {t('cta_header')}
          </ButtonWithIcon>
        </div>
      </div>
    </header>
  );
};

export default Header;
