import React from "react"

import { getAllYears, getYearsFromTo } from "../../utils"

import { YearBtn } from "./components/YearBtn/YearBtn"

interface Props {
  changeCurrentDate(date: string): void
  currentDate: string
  offsetYear: number
  scrollToYear?: number
  yearsFromTo?: [number, number]
}

export const SelectionMenuYear: React.FC<Props> = ({
  changeCurrentDate,
  currentDate,
  offsetYear,
  scrollToYear,
  yearsFromTo,
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
              changeCurrentDate={onClick}
              currentYear={currentDate.slice(0, 4)}
              key={year}
              scrollToYear={scrollToYear}
              year={year}
            />
          ))
        : getYearsFromTo(yearsFromTo[0], yearsFromTo[1]).map((year) => (
            <YearBtn
              changeCurrentDate={onClick}
              currentYear={currentDate.slice(0, 4)}
              key={year}
              scrollToYear={scrollToYear}
              year={year}
            />
          ))}
    </div>
  )
}
