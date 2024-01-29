import React, { useLayoutEffect, useRef } from "react"

interface IProps {
  changeCurrentDate(year: number): void
  currentYear: string
  scrollToYear?: number
  year: string
}

export const YearBtn: React.FC<IProps> = ({
  changeCurrentDate,
  currentYear,
  scrollToYear,
  year,
}) => {
  const btnRef = useRef<HTMLButtonElement>(null)

  const onClick = (): void => {
    changeCurrentDate(parseInt(year, 10))
  }

  useLayoutEffect(() => {
    if (!scrollToYear && currentYear === year) {
      btnRef.current?.scrollIntoView({ block: "center" })
    }

    if (scrollToYear && scrollToYear.toString() === year) {
      btnRef.current?.scrollIntoView({ block: "center" })
    }
  }, [currentYear])

  return (
    <button
      className="itpc-calendar__button"
      key={year}
      onClick={onClick}
      ref={btnRef}
    >
      {year}
    </button>
  )
}
