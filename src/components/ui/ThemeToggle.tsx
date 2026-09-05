'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme || theme;

  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      aria-label={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative isolate h-9 w-16 rounded-full p-0.5 transition-colors',
        currentTheme === 'dark'
          ? 'bg-brand-yellow/20'
          : 'bg-brand-yellow/30'
      )}
    >
      <motion.div
        className={cn(
          'absolute top-0.5 h-8 w-8 rounded-full shadow-lg transition-all'
        )}
        initial={false}
        animate={{
          x: currentTheme === 'dark' ? 28 : 0,
          backgroundColor: currentTheme === 'dark' ? '#000000' : '#FFFFFF',
        }}
      >
        {currentTheme === 'dark' ? '🌙' : '☀️'}
      </motion.div>
    </motion.button>
  );
}