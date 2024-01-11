import React, { HTMLAttributes } from "react"
import cn from "classnames"

import "./styles.css"

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode
  isBordered?: boolean
  className?: string
  children?: React.ReactNode
  titleAttr?: HTMLAttributes<HTMLParagraphElement>
  bodyAttr?: HTMLAttributes<HTMLDivElement>
}

export const Card: React.FC<Props> = ({
  title,
  isBordered = false,
  className,
  children,
  titleAttr,
  bodyAttr,
  ...rest
}) => (
  <div
    className={cn("itpc-card", isBordered && "itpc-card_bordered", className)}
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
