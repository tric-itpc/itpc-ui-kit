import React, { HTMLAttributes } from "react"

import cn from "classnames"

import { ButtonType, ButtonVariant } from "../types"

import "./styles.css"

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  onPress?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  type?: ButtonType
  variant?: ButtonVariant
}

export const Button: React.FC<Props> = ({
  children,
  className = "",
  disabled = false,
  onPress,
  type = "button",
  variant,
  ...rest
}: Props) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (onPress) {
      onPress(event)
    }
  }

  return (
    <button
      className={cn(
        "itpc-button",
        {
          "itpc-button__color_red": variant === "red",
          "itpc-button__color_white": variant === "white",
        },
        className
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}
