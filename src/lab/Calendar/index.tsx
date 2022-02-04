import React, { useEffect, useState } from "react"

import { useClickOutside } from "../../_hooks"

import {
  CalendarControl,
  CalendarTable,
  SelectionMenuMonth,
  SelectionMenuYear
} from "./components"
import { Day } from "./types"
import { getCalendarDays, getTodayMonthYear } from "./utils"

import * as Styled from './styled'

export interface Props {
  currentValue?: string
  offsetYear?: number
  show: boolean
  handleShow: () => void
  onChangeDate?: (date: string) => void
}

export const Calendar: React.FC<Props> = ({
  currentValue = getTodayMonthYear(),
  offsetYear = 10,
  show,
  handleShow,
  onChangeDate
}) => {
  const [currentDate, setCurrentDate] = useState<string>(currentValue?.includes('-') ? currentValue : getTodayMonthYear())
  const [days, setDays] = useState<Day[]>(getCalendarDays(currentValue?.includes('-') ? currentValue : getTodayMonthYear()))
  const [isShowSelectMonth, setIsShowSelectMonth] = useState<boolean>(false)
  const [isShowSelectYear, setIsShowSelectYear] = useState<boolean>(false)

  const ref = useClickOutside<HTMLDivElement>(handleShow)

  useEffect(() => {
    setCurrentDate(currentValue?.includes('-') ? currentValue : getTodayMonthYear())
    setDays(getCalendarDays(currentValue?.includes('-') ? currentValue : getTodayMonthYear()))
  }, [currentValue])

  const changeCurrentDate = (date: string): void => {
    setCurrentDate(date)
    setDays(getCalendarDays(date))
    setIsShowSelectMonth(false)
    setIsShowSelectYear(false)
  }

  const onChange = (date: string): void => {
    if (onChangeDate && typeof onChangeDate === 'function') {
      onChangeDate(date)
    }
    handleShow()
  }

  const handleShowSelectMonth = (): void => {
    setIsShowSelectMonth(!isShowSelectMonth)
    setIsShowSelectYear(false)
  }

  const handleShowSelectYear = (): void => {
    setIsShowSelectYear(!isShowSelectYear)
    setIsShowSelectMonth(false)
  }

  return (
    <Styled.Calendar show={show} ref={ref}>
      <CalendarControl
        currentDate={currentDate}
        changeCurrentDate={changeCurrentDate}
        handleShowSelectYear={handleShowSelectYear}
        handleShowSelectMonth={handleShowSelectMonth}
      />
      <CalendarTable
        days={days}
        currentDate={currentDate}
        currentValue={currentValue}
        onChange={onChange}
      />
      {isShowSelectMonth && <SelectionMenuMonth
        currentDate={currentDate}
        changeCurrentDate={changeCurrentDate}
      />}
      {isShowSelectYear && <SelectionMenuYear
        currentDate={currentDate}
        offsetYear={offsetYear}
        changeCurrentDate={changeCurrentDate}
      />}
    </Styled.Calendar>
  )
}
