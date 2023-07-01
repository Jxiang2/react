import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid;
  height: 99vh;
`;

export const SevenColGrid = styled.div<{
  fullHeight?: boolean;
  is28Days?: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  ${(props) => props.fullHeight && `height: calc(100% - 75px);`}
  ${(props) =>
    props.fullHeight &&
    `grid-template-rows: repeat(${props.is28Days ? 4 : 5}, 1fr);`}

  div {
    display: grid;
    border: 1px solid;

    span {
      text-align: right;
      padding-right: 15px;
      height: fit-content;
    }
  }
`;

export const EventHeader = styled.span<{ isToday: boolean }>`
  background-color: ${(props) => (props.isToday ? "red" : "transparent")};
`;

export const StyledEvent = styled.span<{ bgColor: string }>`
  background: ${({ bgColor }) => bgColor};
  color: white;
  text-align: left !important;
  padding: 2px 10px;
  margin: 0 2px;
  border-radius: 10px;
  font-size: 13px;
  cursor: move;
  text-transform: capitalize;
`;

export const AddEvent = styled.button`
  border-radius: 25%;
  margin-left: 5px;
`;

export const HeadDays = styled.span`
  text-align: center;
  border: 1px solid;
  height: 30px;
  padding: 5px;
  background: darkolivegreen;
  color: white;
`;

export const DateControls = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  align-items: center;
`;

export const PortalWrapper = styled.div`
  background: white;
  position: absolute;
  width: 60%;
  height: 200px;
  top: 50%;
  left: 50%;
  /* border: 1px solid; */
  border-radius: 6px;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 20px black;
  padding: 40px;

  h2 {
    font-size: 3rem;
  }
`;
