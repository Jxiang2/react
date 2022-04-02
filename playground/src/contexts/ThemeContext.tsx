import React, { createContext, useReducer } from "react";
import { Theme, ThemeActions, initTheme } from "./Theme";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const themeReducer = (state: Theme, action: ThemeActions) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, backgroundColor: action.payload };
    default:
      return state;
  }
};

export const ThemeContex = createContext(initTheme);

export const ThemeContexProvider = ({ children }: ThemeContextProviderProps) => {
  // logics
  const [state, dispatch] = useReducer(themeReducer, initTheme);
  const changeTheme = (color: string) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  return (
    <ThemeContex.Provider value={ state } >
      { children }
    </ThemeContex.Provider >
  );
};