import React, { HTMLAttributes, useEffect, useRef, useState } from "react"

import cn from "classnames"

import { PopupPosition, PopupSize, PopupVariant } from "../../types"

import "./styles.css"
import { getPosition } from "./utils"

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** Контент */
  children?: React.ReactNode
  /** Дополнительный класс */
  className?: string
  /** Иконка закрытия */
  iconClose?: React.ReactNode
  /** Открыт ли попап */
  isOpen: boolean
  /** Позиция попапа */
  position?: PopupPosition
  /** Размер попапа */
  size?: PopupSize
  /** Заголовок */
  title: string
  /** Вариант попапа */
  variant?: PopupVariant
}

export const Popup: React.FC<Props> = ({
  children,
  className = "",
  iconClose,
  isOpen,
  position = "center-center",
  size = "normal",
  title,
  variant = "default",
  ...rest
}) => {
  const [height, setHeight] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHeight(ref.current?.clientHeight ?? 0)
    setWidth(ref.current?.clientWidth ?? 0)
  }, [])

  return (
    <div
      {...rest}
      className={cn(
        "itpc-popup",
        isOpen && "itpc-popup_opened",
        !isOpen && "itpc-popup_closed",
        variant === "error" && "itpc-popup_color_error",
        variant === "warning" && "itpc-popup_color_warning",
        variant === "success" && "itpc-popup_color_success",
        className
      )}
      ref={ref}
      role="popup"
      style={getPosition(position, width, height)}
    >
      <div className="itpc-popup__header">
        <p className="itpc-popup__title">{title}</p>

        {iconClose && iconClose}
      </div>

      {size === "normal" && children}
    </div>
  )
}
