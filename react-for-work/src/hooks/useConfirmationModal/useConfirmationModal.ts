import { useAppContext } from "context/context";
import {
  ConfirmationModalPayload,
  ModalCallback,
} from "context/useConfirmationModalManager/types";

export default function useConfirmationModal() {
  const {
    confirmationModal: { handlers },
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
