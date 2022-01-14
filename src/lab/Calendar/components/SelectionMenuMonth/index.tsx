import React from "react"

import { Button, SelectPeriod } from "../../_elements"
import { months } from "../../constants"

interface Props {
  controlHeight: number
  currentDate: string
  changeCurrentDate(date: string): void
}

export const SelectionMenuMonth: React.FC<Props> = ({
  controlHeight,
  currentDate,
  changeCurrentDate
}) => {
  const onClick = (month: number): void => {
    const date = new Date(currentDate)
    date.setMonth(month)
    changeCurrentDate(`${date.getFullYear()}-${date.getMonth() + 1}`)
  }

  return (
    <SelectPeriod controlHeight={controlHeight}>
      {months.map((month, index) => (
        <Button
          key={month}
          onClick={() => onClick(index)}
        >
          {month}
        </Button>
      ))}
    </SelectPeriod>
  )
}
