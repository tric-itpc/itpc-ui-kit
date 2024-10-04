import React from "react"

import cn from "classnames"

import { ValidationState } from "../../types"

import "./styles.css"

interface InputWrapProps {
  children?: React.ReactNode
  focused?: boolean
  height?: number
  maxHeight?: number
  validationState: ValidationState
}

export const InputWrap: React.FC<InputWrapProps> = ({
  children,
  focused,
  height = 40,
  maxHeight = 200,
  validationState,
}) => (
  <div
    className={cn(
      "itpc-input-wrap",
      focused && "itpc-input-wrap_focused",
      validationState === "invalid" && "itpc-input-wrap_error"
    )}
    style={{ height, maxHeight }}
  >
    {children}
  </div>
)
