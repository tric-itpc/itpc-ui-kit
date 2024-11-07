import type { CSSProperties } from "react"
import { AnimationTypes } from "../../components/_elements/ListBox"
import {
  ALLOWED_POSITIONS,
  getChildrenDimensions,
  getDocumentDimensions,
  getParentDimensions,
  HORIZONTAL_POSITION,
  VERTICAL_POSITION,
  type AbsolutePosition,
  type AbsolutePositionArg,
  type GetHorizontalPositionArg,
  type PositionType,
  type TransformOriginArg,
} from "./types"
import { DISTANCE_BETWEEN_ELEMENTS, DIVIDER_IN_TWO } from "./constants"

export const getHorizontalPosition = (
  arg: GetHorizontalPositionArg
): HORIZONTAL_POSITION => {
  const {
    childrenWidth,
    distanceRight,
    documentWidth,
    parentLeft,
    parentWidth,
    scrollbarWidth,
    defaultParentWidth,
  } = arg

  const currentWidth = parentWidth !== 0 ? parentWidth : defaultParentWidth

  const rightEdgeFromCenter = parentWidth / DIVIDER_IN_TWO + distanceRight
  const leftEdgeFromCenter = parentWidth / DIVIDER_IN_TWO + parentLeft
  const calendarHalfWidth = childrenWidth / DIVIDER_IN_TWO

  if (currentWidth !== undefined && documentWidth <= currentWidth) {
    return HORIZONTAL_POSITION.CALCULATED
  }

  if (currentWidth !== undefined && parentWidth > currentWidth) {
    return HORIZONTAL_POSITION.LEFT
  } else {
    if (
      currentWidth !== undefined &&
      documentWidth - scrollbarWidth < currentWidth
    ) {
      return HORIZONTAL_POSITION.CALCULATED
    } else {
      if (
        currentWidth !== undefined &&
        parentWidth + distanceRight > currentWidth
      ) {
        return HORIZONTAL_POSITION.LEFT
      }

      if (
        rightEdgeFromCenter > calendarHalfWidth &&
        leftEdgeFromCenter > calendarHalfWidth
      ) {
        return HORIZONTAL_POSITION.CENTER
      }

      if (
        currentWidth !== undefined &&
        parentWidth + parentLeft > currentWidth
      ) {
        return HORIZONTAL_POSITION.RIGHT
      }

      return HORIZONTAL_POSITION.CALCULATED
    }
  }
}

const getTransformOrigin = (arg: TransformOriginArg): string => {
  const startPosition: VERTICAL_POSITION =
    arg.verticalPosition === VERTICAL_POSITION.TOP
      ? VERTICAL_POSITION.BOTTOM
      : VERTICAL_POSITION.TOP
  switch (arg.horizontalPosition) {
    case HORIZONTAL_POSITION.LEFT:
      return `left ${startPosition}`
    case HORIZONTAL_POSITION.RIGHT:
      return `right ${startPosition}`
    case HORIZONTAL_POSITION.CENTER:
      return `center ${startPosition}`
    case HORIZONTAL_POSITION.CALCULATED:
      return `${arg.calculatedTransformPosition}px ${startPosition}`

    default:
      return `center ${startPosition}`
  }
}

export interface TransformOriginByAxisXArg {
  verticalPosition: VERTICAL_POSITION
}

const getTransformOriginByAxisX = (
  verticalPosition: VERTICAL_POSITION
): string => {
  const startPosition: VERTICAL_POSITION =
    verticalPosition === VERTICAL_POSITION.TOP
      ? VERTICAL_POSITION.BOTTOM
      : VERTICAL_POSITION.TOP

  return `center ${startPosition}`
}

const getTransformOriginByAxisXY = (arg: TransformOriginArg): string => {
  const startPosition: VERTICAL_POSITION =
    arg.verticalPosition === VERTICAL_POSITION.TOP
      ? VERTICAL_POSITION.BOTTOM
      : VERTICAL_POSITION.TOP
  switch (arg.horizontalPosition) {
    case HORIZONTAL_POSITION.LEFT:
      return `left ${startPosition}`
    case HORIZONTAL_POSITION.RIGHT:
      return `right ${startPosition}`
    case HORIZONTAL_POSITION.CENTER:
      return `center ${startPosition}`
    case HORIZONTAL_POSITION.CALCULATED:
      return `${arg.calculatedTransformPosition}px ${startPosition}`

    default:
      return `center ${startPosition}`
  }
}

