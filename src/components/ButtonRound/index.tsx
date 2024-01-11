import React, { HTMLAttributes } from "react"
import cn from "classnames"

import { ButtonType } from "../types"

import "./styles.css"

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  type?: ButtonType
  disabled?: boolean
  tooltip?: string
  onPress?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  children?: React.ReactNode
  tooltipAttr?: HTMLAttributes<HTMLSpanElement>
}

export const ButtonRound: React.FC<Props> = ({
  type = "button",
  disabled = false,
  tooltip,
  onPress,
  className,
  children,
  tooltipAttr,
  ...rest
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
      className={cn("itpc-button-round", className)}
      {...rest}
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
