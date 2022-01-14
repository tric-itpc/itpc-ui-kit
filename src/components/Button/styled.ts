import styled from "styled-components"

import { Colors, DefaultValues } from "../constants"
import { ButtonStyles } from "../styles"
import { ButtonVariant } from "../types"

interface Props extends ButtonStyles {
  variant?: ButtonVariant
}

export const Button = styled.button<Props>`
  padding: ${({ paddingX, paddingY }) => `${paddingY ? paddingY : 6}px ${paddingX ? paddingX : 20}px`};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : 40)}px;
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 40)}px;
  text-align: center;
  user-select: none;
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : Colors.purple)};
  border: ${({ borderColor, borderWidth }) => `${borderWidth ? borderWidth : 0}px solid ${borderColor ? borderColor : 'transparent'}`};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : 0)}px;
  color: ${({ color }) => (color ? color : Colors.white)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : DefaultValues.fontSizeM)}px;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 400)};
  line-height: 1.5;
  cursor: ${({ cursor }) => (cursor ? cursor : 'pointer')};
  transition: all .3s ease-in-out;
  outline: 0;
  
  &:disabled {
    color: ${({ colorDisabled }) => (colorDisabled ? colorDisabled : Colors.white)};
    cursor: ${({ cursorDisabled }) => (cursorDisabled ? cursorDisabled : 'disabled')};
  }

  &:hover {
    background-color:  ${({ backgroundColorHover }) => (backgroundColorHover ? backgroundColorHover : Colors.purpleLight)};
    border-color: ${({ borderColorHover }) => (borderColorHover ? borderColorHover : Colors.purpleLight)};
  }

  &:disabled {
    background-color:  ${({ backgroundColorDisabled }) => (backgroundColorDisabled ? backgroundColorDisabled : Colors.grey)};
    border-color: ${({ borderColorDisabled }) => (borderColorDisabled ? borderColorDisabled : Colors.grey)};
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
