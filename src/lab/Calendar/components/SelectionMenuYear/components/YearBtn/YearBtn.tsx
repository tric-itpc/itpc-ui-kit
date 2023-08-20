import React, { useLayoutEffect, useRef } from "react"

interface IProps {
  currentYear: string
  year: string
  scrollToYear?: number
  changeCurrentDate(year: number): void
}

export const YearBtn: React.FC<IProps> = ({
  currentYear,
  year,
  scrollToYear,
  changeCurrentDate,
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
      key={year}
      ref={btnRef}
      className="itpc-calendar__button"
      onClick={onClick}
    >
      {year}
    </button>
  )
}
