/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { HTMLAttributes, useState } from "react"

import cn from "classnames"
import { NumberFormatValues, PatternFormat, SourceInfo } from "itpc-input-mask"

import {
  Field,
  InputError,
  InputIcon,
  InputWrap,
  Placeholder,
} from "../../_elements"
import { FormattedValues, ValidationState } from "../../types"

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Разрешить пустое значение */
  allowEmptyFormatting?: boolean
  /** Разрешить отрицательные значения */
  allowNegative?: boolean
  /** Дополнительный класс */
  className?: string
  /** Отключить поле */
  disabled?: boolean
  /** Сообщение об ошибке */
  errorMessage?: string
  /** Форматирование */
  format?: string
  /** Ссылка на инпут */
  getInputRef?: ((el: HTMLInputElement) => void) | React.Ref<any>
  /** Иконка */
  icon?: React.ReactNode
  /** Идентификатор */
  id: string
  /** Маска */
  mask?: string
  /** Название */
  name: string
  /** Событие при потере фокуса */
  onBlur?: () => void
  /** Событие при изменении значения */
  onChange?: (
    values: FormattedValues,
    event?: React.SyntheticEvent<HTMLInputElement>
  ) => void
  /** Событие при получении фокуса */
  onFocus?: () => void
  /** Подпись */
  placeholder?: string
  /** Префикс */
  prefix?: string
  /** Замена значения */
  replaceValue?: (value: string) => string
  /** Состояние валидации */
  validationState?: ValidationState
  /** Значение */
  value?: string
}

export const NumberField: React.FC<Props> = ({
  allowEmptyFormatting = true,
  className = "",
  disabled = false,
  errorMessage = "",
  format = "",
  getInputRef,
  icon,
  id,
  mask = "_",
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder = "",
  prefix = "",
  replaceValue,
  validationState = "valid",
  value = "",
  ...rest
}) => {
  const [focused, onHandleFocused] = useState<boolean>(false)

  const onBlurInput = (): void => {
    onHandleFocused(false)

    if (onBlur) {
      onBlur()
    }
  }

  const onFocusInput = (): void => {
    onHandleFocused(true)

    if (onFocus) {
      onFocus()
    }
  }

  const onChangeInput = (
    values: NumberFormatValues,
    sourceInfo: SourceInfo
  ): void => {
    if (onChange) {
      onChange(
        {
          formattedValue: values.formattedValue,
          value: values.value,
        },
        sourceInfo.event
      )
    }
  }

  return (
    <Field className={className} {...rest}>
      <InputWrap focused={focused} validationState={validationState}>
        <Placeholder
          focused={focused || !!value.length}
          htmlFor={id}
          validationState={validationState}
        >
          {placeholder}
        </Placeholder>

        <PatternFormat
          className={cn(
            "itpc-input",
            (focused || !!value.length) && "itpc-input_focused"
          )}
          allowEmptyFormatting={allowEmptyFormatting}
          disabled={disabled}
          format={format}
          getInputRef={getInputRef}
          id={id}
          mask={mask}
          name={name}
          onBlur={onBlurInput}
          onFocus={onFocusInput}
          onValueChange={onChangeInput}
          prefix={prefix}
          replaceValue={replaceValue}
          type="text"
          value={value}
          valueIsNumericString
        />

        <InputError
          errorMessage={errorMessage}
          show={validationState === "invalid"}
        />

        {icon && <InputIcon>{icon}</InputIcon>}
      </InputWrap>
    </Field>
  )
}
