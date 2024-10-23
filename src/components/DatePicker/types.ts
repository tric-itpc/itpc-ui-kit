export enum HORIZONTAL_POSITION_CALENDAR {
  CALCULATED = "calculated",
  CENTER = "center",
  LEFT = "left",
  RIGHT = "right",
}

export enum VERTICAL_POSITION_CALENDAR {
  BOTTOM = "bottom",
  TOP = "top",
}

export type PositionType = "absolute" | "fixed"

export enum ALLOWED_POSITIONS {
  ABSOLUTE = "absolute",
  FIXED = "fixed",
}

export interface InputDimensions {
  inputBottom: number
  inputHeight: number
  inputLeft: number
  inputTop: number
  inputWidth: number
}

export interface CalendarDimensions {
  calendarHeight: number
  calendarWidth: number
}

export interface DocumentDimensions {
  documentHeight: number
  documentWidth: number
}

export interface GetHorizontalPositionArg {
  calendarWidth: number
  distanceRight: number
  documentWidth: number
  inputLeft: number
  inputWidth: number
  scrollbarWidth: number
}

export interface AbsolutePositionArg {
  calendarHeight: number
  calendarWidth: number
  documentWidth: number
  inputHeight: number
  inputLeft: number
  inputWidth: number
}

export interface AbsolutePosition {
  absoluteBottomPosition: number
  absoluteCalculatedPosition: number
  absoluteCenterPosition: number
  absoluteDefault: number
  absoluteTopPosition: number
}
