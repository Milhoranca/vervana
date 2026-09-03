import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Compass, 
  Search, 
  Code2, 
  UserCheck 
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { useTheme } from '../context/ThemeContext';
import { Copy } from './ui/Copy';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const MethodologySection = () => {
  const { t, locale } = useI18n();
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const stepsData = [
    {
      id: '01',
      title: locale === 'pt' ? 'Entender' : 'Understand',
      description: locale === 'pt' 
        ? 'Entendemos seu produto, equipe, momento e o que define o sucesso na função.' 
        : 'We learn about your product, team, stage, and what success in the role looks like.',
      icon: Compass
    },
    {
      id: '02',
      title: locale === 'pt' ? 'Buscar' : 'Search',
      description: locale === 'pt'
        ? 'Encontramos profissionais por meio de busca ativa direta, relacionamentos e comunidades especializadas.'
        : 'We find professionals through direct sourcing, relationships, and specialized communities.',
      icon: Search
    },
    {
      id: '03',
      title: locale === 'pt' ? 'Avaliar' : 'Evaluate',
      description: locale === 'pt'
        ? 'Avaliamos capacidade técnica, comunicação, autonomia e maturidade para startups.'
        : 'We assess technical ability, communication, autonomy, and startup readiness.',
      icon: Code2
    },
    {
      id: '04',
      title: locale === 'pt' ? 'Apresentar' : 'Introduce',
      description: locale === 'pt'
        ? 'Você conhece cada talento verdadeiramente excepcional.'
        : 'You meet each exceptional talent.',
      icon: UserCheck
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Transição cinematográfica de cor (Branco -> Preto) no Dark Mode ao rolar a página
      if (theme === 'dark') {
        gsap.fromTo(
          sectionRef.current,
          {
            backgroundColor: '#FFFFFF',
          },
          {
            backgroundColor: '#030303',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 92%',
              end: 'top 35%',
              scrub: 1.2,
            }
          }
        );
      }

      if (cardsContainerRef.current) {
        const cardEls = cardsContainerRef.current.querySelectorAll('.methodology-card-light');

        gsap.fromTo(
          cardEls,
          { 
            opacity: 0, 
            y: 35 
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [theme]);

  return (
    <section className="methodology-section-light" id="methodology" ref={sectionRef}>
      <div className="methodology-container-light">
        
        {/* Header Centralizado (Headline + Subheadline) */}
        <div className="methodology-header-light">
          <Copy animateOnScroll={true} delay={0.1} align="center">
            <h2 className="methodology-headline-light">
              {locale === 'pt' ? (
                <>
                  <span className="headline-phrase">Construído em torno da vaga.</span>{' '}
                  <span className="headline-nowrap">Não de um banco de dados.</span>
                </>
              ) : (
                <>
                  <span className="headline-phrase">Built around the role.</span>{' '}
                  <span className="headline-nowrap">Not a database.</span>
                </>
              )}
            </h2>
          </Copy>
          <Copy animateOnScroll={true} delay={0.2} align="center">
            <p className="methodology-subheadline-light">
              {t('methodology_subheadline')}
            </p>
          </Copy>
        </div>

        {/* Grid de 4 Cards com Proporção 1:1 e Hover Interativo */}
        <div className="methodology-grid-light" ref={cardsContainerRef}>
          {stepsData.map((step) => {
            const IconComponent = step.icon;

            return (
              <div
                key={step.id}
                className="methodology-card-light"
              >
                {/* Topo do Card: Ícone com Container Branco */}
                <div className="card-top-row">
                  <div className="card-icon-box-light">
                    <IconComponent size={22} className="card-icon-svg" />
                  </div>
                </div>

                {/* Conteúdo: Título sem número + Descrição com Tipografia e Espaçamento Calibrados */}
                <div className="card-content-light">
                  <h3 className="card-statement-title">{step.title}</h3>
                  <p className="card-statement-desc">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MethodologySection;
