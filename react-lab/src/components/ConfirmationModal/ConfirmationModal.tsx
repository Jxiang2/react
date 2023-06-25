import { useAppContext } from "src/context";
import {
  Background,
  Container,
  Header,
  Title,
  Body,
  Actions,
  CancelBtn,
  CloseBtn,
  ConfirmBtn,
} from "./styles";
export function ConfirmationModal() {
  const {
    utilities: {
      confirmationModal: { title, content, handleConfirm, handlers, isOpen },
    },
  } = useAppContext();

  function handleCancel() {
    handlers.closeModal();
    handleConfirm(false);
  }

  if (isOpen) {
    return (
      <Background>
        <Container>
          <Header>
            <CloseBtn onClick={handleCancel}> X </CloseBtn>
          </Header>

          <Title>{title}</Title>

          <Body>{content}</Body>

          <Actions>
            <CancelBtn onClick={handleCancel}>Cancel</CancelBtn>
            <ConfirmBtn onClick={() => handleConfirm(true)}>Confirm</ConfirmBtn>
          </Actions>
        </Container>
      </Background>
    );
  }
  return null;
}
