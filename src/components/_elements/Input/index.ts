import styled from "styled-components"

import { Colors } from "../../constants"
import { ValidationState } from "../../types"

interface InputWrapProps {
  validationState: ValidationState
  focused: boolean
  disabled: boolean
}

interface InputProps {
  focused: boolean
  valueLength: number
}

export const InputWrap = styled.div<InputWrapProps>`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid ${Colors.grey};
  border-radius: 5px;
  box-shadow: none;
  box-sizing: border-box;
  
  ${({ focused }) => focused && `border-color: ${Colors.purple};`}
  ${({ disabled }) => disabled && `background-color: ${Colors.greyLight};`}
  ${({ validationState }) => validationState === 'invalid' && `border-color: ${Colors.red};`}
`

export const Input = styled.input<InputProps>`
  padding: 7px 10px;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  color: ${({ focused, valueLength }) => (
    !valueLength && !focused ? 'transparent' : `${Colors.black}`
  )};
  appearance: none;
  box-sizing: border-box;


  &::-webkit-calendar-picker-indicator {
    display: none;
  }
  
  :disabled {
    background-color: ${Colors.greyLight};
  }
`
