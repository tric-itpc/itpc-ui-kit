import React from "react"

import { getAllYears } from "../../utils"

interface Props {
  currentDate: string
  offsetYear: number
  changeCurrentDate(date: string): void
}

export const SelectionMenuYear: React.FC<Props> = ({
  currentDate,
  offsetYear,
  changeCurrentDate
}: Props) => {
  const onClick = (year: number): void => {
    const date = new Date(currentDate)
    date.setFullYear(year)
    changeCurrentDate(`${date.getFullYear()}-${date.getMonth() + 1}`)
  }

  return (
    <div className="itpc-calendar__select-period">
      {getAllYears(offsetYear).
        reverse().
        map((year) => (
          <button
            key={year}
            className="itpc-calendar__button"
            onClick={() => onClick(parseInt(year, 10))}
          >
            {year}
          </button>
        ))}
    </div>
  )
}
