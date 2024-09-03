import React from "react"

import cn from "classnames"

import "./styles.css"

interface Props {
  children?: React.ReactNode
}

export const Popover: React.FC<Props> = ({ children }) => (
  <div className={cn("itpc-popover")}>{children}</div>
)
