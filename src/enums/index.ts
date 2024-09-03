export enum UIKitColors {
  black = "#000",
  green = "#4DB04D",
  grey = "#B2B7C7",
  greyLight = "#E5E5E5",
  purple = "#5C53AC",
  purpleLight = "#6F65CB",
  red = "#D42564",
  redDark = "#C9184A",
  white = "#FFF",
  yellow = "#DCB21E",
}

export const dotRegExp = /[,юб/]/gi
export const numberAndOnlyPointRegExp = /^\d*\.?\d*$/u

export enum Theme {
  DARK = "dark",
  DEFAULT = "default",
}

export enum SortType {
  ASCENDING = "ascending",
  DESCENDING = "descending",
  NONE = "none",
}

export enum NumberColumns {
  ONE = "one",
  TWO = "two",
  ZERO = "zero",
}

export enum RowAlign {
  BOTTOM = "bottom",
  MIDDLE = "middle",
  TOP = "top",
}

export enum RowJustify {
  CENTER = "center",
  END = "end",
  SPACE_AROUND = "around",
  SPACE_BETWEEN = "between",
  SPACE_EVENLY = "evenly",
  START = "start",
}
