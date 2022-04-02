import { createContext, useReducer } from "react";
import { Theme, ThemeContextProviderProps, ThemeContexttype, ThemeActions } from "./themeContext.types";

const themeReducer = (state: Theme, action: ThemeActions) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, backgroundColor: action.payload };
    default:
      return state;
  }
};

export const ThemeContex = createContext<ThemeContexttype | null>(null);

export const ThemeContexProvider = ({ children }: ThemeContextProviderProps) => {
  const [state, dispatch] = useReducer(themeReducer, {
    backgroundColor: "#947673"
  });
  const changeTheme = (color: string) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  return (
    <ThemeContex.Provider value={ { ...state, changeTheme } } >
      { children }
    </ThemeContex.Provider >
  );
};