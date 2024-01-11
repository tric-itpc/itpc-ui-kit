import React, { HTMLAttributes } from "react"
import cn from "classnames"

import "./styles.css"

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  className?: string
  children?: React.ReactNode
}

export const ErrorMessage: React.FC<Props> = ({
  className = "",
  children,
  ...rest
}: Props) => (
  <span className={cn("itpc-error_message", className)} {...rest}>
    {children}
  </span>
)
