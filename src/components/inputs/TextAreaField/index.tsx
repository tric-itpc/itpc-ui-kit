import React, { HTMLAttributes, useRef, useState } from "react"

import cn from "classnames"

import { Field, InputError, InputWrap, Placeholder } from "../../_elements"
import { ValidationState } from "../../types"

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Дополнительный класс */
  className?: string
  /** Отключение */
  disabled?: boolean
  /** Текст ошибки */
  errorMessage?: string
  /** Идентификатор */
  id: string
  /** Максимальная высота */
  maxHeight?: number
  /** Название поля */
  name: string
  /** Обработчик потери фокуса */
  onBlur?: () => void
  /** Обработчик изменения значения */
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  /** Обработчик получения фокуса */
  onFocus?: () => void
  /** Подпись */
  placeholder?: string
  /** Состояние валидации */
  validationState?: ValidationState
  /** Значение */
  value?: string
}

export const TextAreaField: React.FC<Props> = ({
  className = "",
  disabled = false,
  errorMessage = "",
  id = "itpc-input",
  maxHeight,
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
  const [height, setHeight] = useState<number>(40)

  const ref = useRef<HTMLTextAreaElement>(null)

  const onBlurTextArea = (): void => {
    onHandleFocused(false)

    if (onBlur) {
      onBlur()
    }
  }

  const onFocusTextArea = (): void => {
    onHandleFocused(true)
    ref.current?.focus()

    if (onFocus) {
      onFocus()
    }
  }

  const onChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setHeight(40)

    if (ref.current?.scrollHeight && ref.current.scrollHeight > 40) {
      setHeight(ref.current.scrollHeight)
    }

    if (onChange) {
      onChange(event.currentTarget.value, event)
    }
  }

  return (
    <Field className={cn(className)} {...rest}>
      <InputWrap
        disabled={disabled}
        focused={focused}
        height={height}
        maxHeight={maxHeight}
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

        <textarea
          className={cn(
            "itpc-input",
            (focused || !!value.length) && "itpc-input_focused"
          )}
          disabled={disabled}
          id={id}
          name={name}
          onBlur={onBlurTextArea}
          onChange={onChangeTextArea}
          onFocus={onFocusTextArea}
          ref={ref}
          value={value}
        />

        <InputError
          errorMessage={errorMessage}
          show={validationState === "invalid"}
        />
      </InputWrap>
    </Field>
  )
}