const getAbsolutePositions = (arg: AbsolutePositionArg): AbsolutePosition => {
  const {
    childrenHeight,
    childrenWidth,
    documentWidth,
    parentHeight,
    parentLeft,
    parentWidth,
  } = arg
  const absoluteDefault: number = 0
  const absoluteTopPosition: number = parentHeight + DISTANCE_BETWEEN_ELEMENTS
  const absoluteBottomPosition: number =
    -DISTANCE_BETWEEN_ELEMENTS - childrenHeight
  const absoluteCenterPosition: number =
    (parentWidth - childrenWidth) / DIVIDER_IN_TWO
  const absoluteCalculatedPosition: number =
    (documentWidth - childrenWidth) / DIVIDER_IN_TWO - parentLeft

  return {
    absoluteBottomPosition,
    absoluteCalculatedPosition,
    absoluteCenterPosition,
    absoluteDefault,
    absoluteTopPosition,
  }
}

export const getCalculatePosition = (
  parentRef: React.RefObject<HTMLDivElement>,
  childrenRef: React.RefObject<HTMLDivElement | HTMLUListElement>,
  position: PositionType,
  isAnimation: boolean,
  animationType: AnimationTypes
): CSSProperties => {
  if (
    position !== ALLOWED_POSITIONS.ABSOLUTE &&
    position !== ALLOWED_POSITIONS.FIXED
  ) {
    throw new Error(
      `Недопустимое значение свойства position: ${position}. Допустимые значения: absolute, fixed`
    )
  }

  if (parentRef?.current && childrenRef?.current) {
    const { documentHeight, documentWidth } = getDocumentDimensions()

    const { childrenHeight, childrenWidth } = getChildrenDimensions(
      childrenRef.current
    )

    const { parentBottom, parentHeight, parentLeft, parentTop, parentWidth } =
      getParentDimensions(parentRef.current)

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

    const argAbsolutePosition: AbsolutePositionArg = {
      childrenHeight,
      childrenWidth,
      documentWidth,
      parentHeight,
      parentLeft,
      parentWidth,
    }

    const {
      absoluteBottomPosition,
      absoluteCalculatedPosition,
      absoluteCenterPosition,
      absoluteDefault,
      absoluteTopPosition,
    } = getAbsolutePositions(argAbsolutePosition)

    const distanceUnderInput: number = documentHeight - parentBottom

    let verticalPosition: VERTICAL_POSITION
    if (distanceUnderInput > childrenHeight + DISTANCE_BETWEEN_ELEMENTS) {
      verticalPosition = VERTICAL_POSITION.BOTTOM
    } else {
      verticalPosition = VERTICAL_POSITION.TOP
    }

    const verticalBottomPosition: number =
      parentBottom + DISTANCE_BETWEEN_ELEMENTS

    const verticalTopPosition: number =
      parentTop - DISTANCE_BETWEEN_ELEMENTS - childrenHeight

    const horizontalCenterPosition: number =
      parentLeft - (childrenWidth - parentWidth) / DIVIDER_IN_TWO

    const horizontalRightPosition: number =
      documentWidth - parentLeft - parentWidth

    const horizontalCalculatedPosition: number =
      (documentWidth - childrenWidth) / DIVIDER_IN_TWO

    const calculatedTransformPosition: number =
      parentLeft + parentWidth / DIVIDER_IN_TWO

    const currentPosition = childrenRef.current.style.position

    let animationTransform
    if (isAnimation) {
      switch (animationType) {
        case AnimationTypes.TRANSFORM_BY_AXIS_X:
          animationTransform = getTransformOriginByAxisX(verticalPosition)
          break
        default:
          ""
          break
      }
      // if (animationType === AnimationTypes.TRANSFORM_BY_AXIS_X) {
      //   animationTransform = getTransformOriginByAxisX(verticalPosition)
      // }
      // const argTransformOrigin: TransformOriginArg = {
      //   calculatedTransformPosition,
      //   horizontalPosition,
      //   verticalPosition,
      // }

      // animationTransform = getTransformOrigin(argTransformOrigin)
    }

    console.info(animationTransform)

    if (position === ALLOWED_POSITIONS.FIXED) {
      if (
        currentPosition.length &&
        String(currentPosition) !== ALLOWED_POSITIONS.FIXED
      ) {
        childrenRef.current.style.position = position
      }

      if (verticalPosition === VERTICAL_POSITION.BOTTOM) {
        switch (horizontalPosition) {
          case HORIZONTAL_POSITION.LEFT:
            return {
              bottom: "auto",
              left: parentLeft,
              right: "auto",
              top: verticalBottomPosition,
              transformOrigin: animationTransform,
            }
          case HORIZONTAL_POSITION.RIGHT:
            return {
              bottom: "auto",
              left: "auto",
              right: horizontalRightPosition,
              top: verticalBottomPosition,
              transformOrigin: animationTransform,
            }
          case HORIZONTAL_POSITION.CENTER:
            return {
              bottom: "auto",
              left: horizontalCenterPosition,
              right: "auto",
              top: verticalBottomPosition,
              transformOrigin: animationTransform,
            }
          case HORIZONTAL_POSITION.CALCULATED:
            return {
              bottom: "auto",
              left: horizontalCalculatedPosition,
              right: "auto",
              top: verticalBottomPosition,
              transformOrigin: animationTransform,
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
              right: "auto",
              top: verticalTopPosition,
              transformOrigin: animationTransform,
            }
          case HORIZONTAL_POSITION.RIGHT:
            return {
              bottom: "auto",
              left: "auto",
              right: horizontalRightPosition,
              top: verticalTopPosition,
              transformOrigin: animationTransform,
            }
          case HORIZONTAL_POSITION.CENTER:
            return {
              bottom: "auto",
              left: horizontalCenterPosition,
              right: "auto",
              top: verticalTopPosition,
              transformOrigin: animationTransform,
            }
          case HORIZONTAL_POSITION.CALCULATED:
            return {
              bottom: "auto",
              left: horizontalCalculatedPosition,
              right: "auto",
              top: verticalTopPosition,
              transformOrigin: animationTransform,
            }
          default:
            return {}
        }
      }
    } else {
      if (String(currentPosition) !== ALLOWED_POSITIONS.ABSOLUTE) {
        childrenRef.current.style.position = position
      }
      if (verticalPosition === VERTICAL_POSITION.BOTTOM) {
        switch (horizontalPosition) {
          case HORIZONTAL_POSITION.LEFT:
            return {
              bottom: "auto",
              left: absoluteDefault,
              right: "auto",
              top: absoluteTopPosition,
              transformOrigin: animationTransform,
            }
          case HORIZONTAL_POSITION.RIGHT:
            return {
              bottom: "auto",
              left: "auto",
              right: absoluteDefault,
              top: absoluteTopPosition,
              transformOrigin: animationTransform,
            }
          case HORIZONTAL_POSITION.CENTER:
            return {
              bottom: "auto",
              left: absoluteCenterPosition,
              right: "auto",
              top: absoluteTopPosition,
              transformOrigin: animationTransform,
            }
          case HORIZONTAL_POSITION.CALCULATED:
            return {
              bottom: "auto",
              left: absoluteCalculatedPosition,
              right: "auto",
              top: absoluteTopPosition,
              transformOrigin: animationTransform,
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
              left: absoluteDefault,
              right: "auto",
              top: absoluteBottomPosition,
              transformOrigin: animationTransform,
            }
          case HORIZONTAL_POSITION.RIGHT:
            return {
              bottom: "auto",
              left: "auto",
              right: absoluteDefault,
              top: absoluteBottomPosition,
              transformOrigin: animationTransform,
            }
          case HORIZONTAL_POSITION.CENTER:
            return {
              bottom: "auto",
              left: absoluteCenterPosition,
              right: "auto",
              top: absoluteBottomPosition,
              transformOrigin: animationTransform,
            }
          case HORIZONTAL_POSITION.CALCULATED:
            return {
              bottom: "auto",
              left: absoluteCalculatedPosition,
              right: "auto",
              top: absoluteBottomPosition,
              transformOrigin: animationTransform,
            }
          default:
            return {}
        }
      }
    }
  }

  return {}
}
