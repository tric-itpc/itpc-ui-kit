import React, { useEffect, useRef, useState } from "react"
import NumberFormat, { NumberFormatValues } from "react-number-format"
import cn from 'classnames'

import { Calendar } from "../../lab"

import { ValidationState } from "../types"
import { IconCalendar, Placeholder } from "../_elements"

import {
  parseISODate,
  parseISODateTime,
  parseISODateToNumericString,
  parseISODateTimeToNumericString,
  parseNumericStringToISODate,
  parseNumericStringToISODateTime
} from "./utils"
import {
  formatMaskDate,
  formatMaskDateTime,
  maskDate,
  maskDateTime
} from "./constants"

import './styles.css'

export interface FormattedValues {
  value: string
  formattedValue: string
}

export interface Props {
  id?: string
  name?: string
  value?: string
  disabled?: boolean
  placeholder?: string
  validationState?: ValidationState
  errorMessage?: string
  onBlur?: () => void
  onFocus?: () => void
  onChange?: (values: FormattedValues) => void
  isIconClickable?: boolean
  offsetYear?: number
  withTime?: boolean
  className?: string
}

export const DatePicker: React.FC<Props> = ({
  id = "itpc-datepicker",
  name = "itpc-datepicker",
  value = "",
  disabled = false,
  placeholder = "",
  validationState = "valid",
  errorMessage = "",
  onBlur,
  onFocus,
  onChange,
  isIconClickable = false,
  offsetYear = 10,
  withTime = false,
  className = ''
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
    if (isIconClickable) {
      onHandleFocused(true)
      onOpenCalendar()
    }
  }

  const onChangeDate = (date: string): void => {
    if (onChange) {
      onChange({
        value: withTime
          ? parseISODateTimeToNumericString(date)
          : parseISODateToNumericString(date),
        formattedValue: withTime ? parseISODateTime(date) : parseISODate(date)
      })
    }
  }

  const onChangePicker = (values: NumberFormatValues): void => {
    if (onChange) {
      onChange({
        value: values.value,
        formattedValue: values.formattedValue
      })
    }
  }

  const handleCalendarPosition = (): void => {
    const documentHeight = document.documentElement.clientHeight
    const inputSize = inputWrapRef.current?.getBoundingClientRect() as DOMRect
    const calendarHeight = (calendarWrapRef.current?.getBoundingClientRect() as DOMRect)?.
      height
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
    <div className={cn('itpc-datepicker', className)}>
      <div
        className={cn(
          'itpc-datepicker__input-wrap',
          validationState === 'invalid' && 'itpc-datepicker__input-wrap_error'
        )}
        ref={inputWrapRef}
      >
        {placeholder && (
          <Placeholder
            htmlFor={name}
            focused={focused || !!value.length}
            validationState={validationState}
          >
            {placeholder}
          </Placeholder>
        )}
        <NumberFormat
          id={id}
          name={name}
          type="text"
          value={value}
          disabled={disabled}
          onFocus={onFocusPicker}
          onBlur={onBlurPicker}
          onValueChange={onChangePicker}
          className={cn(
            'itpc-datepicker__input',
            (focused || value.length) && 'itpc-datepicker__input_focused'
          )}
          isNumericString
          allowEmptyFormatting
          format={withTime ? formatMaskDateTime : formatMaskDate}
          mask={withTime ? maskDateTime : maskDate}
        />
        <IconCalendar isClickable={isIconClickable} onClick={onClickIcon} />
      </div>

      {validationState === "invalid" && (
        <span className="itpc-datepicker__error-message">{errorMessage}</span>
      )}

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
          show={isShowCalendar}
          handleShow={onCloseCalendar}
          onChange={onChangeDate}
          offsetYear={offsetYear}
          withTime={withTime}
        />
      </div>
    </div>
  )
}
