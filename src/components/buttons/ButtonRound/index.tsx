import React, { HTMLAttributes } from "react"

import cn from "classnames"

import { ButtonType } from "../../types"

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
  /** Подсказка */
  tooltip?: string
  /** Атрибуты подсказки */
  tooltipAttr?: HTMLAttributes<HTMLSpanElement> & { "data-testid"?: string }
  /** Тип кнопки */
  type?: ButtonType
}

export const ButtonRound: React.FC<Props> = ({
  children,
  className,
  disabled = false,
  onPress,
  tooltip,
  tooltipAttr,
  type = "button",
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
      className={cn("itpc-button-round", className)}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}

      {tooltip && (
        <span className="itpc-tooltip" {...tooltipAttr}>
          {tooltip}
        </span>
      )}
    </button>
  )
}
