import React, { HTMLAttributes } from "react"

import cn from "classnames"

import "./styles.css"

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
  className?: string
}

export const ErrorMessage: React.FC<Props> = ({
  children,
  className = "",
  ...rest
}: Props) => (
  <span className={cn("itpc-error_message", className)} {...rest}>
    {children}
  </span>
)
