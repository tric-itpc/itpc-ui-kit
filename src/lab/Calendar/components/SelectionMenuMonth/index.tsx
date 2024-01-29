import React from "react"

import { months } from "../../constants"
import { getMonth } from "../../utils"

interface Props {
  changeCurrentDate(date: string): void
  currentDate: string
}

export const SelectionMenuMonth: React.FC<Props> = ({
  changeCurrentDate,
  currentDate,
}: Props) => {
  const onClick = (month: number): void => {
    const date = new Date(currentDate)
    date.setMonth(month)
    changeCurrentDate(`${date.getFullYear()}-${getMonth(date.getMonth() + 1)}`)
  }

  return (
    <div className="itpc-calendar__select-period">
      {months.map((month, index) => (
        <button
          className="itpc-calendar__button"
          key={month}
          onClick={() => onClick(index)}
        >
          {month}
        </button>
      ))}
    </div>
  )
}
