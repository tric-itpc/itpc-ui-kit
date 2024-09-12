import React, { HTMLAttributes } from "react"

import cn from "classnames"

import { Theme } from "../types"

import "./styles.css"

export interface PreloaderProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string
  theme?: Theme
}

export const Preloader: React.FC<PreloaderProps> = ({
  className = "",
  theme = Theme.DEFAULT,
  ...rest
}) => (
  <span
    className={cn(
      "itpc-preloader",
      theme === Theme.DEFAULT && "itpc_default_theme",
      theme === Theme.DARK && "itpc_dark_theme",
      className
    )}
    {...rest}
  />
)
