import styled from "styled-components"

import { Colors } from "../constants"
import { Variant } from "../types"

interface Props {
  variant: Variant
}

export const Button = styled.button<Props>`
  padding: .375rem .75rem;
  text-align: center;
  user-select: none;
  border: 1px solid;
  border-radius: .25rem;
  font-size: .875rem;
  font-weight: 400;
  line-height: 1.5;
  cursor: pointer;
  transition: all .3s ease-in-out;
  outline: 0;
  
  &:disabled {
    cursor: default;
    opacity: .65;
  }
  
  ${({ variant }) => variant === 'primary' && `
    color: ${Colors.white};
    background-color: ${Colors.primary};
    border-color: ${Colors.primary};
    
    &:hover {
      background-color: ${Colors.primaryDark};
      border-color: ${Colors.primaryDark};
    }
  `}

  ${({ variant }) => variant === 'white' && `
    color: ${Colors.primary};
    background-color: ${Colors.white};
    border-color: ${Colors.greyLight};
    
    &:hover {
      border-color: ${Colors.primaryDark};
    }
  `}
`
