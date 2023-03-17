import {
  ConfirmationModalState,
  ConfirmationModalEvents,
} from "context/useConfirmationModalManager/types";
import { CONFIRMATION_MODAL_KEY } from "context/useConfirmationModalManager/constants";

interface AppContextActions {
  utilities: {
    [CONFIRMATION_MODAL_KEY]: ConfirmationModalEvents;
    // Other app-level utilities keys ...
  };
  // Other app-level keys ...
}

export interface Action<
  Category extends keyof AppContextActions,
  Key extends keyof AppContextActions[Category],
> {
  type: keyof AppContextActions[Category][Key];
  payload: AppContextActions[Category][Key][keyof AppContextActions[Category][Key]];
}

export interface AppContextStates {
  utilities: {
    [CONFIRMATION_MODAL_KEY]: ConfirmationModalState;
    // Other app-level utilities keys ...
  };
  // Other app-level keys ...
}
