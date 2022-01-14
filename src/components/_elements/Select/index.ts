import styled, { css } from "styled-components"

import { itemFlagPosition } from "../../_animations"

import { Colors } from "../../constants"

interface SelectButtonProps {
  disabled: boolean
  focused: boolean
}

interface ItemFlagProps {
  isShow: boolean
}

export const SelectWrap = styled.div`
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

  &:hover {
    border-color: ${Colors.purple};
  }
`

export const SelectButton = styled.button<SelectButtonProps>`
  padding: 7px 10px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  box-shadow: none;
  box-sizing: border-box;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    border-color: ${Colors.purple};
  }

  ${({ focused }) => focused && `border-color: ${Colors.purpleLight};`}
  ${({ disabled }) => disabled && `opacity: 0.65;`}
`

export const SelectItem = styled.div`
  position: relative;
  padding: .75rem;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  cursor: pointer;
  overflow: hidden;
  
  &:first-child {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  
  &:last-child {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  
  &:hover {
    background-color: ${Colors.greyLight};
  }
`

export const SelectItemFlag = styled.span<ItemFlagProps>`
  position: absolute;
  top: 6px;
  left: -4px;
  width: 4px;
  height: 30px;
  background-color: #393185;
  border-radius: 0 3px 3px 0;
  
  ${({ isShow }) => isShow && css`animation: ${itemFlagPosition} 100ms ease-in-out 0s 1 normal forwards;`}
`
