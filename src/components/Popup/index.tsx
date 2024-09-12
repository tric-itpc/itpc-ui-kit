import React, { HTMLAttributes, useEffect, useRef, useState } from "react"

import cn from "classnames"

import { PopupPosition, PopupSize, PopupVariant, Theme } from "../types"

import "./styles.css"
import { getPosition } from "./utils"

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  className?: string
  iconClose?: React.ReactNode
  isOpen: boolean
  position?: PopupPosition
  size?: PopupSize
  theme?: Theme
  title: string
  variant?: PopupVariant
}

export const Popup: React.FC<Props> = ({
  children,
  className = "",
  iconClose,
  isOpen,
  position = "center-center",
  size = "normal",
  theme = Theme.DEFAULT,
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
      className={cn(
        "itpc-popup",
        isOpen && "itpc-popup_opened",
        theme === Theme.DEFAULT && "itpc_default_theme",
        theme === Theme.DARK && "itpc_dark_theme",
        variant === "error" && "itpc-popup_color_error",
        variant === "warning" && "itpc-popup_color_warning",
        variant === "success" && "itpc-popup_color_success",
        className
      )}
      ref={ref}
      style={getPosition(position, width, height)}
      {...rest}
    >
      <div className="itpc-popup__header">
        <p className="itpc-popup__title">{title}</p>

        {iconClose && iconClose}
      </div>

      {size === "normal" && children}
    </div>
  )
}
