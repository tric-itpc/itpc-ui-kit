export type PositionType = "absolute" | "fixed"

export enum ALLOWED_POSITIONS {
  ABSOLUTE = "absolute",
  FIXED = "fixed",
}

export interface DocumentDimensions {
  documentHeight: number
  documentWidth: number
}

export interface ParentDimensions {
  parentBottom: number
  parentHeight: number
  parentLeft: number
  parentTop: number
  parentWidth: number
}

export interface ElementDimensions {
  elementHeight: number
  elementWidth: number
}

export enum HORIZONTAL_POSITION {
  CALCULATED = "calculated",
  CENTER = "center",
  LEFT = "left",
  RIGHT = "right",
}

export enum VERTICAL_POSITION {
  BOTTOM = "bottom",
  TOP = "top",
}

export interface GetHorizontalPositionArg {
  defaultParentWidth?: number
  distanceRight: number
  documentWidth: number
  elementWidth: number
  parentLeft: number
  parentWidth: number
  scrollbarWidth: number
}
