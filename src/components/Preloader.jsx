import React, { useState, useEffect } from 'react';
import { useI18n } from '../context/I18nContext';

export const Preloader = () => {
  const { locale } = useI18n();
  const [count, setCount] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    let current = 0;
    const timer = setInterval(() => {
      current += Math.floor(Math.random() * 14) + 6;
      if (current >= 100) {
        current = 100;
        setCount(100);
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            setIsRemoved(true);
          }, 950);
        }, 320);
      } else {
        setCount(current);
      }
    }, 40);

    return () => clearInterval(timer);
  }, []);

  if (isRemoved) return null;

  const formattedCount = count < 10 ? `00${count}` : count < 100 ? `0${count}` : `100`;

  return (
    <div 
      className={`jams-preloader-root ${isDone ? 'is-complete' : ''}`}
      aria-hidden="true"
    >
      <div className="jams-preloader-panel">
        
        {/* Top Minimal Bar */}
        <div className="jams-preloader-top">
          <span className="jams-mono-tag">VERVANA / EDITION 2026</span>
          <span className="jams-mono-tag">
            {count < 100 
              ? (locale === 'pt' ? 'CARREGANDO' : 'LOADING')
              : (locale === 'pt' ? 'PRONTO' : 'READY')}
          </span>
        </div>

        {/* Center: Iconic JAMS Style Typographic Signature */}
        <div className="jams-preloader-center">
          <h1 className="jams-brand-title">VERVANA</h1>
          
          <div className="jams-badge-row">
            <div className="jams-symbol-box">
              <svg viewBox="0 0 220.215 179.149" className="jams-chevron-icon">
                <path 
                  fill="#003740" 
                  d="M36.352 65.566 L132.504 116.859 L96.695 65.566 L220.215 0 L145.148 179.148 L0 65.773 L220.215 0 Z"
                />
              </svg>
            </div>
            <span className="jams-tag-pill">LATAM ➔ US</span>
            <span className="jams-counter-pill">{formattedCount}%</span>
          </div>
        </div>

        {/* Bottom Editorial Grid */}
        <div className="jams-preloader-bottom">
          <div className="jams-bottom-left">
            <span>(V-001)</span>
          </div>
          <div className="jams-bottom-center">
            <span>
              {locale === 'pt' 
                ? 'CURADORIA DE ENGENHARIA DE SOFTWARE' 
                : 'CURATED SOFTWARE ENGINEERING PLATFORM'}
            </span>
          </div>
          <div className="jams-bottom-right">
            <span>{formattedCount}%</span>
          </div>
        </div>

        {/* Bottom Edge Minimal Progress Line */}
        <div className="jams-edge-progress">
          <div 
            className="jams-edge-fill" 
            style={{ width: `${count}%` }} 
          />
        </div>

      </div>
    </div>
  );
};

export default Preloader;
