import { createContext, useReducer } from "react";
import { themeReducer, ThemeContextProviderPropsType, ThemeContextType } from "./themeContext.types";


// the content of context to be consumed
export const themeContext = createContext<ThemeContextType | null>(null);

export const ThemeContexProvider = ({ children }: ThemeContextProviderPropsType) => {
  // variables in context
  const [state, dispatch] = useReducer(themeReducer, { backgroundColor: "#947673" });

  // variable modifiers in context
  const changeTheme = (color: string) => dispatch({ type: "CHANGE_COLOR", payload: color });

  return (
    <themeContext.Provider value={ { ...state, changeTheme } } >
      { children }
    </themeContext.Provider>
  );
};