import type { CSSProperties } from "react"

import {
  DEFAULT_POSITION,
  DEFAULT_WIDTH_CALENDAR,
  DIVIDER_IN_TWO,
  INPUT_TO_CALENDAR_DISTANCE,
  MIN_WIDTH_CALENDAR,
  WIDTH_BODY_CALENDAR,
} from "./constants"
import {
  type AbsolutePosition,
  type AbsolutePositionArg,
  ALLOWED_POSITIONS,
  CalendarDimensions,
  DocumentDimensions,
  type GetHorizontalPositionArg,
  HORIZONTAL_POSITION_CALENDAR,
  InputDimensions,
  type PositionType,
  type TransformOriginArg,
  VERTICAL_POSITION_CALENDAR,
} from "./types"

export const parseNumericStringToISODate = (date: string): string => {
  if (!/^\d+$/u.test(date) || date.length < 8) {
    return ""
  }

  const day = date.slice(0, 2)
  const month = date.slice(2, 4)
  const year = date.slice(4, 8)

  return `${year}-${month}-${day}`
}

export const parseNumericStringToISODateTime = (date: string): string => {
  if (!/^\d+$/u.test(date) || date.length < 8) {
    return ""
  }

  const day = date.slice(0, 2)
  const month = date.slice(2, 4)
  const year = date.slice(4, 8)
  const hour = date.slice(8, 10)
  const minutes = date.slice(10, 12)
  const seconds = date.slice(12, 14)

  return `${year}-${month}-${day}T${hour}:${minutes}:${seconds}`
}

export const parseISODate = (date: string): string => {
  const [year, month, day] = date.split("-")

  return `${day}.${month}.${year}`
}

