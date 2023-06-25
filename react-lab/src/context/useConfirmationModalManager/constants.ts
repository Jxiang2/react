import noop from "lodash/noop";
export const CONFIRMATION_MODAL_KEY = "confirmationModal";
export const OPEN_CONFIRMATION_MODAL = "confirmationModal/open";
export const CLOSE_CONFIRMATION_MODAL = "confirmationModal/close";
export const CONFIRMATION_MODAL_INITIAL_STATE = {
  isOpen: false,
  title: "",
  content: "",
  handleConfirm: noop,
  handlers: {
    openModal: noop,
    closeModal: noop,
  },
};
