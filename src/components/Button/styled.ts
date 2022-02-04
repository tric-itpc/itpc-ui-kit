import styled from "styled-components"

import { Colors, DefaultValues } from "../constants"
import { ButtonVariant } from "../types"

interface Props {
  variant: ButtonVariant
}

export const Button = styled.button<Props>`
  padding: 6px 20px;
  min-width: 40px;
  min-height: 40px;
  text-align: center;
  user-select: none;
  border: 1px solid;
  border-radius: 5px;
  color: ${Colors.white};
  font-size: ${DefaultValues.fontSizeM}px;
  font-weight: 400;
  line-height: 1.5;
  cursor: pointer;
  transition: all .3s ease-in-out;
  outline: 0;
  
  &:disabled {
    cursor: default;
  }
  
  ${({ variant }) => variant === 'purple' && `
    background-color: ${Colors.purple};
    border-color: ${Colors.purple};
    
    &:hover {
      background-color: ${Colors.purpleLight};
      border-color: ${Colors.purpleLight};
    }
    
    &:disabled {
      background-color: ${Colors.grey};
      border-color: ${Colors.grey};
    }
  `}

  ${({ variant }) => variant === 'white' && `
    color: ${Colors.purple};
    background-color: ${Colors.white};
    border-color: ${Colors.purple};
    
    &:hover {
      color: ${Colors.white};
      background-color: ${Colors.purple};
      border-color: ${Colors.purple};
    }
    
    &:disabled {
      color: ${Colors.grey};
      background-color: ${Colors.white};
      border-color: ${Colors.grey};
    }
  `}

  ${({ variant }) => variant === 'red' && `
    background-color: ${Colors.red};
    border-color: ${Colors.red};
    
    &:hover {
      background-color: ${Colors.redDark};
      border-color: ${Colors.redDark};
    }
    
    &:disabled {
      color: ${Colors.white};
      background-color: ${Colors.grey};
      border-color: ${Colors.grey};
    }
  `}
`
