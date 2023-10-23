import React, { HTMLAttributes } from "react"
import cn from "classnames"

import "./styles.css"

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
  className?: string
  children?: React.ReactNode
}

export const Text: React.FC<Props> = ({ className, children, ...rest }) => (
  <p className={cn("itpc-text", className)} {...rest}>
    {children}
  </p>
)
