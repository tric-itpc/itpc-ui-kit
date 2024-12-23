import React from "react"

import "./styles.css"

interface InputWrapProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const InputIcon: React.FC<InputWrapProps> = ({
  children,
  onClick,
  ...rest
}) => (
  <span className="itpc-input-icon" onClick={onClick} {...rest}>
    {children}
  </span>
)
