import { useAppContext } from "src/context";
import {
  ConfirmationModalPayload,
  ModalCallback,
} from "src/context/useConfirmationModalManager/types";

export function useConfirmationModal() {
  const {
    utilities: {
      confirmationModal: { handlers },
    },
  } = useAppContext();

  const getConfirmation = ({
    title,
    content,
  }: Omit<ConfirmationModalPayload, "handleConfirm">) => {
    const promise = new Promise<boolean>((resolve) => {
      const handleConfirm: ModalCallback = (confirmed: boolean) => {
        handlers.closeModal();
        resolve(confirmed);
      };

      handlers.openModal({
        title,
        content,
        handleConfirm,
      });
    });

    return promise;
  };

  return {
    getConfirmation,
  };
}
