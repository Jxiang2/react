import { OPEN_CONFIRMATION_MODAL, CLOSE_CONFIRMATION_MODAL } from "./constants";

export type ModalCallback = (confirmed: boolean) => void;
export interface ConfirmationModalPayload {
  title: string;
  content: string;
  handleConfirm: ModalCallback;
}
interface ConfirmationModalHandlers {
  handlers: {
    openModal: (payload: ConfirmationModalPayload) => void;
    closeModal: () => void;
  };
}
export interface ConfirmationModalState
  extends ConfirmationModalPayload,
    ConfirmationModalHandlers {
  isOpen: boolean;
}
export interface ConfirmationModalEvents {
  [OPEN_CONFIRMATION_MODAL]: ConfirmationModalPayload;
  [CLOSE_CONFIRMATION_MODAL]: null;
}
