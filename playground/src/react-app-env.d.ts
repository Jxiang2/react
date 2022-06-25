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

export const themeReducer = (state: ITheme, action: ThemeActionsType) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {...state, backgroundColor: action.payload};
    default:
      return state;
  }
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

export const axiosReducer = (state: IAxiosState, action: AxiosActionsType) => {
  switch (action.type) {
    case "IS_PENDING":
      return {isPending: true, data: null, success: false, error: null};
    case "ERROR":
      return {isPending: false, data: null, success: false, error: action.payload};
    case "CREATED":
      return {isPending: false, data: action.payload, success: true, error: null};
    case "UPDATED":
      return {isPending: false, data: action.payload, success: true, error: null};
    case "DELETED":
      return {isPending: false, data: action.payload, success: true, error: null};
    default:
      return state;
  }
};

export const axiosGetReducer = (state: IAxiosGetState, action: AxiosGetActionsType) => {
  switch (action.type) {
    case "IS_PENDING":
      return {isPending: true, data: null, success: false, error: null};
    case "ERROR":
      return {isPending: false, data: null, success: false, error: action.payload};
    case "RETRIEVED":
      return {isPending: false, data: action.payload, success: true, error: null};
    default:
      return state;
  }
};

export type {
  ThemeContextProviderPropsType,
  ThemeContextType,
  IAxiosGetState,
  IAxiosState,
  AxiosGetActionsType,
  AxiosActionsType,
  AxiosUpdateMethodName,
};
