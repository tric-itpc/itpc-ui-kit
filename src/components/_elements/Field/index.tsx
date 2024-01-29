import React, { HTMLAttributes } from "react"

import cn from "classnames"

import "./styles.css"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
}

export const Field: React.FC<Props> = ({ children, className, ...rest }) => (
  <div className={cn("itpc-field", className)} {...rest}>
    {children}
  </div>
)
