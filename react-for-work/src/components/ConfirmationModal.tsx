import React from "react";
import { useAppContext } from "../context/context";

export function ConfirmationModal() {
  const {
    confirmationModal: { title, content, handleConfirm, handlers, isOpen },
  } = useAppContext();

  function handleCancel() {
    handlers.closeModal();
    handleConfirm(false);
  }

  if (isOpen) {
    return (
      <div
        style={{
          backgroundColor: "red",
        }}
      >
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={handleCancel}>cancel</button>
        <button onClick={() => handleConfirm(true)}>confirm</button>
      </div>
    );
  }
  return null;
}
