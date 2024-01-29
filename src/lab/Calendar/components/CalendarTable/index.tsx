import React from "react"

import { Day } from "../../types"
import { isDisabledDate } from "../../utils"
import { CalendarCell } from "../CalendarCell"

import "./styles.css"

const getRows = (days: Day[]): Day[][] => {
  const step = 7
  const arrayDays: Day[][] = []

  let start = 0
  let end = step

  for (let iterator = 0; iterator <= days.length / step - 1; iterator++) {
    const arrayDay = days.slice(start, end)
    arrayDays.push(arrayDay)
    start = end
    end += step
  }

  return arrayDays
}

interface Props {
  activeDates?: string[]
  currentDate: string
  days: Day[]
  disabledAfterDate?: string
  disabledBeforeDate?: string
  disabledDates?: string[]
  disabledDaysOfWeek?: number[]
  id: string
  onChange(
    date: string,
    event: React.MouseEvent<HTMLTableDataCellElement>
  ): void
}

export const CalendarTable: React.FC<Props> = ({
  activeDates,
  currentDate,
  days,
  disabledAfterDate,
  disabledBeforeDate,
  disabledDates,
  disabledDaysOfWeek,
  id,
  onChange,
}: Props) => {
  const rows = getRows(days)

  return (
    <table className="itpc-calendar__table">
      <thead>
        <tr>
          {days.slice(0, 7).map((day) => (
            <CalendarCell
              currentDate={currentDate}
              date={day.date}
              dayOfTheWeek={day.dayOfTheWeek}
              id={id}
              isChanged={currentDate === day.date}
              key={day.date}
              isHeader
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, key) => (
          <tr key={key}>
            {row.map((day) => (
              <CalendarCell
                disabled={isDisabledDate(
                  day.date,
                  activeDates,
                  disabledDates,
                  disabledAfterDate,
                  disabledBeforeDate,
                  disabledDaysOfWeek
                )}
                currentDate={currentDate}
                date={day.date}
                id={id}
                isChanged={currentDate === day.date}
                key={day.date}
                onChange={onChange}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
