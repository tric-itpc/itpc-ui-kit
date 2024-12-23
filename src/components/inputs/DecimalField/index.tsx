import React, { HTMLAttributes, useState } from "react"

import cn from "classnames"

import {
  Field,
  InputError,
  InputIcon,
  InputWrap,
  Placeholder,
} from "../../_elements"
import { DecimalFixed } from "../../../lab"
import { ValidationState } from "../../types"

import { dotRegExp, numberAndOnlyPointRegExp } from "./constants"

export interface Props
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "onBlur" | "onChange" | "onFocus"
  > {
  /** Количество знаков после запятой */
  accuracy?: number
  /** Разрешено пустое значение */
  canEmptyString?: boolean
  /** Дополнительный класс */
  className?: string
  /** Отключение компонента */
  disabled?: boolean
  /** Сообщение об ошибке */
  errorMessage?: string
  /** Иконка */
  icon?: React.ReactNode
  /** Идентификатор */
  id: string
  /** Максимальная длина */
  maxLength?: number
  /** Название */
  name: string
  /** Функция обработки потери фокуса */
  onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void
  /** Функция обработки изменения значения */
  onChange?: (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void
  /** Функция обработки фокуса */
  onFocus?: (event?: React.FocusEvent<HTMLInputElement>) => void
  /** Подпись */
  placeholder?: string
  /** Состояние валидации */
  validationState?: ValidationState
  /** Значение */
  value?: string
}

export const DecimalField: React.FC<Props> = ({
  accuracy = 0,
  canEmptyString = false,
  className = "",
  disabled = false,
  errorMessage = "",
  icon,
  id = "itpc-input",
  maxLength,
  name = "itpc-input",
  onBlur,
  onChange,
  onFocus,
  placeholder = "",
  validationState = "valid",
  value = "",
  ...rest
}) => {
  const [focused, onHandleFocused] = useState<boolean>(false)

  const onBlurInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    onHandleFocused(false)

    if (onBlur) {
      onBlur(event)
    }
  }

  const onFocusInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    onHandleFocused(true)

    if (onFocus) {
      onFocus(event)
    }
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget

    if (canEmptyString && !value.length && onChange) {
      onChange(value, event)
      return
    }

    const valueWithReplace = value.replace(dotRegExp, ".")
    const isValid = numberAndOnlyPointRegExp.test(valueWithReplace)

    if (isValid && onChange) {
      onChange(new DecimalFixed(valueWithReplace, accuracy).toString(), event)
    }
  }

  return (
    <Field {...rest} className={className}>
      <InputWrap
        disabled={disabled}
        focused={focused}
        validationState={validationState}
      >
        <Placeholder
          disabled={disabled}
          focused={focused || value.length > 0}
          htmlFor={id}
          validationState={validationState}
        >
          {placeholder}
        </Placeholder>

        <input
          className={cn(
            "itpc-input",
            (focused || !!value.length) && "itpc-input_focused"
          )}
          disabled={disabled}
          id={id}
          maxLength={maxLength}
          name={name}
          onBlur={onBlurInput}
          onChange={onChangeInput}
          onFocus={onFocusInput}
          type="text"
          value={value}
        />

        <InputError
          errorMessage={errorMessage}
          show={validationState === "invalid" || validationState === "warning"}
          validationType={validationState}
        />

        {icon && <InputIcon>{icon}</InputIcon>}
      </InputWrap>
    </Field>
  )
}
