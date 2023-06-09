import React from "react"
import cn from "classnames"

import { ButtonType } from "../types"

import "./styles.css"

export interface Props {
  type?: ButtonType
  disabled?: boolean
  tooltip?: string
  onPress?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  children?: React.ReactNode
}

export const ButtonRound: React.FC<Props> = ({
  type = "button",
  disabled = false,
  tooltip,
  onPress,
  className,
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
      className={cn("itpc-button-round", className)}
    >
      {children}
      {tooltip && <span className="itpc-tooltip">{tooltip}</span>}
    </button>
  )
}
