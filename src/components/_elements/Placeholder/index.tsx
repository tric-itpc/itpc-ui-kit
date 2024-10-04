import React from "react"

import cn from "classnames"

import { ValidationState } from "../../types"

import "./styles.css"

interface Props {
  children?: React.ReactNode
  focused?: boolean
  htmlFor?: string
  validationState?: ValidationState
}

export const Placeholder: React.FC<Props> = ({
  children,
  focused,
  htmlFor,
  validationState,
}) => (
  <label
    className={cn(
      "itpc-placeholder",
      focused && "itpc-placeholder_focused",
      validationState === "invalid" && "itpc-placeholder_color_red"
    )}
    htmlFor={htmlFor}
  >
    {children}
  </label>
)
