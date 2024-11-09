import type { CSSProperties, RefObject } from "react"

import { DEFAULT_WIDTH_CALENDAR } from "../Calendar/constants"

import { DEFAULT_DISTANCE_BETWEEN_ELEMENTS, DIVIDER_IN_TWO } from "./constants"
import {
  ALLOWED_POSITIONS,
  type ElementDimensions,
  getChildrenDimensions,
  getDocumentDimensions,
  type GetHorizontalPositionArg,
  getParentDimensions,
  HORIZONTAL_POSITION,
  type PositionType,
  VERTICAL_POSITION,
} from "./types"

export const getElementDimensions = (
  ref: HTMLUListElement | HTMLDivElement
): ElementDimensions => ({
  elementHeight: ref.offsetHeight,
  elementWidth: ref.offsetWidth,
})

export const getHorizontalPosition = (
  arg: GetHorizontalPositionArg
): HORIZONTAL_POSITION => {
  const {
    childrenWidth,
    defaultParentWidth,
    distanceRight,
    documentWidth,
    parentLeft,
    parentWidth,
    scrollbarWidth,
  } = arg

  const currentWidth = childrenWidth !== 0 ? childrenWidth : defaultParentWidth

  const rightEdgeFromCenter = parentWidth / DIVIDER_IN_TWO + distanceRight
  const leftEdgeFromCenter = parentWidth / DIVIDER_IN_TWO + parentLeft
  const calendarHalfWidth = childrenWidth / DIVIDER_IN_TWO
  const rightStartParent = distanceRight + parentWidth
  const leftEndParent = parentWidth + parentLeft

  if (currentWidth !== undefined) {
    if (rightStartParent <= childrenWidth && leftEndParent <= childrenWidth) {
      return HORIZONTAL_POSITION.CALCULATED
    }

    if (parentWidth > currentWidth) {
      return HORIZONTAL_POSITION.LEFT
    } else {
      if (documentWidth - scrollbarWidth < currentWidth) {
        return HORIZONTAL_POSITION.CALCULATED
      } else {
        if (parentWidth + distanceRight > currentWidth) {
          return HORIZONTAL_POSITION.LEFT
        }

        if (
          rightEdgeFromCenter > calendarHalfWidth &&
          leftEdgeFromCenter > calendarHalfWidth
        ) {
          return HORIZONTAL_POSITION.CENTER
        }

        if (parentWidth + parentLeft > currentWidth) {
          return HORIZONTAL_POSITION.RIGHT
        }
        return HORIZONTAL_POSITION.CALCULATED
      }
    }
  }
  return HORIZONTAL_POSITION.CALCULATED
}

export const getVerticalPosition = (
  refParent: RefObject<HTMLDivElement>,
  ref: RefObject<HTMLUListElement | HTMLDivElement>,
  distanceBetweenElements?: number
): VERTICAL_POSITION => {
  const { documentHeight } = getDocumentDimensions()
  const parent = refParent?.current
  const { parentBottom } = getParentDimensions(parent as HTMLDivElement)
  const distanceUnder: number = documentHeight - parentBottom
  const currentDistanceBetweenElements =
    distanceBetweenElements ?? DEFAULT_DISTANCE_BETWEEN_ELEMENTS
  if (
    distanceUnder >
    (ref.current?.offsetHeight ?? 0) + currentDistanceBetweenElements
  ) {
    return VERTICAL_POSITION.BOTTOM
  } else {
    return VERTICAL_POSITION.TOP
  }
}

