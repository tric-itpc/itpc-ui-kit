import React from "react"
import cn from "classnames"

import "./styles.css"

export interface Props {
  className?: string
  children?: React.ReactNode
}

export const Text: React.FC<Props> = ({ className, children }) => (
  <p className={cn("itpc-text", className)}>{children}</p>
)
