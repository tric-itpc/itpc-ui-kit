import styled from "styled-components"

export const ButtonGroup = styled.div`
  min-width: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.button`
  position: relative;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #f0f0f0;
  }
`

export const ButtonDate = styled(Button)`
  padding: .5rem;
`
