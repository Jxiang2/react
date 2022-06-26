/// <reference types="react-scripts" />

interface ITheme {
  backgroundColor: string;
}

type ThemeActionsType = { type: "CHANGE_COLOR", payload: string; };

type ThemeContextProviderPropsType = {
  children: React.ReactNode;
};

type ThemeContextType = {
  backgroundColor: string;
  changeTheme: (color: string) => void;
};

interface IAxiosState {
  isPending: boolean;
  data: any;
  success: boolean;
  error: string | null;
};

interface IAxiosGetState {
  isPending: boolean;
  data: any;
  success: boolean;
  error: string | null;
};

type AxiosUpdateMethodName = "PUT" | "PATCH";

type AxiosActionsType =
  | { type: "IS_PENDING", payload: any; }
  | { type: "ERROR", payload: any; }
  | { type: "CREATED", payload: any; }
  | { type: "UPDATED", payload: any; }
  | { type: "DELETED", payload: any; };

type AxiosGetActionsType =
  | { type: "IS_PENDING", payload: any; }
  | { type: "ERROR", payload: any; }
  | { type: "RETRIEVED", payload: any; };

export type {
  ITheme,
  ThemeActionsType,
  ThemeContextProviderPropsType,
  ThemeContextType,
  IAxiosGetState,
  IAxiosState,
  AxiosGetActionsType,
  AxiosActionsType,
  AxiosUpdateMethodName,
};
