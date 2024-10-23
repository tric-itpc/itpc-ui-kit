import React, {
  type CSSProperties,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react"

import cn from "classnames"
import { NumberFormatValues, PatternFormat, SourceInfo } from "itpc-input-mask"

import { IconCalendar, InputError, Placeholder } from "../_elements"
import { Calendar, useWindowSize } from "../../lab"
import { IInfo, ValidationState } from "../types"

import {
  FORMAT_MASK_DATE,
  FORMAT_MASK_DATE_TIME,
  MASK_DATE,
  MASK_DATE_TIME,
} from "./constants"
import "./styles.css"
import { type PositionType } from "./types"
import {
  getCalculatePositionCalendar,
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

export interface Props<T extends PositionType>
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
  position?: T
  scrollToYear?: number
  validationState?: ValidationState
  value?: string
  withTime?: boolean
  yearsFromTo?: [number, number]
}

export const DatePicker: React.FC<Props<PositionType>> = ({
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
  position = "fixed",
  scrollToYear,
  validationState = "valid",
  value = "",
  withTime = false,
  yearsFromTo,
  ...rest
}: Props<PositionType>) => {
  const { windowWidth } = useWindowSize()

  const [focused, onHandleFocused] = useState<boolean>(false)
  const [isShowCalendar, setIsShowCalendar] = useState<boolean>(false)

  const [stylePositionCalendar, setStylePositionCalendar] =
    useState<CSSProperties>({})

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

  const calculatePositionCalendar = (): void => {
    const stylePosition: CSSProperties = getCalculatePositionCalendar(
      inputWrapRef,
      calendarWrapRef,
      position
    )
    setStylePositionCalendar(stylePosition)
  }

  useEffect(() => {
    const hasScroll: boolean = document.body.scrollHeight > window.innerHeight
    if (hasScroll) {
      window.addEventListener("scroll", calculatePositionCalendar)
    }
    return () => {
      window.removeEventListener("scroll", calculatePositionCalendar)
    }
  }, [])

  useEffect(() => {
    if (isShowCalendar) {
      calculatePositionCalendar()
    }
  }, [windowWidth, isShowCalendar])

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
            htmlFor={id}
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
          format={withTime ? FORMAT_MASK_DATE_TIME : FORMAT_MASK_DATE}
          id={id}
          mask={withTime ? MASK_DATE_TIME : MASK_DATE}
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
        style={stylePositionCalendar}
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
