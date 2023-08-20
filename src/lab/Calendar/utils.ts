/* eslint-disable max-len */
import moment from "moment"

import { daysNumeric, monthNumerical, monthPlural, months } from "./constants"
import { Day } from "./types"

export const getMonth = (month: number): string =>
  month < 10 ? `0${month}` : month.toString()

export const dateToString = (date: string): string => {
  const parseDate = date.split("-")
  return `${parseDate[2]} ${monthPlural[parseInt(parseDate[1], 10) - 1]}`
}

export const getMonthToString = (date: string): string => {
  const parseDate = date.split("-")
  return `${months[parseInt(parseDate[1], 10) - 1]}`
}

export const getYearToString = (date: string): string => {
  const parseDate = date.split("-")
  return `${parseDate[0]}`
}

export const getMonthYearToString = (date: string): string => {
  const parseDate = date.split("-")
  return `${months[parseInt(parseDate[1], 10) - 1]} ${parseDate[0]}`
}

export const getTodayMonthYear = (): string => {
  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()
  return `${today.getFullYear()}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : today.getDate()
  }`
}

export const getAllYears = (offset: number): string[] => {
  const nowYear = new Date().getFullYear()
  const allYears: string[] = []

  for (let i = nowYear + offset; i >= nowYear - offset; i--) {
    allYears.push(`${i}`)
  }

  return allYears
}

export const getYearsFromTo = (from: number, to: number): string[] => {
  if (from > to) {
    console.warn(
      'Error in calendar years. The "from" parameter is greater than the "to" parameter'
    )
    return []
  }

  if (from === to) {
    return [`${from}`]
  }

  const allYears: string[] = []

  for (let i = from; i <= to; i++) {
    allYears.push(`${i}`)
  }

  return allYears
}

export const getCalendarDays = (date: string): Day[] => {
  const parseDate = date.split("-")
  const daysInMonth = new Date(
    parseInt(parseDate[0], 10),
    parseInt(parseDate[1], 10),
    0
  ).getDate()
  const days: Day[] = []

  for (let iterator = 1; iterator <= daysInMonth; iterator++) {
    const day = new Date(
      parseInt(parseDate[0], 10),
      parseInt(parseDate[1], 10) - 1,
      iterator
    )
    const dayObj: Day = {
      date: `${day.getFullYear()}-${monthNumerical[day.getMonth()]}-${
        daysNumeric[day.getDate() - 1]
      }`,
      dayOfTheWeek: day.getDay(),
    }

    days.push(dayObj)
  }

  if (days[0].dayOfTheWeek !== 1) {
    const previousMonth = new Date(
      parseInt(parseDate[0], 10),
      parseInt(parseDate[1], 10) - 1,
      0
    )
    const count = days[0].dayOfTheWeek === 0 ? 6 : days[0].dayOfTheWeek - 1

    for (let iterator = 0; iterator <= count - 1; iterator++) {
      const dayInPreviousMonth = new Date(
        parseInt(parseDate[0], 10),
        parseInt(parseDate[1], 10) - 2,
        previousMonth.getDate() - iterator
      )
      const dayObj: Day = {
        date: `${dayInPreviousMonth.getFullYear()}-${
          monthNumerical[dayInPreviousMonth.getMonth()]
        }-${daysNumeric[dayInPreviousMonth.getDate() - 1]}`,
        dayOfTheWeek: dayInPreviousMonth.getDay(),
      }

      days.unshift(dayObj)
    }
  }

  if (days[days.length - 1].dayOfTheWeek !== 0) {
    const count = 7 - days[days.length - 1].dayOfTheWeek

    for (let iterator = 1; iterator <= count; iterator++) {
      const dayInNextMonth = new Date(
        parseInt(parseDate[0], 10),
        parseInt(parseDate[1], 10),
        iterator
      )
      const dayObj: Day = {
        date: `${dayInNextMonth.getFullYear()}-${
          monthNumerical[dayInNextMonth.getMonth()]
        }-${daysNumeric[dayInNextMonth.getDate() - 1]}`,
        dayOfTheWeek: dayInNextMonth.getDay(),
      }

      days.push(dayObj)
    }
  }

  return days
}

export const initCurrentDate = (
  currentValue: string,
  withTime: boolean
): string => {
  if (withTime && currentValue?.includes("-") && currentValue?.includes("T")) {
    return currentValue.split("T")[0]
  }

  if (currentValue?.includes("-")) {
    return currentValue
  }

  return getTodayMonthYear()
}

export const initDays = (currentValue: string, withTime: boolean): Day[] => {
  if (withTime && currentValue?.includes("-") && currentValue?.includes("T")) {
    return getCalendarDays(currentValue.split("T")[0])
  }

  if (currentValue?.includes("-")) {
    return getCalendarDays(currentValue)
  }

  return getCalendarDays(getTodayMonthYear())
}

export const initCurrentTime = (
  currentValue: string,
  withTime: boolean
): string[] => {
  if (!withTime) {
    return ["00", "00", "00"]
  }

  if (!currentValue?.includes("T") || !currentValue?.includes(":")) {
    return ["00", "00", "00"]
  }

  return currentValue.split("T")[1].split(":")
}

// eslint-disable-next-line max-params
export const isDisabledDate = (
  date: string,
  activeDates?: string[],
  disabledDates?: string[],
  disabledAfterDate?: string,
  disabledBeforeDate?: string,
  disabledDaysOfWeek?: number[]
): boolean => {
  if (activeDates && disabledDates) {
    return false
  }

  if (activeDates && !activeDates.includes(date)) {
    return true
  }

  if (disabledDates && disabledDates.includes(date)) {
    return true
  }

  if (disabledAfterDate && moment(date).isAfter(disabledAfterDate)) {
    return true
  }

  if (disabledBeforeDate && moment(date).isBefore(disabledBeforeDate)) {
    return true
  }

  return !!(
    disabledDaysOfWeek &&
    disabledDaysOfWeek.includes(moment(date).locale("ru").weekday() + 1)
  )
}
