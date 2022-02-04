import React from "react"

import { Icons } from '../_elements'

import * as Styled from './styled'

export interface ModalProps {
  title: string
  isOpen: boolean
  isOverlayClickable?: boolean
  onClose(): void
}

export const Modal: React.FC<ModalProps> = ({
  title,
  isOpen,
  isOverlayClickable = false,
  onClose,
  children
}) => {
  const onCloseOverlay = (): void => {
    if (isOverlayClickable) {
      onClose()
    }
  }

  return (
    <Styled.ModalOverlay
      isOpen={isOpen}
      isOverlayClickable={isOverlayClickable}
      onClick={onCloseOverlay}
    >
      <Styled.Modal onClick={(event) => event.stopPropagation()}>
        <Styled.ModalHeader>
          {title}
          <Icons.Close onPress={onCloseOverlay} />
        </Styled.ModalHeader>

        {children}
      </Styled.Modal>
    </Styled.ModalOverlay>
  )
}

export const ModalContent: React.FC = ({
  children
}) => (
  <Styled.ModalContent>
    {children}
  </Styled.ModalContent>
)

export const ModalFooter: React.FC = ({
  children
}) => (
  <Styled.ModalFooter>
    {children}
  </Styled.ModalFooter>
)
