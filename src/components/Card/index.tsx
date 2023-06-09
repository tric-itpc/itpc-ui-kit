import React from "react"
import cn from "classnames"

import "./styles.css"

export interface Props {
  title?: React.ReactNode
  isBordered?: boolean
  className?: string
  children?: React.ReactNode
}

export const Card: React.FC<Props> = ({
  title,
  isBordered = false,
  className,
  children,
}) => (
  <div
    className={cn("itpc-card", isBordered && "itpc-card_bordered", className)}
  >
    {title && <p className="itpc-card__title">{title}</p>}
    <div className="itpc-card__body">{children}</div>
  </div>
)
