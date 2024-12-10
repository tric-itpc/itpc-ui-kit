import React, { CSSProperties, HTMLAttributes } from "react"

import "./styles.css"
import { generateClassList } from "./utils"

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  /** Вертикальное выравнивание */
  align?: CSSProperties["alignItems"]
  /** Контент */
  children?: React.ReactNode
  /** Дополнительный класс */
  className?: string
  /** Расстояние между элементами */
  gap?: number
  /** Горизонтальное выравнивание */
  justify?: CSSProperties["justifyContent"]
  /** Дополнительные стили */
  style?: React.CSSProperties
  /** Вертикальное расположение */
  vertical?: boolean
  /** Перенос строк */
  wrap?: CSSProperties["flexWrap"]
}

export const Flex: React.FC<FlexProps> = ({ children, style, ...props }) => (
  <div
    className={generateClassList(props)}
    style={{ gap: props.gap, ...style }}
  >
    {children}
  </div>
)
