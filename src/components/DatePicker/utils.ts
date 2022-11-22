export const parseNumericStringToISODate = (date: string): string => {
  if (!(/^\d+$/u).test(date) || date.length < 8) {
    return ""
  }

  const day = date.slice(0, 2)
  const month = date.slice(2, 4)
  const year = date.slice(4, 8)

  return `${year}-${month}-${day}`
}

export const parseNumericStringToISODateTime = (date: string): string => {
  if (!(/^\d+$/u).test(date) || date.length < 8) {
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
