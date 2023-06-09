import React from "react"
import cn from "classnames"

import { ButtonType, ButtonVariant } from "../types"

import "./styles.css"

export interface Props {
  type?: ButtonType
  variant?: ButtonVariant
  disabled?: boolean
  onPress?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  children?: React.ReactNode
}

export const Button: React.FC<Props> = ({
  type = "button",
  variant,
  disabled = false,
  onPress,
  className = "",
  children,
}: Props) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (onPress) {
      onPress(event)
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "itpc-button",
        {
          "itpc-button__color_white": variant === "white",
          "itpc-button__color_red": variant === "red",
        },
        className
      )}
    >
      {children}
    </button>
  )
}
