import { cursor, fontWeight, tableLayout } from "./types"

/** Button */
export interface ButtonStyles {
  paddingX?: number
  paddingY?: number
  minWidth?:number
  minHeight?:number
  backgroundColor?: string
  backgroundColorHover?: string
  backgroundColorDisabled?: string
  borderColor?: string
  borderColorHover?: string
  borderColorDisabled?: string
  borderRadius?: number
  borderWidth?: number
  color?: string
  colorHover?: string
  colorDisabled?: string
  fontSize?: number
  fontWeight?: fontWeight
  cursor?: cursor
  cursorDisabled?: cursor
}

/** Table */
export interface TableStyles {
  borderColor?: string
  borderRadius?: number
  borderWidth?: number
  captionFontSize?: number
  tableLayout?: tableLayout
}

export interface TableHeaderStyles {
  backgroundColor?: string
  cursor?: cursor
}

export interface RowStyles {
  cursor?: cursor
  backgroundColorHover?: string
}

export interface ColumnStyles {
  borderColor?: string
  borderRadius?: number
  borderWidth?: number
  fontWeight?: fontWeight
  padding?: number
}

export interface CellStyles {
  borderColor?: string
  borderRadius?: number
  borderWidth?: number
  fontWeight?: fontWeight
  padding?: number
}
