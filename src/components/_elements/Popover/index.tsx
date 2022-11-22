import React from "react"

import './styles.css'

interface Props {
  children?: React.ReactNode
}

export const Popover: React.FC<Props> = ({ children }) => (
  <div className="itpc-popover">{children}</div>
)
