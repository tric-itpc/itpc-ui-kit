import React from "react"

import cn from "classnames"

import { ValidationState } from "../../types"

import "./styles.css"

interface Props {
  errorMessage: string
  show: boolean
  validationType?: ValidationState
}

export const InputError: React.FC<Props> = ({
  errorMessage,
  show,
  validationType,
}) => (
  <span
    className={cn(
      "itpc-error",
      show && "itpc-error_show",
      validationType && `itpc-error_type_${validationType}`
    )}
    title={errorMessage}
  >
    {errorMessage}
  </span>
)
