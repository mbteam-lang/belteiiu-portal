// src/components/ThemeToggle.jsx
import React, { useState, useEffect } from 'react';
import { getTheme, toggleTheme } from '@/utils/themeService';

const ThemeToggle = () => {
  const [theme, setThemeState] = useState(() => getTheme());

  useEffect(() => {
    const handleThemeChange = (e) => {
      setThemeState(e.detail.theme);
    };
    window.addEventListener('themeChanged', handleThemeChange);
    return () => window.removeEventListener('themeChanged', handleThemeChange);
  }, []);

  const handleToggle = () => {
    const newTheme = toggleTheme();
    setThemeState(newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      style={{
        background: 'transparent',
        border: 'none',
        color: 'inherit',
        cursor: 'pointer',
        fontSize: '1rem',
        marginLeft: '1rem',
      }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default ThemeToggle;
