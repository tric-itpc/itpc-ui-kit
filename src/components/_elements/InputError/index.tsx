import React from "react"
import cn from "classnames"

import "./styles.css"

interface Props {
  errorMessage: string
  show: boolean
}

export const InputError: React.FC<Props> = ({ errorMessage, show }) => (
  <span
    className={cn("itpc-error", show && "itpc-error_show")}
    title={errorMessage}
  >
    {errorMessage}
  </span>
)
