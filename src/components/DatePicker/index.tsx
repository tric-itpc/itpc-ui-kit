import React, { HTMLAttributes, useRef, useState } from "react"

import cn from "classnames"
import { NumberFormatValues, PatternFormat, SourceInfo } from "itpc-input-mask"

import { IconCalendar, InputError, Placeholder } from "../_elements"
import { Portal } from "../_elements/Portal"
import { PositionedWrap } from "../_elements/PositionedWrap"
import { Calendar } from "../../lab"
import { DISTANCE_BETWEEN_CALENDAR } from "../../lab/CalculateStyle/constants"
import { useAnimation } from "../../lab/hooks/useAnimation"
import { type DurationAnimation, IInfo, ValidationState } from "../types"

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
  durationAnimation?: DurationAnimation
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
      | React.SyntheticEvent<HTMLButtonElement>
      | React.SyntheticEvent<HTMLInputElement>
      | React.SyntheticEvent<HTMLTableDataCellElement>,
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
}: Props<PositionType>) => {
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
      className={cn("itpc-datepicker", className)}
      ref={datePickerRef}
      {...rest}
    >
      <div
        className={cn(
          "itpc-datepicker__input-wrap",
          validationState === "invalid" && "itpc-datepicker__input-wrap_error"
        )}
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
