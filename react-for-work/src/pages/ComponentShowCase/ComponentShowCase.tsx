import React from "react";
import useConfirmationModal from "hooks/useConfirmationModal/useConfirmationModal";

export function ComponentShowCase() {
  const { getConfirmation } = useConfirmationModal();

  // confirmation modal demo
  async function handleConfirm() {
    const confirmationPromise = getConfirmation({
      title: "Modal Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    });

    console.log(confirmationPromise);
    const confirmation = await confirmationPromise;
    console.log(confirmation);

    if (confirmation === false) {
      return;
    }

    // mock response
    console.log("Successfully confirmed!");
  }

  return (
    <>
      <h2>Hooked confirmation modal</h2>
      <button onClick={handleConfirm}>test confirmation modal</button>
    </>
  );
}
