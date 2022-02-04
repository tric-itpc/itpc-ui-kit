/* eslint-disable @typescript-eslint/no-magic-numbers */
export const parseISODate = (date: string): string => {
  const [year, month, day] = date.split('-')

  return `${day}.${month}.${year}`
}

export const parseISODateToNumericString = (date: string): string => {
  const [year, month, day] = date.split('-')

  return `${day}${month}${year}`
}

export const parseNumericStringToISODate = (date: string): string => {
  if (!(/^\d+$/u).test(date) || date.length !== 8) {
    return ""
  }

  const day = date.slice(0, 2)
  const month = date.slice(2, 4)
  const year = date.slice(4, 8)

  return `${year}-${month}-${day}`
}
