import React from "react"

import "./styles.css"

interface InputWrapProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const InputIcon: React.FC<InputWrapProps> = ({ children, onClick }) => (
  <span className="itpc-input-icon" onClick={onClick}>
    {children}
  </span>
)
