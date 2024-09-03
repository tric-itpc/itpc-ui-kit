import React, { AnchorHTMLAttributes, CSSProperties } from "react"

import { TextSize, TextWeight } from "../../../../enums"
import { BaseClassListProps } from "../types"

import "./styles.css"
import { generateClassList } from "./utils"

export interface LinkProps
  extends Omit<BaseClassListProps, "type">,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  style?: CSSProperties
}

export const Link: React.FC<LinkProps> = ({
  children,
  className,
  disabled = false,
  onClick,
  size = TextSize.XS,
  style,
  through = false,
  underline = true,
  weight = TextWeight.NORMAL,
  ...rest
}) => (
  <a
    className={generateClassList({
      className,
      disabled,
      size,
      through,
      underline,
      weight,
    })}
    onClick={onClick}
    style={style}
    {...rest}
  >
    {children}
  </a>
)
