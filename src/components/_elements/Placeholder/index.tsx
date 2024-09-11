import React from "react"

import cn from "classnames"

import { Theme, ValidationState } from "../../types"

import "./styles.css"

interface Props {
  children?: React.ReactNode
  focused?: boolean
  htmlFor?: string
  theme?: Theme
  validationState?: ValidationState
}

export const Placeholder: React.FC<Props> = ({
  children,
  focused,
  htmlFor,
  theme,
  validationState,
}) => (
  <label
    className={cn(
      "itpc-placeholder",
      focused && "itpc-placeholder_focused",
      theme === Theme.DEFAULT && "itpc_default_theme",
      theme === Theme.DARK && "itpc_dark_theme",
      validationState === "invalid" && "itpc-placeholder_color_red"
    )}
    htmlFor={htmlFor}
  >
    {children}
  </label>
)
