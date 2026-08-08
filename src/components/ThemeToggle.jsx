// src/components/ThemeToggle.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
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

  const isDark = theme === 'dark';

  return (
    <motion.button
      type="button"
      onClick={handleToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className="relative flex items-center justify-center h-[46px] w-[46px] rounded-full bg-cyan-950/40 border border-cyan-700/30 backdrop-blur-xl shadow-lg shadow-cyan-950/20 hover:bg-cyan-900/50 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer select-none focus:outline-none overflow-hidden shrink-0"
      aria-label="Toggle Theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -16, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 16, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Moon className="w-5 h-5 text-cyan-300 fill-cyan-300/20 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
          ) : (
            <Sun className="w-5 h-5 text-amber-400 fill-amber-400/20 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;




