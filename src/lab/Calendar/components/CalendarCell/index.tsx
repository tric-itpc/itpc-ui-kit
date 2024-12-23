import React from "react"

import cn from "classnames"

import { daysOfTheWeekShort } from "../../constants"

import "./styles.css"

interface Props {
  currentDate: string
  date: string
  dayOfTheWeek?: number
  disabled?: boolean
  id: string
  isChanged: boolean
  isHeader?: boolean
  onChange?: (
    date: string,
    event: React.MouseEvent<HTMLTableDataCellElement>
  ) => void
}

export const CalendarCell: React.FC<Props> = ({
  currentDate,
  date,
  dayOfTheWeek,
  disabled,
  id,
  isChanged,
  isHeader = false,
  onChange,
}: Props) => {
  const isCurrentMonth =
    parseInt(currentDate.split("-")[1], 10) === parseInt(date.split("-")[1], 10)

  const click = (event: React.MouseEvent<HTMLTableDataCellElement>): void => {
    if (onChange && !disabled) {
      onChange(date, event)
    }
  }

  return (
    <td
      className={cn(
        "itpc-calendar__cell",
        isHeader && "itpc-calendar__cell_header",
        !isHeader && isChanged && "itpc-calendar__cell_changed",
        !isHeader && !isCurrentMonth && "itpc-calendar__cell_not_current",
        disabled && "itpc-calendar__cell_disabled"
      )}
      id={id}
      onClick={click}
      role="cell"
    >
      <p className="itpc-calendar__text">
        {isHeader && dayOfTheWeek !== undefined
          ? daysOfTheWeekShort[dayOfTheWeek]
          : new Date(date).getDate()}
      </p>
    </td>
  )
}
