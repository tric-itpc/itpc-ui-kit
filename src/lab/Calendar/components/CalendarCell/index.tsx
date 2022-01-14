import React from "react"

import { Text } from '../../_elements'

import { daysOfTheWeekShort } from "../../constants"

import * as Styled from './styled'

interface Props {
  date: string
  currentDate: string
  dayOfTheWeek?: number
  isHeader?: boolean
  isChanged: boolean
  onChange?: (date: string) => void
}

export const CalendarCell: React.FC<Props> = ({
  date,
  currentDate,
  dayOfTheWeek,
  isHeader = false,
  isChanged,
  onChange
}) => {
  const isCurrentMonth = parseInt(currentDate.split('-')[1], 10) === parseInt(date.split('-')[1], 10)

  return (
    <Styled.CalendarCell
      isHeader={isHeader}
      isChanged={!isHeader && isChanged}
      isCurrentMonth={isCurrentMonth}
      onClick={() => onChange && onChange(date)}
    >
      <Text>{isHeader && dayOfTheWeek !== undefined ? daysOfTheWeekShort[dayOfTheWeek] : new Date(date).getDate()}</Text>
    </Styled.CalendarCell>
  )
}
