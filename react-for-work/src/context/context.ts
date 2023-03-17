import { createContext, useContext } from "react";
import {
  CONFIRMATION_MODAL_KEY,
  CONFIRMATION_MODAL_INITIAL_STATE,
} from "context/useConfirmationModalManager/constants";
import { AppContextStates } from "./types";

export const AppContext = createContext<AppContextStates>({
  [CONFIRMATION_MODAL_KEY]: CONFIRMATION_MODAL_INITIAL_STATE,
  // Other app-level keys ...
});

export function useAppContext() {
  return useContext(AppContext);
}
