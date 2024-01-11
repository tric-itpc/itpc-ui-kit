import React, { HTMLAttributes } from "react"
import cn from "classnames"

import "./styles.css"

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: React.ReactNode
}

export const Field: React.FC<Props> = ({ className, children, ...rest }) => (
  <div className={cn("itpc-field", className)} {...rest}>
    {children}
  </div>
)
