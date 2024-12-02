import React, { CSSProperties, HTMLAttributes } from "react"

import { TextType, TextWeight } from "../../../../enums"
import { BaseClassListProps } from "../types"

import "./styles.css"
import { generateClassList, getTag } from "./utils"

export interface TitleProps
  extends BaseClassListProps,
    HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  onClick?: (e: React.MouseEvent<HTMLHeadingElement>) => void
  style?: CSSProperties
}

export const Title: React.FC<TitleProps> = ({
  children,
  className,
  level = 1,
  onClick,
  size,
  style,
  through = false,
  type = TextType.PRIMARY,
  underline = false,
  weight = TextWeight.BOLD,
  ...rest
}) => {
  const Tag = getTag(level)

  return (
    <Tag
      className={generateClassList({
        className,
        size,
        through,
        type,
        underline,
        weight,
      })}
      onClick={onClick}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
