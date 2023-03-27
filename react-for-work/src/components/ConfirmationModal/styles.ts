import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200, 0.8);

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

export const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const Header = styled.header`
  text-align: end;
`;

export const CloseBtn = styled.button`
  color: crimson;
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

export const Title = styled.h1`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
`;

export const Body = styled.section`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-align: center;
`;

export const Actions = styled.footer`
  flex: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CancelBtn = styled.button`
  width: 100px;
  height: 45px;
  margin: 10px;
  border: none;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;

  background-color: crimson;
`;

export const ConfirmBtn = styled.button`
  width: 100px;
  height: 45px;
  margin: 10px;
  border: none;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;

  background-color: cornflowerblue;
`;
