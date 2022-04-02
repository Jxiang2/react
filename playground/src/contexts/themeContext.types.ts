interface Theme {
  backgroundColor: string;
}

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContexttype = {
  backgroundColor: string;
  changeTheme: (color: string) => void;
};

type ThemeActions = { type: "CHANGE_COLOR", payload: string; };

export type {
  Theme,
  ThemeContextProviderProps,
  ThemeContexttype,
  ThemeActions,
};