import React, { HTMLAttributes } from "react"

import cn from "classnames"

import "./styles.css"

export interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Атрибуты тела карточки */
  bodyAttr?: HTMLAttributes<HTMLDivElement>
  /** Контент */
  children?: React.ReactNode
  /** Дополнительный класс */
  className?: string
  /** Флаг наличия рамки */
  isBordered?: boolean
  /** Заголовок карточки */
  title?: React.ReactNode
  /** Атрибуты заголовка карточки */
  titleAttr?: HTMLAttributes<HTMLParagraphElement>
}

export const Card: React.FC<Props> = ({
  bodyAttr,
  children,
  className,
  isBordered = false,
  title,
  titleAttr,
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
