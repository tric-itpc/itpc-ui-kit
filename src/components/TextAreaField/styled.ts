import styled from "styled-components"

import { InputWrap, InputWrapProps } from "../_elements"

import { Colors } from "../constants"

interface Props {
  focused: boolean
  valueLength: number
}

export const TextAreaWrap = styled(InputWrap)<InputWrapProps>`
  padding: 0;
`

export const TextArea = styled.textarea<Props>`
  padding: 10px;
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
  resize: none;

  :disabled {
    background-color: ${Colors.greyLight};
  }
`
