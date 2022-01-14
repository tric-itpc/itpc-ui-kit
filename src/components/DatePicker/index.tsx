import React, { useEffect, useRef, useState } from "react"
import NumberFormat, { NumberFormatValues } from 'react-number-format'

import { Calendar } from "../../lab"

import {
  Icons,
  Input,
  InputWrap,
  Placeholder
} from "../_elements"

import { FormattedValues, ValidationState } from "../types"
import { parseISODate, parseISODateToNumericString, parseNumericStringToISODate } from "../utils"
import { ErrorMessage } from "../ErrorMessage"

import * as Styled from './styled'

export interface DatePickerProps {
  id: string
  name: string
  value?: string
  disabled?: boolean
  placeholder?: string
  validationState?: ValidationState
  errorMessage?: string
  onBlur?: () => void
  onFocus?: () => void
  onChange?: (values: FormattedValues) => void
  isIconClicable?: boolean
  offsetYear?: number
}

export const DatePicker: React.FC<DatePickerProps> = ({
  id = 'itpc-input',
  name = 'itpc-input',
  value = '',
  disabled = false,
  placeholder = '',
  validationState = 'valid',
  errorMessage = '',
  onBlur,
  onFocus,
  onChange,
  isIconClicable = false,
  offsetYear
}) => {
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
    if (!isIconClicable) {
      onOpenCalendar()
    }
    if (onFocus) {
      onFocus()
    }
  }

  const onClickIcon = (): void => {
    if (isIconClicable) {
      onHandleFocused(true)
      onOpenCalendar()
    }
  }

  const onChangeDate = (date: string): void => {
    if (onChange) {
      onChange({
        value: parseISODateToNumericString(date),
        formattedValue: parseISODate(date)
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

  useEffect(() => {
    const documentHeight = document.documentElement.clientHeight
    const inputSize = inputWrapRef.current?.getBoundingClientRect() as DOMRect
    const calendarHeight = (calendarWrapRef.current?.getBoundingClientRect() as DOMRect).height
    const underInputSize = documentHeight - inputSize.bottom

    if (calendarHeight > inputSize.bottom && calendarHeight > inputSize.top) {
      setCalendarPosition(inputSize.height + 10)
      return
    }

    if (calendarHeight < underInputSize) {
      setCalendarPosition(inputSize.height + 10)
      return
    }

    if (calendarHeight > underInputSize && calendarHeight < inputSize.top) {
      setCalendarPosition(0 - calendarHeight - 10)
    }
  }, [isShowCalendar])

  return (
    <Styled.DatePicker>
      <InputWrap
        validationState={validationState}
        focused={focused}
        disabled={disabled}
        ref={inputWrapRef}
      >
        <Placeholder
          htmlFor={id}
          disabled={disabled}
          focused={focused || value.length > 0}
          validationState={validationState}
        >
          {placeholder}
        </Placeholder>
        <NumberFormat
          id={id}
          name={name}
          type="text"
          value={value}
          disabled={disabled}
          onFocus={onFocusPicker}
          onBlur={onBlurPicker}
          onValueChange={onChangePicker}
          focused={focused}
          valueLength={value.length}
          customInput={Input}
          isNumericString
          allowEmptyFormatting
          format="##.##.####"
          mask={['Д', 'Д', 'М', 'М', 'Г', 'Г', 'Г', 'Г']}
        />
        <Icons.Calendar onClick={onClickIcon} />
      </InputWrap>

      {validationState === 'invalid' && <ErrorMessage>{errorMessage}</ErrorMessage>}

      <Styled.CalendarWrap
        ref={calendarWrapRef}
        position={calendarPosition}
      >
        <Calendar
          currentValue={parseNumericStringToISODate(value)}
          show={isShowCalendar}
          handleShow={onCloseCalendar}
          onChangeDate={onChangeDate}
          offsetYear={offsetYear}
        />
      </Styled.CalendarWrap>
    </Styled.DatePicker>
  )
}
