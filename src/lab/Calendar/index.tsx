import React, { useEffect, useRef, useState } from "react"
import cn from 'classnames'

import { useOnClickOutside } from "../../_hooks"

import { Day } from "./types"
import {
  getCalendarDays,
  getTodayMonthYear,
  initCurrentDate,
  initCurrentTime,
  initDays
} from "./utils"
import {
  CalendarControl,
  CalendarTable,
  CalendarTimes,
  SelectionMenuMonth,
  SelectionMenuYear
} from "./components"

import './styles.css'

export interface Props {
  id: string
  currentValue?: string
  offsetYear?: number
  activeDates?: string[]
  disabledDates?: string[]
  disabledAfterDate?: string
  disabledBeforeDate?: string
  show: boolean
  handleShow: () => void
  onChange?: (
    date: string,
    event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLTableDataCellElement>
  ) => void
  withTime?: boolean
}

export const Calendar: React.FC<Props> = ({
  id,
  currentValue = getTodayMonthYear(),
  offsetYear = 10,
  activeDates,
  disabledDates,
  disabledAfterDate,
  disabledBeforeDate,
  show,
  handleShow,
  onChange,
  withTime = false
}: Props) => {
  const [currentDate, setCurrentDate] = useState<string>(initCurrentDate(currentValue, withTime))
  const [hours, setHours] = useState<string>(initCurrentTime(currentValue, withTime)[0])
  const [minutes, setMinutes] = useState<string>(initCurrentTime(currentValue, withTime)[1])
  const [seconds, setSeconds] = useState<string>(initCurrentTime(currentValue, withTime)[2])
  const [days, setDays] = useState<Day[]>(initDays(currentValue, withTime))
  const [isShowSelectMonth, setIsShowSelectMonth] = useState<boolean>(false)
  const [isShowSelectYear, setIsShowSelectYear] = useState<boolean>(false)

  const calendarRef = useRef<HTMLDivElement>(null)

  const changeCurrentDate = (date: string): void => {
    setCurrentDate(date)
    setDays(getCalendarDays(date))
    setIsShowSelectMonth(false)
    setIsShowSelectYear(false)
  }

  const changeCurrentTime = (time: string, event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>): void => {
    const [currentHours, currentMinutes, currentSeconds] = time.split(':')
    setHours(currentHours)
    setMinutes(currentMinutes)
    setSeconds(currentSeconds)

    if (onChange) {
      onChange(`${currentDate}T${time}`, event)
    }
  }

  const onChangeDate = (date: string, event: React.MouseEvent<HTMLTableDataCellElement>): void => {
    if (onChange) {
      if (!withTime) {
        onChange(date, event)
      }

      if (withTime) {
        onChange(`${date}T${hours}:${minutes}:${seconds}`, event)
      }
    }

    if (!withTime) {
      handleShow()
    }
  }

  const handleShowSelectMonth = (): void => {
    setIsShowSelectMonth(!isShowSelectMonth)
    setIsShowSelectYear(false)
  }

  const handleShowSelectYear = (): void => {
    setIsShowSelectYear(!isShowSelectYear)
    setIsShowSelectMonth(false)
  }

  useOnClickOutside(calendarRef, handleShow)

  useEffect(() => {
    if (currentValue !== `${currentDate}T${hours}:${minutes}:${seconds}`) {
      setCurrentDate(initCurrentDate(currentValue, withTime))
      setHours(initCurrentTime(currentValue, withTime)[0])
      setMinutes(initCurrentTime(currentValue, withTime)[1])
      setSeconds(initCurrentTime(currentValue, withTime)[2])
      setDays(initDays(currentValue, withTime))
    }
  }, [currentValue, withTime])

  return (
    <div
      className={cn(
        'itpc-calendar',
        show && 'itpc-calendar_opened'
      )}
      ref={calendarRef}
    >
      <CalendarControl
        currentDate={currentDate}
        changeCurrentDate={changeCurrentDate}
        handleShowSelectYear={handleShowSelectYear}
        handleShowSelectMonth={handleShowSelectMonth}
      />
      <CalendarTable
        id={id}
        days={days}
        currentDate={currentDate}
        activeDates={activeDates}
        disabledDates={disabledDates}
        disabledAfterDate={disabledAfterDate}
        disabledBeforeDate={disabledBeforeDate}
        onChange={onChangeDate}
      />
      {withTime && (
        <CalendarTimes
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          onChange={changeCurrentTime}
        />
      )}
      {isShowSelectMonth && (
        <SelectionMenuMonth
          currentDate={currentDate}
          changeCurrentDate={changeCurrentDate}
        />
      )}
      {isShowSelectYear && (
        <SelectionMenuYear
          currentDate={currentDate}
          offsetYear={offsetYear}
          changeCurrentDate={changeCurrentDate}
        />
      )}
    </div>
  )
}
