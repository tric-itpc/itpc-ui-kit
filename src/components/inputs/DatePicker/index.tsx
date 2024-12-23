import React, { HTMLAttributes, useRef, useState } from "react"

import cn from "classnames"
import { NumberFormatValues, PatternFormat, SourceInfo } from "itpc-input-mask"

import {
  IconCalendar,
  InputError,
  Placeholder,
  Portal,
  PositionedWrap,
} from "../../_elements"
import { Calendar, useAnimation } from "../../../lab"
import { DISTANCE_BETWEEN_CALENDAR } from "../../../lab/CalculateStyle/constants"
import { type DurationAnimation, IInfo, ValidationState } from "../../types"

import {
  FORMAT_MASK_DATE,
  FORMAT_MASK_DATE_TIME,
  MASK_DATE,
  MASK_DATE_TIME,
} from "./constants"
import "./styles.css"
import { type PositionType } from "./types"
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
  /** Активные даты в формате YYYY-MM-DD */
  activeDates?: string[]
  /** Дополнительный класс */
  className?: string
  /** Отключение компонента */
  disabled?: boolean
  /** Отключение дат после даты в формате YYYY-MM-DD */
  disabledAfterDate?: string
  /** Отключение дат до даты в формате YYYY-MM-DD */
  disabledBeforeDate?: string
  /** Отключение определенных дат в формате YYYY-MM-DD */
  disabledDates?: string[]
  /** Отключение определенных дней недели в формате 1-7 */
  disabledDaysOfWeek?: number[]
  /** Отключение выбора месяца */
  disabledSelectMonth?: boolean
  /** Отключение выбора года */
  disabledSelectYear?: boolean
  /** Задержка анимации */
  durationAnimation?: DurationAnimation
  /** Сообщение об ошибке */
  errorMessage?: string
  /** Идентификатор */
  id?: string
  /** Флаг кликабельности иконки календаря */
  isIconClickable?: boolean
  /** Флаг отображения иконки календаря */
  isShowIcon?: boolean
  /** Имя */
  name?: string
  /** Период отображения календаря */
  offsetYear?: number
  /** Функция обработки потери фокуса */
  onBlur?: () => void
  /** Функция обработки изменения значения */
  onChange?: (
    values: FormattedValues,
    event:
      | React.SyntheticEvent<HTMLButtonElement>
      | React.SyntheticEvent<HTMLInputElement>
      | React.SyntheticEvent<HTMLTableDataCellElement>,
    info: IInfo
  ) => void
  /** Функция обработки получения фокуса */
  onFocus?: () => void
  /** Подпись */
  placeholder?: string
  /** Позиция календаря */
  position?: PositionType
  /** Скролл к году */
  scrollToYear?: number
  /** Состояние валидации */
  validationState?: ValidationState
  /** Значение в формате DDMMYYYY (дата 01.01.2000 в формате 01012000) */
  value?: string
  /** Флаг отображения времени */
  withTime?: boolean
  /** Период отображения года */
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
  durationAnimation = {
    durationClose: 200,
    durationOpen: 400,
  },
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
}) => {
  const [focused, onHandleFocused] = useState<boolean>(false)
  const [isShowCalendar, setIsShowCalendar] = useState<boolean>(false)
  const { isClosing } = useAnimation(isShowCalendar, durationAnimation)

  const datePickerRef = useRef<HTMLDivElement>(null)

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
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLTableDataCellElement>
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

  return (
    <div
      {...rest}
      className={cn(
        "itpc-datepicker",
        disabled && "itpc-datepicker_disabled",
        className
      )}
      ref={datePickerRef}
    >
      <div
        className={cn(
          "itpc-datepicker__input-wrap",
          disabled && "itpc-datepicker__input-wrap_disabled",
          !disabled && "itpc-datepicker__input-wrap_hover",
          validationState === "invalid" && "itpc-datepicker__input-wrap_error"
        )}
      >
        {placeholder && (
          <Placeholder
            disabled={disabled}
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
            disabled && "itpc-datepicker__input_disabled",
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
          <IconCalendar
            disabled={disabled}
            isClickable={isIconClickable}
            onClick={onClickIcon}
          />
        )}

        <InputError
          errorMessage={errorMessage}
          show={validationState === "invalid"}
        />
      </div>

      <Portal element={document.body}>
        <PositionedWrap
          distanceBetweenElements={DISTANCE_BETWEEN_CALENDAR}
          isClosing={isClosing}
          isOpen={isShowCalendar}
          position={position}
          refParent={datePickerRef}
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
            durationAnimation={durationAnimation}
            handleShow={onCloseCalendar}
            id={id}
            name={name}
            offsetYear={offsetYear}
            onChange={onChangeDate}
            parentRef={datePickerRef}
            scrollToYear={scrollToYear}
            show={isShowCalendar ? !isClosing : isShowCalendar}
            withTime={withTime}
            yearsFromTo={yearsFromTo}
          />
        </PositionedWrap>
      </Portal>
    </div>
  )
}
