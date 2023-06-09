import React from "react"
import cn from "classnames"

import { ValidationState } from "../../types"

import "./styles.css"

interface Props {
  htmlFor?: string
  focused?: boolean
  validationState?: ValidationState
  children?: React.ReactNode
}

export const Placeholder: React.FC<Props> = ({
  htmlFor,
  focused,
  validationState,
  children,
}) => (
  <label
    htmlFor={htmlFor}
    className={cn(
      "itpc-placeholder",
      focused && "itpc-placeholder_focused",
      validationState === "invalid" && "itpc-placeholder_color_red"
    )}
  >
    {children}
  </label>
)
