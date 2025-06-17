import React, { HTMLAttributes, useState } from "react"

import cn from "classnames"

import {
  Field,
  InputError,
  InputIcon,
  InputWrap,
  Placeholder,
} from "../../_elements"
import { AutoComplete, ErrorPlacement } from "../../../enums"
import { InputType, ValidationState } from "../../types"

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Параметры autoComplete */
  autoComplete?: AutoComplete
  /** Дополнительный класс */
  className?: string
  /** Строка поиска по умолчанию */
  defaultItem?: string
  /** Отключение */
  disabled?: boolean
  /** Текст ошибки */
  errorMessage?: string
  /** Положение текста ошибки */
  errorPlacement?: ErrorPlacement
  /** Иконка */
  icon?: React.ReactNode
  /** Идентификатор */
  id: string
  /** Максимальная длина */
  maxLength?: number
  /** Название */
  name: string
  /** Обработчик потери фокуса */
  onBlur?: () => void
  /** Обработчик изменения значения */
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void
  /** Обработчик клика по полю ввода */
  onClickInput?: () => void
  /** Обработчик установки фокуса */
  onFocus?: () => void
  /** Обработчик нажатия на клавишу */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  /** Подпись */
  placeholder?: string
  /** Обязательность поля */
  required?: boolean
  /** Тип инпута */
  type?: InputType
  /** Состояние валидации */
  validationState?: ValidationState
  /** Значение */
  value?: string
}

export const TextField: React.FC<Props> = ({
  autoComplete,
  className = "",
  defaultItem,
  disabled = false,
  errorMessage = "",
  errorPlacement = ErrorPlacement.INSIDE,
  icon,
  id = "itpc-input",
  maxLength,
  name = "itpc-input",
  onBlur,
  onChange,
  onClickInput,
  onFocus,
  onKeyDown,
  placeholder = "",
  required,
  type = "text",
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

    if (defaultItem && onClickInput) {
      onClickInput()
    }

    if (onFocus) {
      onFocus()
    }
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(event.currentTarget.value, event)
    }
  }

  return (
    <Field {...rest} className={cn(className)} errorPlacement={errorPlacement}>
      <InputWrap focused={focused} validationState={validationState}>
        <Placeholder
          disabled={disabled}
          focused={focused || value.length > 0 || !!defaultItem}
          htmlFor={id}
          required={required}
          validationState={validationState}
        >
          {placeholder}
        </Placeholder>

        <input
          className={cn(
            "itpc-input",
            (focused || !!value.length) && "itpc-input_focused"
          )}
          autoComplete={autoComplete}
          disabled={disabled}
          id={id}
          maxLength={maxLength}
          name={name}
          onBlur={onBlurInput}
          onChange={onChangeInput}
          onFocus={onFocusInput}
          onKeyDown={onKeyDown}
          type={type}
          value={value}
        />

        {icon && <InputIcon>{icon}</InputIcon>}
      </InputWrap>

      <InputError
        errorMessage={errorMessage}
        errorPlacement={errorPlacement}
        show={validationState === "invalid"}
      />
    </Field>
  )
}