export const parseISODateTime = (datetime: string): string => {
  const [date, time] = datetime.split("T")
  const [year, month, day] = date.split("-")
  const [hours, minutes, seconds] = time.split(":")

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`
}

export const parseISODateToNumericString = (date: string): string => {
  const [year, month, day] = date.split("-")

  return `${day}${month}${year}`
}

export const parseISODateTimeToNumericString = (datetime: string): string => {
  const [date, time] = datetime.split("T")
  const [year, month, day] = date.split("-")
  const [hours, minutes, seconds] = time.split(":")

  return `${day}${month}${year}${hours}${minutes}${seconds}`
}

export const getCalendarStyle = (
  documentWidth: number,
  calendarWidth: number
): CSSProperties => {
  const freeSpace: number = documentWidth - WIDTH_BODY_CALENDAR
  const freeSpaceMinCalendar: number = documentWidth - MIN_WIDTH_CALENDAR
  if (
    documentWidth <=
    (calendarWidth !== 0 ? calendarWidth : DEFAULT_WIDTH_CALENDAR)
  ) {
    if (documentWidth > WIDTH_BODY_CALENDAR) {
      return {
        maxWidth: WIDTH_BODY_CALENDAR,
        minWidth: WIDTH_BODY_CALENDAR,
        padding: ` 16px ${freeSpace / DIVIDER_IN_TWO}px`,
      }
    } else {
      return {
        maxWidth: MIN_WIDTH_CALENDAR,
        minWidth: MIN_WIDTH_CALENDAR,
        padding: ` 16px ${freeSpaceMinCalendar / DIVIDER_IN_TWO}px`,
      }
    }
  }
  return {}
}

export const getCalendarDimensions = (
  ref: HTMLDivElement
): CalendarDimensions => ({
  calendarHeight: ref.offsetHeight,
  calendarWidth: ref.offsetWidth,
})

export const getDocumentDimensions = (): DocumentDimensions => ({
  documentHeight: document.documentElement.clientHeight,
  documentWidth: document.documentElement.clientWidth,
})

export const getInputDimensions = (ref: HTMLDivElement): InputDimensions => {
  const rect: DOMRect = ref.getBoundingClientRect()
  return {
    inputBottom: rect.bottom,
    inputHeight: rect.height,
    inputLeft: rect.left,
    inputTop: rect.top,
    inputWidth: rect.width,
  }
}

export const getHorizontalPosition = (
  arg: GetHorizontalPositionArg
): HORIZONTAL_POSITION_CALENDAR => {
  const {
    calendarWidth,
    distanceRight,
    documentWidth,
    inputLeft,
    inputWidth,
    scrollbarWidth,
  } = arg

  const currentWidthCalendar =
    calendarWidth !== 0 ? calendarWidth : DEFAULT_WIDTH_CALENDAR

  const rightEdgeFromCenter = inputWidth / DIVIDER_IN_TWO + distanceRight
  const leftEdgeFromCenter = inputWidth / DIVIDER_IN_TWO + inputLeft
  const calendarHalfWidth = DEFAULT_WIDTH_CALENDAR / DIVIDER_IN_TWO

  if (documentWidth <= currentWidthCalendar) {
    return HORIZONTAL_POSITION_CALENDAR.CALCULATED
  }

  if (inputWidth > currentWidthCalendar) {
    return HORIZONTAL_POSITION_CALENDAR.LEFT
  } else {
    if (documentWidth - scrollbarWidth < currentWidthCalendar) {
      return HORIZONTAL_POSITION_CALENDAR.CALCULATED
    } else {
      if (inputWidth + distanceRight > currentWidthCalendar) {
        return HORIZONTAL_POSITION_CALENDAR.LEFT
      }

      if (
        rightEdgeFromCenter > calendarHalfWidth &&
        leftEdgeFromCenter > calendarHalfWidth
      ) {
        return HORIZONTAL_POSITION_CALENDAR.CENTER
      }

      if (inputWidth + inputLeft > currentWidthCalendar) {
        return HORIZONTAL_POSITION_CALENDAR.RIGHT
      }

      return HORIZONTAL_POSITION_CALENDAR.CALCULATED
    }
  }
}

const getAbsolutePositions = (arg: AbsolutePositionArg): AbsolutePosition => {
  const {
    calendarHeight,
    calendarWidth,
    documentWidth,
    inputHeight,
    inputLeft,
    inputWidth,
  } = arg
  const absoluteDefault: number = 0
  const absoluteTopPosition: number = inputHeight + INPUT_TO_CALENDAR_DISTANCE
  const absoluteBottomPosition: number =
    -INPUT_TO_CALENDAR_DISTANCE - calendarHeight
  const absoluteCenterPosition: number =
    (inputWidth - calendarWidth) / DIVIDER_IN_TWO
  const absoluteCalculatedPosition: number =
    (documentWidth - calendarWidth) / DIVIDER_IN_TWO - inputLeft

  return {
    absoluteBottomPosition,
    absoluteCalculatedPosition,
    absoluteCenterPosition,
    absoluteDefault,
    absoluteTopPosition,
  }
}

const getTransformOrigin = (arg: TransformOriginArg): string => {
  const startPosition =
    arg.verticalPosition === VERTICAL_POSITION_CALENDAR.TOP ? "bottom" : "top"
  switch (arg.horizontalPosition) {
    case HORIZONTAL_POSITION_CALENDAR.LEFT:
      return `left ${startPosition}`
    case HORIZONTAL_POSITION_CALENDAR.RIGHT:
      return `right ${startPosition}`
    case HORIZONTAL_POSITION_CALENDAR.CENTER:
      return `center ${startPosition}`
    case HORIZONTAL_POSITION_CALENDAR.CALCULATED:
      return `${arg.calculatedTransformPosition}px ${startPosition}`

    default:
      return `center ${startPosition}`
  }
}

export const getCalculatePositionCalendar = (
  inputWrapRef: React.RefObject<HTMLDivElement>,
  calendarWrapRef: React.RefObject<HTMLDivElement>,
  position: PositionType
): CSSProperties => {
  if (
    position !== ALLOWED_POSITIONS.ABSOLUTE &&
    position !== ALLOWED_POSITIONS.FIXED
  ) {
    throw new Error(
      `Недопустимое значение свойства position: ${position}. Допустимые значения: absolute, fixed`
    )
  }

  if (inputWrapRef?.current && calendarWrapRef?.current) {
    const { documentHeight, documentWidth } = getDocumentDimensions()

    const { calendarHeight, calendarWidth } = getCalendarDimensions(
      calendarWrapRef.current
    )

    const { inputBottom, inputHeight, inputLeft, inputTop, inputWidth } =
      getInputDimensions(inputWrapRef.current)

    const scrollbarWidth: number = window.innerWidth - documentWidth

    const distanceRight: number = documentWidth - (inputLeft + inputWidth)

    const argHorizontalPosition: GetHorizontalPositionArg = {
      calendarWidth,
      distanceRight,
      documentWidth,
      inputLeft,
      inputWidth,
      scrollbarWidth,
    }

    const horizontalPosition: HORIZONTAL_POSITION_CALENDAR =
      getHorizontalPosition(argHorizontalPosition)

    const argAbsolutePosition: AbsolutePositionArg = {
      calendarHeight,
      calendarWidth,
      documentWidth,
      inputHeight,
      inputLeft,
      inputWidth,
    }

    const {
      absoluteBottomPosition,
      absoluteCalculatedPosition,
      absoluteCenterPosition,
      absoluteDefault,
      absoluteTopPosition,
    } = getAbsolutePositions(argAbsolutePosition)

    const distanceUnderInput: number = documentHeight - inputBottom

    let verticalPosition: VERTICAL_POSITION_CALENDAR
    if (distanceUnderInput > calendarHeight + INPUT_TO_CALENDAR_DISTANCE) {
      verticalPosition = VERTICAL_POSITION_CALENDAR.BOTTOM
    } else {
      verticalPosition = VERTICAL_POSITION_CALENDAR.TOP
    }

    const verticalBottomPosition: number =
      inputBottom + INPUT_TO_CALENDAR_DISTANCE

    const verticalTopPosition: number =
      inputTop - INPUT_TO_CALENDAR_DISTANCE - calendarHeight

    const horizontalCenterPosition: number =
      inputLeft - (calendarWidth - inputWidth) / DIVIDER_IN_TWO

    const horizontalRightPosition: number =
      documentWidth - inputLeft - inputWidth

    const horizontalCalculatedPosition: number =
      (documentWidth - calendarWidth) / DIVIDER_IN_TWO

    const calculatedTransformPosition: number =
      inputLeft + inputWidth / DIVIDER_IN_TWO

    const currentPosition = calendarWrapRef.current.style.position

    const argTransformOrigin: TransformOriginArg = {
      calculatedTransformPosition,
      horizontalPosition,
      verticalPosition,
    }

    const transformOrigin = getTransformOrigin(argTransformOrigin)

    if (position === ALLOWED_POSITIONS.FIXED) {
      if (
        currentPosition.length &&
        String(currentPosition) !== ALLOWED_POSITIONS.FIXED
      ) {
        calendarWrapRef.current.style.position = position
      }

      if (verticalPosition === VERTICAL_POSITION_CALENDAR.BOTTOM) {
        switch (horizontalPosition) {
          case HORIZONTAL_POSITION_CALENDAR.LEFT:
            return {
              bottom: "auto",
              left: inputLeft,
              right: "auto",
              top: verticalBottomPosition,
              transformOrigin,
            }
          case HORIZONTAL_POSITION_CALENDAR.RIGHT:
            return {
              bottom: "auto",
              left: "auto",
              right: horizontalRightPosition,
              top: verticalBottomPosition,
              transformOrigin,
            }
          case HORIZONTAL_POSITION_CALENDAR.CENTER:
            return {
              bottom: "auto",
              left: horizontalCenterPosition,
              right: "auto",
              top: verticalBottomPosition,
              transformOrigin,
            }
          case HORIZONTAL_POSITION_CALENDAR.CALCULATED:
            return {
              bottom: "auto",
              left: horizontalCalculatedPosition,
              right: "auto",
              top: verticalBottomPosition,
              transformOrigin,
            }
          default:
            return { ...DEFAULT_POSITION }
        }
      }

      if (verticalPosition === VERTICAL_POSITION_CALENDAR.TOP) {
        switch (horizontalPosition) {
          case HORIZONTAL_POSITION_CALENDAR.LEFT:
            return {
              bottom: "auto",
              left: inputLeft,
              right: "auto",
              top: verticalTopPosition,
              transformOrigin,
            }
          case HORIZONTAL_POSITION_CALENDAR.RIGHT:
            return {
              bottom: "auto",
              left: "auto",
              right: horizontalRightPosition,
              top: verticalTopPosition,
              transformOrigin,
            }
          case HORIZONTAL_POSITION_CALENDAR.CENTER:
            return {
              bottom: "auto",
              left: horizontalCenterPosition,
              right: "auto",
              top: verticalTopPosition,
              transformOrigin,
            }
          case HORIZONTAL_POSITION_CALENDAR.CALCULATED:
            return {
              bottom: "auto",
              left: horizontalCalculatedPosition,
              right: "auto",
              top: verticalTopPosition,
              transformOrigin,
            }
          default:
            return { ...DEFAULT_POSITION }
        }
      }
    } else {
      if (String(currentPosition) !== ALLOWED_POSITIONS.ABSOLUTE) {
        calendarWrapRef.current.style.position = position
      }
      if (verticalPosition === VERTICAL_POSITION_CALENDAR.BOTTOM) {
        switch (horizontalPosition) {
          case HORIZONTAL_POSITION_CALENDAR.LEFT:
            return {
              bottom: "auto",
              left: absoluteDefault,
              right: "auto",
              top: absoluteTopPosition,
              transformOrigin,
            }
          case HORIZONTAL_POSITION_CALENDAR.RIGHT:
            return {
              bottom: "auto",
              left: "auto",
              right: absoluteDefault,
              top: absoluteTopPosition,
              transformOrigin,
            }
          case HORIZONTAL_POSITION_CALENDAR.CENTER:
            return {
              bottom: "auto",
              left: absoluteCenterPosition,
              right: "auto",
              top: absoluteTopPosition,
              transformOrigin,
            }
          case HORIZONTAL_POSITION_CALENDAR.CALCULATED:
            return {
              bottom: "auto",
              left: absoluteCalculatedPosition,
              right: "auto",
              top: absoluteTopPosition,
              transformOrigin,
            }
          default:
            return { ...DEFAULT_POSITION }
        }
      }

      if (verticalPosition === VERTICAL_POSITION_CALENDAR.TOP) {
        switch (horizontalPosition) {
          case HORIZONTAL_POSITION_CALENDAR.LEFT:
            return {
              bottom: "auto",
              left: absoluteDefault,
              right: "auto",
              top: absoluteBottomPosition,
              transformOrigin,
            }
          case HORIZONTAL_POSITION_CALENDAR.RIGHT:
            return {
              bottom: "auto",
              left: "auto",
              right: absoluteDefault,
              top: absoluteBottomPosition,
              transformOrigin,
            }
          case HORIZONTAL_POSITION_CALENDAR.CENTER:
            return {
              bottom: "auto",
              left: absoluteCenterPosition,
              right: "auto",
              top: absoluteBottomPosition,
              transformOrigin,
            }
          case HORIZONTAL_POSITION_CALENDAR.CALCULATED:
            return {
              bottom: "auto",
              left: absoluteCalculatedPosition,
              right: "auto",
              top: absoluteBottomPosition,
              transformOrigin,
            }
          default:
            return { ...DEFAULT_POSITION }
        }
      }
    }
  }

  return { ...DEFAULT_POSITION }
}
