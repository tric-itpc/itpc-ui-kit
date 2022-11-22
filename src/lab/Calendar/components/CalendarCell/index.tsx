import React from "react"
import cn from 'classnames'

import { daysOfTheWeekShort } from "../../constants"

import './styles.css'

interface Props {
  date: string;
  currentDate: string;
  dayOfTheWeek?: number;
  isHeader?: boolean;
  isChanged: boolean;
  onChange?: (date: string) => void;
}

export const CalendarCell: React.FC<Props> = ({
  date,
  currentDate,
  dayOfTheWeek,
  isHeader = false,
  isChanged,
  onChange
}: Props) => {
  const isCurrentMonth = parseInt(currentDate.split("-")[1], 10) === parseInt(date.split("-")[1], 10)

  return (
    <td
      className={cn(
        'itpc-calendar__cell',
        isHeader && 'itpc-calendar__cell_header',
        (!isHeader && isChanged) && 'itpc-calendar__cell_changed',
        !isCurrentMonth && 'itpc-calendar__cell_not_current'
      )}
      onClick={() => onChange && onChange(date)}
    >
      <p className="itpc-calendar__text">
        {isHeader && dayOfTheWeek !== undefined
          ? daysOfTheWeekShort[dayOfTheWeek]
          : new Date(date).getDate()}
      </p>
    </td>
  )
}
