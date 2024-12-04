import { getHorizontalPosition } from "../CalculateStyle"
import { DIVIDER_IN_TWO } from "../CalculateStyle/constants"
import {
  type GetHorizontalPositionArg,
  HORIZONTAL_POSITION,
  VERTICAL_POSITION,
} from "../CalculateStyle/types"
import { DEFAULT_WIDTH_CALENDAR } from "../Calendar/constants"
import {
  getDocumentDimensions,
  getElementDimensions,
  getParentDimensions,
} from "../getDemensions"

export const getTransformOriginByAxisXY = (
  parentRef: React.RefObject<HTMLDivElement>,
  childrenRef: React.RefObject<HTMLDivElement>
): string => {
  if (parentRef?.current && childrenRef?.current) {
    const { parentBottom, parentLeft, parentWidth } = getParentDimensions(
      parentRef.current
    )
    const calculatedTransformPosition: number =
      parentLeft + parentWidth / DIVIDER_IN_TWO

    const { documentHeight, documentWidth } = getDocumentDimensions()
    const { elementHeight, elementWidth } = getElementDimensions(
      childrenRef.current
    )

    const distanceUnderParent: number = documentHeight - parentBottom

    let verticalPosition: VERTICAL_POSITION
    if (distanceUnderParent > elementHeight + 8) {
      verticalPosition = VERTICAL_POSITION.BOTTOM
    } else {
      verticalPosition = VERTICAL_POSITION.TOP
    }

    const distanceRight: number = documentWidth - (parentLeft + parentWidth)
    const scrollbarWidth: number = window.innerWidth - documentWidth

    const argHorizontalPosition: GetHorizontalPositionArg = {
      defaultParentWidth: DEFAULT_WIDTH_CALENDAR,
      distanceRight,
      documentWidth,
      elementWidth,
      parentLeft,
      parentWidth,
      scrollbarWidth,
    }

    const horizontalPosition: HORIZONTAL_POSITION = getHorizontalPosition(
      argHorizontalPosition
    )

    const startPosition: VERTICAL_POSITION =
      verticalPosition === VERTICAL_POSITION.TOP
        ? VERTICAL_POSITION.BOTTOM
        : VERTICAL_POSITION.TOP

    switch (horizontalPosition) {
      case HORIZONTAL_POSITION.LEFT:
        return `left ${startPosition}`
      case HORIZONTAL_POSITION.RIGHT:
        return `right ${startPosition}`
      case HORIZONTAL_POSITION.CENTER:
        return `center ${startPosition}`
      case HORIZONTAL_POSITION.CALCULATED:
        return `${calculatedTransformPosition}px ${startPosition}`

      default:
        return `center ${startPosition}`
    }
  } else {
    return `center`
  }
}
