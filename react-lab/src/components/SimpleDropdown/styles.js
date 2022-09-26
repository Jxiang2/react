import styled from 'styled-components'

export const Menu = styled.span`
  border-radius: 5px;
  padding: 12px 15px;
  position: absolute;
  z-index: 2;
  background: white;
  box-shadow: 0 2px 10px grey;
  margin-top: 7px;
  display: flex;
  flex-direction: column;
`

export const Item = styled.option`
border-radius: 5px;
padding: 3px;
width: 100%;
margin-top: 4px;
&:hover {
    cursor: pointer;
    background: yello}
`