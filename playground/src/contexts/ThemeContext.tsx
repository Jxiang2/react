import { createContext, useReducer } from "react";
import { Theme, ThemeActions, ThemeContextProviderProps, ThemeContexttype } from "./themeContext.types";

const themeReducer = (state: Theme, action: ThemeActions) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, backgroundColor: action.payload };
    default:
      return state;
  }
};

// the content of context to be consumed
export const ThemeContex = createContext<ThemeContexttype | null>(null);

export const ThemeContexProvider = ({ children }: ThemeContextProviderProps) => {
  // variables in context
  const [state, dispatch] = useReducer(themeReducer, { backgroundColor: "#947673" });

  // variable modifiers in context
  const changeTheme = (color: string) => dispatch({ type: "CHANGE_COLOR", payload: color });

  return (
    <ThemeContex.Provider value={ { ...state, changeTheme } } >
      { children }
    </ThemeContex.Provider >
  );
};