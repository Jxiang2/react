import { useConfirmationModal } from "src/hooks";
import { Calender } from "src/components";
import { Divide } from "./styles";

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

    // onConfirm actions here...
    console.log("Successfully confirmed!");
  }

  return (
    <>
      <h2>Hooked confirmation modal</h2>
      <button onClick={handleConfirm}>test confirmation modal</button>

      <Divide />

      <h2>Calender</h2>
      <Calender />
    </>
  );
}
