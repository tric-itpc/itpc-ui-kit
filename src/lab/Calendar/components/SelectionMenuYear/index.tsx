import React from "react"

import { getAllYears, getYearsFromTo } from "../../utils"
import { YearBtn } from "./components/YearBtn/YearBtn"

interface Props {
  currentDate: string
  offsetYear: number
  scrollToYear?: number
  yearsFromTo?: [number, number]
  changeCurrentDate(date: string): void
}

export const SelectionMenuYear: React.FC<Props> = ({
  currentDate,
  offsetYear,
  scrollToYear,
  yearsFromTo,
  changeCurrentDate,
}: Props) => {
  const onClick = (year: number): void => {
    const date = new Date(currentDate)
    date.setFullYear(year)
    changeCurrentDate(`${date.getFullYear()}-${date.getMonth() + 1}`)
  }

  return (
    <div className="itpc-calendar__select-period">
      {!yearsFromTo
        ? getAllYears(offsetYear).map((year) => (
            <YearBtn
              key={year}
              currentYear={currentDate.slice(0, 4)}
              year={year}
              scrollToYear={scrollToYear}
              changeCurrentDate={onClick}
            />
          ))
        : getYearsFromTo(yearsFromTo[0], yearsFromTo[1]).map((year) => (
            <YearBtn
              key={year}
              currentYear={currentDate.slice(0, 4)}
              year={year}
              scrollToYear={scrollToYear}
              changeCurrentDate={onClick}
            />
          ))}
    </div>
  )
}
