import React, { HTMLAttributes } from "react"

import cn from "classnames"

import { Theme } from "../types"

import "./styles.css"

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode
  className?: string
  theme?: Theme
}

export const Text: React.FC<Props> = ({
  children,
  className,
  theme = Theme.DEFAULT,
  ...rest
}) => (
  <p
    className={cn(
      "itpc-text",
      theme === Theme.DEFAULT && "itpc_default_theme",
      theme === Theme.DARK && "itpc_dark_theme",
      className
    )}
    {...rest}
  >
    {children}
  </p>
)
