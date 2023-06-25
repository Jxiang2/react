import { createContext, useContext } from "react";
import {
  CONFIRMATION_MODAL_KEY,
  CONFIRMATION_MODAL_INITIAL_STATE,
} from "src/context/useConfirmationModalManager/constants";
import { AppContextStates } from "./types";

export const AppContext = createContext<AppContextStates>({
  utilities: {
    [CONFIRMATION_MODAL_KEY]: CONFIRMATION_MODAL_INITIAL_STATE,
    // Other app-level utilities keys ...
  },
  // Other app-level keys ...
});

export function useAppContext() {
  return useContext(AppContext);
}

// Managers
export * from "./useConfirmationModalManager";
