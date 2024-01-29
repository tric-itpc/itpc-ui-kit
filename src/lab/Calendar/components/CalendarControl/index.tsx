import React from "react"

import { getMonth, getMonthToString, getYearToString } from "../../utils"

import "./styles.css"

interface Props {
  changeCurrentDate(date: string): void
  currentDate: string
  disabledSelectMonth?: boolean
  disabledSelectYear?: boolean
  handleShowSelectMonth(): void
  handleShowSelectYear(): void
}

export const CalendarControl: React.FC<Props> = ({
  changeCurrentDate,
  currentDate,
  disabledSelectMonth,
  disabledSelectYear,
  handleShowSelectMonth,
  handleShowSelectYear,
}: Props) => {
  const decreaseCurrentDateMonth = (): void => {
    const date = new Date(currentDate)
    date.setMonth(date.getMonth() - 1)
    changeCurrentDate(`${date.getFullYear()}-${getMonth(date.getMonth() + 1)}`)
  }

  const increaseCurrentDateMonth = (): void => {
    const date = new Date(currentDate)
    date.setMonth(date.getMonth() + 1)
    changeCurrentDate(`${date.getFullYear()}-${getMonth(date.getMonth() + 1)}`)
  }

  const decreaseCurrentDateYear = (): void => {
    const date = new Date(currentDate)
    date.setFullYear(date.getFullYear() - 1)
    changeCurrentDate(`${date.getFullYear()}-${getMonth(date.getMonth() + 1)}`)
  }

  const increaseCurrentDateYear = (): void => {
    const date = new Date(currentDate)
    date.setFullYear(date.getFullYear() + 1)
    changeCurrentDate(`${date.getFullYear()}-${getMonth(date.getMonth() + 1)}`)
  }

  return (
    <div className="itpc-calendar__control">
      <button
        className="itpc-calendar__button"
        disabled={disabledSelectYear}
        onClick={decreaseCurrentDateYear}
        type="button"
      >
        <i className="itpc-calendar__arrow itpc-calendar__arrow_bold itpc-calendar__arrow_left" />
      </button>
      <button
        className="itpc-calendar__button"
        disabled={disabledSelectMonth}
        onClick={decreaseCurrentDateMonth}
        type="button"
      >
        <i className="itpc-calendar__arrow itpc-calendar__arrow_left" />
      </button>

      <div className="itpc-calendar__button-group">
        <button
          className="itpc-calendar__button"
          disabled={disabledSelectMonth}
          onClick={handleShowSelectMonth}
          type="button"
        >
          {getMonthToString(currentDate)}
        </button>
        <button
          className="itpc-calendar__button"
          disabled={disabledSelectYear}
          onClick={handleShowSelectYear}
          type="button"
        >
          {getYearToString(currentDate)}
        </button>
      </div>

      <button
        className="itpc-calendar__button"
        disabled={disabledSelectMonth}
        onClick={increaseCurrentDateMonth}
        type="button"
      >
        <i className="itpc-calendar__arrow itpc-calendar__arrow_right" />
      </button>
      <button
        className="itpc-calendar__button"
        disabled={disabledSelectYear}
        onClick={increaseCurrentDateYear}
        type="button"
      >
        <i className="itpc-calendar__arrow itpc-calendar__arrow_bold itpc-calendar__arrow_right" />
      </button>
    </div>
  )
}
