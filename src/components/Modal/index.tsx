import React, { HTMLAttributes } from "react"

import cn from "classnames"

import "./styles.css"

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
  iconClose?: React.ReactNode
  isOpen: boolean
  isOverlayClickable?: boolean
  onClose?: () => void
  title: string
}

export const Modal: React.FC<ModalProps> = ({
  children,
  className = "",
  iconClose,
  isOpen,
  isOverlayClickable = false,
  onClose,
  title,
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
  children?: React.ReactNode
  className?: string
}

export const ModalContent: React.FC<ModalContentProps> = ({
  children,
  className = "",
  ...rest
}: ModalContentProps) => (
  <div className={cn("itpc-modal__content", className)} {...rest}>
    {children}
  </div>
)

interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className = "",
  ...rest
}: ModalFooterProps) => (
  <div className={cn("itpc-modal__footer", className)} {...rest}>
    {children}
  </div>
)
