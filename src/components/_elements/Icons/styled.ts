import styled from "styled-components"

import { Orientation } from "../../types"

interface Props {
  isClicable?: boolean
  orientation?: Orientation
}

export const Icon = styled.i<Props>`
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease-in-out .3s;
  
  ${({ isClicable }) => isClicable && `
    cursor: pointer;
  `}

  ${({ orientation }) => orientation === 'top' && `
    transform: rotate(-180deg);
  `}

  ${({ orientation }) => orientation === 'right' && `
    transform: rotate(-90deg);
  `}

  ${({ orientation }) => orientation === 'bottom' && `
    transform: rotate(0);
  `}

  ${({ orientation }) => orientation === 'left' && `
    transform: rotate(90deg);
  `}
`
