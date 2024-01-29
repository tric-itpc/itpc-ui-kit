import React, { HTMLAttributes } from "react"

import cn from "classnames"

import { ButtonType } from "../types"

import "./styles.css"

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  onPress?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  tooltip?: string
  tooltipAttr?: HTMLAttributes<HTMLSpanElement>
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
      className={cn("itpc-button-round", className)}
      disabled={disabled}
      onClick={onClick}
      type={type}
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
