import React from "react"

import cn from "classnames"

import { ValidationState } from "../../types"

import "./styles.css"

interface Props {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  focused?: boolean
  htmlFor?: string
  validationState?: ValidationState
}

export const Placeholder: React.FC<Props> = ({
  children,
  className,
  disabled,
  focused,
  htmlFor,
  validationState,
}) => (
  <label
    className={cn(
      "itpc-placeholder",
      className,
      disabled && "itpc-placeholder_disabled",
      focused && "itpc-placeholder_focused",
      validationState === "invalid" && "itpc-placeholder_color_red"
    )}
    htmlFor={htmlFor}
  >
    {children}
  </label>
)
