import React from "react"

import { Day } from "../../types"

import { CalendarCell } from "../CalendarCell"

import './styles.css'
import { isDisabledDate } from "../../utils"

const getRows = (days: Day[]): Day[][] => {
  const step = 7,
    arrayDays: Day[][] = []

  let start = 0,
    end = step

  for (let iterator = 0; iterator <= (days.length / step) - 1; iterator++) {
    const arrayDay = days.slice(start, end)
    arrayDays.push(arrayDay)
    start = end
    end += step
  }

  return arrayDays
}

interface Props {
  currentDate: string;
  days: Day[];
  activeDates?: string[]
  disabledDates?: string[]
  onChange(date: string): void;
}

export const CalendarTable: React.FC<Props> = ({
  currentDate,
  days,
  activeDates,
  disabledDates,
  onChange
}: Props) => {
  const rows = getRows(days)

  return (
    <table className="itpc-calendar__table">
      <thead>
        <tr>
          {days.slice(0, 7).map((day) => (
            <CalendarCell
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
                key={day.date}
                date={day.date}
                currentDate={currentDate}
                isChanged={currentDate === day.date}
                onChange={onChange}
                disabled={isDisabledDate(day.date, activeDates, disabledDates)}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
