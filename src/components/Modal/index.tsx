import React, { HTMLAttributes } from "react"

import cn from "classnames"

import { Theme } from "../types"

import "./styles.css"

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
  iconClose?: React.ReactNode
  isOpen: boolean
  isOverlayClickable?: boolean
  onClose?: () => void
  theme?: Theme
  title: string
}

export const Modal: React.FC<ModalProps> = ({
  children,
  className = "",
  iconClose,
  isOpen,
  isOverlayClickable = false,
  onClose,
  theme = Theme.DEFAULT,
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
        theme === Theme.DEFAULT && "itpc_default_theme",
        theme === Theme.DARK && "itpc_dark_theme",
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
  theme?: Theme
}

export const ModalContent: React.FC<ModalContentProps> = ({
  children,
  className = "",
  theme,
  ...rest
}: ModalContentProps) => (
  <div
    className={cn(
      "itpc-modal__content",
      theme === Theme.DEFAULT && "itpc_default_theme",
      theme === Theme.DARK && "itpc_dark_theme",
      className
    )}
    {...rest}
  >
    {children}
  </div>
)

interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
  theme?: Theme
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className = "",
  theme,
  ...rest
}: ModalFooterProps) => (
  <div
    className={cn(
      "itpc-modal__footer",
      theme === Theme.DEFAULT && "itpc_default_theme",
      theme === Theme.DARK && "itpc_dark_theme",
      className
    )}
    {...rest}
  >
    {children}
  </div>
)
