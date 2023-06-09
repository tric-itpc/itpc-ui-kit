import React from "react"
import cn from "classnames"

import { ValidationState } from "../../types"

import "./styles.css"

interface InputWrapProps {
  focused?: boolean
  validationState: ValidationState
  height?: number
  maxHeight?: number
  children?: React.ReactNode
}

export const InputWrap: React.FC<InputWrapProps> = ({
  focused,
  validationState,
  height = 40,
  maxHeight = 200,
  children,
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
