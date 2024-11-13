import React from "react"

import cn from "classnames"

import { generateBaseClassList } from "../utils"

import { ClassListProps } from "./types"

export const getTag = (
  level: number
): keyof Pick<
  React.JSX.IntrinsicElements,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
> => {
  switch (level) {
    case 1:
      return "h1"
    case 2:
      return "h2"
    case 3:
      return "h3"
    case 4:
      return "h4"
    case 5:
      return "h5"
    case 6:
      return "h6"

    default:
      return "h1"
  }
}

export const generateClassList = (props: ClassListProps): string =>
  cn("itpc-title", generateBaseClassList(props))
