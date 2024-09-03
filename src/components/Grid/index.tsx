import React, { HTMLAttributes } from "react"

import { RowAlign, RowJustify } from "../../enums"

import { RowContext, RowContextState } from "./RowContext"
import "./styles.css"
import {
  generateColClassList,
  generateColStyle,
  generateRowClassList,
  generateRowStyle,
} from "./utils"

export interface ColProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  col?: number
  flex?: string | number
  order?: number
  style?: React.CSSProperties
}

export const Col: React.FC<ColProps> = ({ children, ...props }) => {
  const { gap } = React.useContext(RowContext)

  return (
    <div
      className={generateColClassList(props)}
      style={generateColStyle(props, gap)}
    >
      {children}
    </div>
  )
}

export interface RowProps extends HTMLAttributes<HTMLDivElement> {
  align?: RowAlign
  className?: string
  gap?: [number, number] | number
  justify?: RowJustify
  style?: React.CSSProperties
  wrap?: boolean
}

export const Row: React.FC<RowProps> = ({
  children,
  wrap = true,
  ...props
}) => {
  const rowContext = React.useMemo<RowContextState>(
    () => ({ gap: props.gap }),
    [props.gap]
  )

  return (
    <RowContext.Provider value={rowContext}>
      <div
        className={generateRowClassList({ wrap, ...props })}
        style={generateRowStyle(props)}
      >
        {children}
      </div>
    </RowContext.Provider>
  )
}

export { RowAlign, RowJustify }
