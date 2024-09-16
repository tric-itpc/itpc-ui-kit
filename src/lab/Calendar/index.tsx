import React, { useEffect, useRef, useState } from "react"

import cn from "classnames"

import { useOnClickOutside } from "../../_hooks"
import { IInfo } from "../../components"
import {
  getCalendarDimensions,
  getCalendarStyle,
  getDocumentDimensions,
} from "../../components/DatePicker/utils"

import {
  CalendarControl,
  CalendarTable,
  CalendarTimes,
  SelectionMenuMonth,
  SelectionMenuYear,
} from "./components"
import "./styles.css"
import { Day } from "./types"
import {
  getCalendarDays,
  getTodayMonthYear,
  initCurrentDate,
  initCurrentTime,
  initDays,
} from "./utils"

export interface Props {
  activeDates?: string[]
  currentValue?: string
  disabledAfterDate?: string
  disabledBeforeDate?: string
  disabledDates?: string[]
  disabledDaysOfWeek?: number[]
  disabledSelectMonth?: boolean
  disabledSelectYear?: boolean
  handleShow: () => void
  id: string
  name: string
  offsetYear?: number
  onChange?: (
    date: string,
    event:
      | React.MouseEvent<HTMLTableCellElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>,
    info: IInfo
  ) => void
  scrollToYear?: number
  show: boolean
  withTime?: boolean
  yearsFromTo?: [number, number]
}

export const Calendar: React.FC<Props> = ({
  activeDates,
  currentValue = getTodayMonthYear(),
  disabledAfterDate,
  disabledBeforeDate,
  disabledDates,
  disabledDaysOfWeek,
  disabledSelectMonth,
  disabledSelectYear,
  handleShow,
  id,
  name,
  offsetYear = 10,
  onChange,
  scrollToYear,
  show,
  withTime = false,
  yearsFromTo,
}: Props) => {
  const [currentDate, setCurrentDate] = useState<string>(
    initCurrentDate(currentValue, withTime)
  )
  const [hours, setHours] = useState<string>(
    initCurrentTime(currentValue, withTime)[0]
  )
  const [minutes, setMinutes] = useState<string>(
    initCurrentTime(currentValue, withTime)[1]
  )
  const [seconds, setSeconds] = useState<string>(
    initCurrentTime(currentValue, withTime)[2]
  )
  const [days, setDays] = useState<Day[]>(initDays(currentValue, withTime))
  const [isShowSelectMonth, setIsShowSelectMonth] = useState<boolean>(false)
  const [isShowSelectYear, setIsShowSelectYear] = useState<boolean>(false)

  const calendarRef = useRef<HTMLDivElement>(null)

  let styleCalendar

  const { documentWidth } = getDocumentDimensions()

  if (calendarRef.current) {
    const { calendarWidth } = getCalendarDimensions(calendarRef.current)
    styleCalendar = getCalendarStyle(documentWidth, calendarWidth)
  }

  const changeCurrentDate = (date: string): void => {
    setCurrentDate(date)
    setDays(getCalendarDays(date))
    setIsShowSelectMonth(false)
    setIsShowSelectYear(false)
  }

  const changeCurrentTime = (
    time: string,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ): void => {
    const [currentHours, currentMinutes, currentSeconds] = time.split(":")
    setHours(currentHours)
    setMinutes(currentMinutes)
    setSeconds(currentSeconds)

    if (onChange) {
      onChange(`${currentDate}T${time}`, event, { id, name })
    }
  }

  const onChangeDate = (
    date: string,
    event: React.MouseEvent<HTMLTableDataCellElement>
  ): void => {
    if (onChange) {
      if (!withTime) {
        onChange(date, event, { id, name })
      }

      if (withTime) {
        onChange(`${date}T${hours}:${minutes}:${seconds}`, event, { id, name })
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
      className={cn("itpc-calendar", show && "itpc-calendar_opened")}
      ref={calendarRef}
      style={styleCalendar}
    >
      <CalendarControl
        changeCurrentDate={changeCurrentDate}
        currentDate={currentDate}
        disabledSelectMonth={disabledSelectMonth}
        disabledSelectYear={disabledSelectYear}
        handleShowSelectMonth={handleShowSelectMonth}
        handleShowSelectYear={handleShowSelectYear}
      />
      <CalendarTable
        activeDates={activeDates}
        currentDate={currentDate}
        days={days}
        disabledAfterDate={disabledAfterDate}
        disabledBeforeDate={disabledBeforeDate}
        disabledDates={disabledDates}
        disabledDaysOfWeek={disabledDaysOfWeek}
        id={id}
        onChange={onChangeDate}
      />
      {withTime && (
        <CalendarTimes
          hours={hours}
          minutes={minutes}
          onChange={changeCurrentTime}
          seconds={seconds}
        />
      )}
      {isShowSelectMonth && (
        <SelectionMenuMonth
          changeCurrentDate={changeCurrentDate}
          currentDate={currentDate}
        />
      )}
      {isShowSelectYear && (
        <SelectionMenuYear
          changeCurrentDate={changeCurrentDate}
          currentDate={currentDate}
          offsetYear={offsetYear}
          scrollToYear={scrollToYear}
          yearsFromTo={yearsFromTo}
        />
      )}
    </div>
  )
}
