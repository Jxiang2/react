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
      return { ...state, backgroundColor: action.payload };
    default:
      return state;
  }
};

export type {
  ThemeContextProviderPropsType,
  ThemeContextType,
};