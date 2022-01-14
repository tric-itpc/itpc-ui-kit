import styled from "styled-components"

import { DefaultValues } from "../constants"

interface Props {
  isOverlayClickable: boolean
  isOpen: boolean
}

export const ModalOverlay = styled.div<Props>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${DefaultValues.zIndex};
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: all ease-in-out .3s;
  cursor: ${({ isOverlayClickable }) => (isOverlayClickable ? 'pointer' : 'default')};
  
  ${({ isOpen }) => isOpen && `
    background-color: rgba(0,0,0,.2);
    visibility: visible;
    opacity: 1;
  `}
`

export const Modal = styled.div`
  padding: 20px;
  min-width: 30%;
  max-width: 80%;
  min-height: 30%;
  max-height: 80%;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  cursor: default;
`

export const ModalHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 20px;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  overflow-y: auto;
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`
