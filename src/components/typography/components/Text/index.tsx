import React, { CSSProperties, HTMLAttributes } from "react"

import { TextSize, TextTag, TextType } from "../../../../enums"
import { BaseClassListProps } from "../types"

import "./styles.css"
import { generateClassList, getTag } from "./utils"

export interface TextProps
  extends BaseClassListProps,
    HTMLAttributes<HTMLElement> {
  /** Контент */
  children?: React.ReactNode
  /** Обработчик клика */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  /** Дополнительные стили */
  style?: CSSProperties
  /** Тег */
  tag?: TextTag
}

export const Text: React.FC<TextProps> = ({
  children,
  className,
  onClick,
  size = TextSize.XS,
  style,
  tag = TextTag.PARAGRAPH,
  through = false,
  type = TextType.PRIMARY,
  underline = false,
  weight,
  ...rest
}) => {
  const Tag = getTag(tag)

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
