import type { CSSProperties } from "react"

import {
  DEFAULT_WIDTH_CALENDAR,
  DIVIDER_IN_TWO,
  INPUT_TO_CALENDAR_DISTANCE,
  MIN_WIDTH_CALENDAR,
  WIDTH_BODY_CALENDAR,
} from "./constants"
import {
  CalendarDimensions,
  DocumentDimensions,
  type GetHorizontalPositionProps,
  HORIZONTAL_POSITION_CALENDAR,
  InputDimensions,
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
): CalendarDimensions => {
  const rect: DOMRect = ref.getBoundingClientRect()
  return { calendarHeight: rect.height, calendarWidth: rect.width }
}

export const getDocumentDimensions = (): DocumentDimensions => ({
  documentHeight: document.documentElement.clientHeight,
  documentWidth: document.documentElement.clientWidth,
})

export const getInputDimensions = (ref: HTMLDivElement): InputDimensions => {
  const rect: DOMRect = ref.getBoundingClientRect()
  return {
    inputBottom: rect.bottom,
    inputLeft: rect.left,
    inputTop: rect.top,
    inputWidth: rect.width,
  }
}

export const getHorizontalPosition = (
  props: GetHorizontalPositionProps
): HORIZONTAL_POSITION_CALENDAR => {
  const {
    calendarWidth,
    distanceRight,
    documentWidth,
    inputLeft,
    inputWidth,
    scrollbarWidth,
  } = props

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
        (rightEdgeFromCenter > calendarHalfWidth &&
          leftEdgeFromCenter > calendarHalfWidth) ||
        rightEdgeFromCenter > calendarHalfWidth
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

export const getCalculatePositionCalendar = (
  inputWrapRef: React.RefObject<HTMLDivElement>,
  calendarWrapRef: React.RefObject<HTMLDivElement>
): CSSProperties => {
  if (inputWrapRef?.current && calendarWrapRef?.current) {
    const { documentHeight, documentWidth } = getDocumentDimensions()

    const { calendarHeight, calendarWidth } = getCalendarDimensions(
      calendarWrapRef.current
    )

    const { inputBottom, inputLeft, inputTop, inputWidth } = getInputDimensions(
      inputWrapRef.current
    )

    const scrollbarWidth: number = window.innerWidth - documentWidth

    const distanceRight: number = documentWidth - (inputLeft + inputWidth)
    const distanceUnderInput: number = documentHeight - inputBottom

    const props: GetHorizontalPositionProps = {
      calendarWidth,
      distanceRight,
      documentWidth,
      inputLeft,
      inputWidth,
      scrollbarWidth,
    }

    const horizontalPosition: HORIZONTAL_POSITION_CALENDAR =
      getHorizontalPosition(props)

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

    if (verticalPosition === VERTICAL_POSITION_CALENDAR.BOTTOM) {
      if (horizontalPosition === HORIZONTAL_POSITION_CALENDAR.LEFT) {
        return {
          bottom: "auto",
          left: inputLeft,
          right: "auto",
          top: verticalBottomPosition,
        }
      }
      if (horizontalPosition === HORIZONTAL_POSITION_CALENDAR.RIGHT) {
        return {
          bottom: "auto",
          left: "auto",
          right: horizontalRightPosition,
          top: verticalBottomPosition,
        }
      }
      if (horizontalPosition === HORIZONTAL_POSITION_CALENDAR.CENTER) {
        return {
          bottom: "auto",
          left: horizontalCenterPosition,
          right: "auto",
          top: verticalBottomPosition,
        }
      }
      if (horizontalPosition === HORIZONTAL_POSITION_CALENDAR.CALCULATED) {
        return {
          bottom: "auto",
          left: horizontalCalculatedPosition,
          right: "auto",
          top: verticalBottomPosition,
        }
      }
    }

    if (verticalPosition === VERTICAL_POSITION_CALENDAR.TOP) {
      if (horizontalPosition === HORIZONTAL_POSITION_CALENDAR.LEFT) {
        return {
          bottom: "auto",
          left: inputLeft,
          right: "auto",
          top: verticalTopPosition,
        }
      }
      if (horizontalPosition === HORIZONTAL_POSITION_CALENDAR.RIGHT) {
        return {
          bottom: "auto",
          left: "auto",
          right: horizontalRightPosition,
          top: verticalTopPosition,
        }
      }
      if (horizontalPosition === HORIZONTAL_POSITION_CALENDAR.CENTER) {
        return {
          bottom: "auto",
          left: horizontalCenterPosition,
          right: "auto",
          top: verticalTopPosition,
        }
      }
      if (horizontalPosition === HORIZONTAL_POSITION_CALENDAR.CALCULATED) {
        return {
          bottom: "auto",
          left: horizontalCalculatedPosition,
          right: "auto",
          top: verticalTopPosition,
        }
      }
    }
  }
  return {}
}
