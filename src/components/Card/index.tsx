import React, { HTMLAttributes } from "react"

import cn from "classnames"

import { Theme } from "../types"

import "./styles.css"

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  bodyAttr?: HTMLAttributes<HTMLDivElement>
  children?: React.ReactNode
  className?: string
  isBordered?: boolean
  theme?: Theme
  title?: React.ReactNode
  titleAttr?: HTMLAttributes<HTMLParagraphElement>
}

export const Card: React.FC<Props> = ({
  bodyAttr,
  children,
  className,
  isBordered = false,
  theme = Theme.DEFAULT,
  title,
  titleAttr,
  ...rest
}) => (
  <div
    className={cn(
      "itpc-card",
      isBordered && "itpc-card_bordered",
      theme === Theme.DEFAULT && "itpc_default_theme",
      theme === Theme.DARK && "itpc_dark_theme",
      className
    )}
    {...rest}
  >
    {title && (
      <p className="itpc-card__title" {...titleAttr}>
        {title}
      </p>
    )}

    <div className="itpc-card__body" {...bodyAttr}>
      {children}
    </div>
  </div>
)
