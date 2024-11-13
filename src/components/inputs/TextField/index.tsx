import React, { HTMLAttributes, useState } from "react"

import cn from "classnames"

import {
  Field,
  InputError,
  InputIcon,
  InputWrap,
  Placeholder,
} from "../../_elements"
import { InputType, ValidationState } from "../../types"

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Дополнительный класс */
  className?: string
  /** Отключение */
  disabled?: boolean
  /** Текст ошибки */
  errorMessage?: string
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
  /** Обработчик получения фокуса */
  onFocus?: () => void
  /** Подпись */
  placeholder?: string
  /** Тип инпута */
  type?: InputType
  /** Состояние валидации */
  validationState?: ValidationState
  /** Значение */
  value?: string
}

export const TextField: React.FC<Props> = ({
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
    <Field className={cn(className)} {...rest}>
      <InputWrap focused={focused} validationState={validationState}>
        <Placeholder
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
          type={type}
          value={value}
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
