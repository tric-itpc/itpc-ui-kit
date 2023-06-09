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
  id: string
  currentDate: string
  days: Day[]
  activeDates?: string[]
  disabledDates?: string[]
  disabledAfterDate?: string
  disabledBeforeDate?: string
  disabledDaysOfWeek?: number[]
  onChange(
    date: string,
    event: React.MouseEvent<HTMLTableDataCellElement>
  ): void
}

export const CalendarTable: React.FC<Props> = ({
  id,
  currentDate,
  days,
  activeDates,
  disabledDates,
  disabledAfterDate,
  disabledBeforeDate,
  disabledDaysOfWeek,
  onChange,
}: Props) => {
  const rows = getRows(days)

  return (
    <table className="itpc-calendar__table">
      <thead>
        <tr>
          {days.slice(0, 7).map((day) => (
            <CalendarCell
              id={id}
              key={day.date}
              date={day.date}
              currentDate={currentDate}
              dayOfTheWeek={day.dayOfTheWeek}
              isHeader
              isChanged={currentDate === day.date}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, key) => (
          <tr key={key}>
            {row.map((day) => (
              <CalendarCell
                id={id}
                key={day.date}
                date={day.date}
                currentDate={currentDate}
                isChanged={currentDate === day.date}
                onChange={onChange}
                disabled={isDisabledDate(
                  day.date,
                  activeDates,
                  disabledDates,
                  disabledAfterDate,
                  disabledBeforeDate,
                  disabledDaysOfWeek
                )}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
