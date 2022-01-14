import styled from "styled-components"

import { PopupPosition, PopupSize } from "../types"
import { Colors, DefaultValues } from "../constants"

interface Props {
  width: number
  height: number
  isOpen: boolean
  position: PopupPosition
  size: PopupSize
  color: Colors
}

interface PopupHeaderProps {
  size: PopupSize
}

export const Popup = styled.div<Props>`
  padding: 20px;
  position: fixed;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: ${Colors.white};
  border-radius: 5px;
  border: 1px solid ${({ color }) => color};
  font-size: ${DefaultValues.fontSizeM}px;
  color: ${({ color }) => (color === Colors.grey ? Colors.black : color)};
  visibility: hidden;
  opacity: 0;
  transition: all ease-in-out .3s;

  ${({ isOpen }) => isOpen && `
    visibility: visible;
    opacity: 1;
  `}
  
  ${({ position, width, height }) => `
    ${position === 'top-left' && `
      top: 1rem;
      left: 1rem;
    `};
    ${position === 'top-center' && `
      top: 1rem;
      left: calc(50% - ${width / 2}px);
    `};
    ${position === 'top-right' && `
      top: 1rem;
      right: 1rem;
    `};
    
    ${position === 'center-left' && `
      top: calc(50% - ${height / 2}px);
      left: 1rem;
    `};
    ${position === 'center-center' && `
      top: calc(50% - ${height / 2}px);
      left: calc(50% - ${width / 2}px);
    `};
    ${position === 'center-right' && `
      top: calc(50% - ${height / 2}px);
      right: 1rem;
    `};
    
    ${position === 'bottom-left' && `
      left: 1rem;
      bottom: 1rem;
    `};
    ${position === 'bottom-center' && `
      left: calc(50% - ${width / 2}px);
      bottom: 1rem;
    `};
    ${position === 'bottom-right' && `
      right: 1rem;
      bottom: 1rem;
    `};
  `}
`

export const PopupHeader = styled.div<PopupHeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: ${({ size }) => (size === 'normal' ? '20px' : '14px')};
`
