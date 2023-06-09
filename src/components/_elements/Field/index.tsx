import React from "react"
import cn from "classnames"

import "./styles.css"

interface Props {
  className?: string
  children?: React.ReactNode
}

export const Field: React.FC<Props> = ({ className, children }) => (
  <div className={cn("itpc-field", className)}>{children}</div>
)
