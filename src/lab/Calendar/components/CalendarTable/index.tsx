import React from "react"

import { Day } from "../../types"

import { CalendarCell } from "../CalendarCell"

import * as Styled from './styled'

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
  currentValue: string
  currentDate: string
  days: Day[]
  onChange(date: string): void
}

export const CalendarTable: React.FC<Props> = ({
  currentValue,
  currentDate,
  days,
  onChange
}) => {
  const rows = getRows(days)

  return (
    <Styled.CalendarTable>
      <Styled.CalendarTableHead>
        <Styled.CalendarTableRow>
          {days.slice(0, 7).map((day) => (
            <CalendarCell
              key={day.date}
              date={day.date}
              currentDate={currentDate}
              dayOfTheWeek={day.dayOfTheWeek}
              isHeader
              isChanged={currentValue === day.date}
            />
          ))}
        </Styled.CalendarTableRow>
      </Styled.CalendarTableHead>
      <Styled.CalendarTableBody>
        {rows.map((row, key) => (
          <Styled.CalendarTableRow key={key}>
            {row.map((day) => (
              <CalendarCell
                key={day.date}
                date={day.date}
                currentDate={currentDate}
                isChanged={currentValue === day.date}
                onChange={onChange}
              />
            ))}
          </Styled.CalendarTableRow>
        ))}
      </Styled.CalendarTableBody>
    </Styled.CalendarTable>
  )
}
