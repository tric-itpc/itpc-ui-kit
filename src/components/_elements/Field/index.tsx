import React, { HTMLAttributes } from "react"

import cn from "classnames"

import { Theme } from "../../types"

import "./styles.css"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
  theme?: Theme
}

export const Field: React.FC<Props> = ({
  children,
  className,
  theme,
  ...rest
}) => (
  <div
    className={cn(
      "itpc-field",
      theme === Theme.DEFAULT && "itpc_default_theme",
      theme === Theme.DARK && "itpc_dark_theme",
      className
    )}
    {...rest}
  >
    {children}
  </div>
)
