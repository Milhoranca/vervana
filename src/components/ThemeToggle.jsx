import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useI18n } from '../context/I18nContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { locale } = useI18n();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="theme-pill-toggle"
      type="button"
      aria-label={isDark ? "Alternar para tema claro" : "Alternar para tema escuro"}
      title={isDark 
        ? (locale === 'pt' ? 'Tema Escuro (Padrão) — Alternar para Claro' : 'Dark Theme (Default) — Switch to Light') 
        : (locale === 'pt' ? 'Tema Claro (Alternativo) — Alternar para Escuro' : 'Light Theme (Alternative) — Switch to Dark')}
    >
      <span className="theme-toggle-icon-wrap">
        {isDark ? (
          <Moon size={14} className="theme-icon moon" />
        ) : (
          <Sun size={14} className="theme-icon sun" />
        )}
      </span>
      <span className="theme-toggle-text">
        {isDark 
          ? (locale === 'pt' ? 'Escuro' : 'Dark') 
          : (locale === 'pt' ? 'Claro' : 'Light')}
      </span>
    </button>
  );
};

export default ThemeToggle;
