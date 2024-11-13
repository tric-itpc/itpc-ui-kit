import type { CSSProperties } from "react"

import { DIVIDER_IN_TWO } from "../../../lab/CalculateStyle/constants"
import {
  DEFAULT_WIDTH_CALENDAR,
  MIN_WIDTH_CALENDAR,
  WIDTH_BODY_CALENDAR,
} from "../../../lab/Calendar/constants"

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
