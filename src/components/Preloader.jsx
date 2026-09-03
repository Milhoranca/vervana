import React, { useState, useEffect } from 'react';
import { useI18n } from '../context/I18nContext';

export const Preloader = () => {
  const { locale } = useI18n();
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    let current = 0;
    // Step progression inspired by Basic/Dept
    const timer = setInterval(() => {
      current += Math.floor(Math.random() * 12) + 4;
      if (current >= 100) {
        current = 100;
        setCount(100);
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            setIsRemoved(true);
          }, 950);
        }, 300);
      } else {
        setCount(current);
      }
    }, 38);

    return () => clearInterval(timer);
  }, []);

  if (isRemoved) return null;

  const formattedCount = count < 10 ? `00${count}` : count < 100 ? `0${count}` : `100`;

  return (
    <div 
      className={`basic-preloader-root ${isDone ? 'is-complete' : ''}`}
      aria-hidden="true"
    >
      {/* Curtain Layer (Basic/Dept style shutter) */}
      <div className="basic-preloader-panel">
        
        {/* Frame Top Header */}
        <div className="preloader-frame-top">
          <div className="preloader-tag">
            <span className="preloader-dot" />
            <span className="mono-label">VERVANA™ / LATAM TO US</span>
          </div>
          <div className="preloader-tag">
            <span className="mono-label">
              {count < 100 
                ? (locale === 'pt' ? 'CARREGANDO SISTEMA' : 'INITIALIZING PLATFORM') 
                : (locale === 'pt' ? 'SISTEMA PRONTO' : 'SYSTEM ONLINE')}
            </span>
          </div>
        </div>

        {/* Centerpiece: Subtle Brand Monogram */}
        <div className="preloader-center-content">
          <div className="preloader-chevron-symbol">
            <svg viewBox="0 0 220.215 179.149" className="preloader-symbol-svg">
              <path 
                fill="#003740" 
                stroke="#9AFF1C"
                strokeWidth="2"
                d="M36.352 65.566 L132.504 116.859 L96.695 65.566 L220.215 0 L145.148 179.148 L0 65.773 L220.215 0 Z"
              />
            </svg>
          </div>
          <div className="preloader-center-title">
            <span>VERVANA</span>
          </div>
        </div>

        {/* Frame Bottom: Massive Typographic Counter (Basic Agency Signature) */}
        <div className="preloader-frame-bottom">
          <div className="preloader-footer-left">
            <span className="mono-sublabel">
              {locale === 'pt' 
                ? 'Curadoria de Engenharia de Software' 
                : 'Curated Software Engineering'}
            </span>
            <span className="mono-index">EST. 2026</span>
          </div>

          <div className="preloader-massive-counter">
            <span className="counter-digits">{formattedCount}</span>
            <span className="counter-percent">%</span>
          </div>
        </div>

        {/* Progress Line on Edge */}
        <div className="preloader-edge-progress">
          <div 
            className="preloader-edge-fill" 
            style={{ width: `${count}%` }} 
          />
        </div>

      </div>
    </div>
  );
};

export default Preloader;
