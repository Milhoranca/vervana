import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  ArrowRight 
} from 'lucide-react';
import { useI18n } from '../context/I18nContext';
import { Copy } from './ui/Copy';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const BenchmarkSection = () => {
  const { t } = useI18n();
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const cards = [
    {
      id: '01',
      icon: TrendingUp,
      title: t('benchmark_card1_title'),
      description: t('benchmark_card1_desc'),
      cta: t('benchmark_card1_cta'),
      featured: false
    },
    {
      id: '02',
      icon: ShieldCheck,
      title: t('benchmark_card2_title'),
      description: t('benchmark_card2_desc'),
      cta: t('benchmark_card2_cta'),
      featured: true
    },
    {
      id: '03',
      icon: Layers,
      title: t('benchmark_card3_title'),
      description: t('benchmark_card3_desc'),
      cta: t('benchmark_card3_cta'),
      featured: false
    }
  ];

  useEffect(() => {
    if (!cardsContainerRef.current) return;

    const ctx = gsap.context(() => {
      const cardEls = cardsContainerRef.current.querySelectorAll('.benchmark-card');

      gsap.fromTo(
        cardEls,
        { 
          opacity: 0, 
          y: 40 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: 'top 82%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="benchmark-section" id="benchmark" ref={sectionRef}>
      <div className="benchmark-container">
        
        {/* Título Principal da Seção (Alinhado à Esquerda como na Referência) */}
        <div className="benchmark-header">
          <Copy animateOnScroll={true} delay={0.1} align="left">
            <h2 className="benchmark-headline">
              {t('benchmark_headline')}
            </h2>
          </Copy>
        </div>

        {/* Grid de 3 Cards com o Card Central Destacado */}
        <div className="benchmark-grid" ref={cardsContainerRef}>
          {cards.map((card) => {
            const IconComponent = card.icon;

            return (
              <div
                key={card.id}
                className={`benchmark-card ${card.featured ? 'featured-card' : ''}`}
              >
                {/* Ícone no Topo */}
                <div className="benchmark-card-top">
                  <div className="benchmark-icon-box">
                    <IconComponent size={20} className="benchmark-icon" />
                  </div>
                </div>

                {/* Conteúdo Central: Título em Destaque + Parágrafo */}
                <div className="benchmark-card-body">
                  <h3 className="benchmark-card-title">{card.title}</h3>
                  <p className="benchmark-card-desc">{card.description}</p>
                </div>

                {/* Ação Inferior: Botão CTA */}
                <div className="benchmark-card-action">
                  <button className={`benchmark-btn ${card.featured ? 'btn-featured' : 'btn-standard'}`}>
                    <span>{card.cta}</span>
                    <ArrowRight size={14} className="btn-arrow" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BenchmarkSection;
