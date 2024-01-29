import React, { HTMLAttributes } from "react"

import cn from "classnames"

import "./styles.css"

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode
  className?: string
}

export const Text: React.FC<Props> = ({ children, className, ...rest }) => (
  <p className={cn("itpc-text", className)} {...rest}>
    {children}
  </p>
)