export const getTransformOriginByAxisX = (
  refParent: RefObject<HTMLDivElement>,
  refChildren: RefObject<HTMLUListElement | HTMLDivElement>,
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
    const { childrenHeight, childrenWidth } = getChildrenDimensions(
      childrenRef.current
    )

    const distanceUnderParent: number = documentHeight - parentBottom

    let verticalPosition: VERTICAL_POSITION
    if (distanceUnderParent > childrenHeight + 8) {
      verticalPosition = VERTICAL_POSITION.BOTTOM
    } else {
      verticalPosition = VERTICAL_POSITION.TOP
    }

    const distanceRight: number = documentWidth - (parentLeft + parentWidth)
    const scrollbarWidth: number = window.innerWidth - documentWidth

    const argHorizontalPosition: GetHorizontalPositionArg = {
      childrenWidth,
      defaultParentWidth: DEFAULT_WIDTH_CALENDAR,
      distanceRight,
      documentWidth,
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

export const getCalculatePosition = (
  refParent: React.RefObject<HTMLDivElement>,
  refChildren: React.RefObject<HTMLUListElement | HTMLDivElement>,
  position: PositionType,
  distanceBetweenElements?: number
): CSSProperties => {
  if (
    position !== ALLOWED_POSITIONS.ABSOLUTE &&
    position !== ALLOWED_POSITIONS.FIXED
  ) {
    throw new Error(
      `Недопустимое значение свойства position: ${position}. Допустимые значения: absolute, fixed`
    )
  }

  if (refParent?.current && refChildren?.current) {
    const { documentHeight, documentWidth } = getDocumentDimensions()

    const { childrenHeight, childrenWidth } = getChildrenDimensions(
      refChildren.current
    )

    const { parentBottom, parentLeft, parentTop, parentWidth } =
      getParentDimensions(refParent.current)

    const scrollbarWidth: number = window.innerWidth - documentWidth

    const distanceRight: number = documentWidth - (parentLeft + parentWidth)

    const argHorizontalPosition: GetHorizontalPositionArg = {
      childrenWidth,
      distanceRight,
      documentWidth,
      parentLeft,
      parentWidth,
      scrollbarWidth,
    }

    const horizontalPosition: HORIZONTAL_POSITION = getHorizontalPosition(
      argHorizontalPosition
    )

    const distanceUnderInput: number = documentHeight - parentBottom

    const currentDistanceBetweenElements: number =
      distanceBetweenElements ?? DEFAULT_DISTANCE_BETWEEN_ELEMENTS

    let verticalPosition: VERTICAL_POSITION
    if (distanceUnderInput > childrenHeight + currentDistanceBetweenElements) {
      verticalPosition = VERTICAL_POSITION.BOTTOM
    } else {
      verticalPosition = VERTICAL_POSITION.TOP
    }

    const verticalBottomPosition: number =
      parentBottom + currentDistanceBetweenElements

    const verticalTopPosition: number =
      parentTop - currentDistanceBetweenElements - childrenHeight

    const horizontalCenterPosition: number =
      parentLeft - (childrenWidth - parentWidth) / DIVIDER_IN_TWO

    const horizontalRightPosition: number =
      documentWidth - parentLeft - parentWidth

    const horizontalCalculatedPosition: number =
      (documentWidth - childrenWidth) / DIVIDER_IN_TWO

    const currentPosition = refChildren.current.style.position

    if (currentPosition.length && String(currentPosition) !== position) {
      refChildren.current.style.position = position
    }

    if (verticalPosition === VERTICAL_POSITION.BOTTOM) {
      switch (horizontalPosition) {
        case HORIZONTAL_POSITION.LEFT:
          return {
            bottom: "auto",
            left: parentLeft,
            position,
            right: "auto",
            top: verticalBottomPosition,
          }
        case HORIZONTAL_POSITION.RIGHT:
          return {
            bottom: "auto",
            left: "auto",
            position,
            right: horizontalRightPosition,
            top: verticalBottomPosition,
          }
        case HORIZONTAL_POSITION.CENTER:
          return {
            bottom: "auto",
            left: horizontalCenterPosition,
            position,
            right: "auto",
            top: verticalBottomPosition,
          }
        case HORIZONTAL_POSITION.CALCULATED:
          return {
            bottom: "auto",
            left: horizontalCalculatedPosition,
            position,
            right: "auto",
            top: verticalBottomPosition,
          }
        default:
          return {}
      }
    }

    if (verticalPosition === VERTICAL_POSITION.TOP) {
      switch (horizontalPosition) {
        case HORIZONTAL_POSITION.LEFT:
          return {
            bottom: "auto",
            left: parentLeft,
            position,
            right: "auto",
            top: verticalTopPosition,
          }
        case HORIZONTAL_POSITION.RIGHT:
          return {
            bottom: "auto",
            left: "auto",
            position,
            right: horizontalRightPosition,
            top: verticalTopPosition,
          }
        case HORIZONTAL_POSITION.CENTER:
          return {
            bottom: "auto",
            left: horizontalCenterPosition,
            position,
            right: "auto",
            top: verticalTopPosition,
          }
        case HORIZONTAL_POSITION.CALCULATED:
          return {
            bottom: "auto",
            left: horizontalCalculatedPosition,
            position,
            right: "auto",
            top: verticalTopPosition,
          }
        default:
          return {}
      }
    }
  }

  return {}
}
