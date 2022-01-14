import styled from "styled-components"

export interface Props {
  isBold?: boolean
  orientation: 'left' | 'right'
}

export const Arrow = styled.i<Props>`
  position: absolute;
  top: calc(1rem - 7px / 2);
  padding: 3px;
  border: solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  
  ${({ isBold }) => isBold && 'border-width: 0 2px 2px 0;'}
  
  ${({ orientation }) => orientation === 'left' && `
    left: calc(1rem - 1px);
    transform: rotate(135deg);
  `}
  
  ${({ orientation }) => orientation === 'right' && `
    left: calc(1rem - 10px / 2);
    transform: rotate(-45deg);
  `}
`
