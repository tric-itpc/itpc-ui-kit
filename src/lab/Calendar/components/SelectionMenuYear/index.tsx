import React from "react"

import { Button, SelectPeriod } from "../../_elements"
import { getAllYears } from "../../utils"

interface Props {
  controlHeight: number
  currentDate: string
  offsetYear: number
  changeCurrentDate(date: string): void
}

export const SelectionMenuYear: React.FC<Props> = ({
  controlHeight,
  currentDate,
  offsetYear,
  changeCurrentDate
}) => {
  const onClick = (year: number): void => {
    const date = new Date(currentDate)
    date.setFullYear(year)
    changeCurrentDate(`${date.getFullYear()}-${date.getMonth() + 1}`)
  }

  return (
    <SelectPeriod controlHeight={controlHeight}>
      {getAllYears(offsetYear).reverse().
        map((year) => (
          <Button
            key={year}
            onClick={() => onClick(parseInt(year, 10))}
          >
            {year}
          </Button>
        ))}
    </SelectPeriod>
  )
}
