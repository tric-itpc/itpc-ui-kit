import styled from 'styled-components'
import { Colors } from "../constants"
import { InputType } from "../types"

interface Props {
  focused: boolean
  disabled: boolean
}

export interface InputProps {
  type: InputType
  focused: boolean
  valueLength: number
}

export const InputField = styled.div<Props>`
  padding: 0 10px;
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid ${Colors.primary};
  border-radius: 5px;
  box-shadow: none;
  box-sizing: border-box;
  
  ${({ focused }) => focused && `box-shadow: 0 0 3px ${Colors.primary};`}
  ${({ disabled }) => disabled && `opacity: 0.65;`}
`

export const Placeholder = styled.label<Props>`
  width: auto;
  position: absolute;
  top: ${({ focused }) => (focused ? '-8px' : '12px')};
  left: 10px;
  font-size: 14px;
  line-height: 16px;
  color: ${Colors.grey};
  background-color: #fff;
  transition: all ease-in-out .3s;
  cursor: text;
  
  ${({ focused }) => focused && `
    font-size: 12px;
    line-height: 14px;
    color: ${Colors.black};
  `}

  ${({ disabled }) => disabled && `
    cursor: default;
  `}
`

export const Input = styled.input<InputProps>`
  padding: 0 0 0 0;
  width: 100%;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 14px;
  color: ${({ type, focused, valueLength }) => (type === 'date' && !valueLength && !focused ? 'transparent' : `${Colors.black}`)};
`
