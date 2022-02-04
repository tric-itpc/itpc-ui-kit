import { daysNumeric, monthNumerical, monthPlural, months } from './constants'
import { Day } from './types'

export function dateToString(date: string): string {
  const parseDate = date.split('-')
  return `${parseDate[2]} ${monthPlural[parseInt(parseDate[1], 10) - 1]}`
}

export function getMonthToString(date: string): string {
  const parseDate = date.split('-')
  return `${months[parseInt(parseDate[1], 10) - 1]}`
}

export function getYearToString(date: string): string {
  const parseDate = date.split('-')
  return `${parseDate[0]}`
}

export function getMonthYearToString(date: string): string {
  const parseDate = date.split('-')
  return `${months[parseInt(parseDate[1], 10) - 1]} ${parseDate[0]}`
}

export function getTodayMonthYear(): string {
  const today = new Date()
  return `${today.getFullYear()}-${today.getMonth() + 1}`
}

export function getAllYears(offset: number): string[] {
  const nowYear = new Date().getFullYear()

  const allYears: string[] = []

  for (let iterator = nowYear - offset; iterator <= nowYear + offset; iterator++) {
    allYears.push(`${iterator}`)
  }

  return allYears
}

export function getCalendarDays(date: string): Day[] {
  const parseDate = date.split('-'),
    daysInMonth = new Date(parseInt(parseDate[0], 10), parseInt(parseDate[1], 10), 0).getDate(),
    days: Day[] = []
  for (let iterator = 1; iterator <= daysInMonth; iterator++) {
    const day = new Date(parseInt(parseDate[0], 10), parseInt(parseDate[1], 10) - 1, iterator),
      dayObj: Day = {
        date: `${day.getFullYear()}-${monthNumerical[day.getMonth()]}-${daysNumeric[day.getDate() - 1]}`,
        dayOfTheWeek: day.getDay()
      }

    days.push(dayObj)
  }
  if (days[0].dayOfTheWeek !== 1) {
    const previousMonth = new Date(parseInt(parseDate[0], 10), parseInt(parseDate[1], 10) - 1, 0),
      count = days[0].dayOfTheWeek === 0 ? 6 : days[0].dayOfTheWeek - 1
    for (let iterator = 0; iterator <= count - 1; iterator++) {
      const dayInPreviousMonth = new Date(
          parseInt(parseDate[0], 10),
          parseInt(parseDate[1], 10) - 2,
          previousMonth.getDate() - iterator
        ),
        dayObj: Day = {
          date: `${dayInPreviousMonth.getFullYear()}-${monthNumerical[dayInPreviousMonth.getMonth()]}-${daysNumeric[dayInPreviousMonth.getDate() - 1]}`,
          dayOfTheWeek: dayInPreviousMonth.getDay()
        }

      days.unshift(dayObj)
    }
  }
  if (days[days.length - 1].dayOfTheWeek !== 0) {
    const count = 7 - days[days.length - 1].dayOfTheWeek
    for (let iterator = 1; iterator <= count; iterator++) {
      const dayInNextMonth = new Date(parseInt(parseDate[0], 10), parseInt(parseDate[1], 10), iterator),
        dayObj: Day = {
          date: `${dayInNextMonth.getFullYear()}-${monthNumerical[dayInNextMonth.getMonth()]}-${daysNumeric[dayInNextMonth.getDate() - 1]}`,
          dayOfTheWeek: dayInNextMonth.getDay()
        }

      days.push(dayObj)
    }
  }
  return days
}
