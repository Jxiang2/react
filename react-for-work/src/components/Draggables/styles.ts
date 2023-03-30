import styled from "styled-components";

export const Container = styled.div`
  background-color: #333;
  padding: 1rem;
  margin: 1rem;
`;

export const DraggableBlock = styled.div<{
  dragging: boolean;
}>`
  padding: 1rem;
  background-color: white;
  border: 1px solid black;
  cursor: move;
  opacity: ${(props) => (props.dragging ? 0.5 : 1)};
`;
