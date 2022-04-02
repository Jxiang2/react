import React, { createContext } from "react";
import { Theme, initTheme } from "./Theme";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContex = createContext<Theme>(initTheme);

export const ThemeContexProvider = ({ children }: ThemeContextProviderProps) => {
  return (
    <ThemeContex.Provider value={ initTheme }>
      { children }
    </ThemeContex.Provider>
  );
};