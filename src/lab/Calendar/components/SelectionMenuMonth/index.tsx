import React from "react"

import { months } from "../../constants"
import { getMonth } from "../../utils"

interface Props {
  currentDate: string
  changeCurrentDate(date: string): void
}

export const SelectionMenuMonth: React.FC<Props> = ({
  currentDate,
  changeCurrentDate,
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
          key={month}
          className="itpc-calendar__button"
          onClick={() => onClick(index)}
        >
          {month}
        </button>
      ))}
    </div>
  )
}
