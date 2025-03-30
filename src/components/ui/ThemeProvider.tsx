"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { Theme, theme as defaultTheme } from '@/styles/theme';

// Create context with default theme
export const ThemeContext = createContext<Theme>(defaultTheme);

// Hook to use theme in components
export function useTheme() {
  return useContext(ThemeContext);
}

interface ThemeProviderProps {
  theme?: Theme;
  children: ReactNode;
}

export function ThemeProvider({ theme = defaultTheme, children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}
