import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('vv-theme') || 'light';
    } catch (e) {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('vv-theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    document.body.classList.add('theming');
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    setTimeout(() => {
      document.body.classList.remove('theming');
    }, 300);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
