import {
  ConfirmationModalState,
  ConfirmationModalEvents,
} from "context/useConfirmationModalManager/types";
import { CONFIRMATION_MODAL_KEY } from "context/useConfirmationModalManager/constants";

export interface AppContextStates {
  [CONFIRMATION_MODAL_KEY]: ConfirmationModalState;
}

export interface AppContextAxctions {
  [CONFIRMATION_MODAL_KEY]: ConfirmationModalEvents;
}

export interface Action<Key extends keyof AppContextAxctions> {
  type: keyof AppContextAxctions[Key];
  payload: AppContextAxctions[Key][keyof AppContextAxctions[Key]];
}
