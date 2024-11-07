export type PositionType = "absolute" | "fixed"

export enum ALLOWED_POSITIONS {
  ABSOLUTE = "absolute",
  FIXED = "fixed",
}

export interface ChildrenDimensions {
  childrenHeight: number
  childrenWidth: number
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

export const getDocumentDimensions = (): DocumentDimensions => ({
  documentHeight: document.documentElement.clientHeight,
  documentWidth: document.documentElement.clientWidth,
})

export const getChildrenDimensions = (
  ref: HTMLDivElement | HTMLUListElement
): ChildrenDimensions => ({
  childrenHeight: ref.offsetHeight,
  childrenWidth: ref.offsetWidth,
})

export const getParentDimensions = (ref: HTMLDivElement): ParentDimensions => {
  const rect: DOMRect = ref.getBoundingClientRect()
  return {
    parentBottom: rect.bottom,
    parentHeight: rect.height,
    parentLeft: rect.left,
    parentTop: rect.top,
    parentWidth: rect.width,
  }
}

export interface GetHorizontalPositionArg {
  childrenWidth: number
  distanceRight: number
  documentWidth: number
  parentLeft: number
  parentWidth: number
  scrollbarWidth: number
  defaultParentWidth?: number
}

export interface AbsolutePositionArg {
  childrenHeight: number
  childrenWidth: number
  documentWidth: number
  parentHeight: number
  parentLeft: number
  parentWidth: number
}

export interface AbsolutePosition {
  absoluteBottomPosition: number
  absoluteCalculatedPosition: number
  absoluteCenterPosition: number
  absoluteDefault: number
  absoluteTopPosition: number
}

export interface TransformOriginArg {
  calculatedTransformPosition: number
  horizontalPosition: HORIZONTAL_POSITION
  verticalPosition: VERTICAL_POSITION
}
