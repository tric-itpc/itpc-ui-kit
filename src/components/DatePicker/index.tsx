import React, { HTMLAttributes, useEffect, useRef, useState } from "react"

import cn from "classnames"
import { NumberFormatValues, PatternFormat, SourceInfo } from "itpc-input-mask"

import { IconCalendar, InputError, Placeholder } from "../_elements"
import { Calendar } from "../../lab"
import { IInfo, ValidationState } from "../types"

import {
  formatMaskDate,
  formatMaskDateTime,
  maskDate,
  maskDateTime,
} from "./constants"
import "./styles.css"
import {
  parseISODate,
  parseISODateTime,
  parseISODateTimeToNumericString,
  parseISODateToNumericString,
  parseNumericStringToISODate,
  parseNumericStringToISODateTime,
} from "./utils"

export interface FormattedValues {
  formattedValue: string
  value: string
}

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  activeDates?: string[]
  className?: string
  disabled?: boolean
  disabledAfterDate?: string
  disabledBeforeDate?: string
  disabledDates?: string[]
  disabledDaysOfWeek?: number[]
  disabledSelectMonth?: boolean
  disabledSelectYear?: boolean
  errorMessage?: string
  id?: string
  isIconClickable?: boolean
  isShowIcon?: boolean
  name?: string
  offsetYear?: number
  onBlur?: () => void
  onChange?: (
    values: FormattedValues,
    event:
      | React.SyntheticEvent<HTMLTableDataCellElement>
      | React.SyntheticEvent<HTMLButtonElement>
      | React.SyntheticEvent<HTMLInputElement>,
    info: IInfo
  ) => void
  onFocus?: () => void
  placeholder?: string
  scrollToYear?: number
  validationState?: ValidationState
  value?: string
  withTime?: boolean
  yearsFromTo?: [number, number]
}

export const DatePicker: React.FC<Props> = ({
  activeDates,
  className = "",
  disabled = false,
  disabledAfterDate,
  disabledBeforeDate,
  disabledDates,
  disabledDaysOfWeek,
  disabledSelectMonth = false,
  disabledSelectYear = false,
  errorMessage = "",
  id = "itpc-datepicker",
  isIconClickable = false,
  isShowIcon = true,
  name = "itpc-datepicker",
  offsetYear = 10,
  onBlur,
  onChange,
  onFocus,
  placeholder = "",
  scrollToYear,
  validationState = "valid",
  value = "",
  withTime = false,
  yearsFromTo,
  ...rest
}: Props) => {
  const [focused, onHandleFocused] = useState<boolean>(false)
  const [isShowCalendar, setIsShowCalendar] = useState<boolean>(false)
  const [calendarPosition, setCalendarPosition] = useState<number>(0)

  const inputWrapRef = useRef<HTMLDivElement>(null)
  const calendarWrapRef = useRef<HTMLDivElement>(null)

  const onOpenCalendar = (): void => {
    setIsShowCalendar(true)
  }

  const onCloseCalendar = (): void => {
    setIsShowCalendar(false)
  }

  const onBlurPicker = (): void => {
    onHandleFocused(false)
    if (onBlur) {
      onBlur()
    }
  }

  const onFocusPicker = (): void => {
    onHandleFocused(true)
    if (!isIconClickable) {
      onOpenCalendar()
    }
    if (onFocus) {
      onFocus()
    }
  }

  const onClickIcon = (): void => {
    if (isIconClickable && !disabled) {
      onHandleFocused(true)
      onOpenCalendar()
    }
  }

  const onChangeDate = (
    date: string,
    event:
      | React.MouseEvent<HTMLTableDataCellElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ): void => {
    if (onChange) {
      onChange(
        {
          formattedValue: withTime
            ? parseISODateTime(date)
            : parseISODate(date),
          value: withTime
            ? parseISODateTimeToNumericString(date)
            : parseISODateToNumericString(date),
        },
        event,
        { id, name }
      )
    }
  }

  const onChangePicker = (
    values: NumberFormatValues,
    sourceInfo: SourceInfo
  ): void => {
    if (onChange && sourceInfo.event) {
      onChange(
        {
          formattedValue: values.formattedValue,
          value: values.value,
        },
        sourceInfo.event,
        { id, name }
      )
    }
  }

  const handleCalendarPosition = (): void => {
    const documentHeight = document.documentElement.clientHeight
    const inputSize = inputWrapRef.current?.getBoundingClientRect() as DOMRect
    const calendarHeight = (
      calendarWrapRef.current?.getBoundingClientRect() as DOMRect
    )?.height
    const underInputSize = documentHeight - inputSize.bottom

    if (underInputSize < calendarHeight) {
      setCalendarPosition(inputSize.top - calendarHeight - 10)
      return
    }

    if (underInputSize >= calendarHeight) {
      setCalendarPosition(inputSize.bottom + 10)
    }
  }

  useEffect(() => {
    handleCalendarPosition()
  }, [isShowCalendar])

  useEffect(() => {
    window.addEventListener("scroll", handleCalendarPosition)
    return () => window.removeEventListener("scroll", handleCalendarPosition)
  }, [])

  return (
    <div className={cn("itpc-datepicker", className)} {...rest}>
      <div
        className={cn(
          "itpc-datepicker__input-wrap",
          validationState === "invalid" && "itpc-datepicker__input-wrap_error"
        )}
        ref={inputWrapRef}
      >
        {placeholder && (
          <Placeholder
            focused={focused || !!value.length}
            htmlFor={name}
            validationState={validationState}
          >
            {placeholder}
          </Placeholder>
        )}

        <PatternFormat
          className={cn(
            "itpc-datepicker__input",
            (focused || value.length) && "itpc-datepicker__input_focused"
          )}
          disabled={disabled}
          format={withTime ? formatMaskDateTime : formatMaskDate}
          id={id}
          mask={withTime ? maskDateTime : maskDate}
          name={name}
          onBlur={onBlurPicker}
          onFocus={onFocusPicker}
          onValueChange={onChangePicker}
          type="text"
          value={value}
          allowEmptyFormatting
          valueIsNumericString
        />

        {isShowIcon && (
          <IconCalendar isClickable={isIconClickable} onClick={onClickIcon} />
        )}

        <InputError
          errorMessage={errorMessage}
          show={validationState === "invalid"}
        />
      </div>

      <div
        className="itpc-datepicker__calendar-wrap"
        ref={calendarWrapRef}
        style={{ top: `${calendarPosition}px` }}
      >
        <Calendar
          currentValue={
            withTime
              ? parseNumericStringToISODateTime(value)
              : parseNumericStringToISODate(value)
          }
          activeDates={activeDates}
          disabledAfterDate={disabledAfterDate}
          disabledBeforeDate={disabledBeforeDate}
          disabledDates={disabledDates}
          disabledDaysOfWeek={disabledDaysOfWeek}
          disabledSelectMonth={disabledSelectMonth}
          disabledSelectYear={disabledSelectYear}
          handleShow={onCloseCalendar}
          id={id}
          name={name}
          offsetYear={offsetYear}
          onChange={onChangeDate}
          scrollToYear={scrollToYear}
          show={isShowCalendar}
          withTime={withTime}
          yearsFromTo={yearsFromTo}
        />
      </div>
    </div>
  )
}
