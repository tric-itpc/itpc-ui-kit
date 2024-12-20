import React from "react"

import cn from "classnames"

import { ValidationState } from "../../types"

import "./styles.css"

interface InputWrapProps {
  children?: React.ReactNode
  disabled?: boolean
  fixedHeight?: number
  focused?: boolean
  height?: number
  maxHeight?: number
  validationState: ValidationState
}

export const InputWrap: React.FC<InputWrapProps> = ({
  children,
  disabled,
  fixedHeight,
  focused,
  height = 40,
  maxHeight = 200,
  validationState,
}) => (
  <div
    className={cn(
      "itpc-input-wrap",
      focused && "itpc-input-wrap_focused",
      disabled && "itpc-input-wrap_disabled",
      !disabled && "itpc-input-wrap_hover",
      validationState === "invalid" && "itpc-input-wrap_error"
    )}
    style={{ height, maxHeight: fixedHeight ? fixedHeight : maxHeight }}
  >
    {children}
  </div>
)
