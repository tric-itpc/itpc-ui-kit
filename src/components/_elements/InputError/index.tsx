import React from "react"

import cn from "classnames"

import { Theme } from "../../types"

import "./styles.css"

interface Props {
  errorMessage: string
  show: boolean
  theme?: Theme
}

export const InputError: React.FC<Props> = ({ errorMessage, show, theme }) => (
  <span
    className={cn(
      "itpc-error",
      theme === Theme.DEFAULT && "itpc_default_theme",
      theme === Theme.DARK && "itpc_dark_theme",
      show && "itpc-error_show"
    )}
    title={errorMessage}
  >
    {errorMessage}
  </span>
)
