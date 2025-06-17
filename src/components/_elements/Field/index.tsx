import React, { HTMLAttributes } from "react"

import cn from "classnames"

import { ErrorPlacement } from "../../../enums"

import "./styles.css"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
  errorPlacement?: ErrorPlacement
}

export const Field: React.FC<Props> = ({
  children,
  className,
  errorPlacement = ErrorPlacement.INSIDE,
  ...rest
}) => (
  <div
    {...rest}
    className={cn(
      "itpc-field",
      errorPlacement === ErrorPlacement.BOTTOM &&
        "itpc-field__error-placement_bottom",
      className
    )}
  >
    {children}
  </div>
)
