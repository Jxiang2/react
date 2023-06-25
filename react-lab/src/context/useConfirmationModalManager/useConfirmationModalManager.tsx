import { useReducer } from "react";
import { Action } from "src/context/types";
import { ConfirmationModalState, ConfirmationModalPayload } from "./types";
import {
  OPEN_CONFIRMATION_MODAL,
  CLOSE_CONFIRMATION_MODAL,
  CONFIRMATION_MODAL_INITIAL_STATE,
} from "./constants";

const confirmationModalReducer = (
  state: ConfirmationModalState,
  action: Action<"utilities", "confirmationModal">,
): ConfirmationModalState => {
  switch (action.type) {
    case OPEN_CONFIRMATION_MODAL:
      return {
        ...state,
        ...action.payload,
        isOpen: true,
      };
    case CLOSE_CONFIRMATION_MODAL:
      return CONFIRMATION_MODAL_INITIAL_STATE;
    default:
      return state;
  }
};

export function useConfirmationModalManager() {
  const [confirmationModalState, dispatch] = useReducer(
    confirmationModalReducer,
    CONFIRMATION_MODAL_INITIAL_STATE,
  );

  const openModal = (payload: ConfirmationModalPayload) =>
    dispatch({
      type: OPEN_CONFIRMATION_MODAL,
      payload,
    });

  const closeModal = () =>
    dispatch({
      type: CLOSE_CONFIRMATION_MODAL,
      payload: null,
    });

  return {
    ...confirmationModalState,
    handlers: {
      openModal,
      closeModal,
    },
  };
}
