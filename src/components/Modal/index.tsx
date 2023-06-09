import React from "react"
import cn from "classnames"

import "./styles.css"

export interface ModalProps {
  title: string
  isOpen: boolean
  isOverlayClickable?: boolean
  className?: string
  onClose?: () => void
  iconClose?: React.ReactNode
  children?: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({
  title,
  isOpen,
  isOverlayClickable = false,
  onClose,
  className = "",
  iconClose,
  children,
}) => {
  const onCloseOverlay = (): void => {
    if (isOverlayClickable && onClose) {
      onClose()
    }
  }

  return (
    <div
      className={cn(
        "itpc-modal-overlay",
        isOpen && "itpc-modal-overlay_opened",
        isOverlayClickable && "itpc-modal-overlay_clickable",
        className
      )}
      onClick={onCloseOverlay}
    >
      <div className="itpc-modal" onClick={(event) => event.stopPropagation()}>
        <div className="itpc-modal__header">
          {title}
          {iconClose && iconClose}
        </div>

        {children}
      </div>
    </div>
  )
}

interface ModalContentProps {
  className?: string
  children?: React.ReactNode
}

export const ModalContent: React.FC<ModalContentProps> = ({
  className = "",
  children,
}: ModalContentProps) => (
  <div className={cn("itpc-modal__content", className)}>{children}</div>
)

interface ModalFooterProps {
  className?: string
  children?: React.ReactNode
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  className = "",
  children,
}: ModalFooterProps) => (
  <div className={cn("itpc-modal__footer", className)}>{children}</div>
)
