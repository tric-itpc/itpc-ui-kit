import React from "react"

import cn from "classnames"

import "./styles.css"

interface Props {
  children?: React.ReactNode
  isOpen: boolean
}

export const List: React.FC<Props> = ({ children, isOpen }) => (
  <ul
    className={cn(
      "itpc-list",
      isOpen && "itpc-list__opened",
      !isOpen && "itpc-list__closed"
    )}
  >
    {children}
  </ul>
)
