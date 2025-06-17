import React from "react"

import cn from "classnames"

import { ErrorPlacement } from "../../../enums"
import { ValidationState } from "../../types"

import "./styles.css"

interface Props {
  errorMessage: string
  errorPlacement?: ErrorPlacement
  show: boolean
  validationType?: ValidationState
}

export const InputError: React.FC<Props> = ({
  errorMessage,
  errorPlacement = ErrorPlacement.INSIDE,
  show,
  validationType,
}) => (
  <span
    className={cn(
      "itpc-error",
      [`itpc-error__placement_${errorPlacement.toLowerCase()}`],
      show && "itpc-error_show",
      validationType && `itpc-error_type_${validationType}`
    )}
    title={errorMessage}
  >
    {errorMessage}
  </span>
)
