import React from "react"

import cn from "classnames"

import { Theme } from "../../types"

import "./styles.css"

interface Props {
  children?: React.ReactNode
  theme?: Theme
}

export const Popover: React.FC<Props> = ({ children, theme }) => (
  <div
    className={cn(
      "itpc-popover",
      theme === Theme.DEFAULT && "itpc_default_theme",
      theme === Theme.DARK && "itpc_dark_theme"
    )}
  >
    {children}
  </div>
)
