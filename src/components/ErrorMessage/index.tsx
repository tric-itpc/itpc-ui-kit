import React, { HTMLAttributes } from "react"

import cn from "classnames"

import { Theme } from "../types"

import "./styles.css"

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
  className?: string
  theme?: Theme
}

export const ErrorMessage: React.FC<Props> = ({
  children,
  className = "",
  theme = Theme.DEFAULT,
  ...rest
}: Props) => (
  <span
    className={cn(
      "itpc-error_message",
      theme === Theme.DEFAULT && "itpc_default_theme",
      theme === Theme.DARK && "itpc_dark_theme",
      className
    )}
    {...rest}
  >
    {children}
  </span>
)
