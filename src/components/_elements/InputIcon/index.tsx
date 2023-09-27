import React from "react"

import "./styles.css"

interface InputWrapProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children: React.ReactNode
}

export const InputIcon: React.FC<InputWrapProps> = ({ onClick, children }) => (
  <span className="itpc-input-icon" onClick={onClick}>
    {children}
  </span>
)
