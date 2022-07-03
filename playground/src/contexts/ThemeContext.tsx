import { createContext, useReducer } from "react";
import {
  ThemeContextProviderPropsType,
  ThemeContextType,
  ITheme,
  ThemeActionsType
} from "../react-app-env";

export const themeReducer = (state: ITheme, action: ThemeActionsType) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, backgroundColor: action.payload };
    default:
      return state;
  }
};

// the content of context to be consumed
export const themeContext = createContext<ThemeContextType | null>(null);

export const ThemeContexProvider = ({ children }: ThemeContextProviderPropsType) => {
  // variables in context
  const [state, dispatch] = useReducer(themeReducer, { backgroundColor: "#947673" });

  // variable modifiers in context
  const changeTheme = (color: string) => dispatch({ type: "CHANGE_COLOR", payload: color });

  return (
    <themeContext.Provider value={ { ...state, changeTheme } }>
      { children }
    </themeContext.Provider>
  );
};