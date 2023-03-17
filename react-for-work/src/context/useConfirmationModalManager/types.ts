import { OPEN_CONFIRMATION_MODAL, CLOSE_CONFIRMATION_MODAL } from "./constants";

export type ModalCallback = (confirmed: boolean) => void;
export type ConfirmationModalPayload = {
  title: string;
  content: string;
  handleConfirm: ModalCallback;
};
type ConfirmationModalHandlers = {
  handlers: {
    openModal: (payload: ConfirmationModalPayload) => void;
    closeModal: () => void;
  };
};
export type ConfirmationModalState = {
  isOpen: boolean;
} & ConfirmationModalPayload &
  ConfirmationModalHandlers;
export type ConfirmationModalEvents = {
  [OPEN_CONFIRMATION_MODAL]: ConfirmationModalPayload;
  [CLOSE_CONFIRMATION_MODAL]: null;
};
