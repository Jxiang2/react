export interface Theme {
  backgroundColor: string;
};

export type ThemeActions = { type: "CHANGE_COLOR", payload: string; };

export const initTheme: Theme = {
  backgroundColor: "#947673"
};
