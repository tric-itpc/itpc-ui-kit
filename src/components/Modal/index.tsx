import React, { HTMLAttributes } from "react"
import cn from "classnames"

import "./styles.css"

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
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
  ...rest
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
      {...rest}
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

interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
}

export const ModalContent: React.FC<ModalContentProps> = ({
  className = "",
  children,
  ...rest
}: ModalContentProps) => (
  <div className={cn("itpc-modal__content", className)} {...rest}>
    {children}
  </div>
)

interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  className = "",
  children,
  ...rest
}: ModalFooterProps) => (
  <div className={cn("itpc-modal__footer", className)} {...rest}>
    {children}
  </div>
)
