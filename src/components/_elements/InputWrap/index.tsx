import React from "react"

import cn from "classnames"

import { Theme, ValidationState } from "../../types"

import "./styles.css"

interface InputWrapProps {
  children?: React.ReactNode
  focused?: boolean
  height?: number
  maxHeight?: number
  theme?: Theme
  validationState: ValidationState
}

export const InputWrap: React.FC<InputWrapProps> = ({
  children,
  focused,
  height = 40,
  maxHeight = 200,
  theme,
  validationState,
}) => (
  <div
    className={cn(
      "itpc-input-wrap",
      focused && "itpc-input-wrap_focused",
      theme === Theme.DEFAULT && "itpc_default_theme",
      theme === Theme.DARK && "itpc_dark_theme",
      validationState === "invalid" && "itpc-input-wrap_error"
    )}
    style={{ height, maxHeight }}
  >
    {children}
  </div>
)
