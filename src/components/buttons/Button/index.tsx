import React, { HTMLAttributes } from "react"

import cn from "classnames"

import { ButtonType, ButtonVariant } from "../../types"

import "./styles.css"

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Контент */
  children?: React.ReactNode
  /** Дополнительный класс */
  className?: string
  /** Отключение кнопки */
  disabled?: boolean
  /** Обработчик клика */
  onPress?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  /** Тип кнопки */
  type?: ButtonType
  /** Вариант кнопки */
  variant?: ButtonVariant
}

export const Button: React.FC<Props> = ({
  children,
  className = "",
  disabled = false,
  onPress,
  type = "button",
  variant = "primary",
  ...rest
}: Props) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if (onPress) {
      onPress(event)
    }
  }

  return (
    <button
      {...rest}
      className={cn("itpc-button", `itpc-button__color_${variant}`, className)}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
