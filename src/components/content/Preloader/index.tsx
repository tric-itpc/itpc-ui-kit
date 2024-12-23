import React, { HTMLAttributes } from "react"

import cn from "classnames"

import "./styles.css"

export interface PreloaderProps extends HTMLAttributes<HTMLSpanElement> {
  /** Дополнительный класс */
  className?: string
}

export const Preloader: React.FC<PreloaderProps> = ({
  className = "",
  ...rest
}) => (
  <span
    {...rest}
    className={cn("itpc-preloader", className)}
    role="preloader"
  />
)
