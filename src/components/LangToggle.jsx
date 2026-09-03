import React from 'react';
import { useI18n } from '../context/I18nContext';

export const LangToggle = () => {
  const { lang, setLang } = useI18n();

  return (
    <div 
      className="lang-pill-switch"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: '#000000',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '999px',
        padding: '3px',
        cursor: 'pointer',
        userSelect: 'none',
        height: '38px'
      }}
    >
      <span 
        onClick={() => setLang('en')}
        style={{
          padding: '6px 14px',
          fontFamily: "var(--vv-font-body, 'Inter', sans-serif)",
          fontSize: '0.8125rem',
          fontWeight: 600,
          borderRadius: '999px',
          transition: 'all 220ms ease',
          background: lang === 'en' ? '#FFFFFF' : 'transparent',
          color: lang === 'en' ? '#000000' : 'rgba(255, 255, 255, 0.6)'
        }}
      >
        English
      </span>

      <span 
        onClick={() => setLang('pt')}
        style={{
          padding: '6px 14px',
          fontFamily: "var(--vv-font-body, 'Inter', sans-serif)",
          fontSize: '0.8125rem',
          fontWeight: 600,
          borderRadius: '999px',
          transition: 'all 220ms ease',
          background: lang === 'pt' ? '#9AFF1C' : 'transparent',
          color: lang === 'pt' ? '#101820' : 'rgba(255, 255, 255, 0.6)'
        }}
      >
        Português
      </span>
    </div>
  );
};
