import type { RefObject } from "react"

import { getVerticalPosition } from "../CalculateStyle"
import { VERTICAL_POSITION } from "../CalculateStyle/types"

export const getTransformOriginByAxisX = (
  refParent: RefObject<HTMLDivElement>,
  refChildren: RefObject<HTMLDivElement | HTMLUListElement>,
  distanceBetweenElements?: number
): string => {
  const verticalPosition: VERTICAL_POSITION = getVerticalPosition(
    refParent,
    refChildren,
    distanceBetweenElements
  )

  const startPosition: VERTICAL_POSITION =
    verticalPosition === VERTICAL_POSITION.TOP
      ? VERTICAL_POSITION.BOTTOM
      : VERTICAL_POSITION.TOP

  return `center ${startPosition}`
}
