import styled from 'styled-components'

export const ButtonItem = styled.li`
  margin: 1px;
`

export const Button = styled.button`
  background-color: transparent;
  border-width: 0px;

  cursor: pointer;
`

export const Image = styled.img`
  height: 215px;
  width: 215px;
  margin: 0px;
  @media screen and (max-width: 768px) {
    height: 115px;
    width: 115px;
  }
`
