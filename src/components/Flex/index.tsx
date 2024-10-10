import React, { CSSProperties, HTMLAttributes } from "react"

import "./styles.css"
import { generateClassList } from "./utils"

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  align?: CSSProperties["alignItems"]
  children?: React.ReactNode
  className?: string
  gap?: number
  justify?: CSSProperties["justifyContent"]
  style?: React.CSSProperties
  vertical?: boolean
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
