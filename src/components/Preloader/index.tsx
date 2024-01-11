import React, { HTMLAttributes } from "react"
import cn from "classnames"

import "./styles.css"

export interface PreloaderProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string
}

export const Preloader: React.FC<PreloaderProps> = ({
  className = "",
  ...rest
}) => <span className={cn("itpc-preloader", className)} {...rest} />
