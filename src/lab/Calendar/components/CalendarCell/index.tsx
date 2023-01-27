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
  disabled?: boolean;
  onChange?: (date: string) => void;
}

export const CalendarCell: React.FC<Props> = ({
  date,
  currentDate,
  dayOfTheWeek,
  isHeader = false,
  isChanged,
  disabled,
  onChange
}: Props) => {
  const isCurrentMonth = parseInt(currentDate.split("-")[1], 10) === parseInt(date.split("-")[1], 10)

  console.log('date', date)

  const click = (): void => {
    if (onChange && !disabled) {
      onChange(date)
    }
  }

  return (
    <td
      className={cn(
        'itpc-calendar__cell',
        isHeader && 'itpc-calendar__cell_header',
        (!isHeader && isChanged) && 'itpc-calendar__cell_changed',
        !isCurrentMonth && 'itpc-calendar__cell_not_current',
        disabled && 'itpc-calendar__cell_disabled'
      )}
      onClick={click}
    >
      <p className="itpc-calendar__text">
        {
          isHeader && dayOfTheWeek !== undefined
            ? daysOfTheWeekShort[dayOfTheWeek]
            : new Date(date).getDate()
        }
      </p>
    </td>
  )
}
