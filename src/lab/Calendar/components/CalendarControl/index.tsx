import React from "react"

import { getMonthToString, getYearToString } from "../../utils"

import './styles.css'

interface Props {
  currentDate: string;
  disabledSelectMonth?: boolean
  disabledSelectYear?: boolean
  handleShowSelectYear(): void;
  handleShowSelectMonth(): void;
  changeCurrentDate(date: string): void;
}

export const CalendarControl: React.FC<Props> = ({
  currentDate,
  disabledSelectMonth,
  disabledSelectYear,
  changeCurrentDate,
  handleShowSelectYear,
  handleShowSelectMonth
}: Props) => {
  const decreaseCurrentDateMonth = (): void => {
    const date = new Date(currentDate)
    date.setMonth(date.getMonth() - 1)
    changeCurrentDate(`${date.getFullYear()}-${date.getMonth() + 1}`)
  }

  const increaseCurrentDateMonth = (): void => {
    const date = new Date(currentDate)
    date.setMonth(date.getMonth() + 1)
    changeCurrentDate(`${date.getFullYear()}-${date.getMonth() + 1}`)
  }

  const decreaseCurrentDateYear = (): void => {
    const date = new Date(currentDate)
    date.setFullYear(date.getFullYear() - 1)
    changeCurrentDate(`${date.getFullYear()}-${date.getMonth() + 1}`)
  }

  const increaseCurrentDateYear = (): void => {
    const date = new Date(currentDate)
    date.setFullYear(date.getFullYear() + 1)
    changeCurrentDate(`${date.getFullYear()}-${date.getMonth() + 1}`)
  }

  return (
    <div className="itpc-calendar__control">
      <button
        className="itpc-calendar__button"
        type="button"
        disabled={disabledSelectYear}
        onClick={decreaseCurrentDateYear}
      >
        <i className="itpc-calendar__arrow itpc-calendar__arrow_bold itpc-calendar__arrow_left" />
      </button>
      <button
        className="itpc-calendar__button"
        type="button"
        disabled={disabledSelectMonth}
        onClick={decreaseCurrentDateMonth}
      >
        <i className="itpc-calendar__arrow itpc-calendar__arrow_left" />
      </button>

      <div className="itpc-calendar__button-group">
        <button
          className="itpc-calendar__button"
          type="button"
          disabled={disabledSelectMonth}
          onClick={handleShowSelectMonth}
        >
          {getMonthToString(currentDate)}
        </button>
        <button
          className="itpc-calendar__button"
          type="button"
          disabled={disabledSelectYear}
          onClick={handleShowSelectYear}
        >
          {getYearToString(currentDate)}
        </button>
      </div>

      <button
        className="itpc-calendar__button"
        type="button"
        disabled={disabledSelectMonth}
        onClick={increaseCurrentDateMonth}
      >
        <i className="itpc-calendar__arrow itpc-calendar__arrow_right" />
      </button>
      <button
        className="itpc-calendar__button"
        type="button"
        disabled={disabledSelectYear}
        onClick={increaseCurrentDateYear}
      >
        <i className="itpc-calendar__arrow itpc-calendar__arrow_bold itpc-calendar__arrow_right" />
      </button>
    </div>
  )
}
