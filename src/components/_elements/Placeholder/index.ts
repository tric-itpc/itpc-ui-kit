import styled from "styled-components"

import { Colors } from "../../constants"
import { ValidationState } from "../../types"

interface Props {
  validationState?: ValidationState
  focused: boolean
  disabled: boolean
}

export const Placeholder = styled.label<Props>`
  padding: 0 5px;
  width: auto;
  position: absolute;
  top: calc(50% - 7px);
  left: 10px;
  font-size: 14px;
  line-height: 16px;
  color: ${Colors.grey};
  background-color: #fff;
  border-radius: 5px;
  transition: all ease-in-out .3s;
  cursor: text;
  
  ${({ focused }) => focused && `
    top: calc(-8px);
    font-size: 12px;
    line-height: 14px;
    color: ${Colors.black};
  `}

  ${({ disabled }) => disabled && `
    background-color: transparent;
    cursor: default;
  `}
  
  ${({ validationState }) => validationState === 'invalid' && `color: ${Colors.red};`}
`
