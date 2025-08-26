import React, { HTMLAttributes, useRef, useState } from "react"

import cn from "classnames"

import { Field, InputError, InputWrap, Placeholder } from "../../_elements"
import { ValidationState } from "../../types"

import { DEFAULT_HEIGHT } from "./constants"
import "./styles.css"

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Дополнительный класс */
  className?: string
  /** Отключение */
  disabled?: boolean
  /** Текст ошибки */
  errorMessage?: string
  /** Фиксированная высота */
  fixedHeight?: number
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
  fixedHeight,
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
  const [height, setHeight] = useState<number>(
    fixedHeight ? fixedHeight : DEFAULT_HEIGHT
  )

  const ref = useRef<HTMLTextAreaElement>(null)

  const onBlurTextArea = (): void => {
    onHandleFocused(false)

    if (onBlur) {
      onBlur()
    }
  }

  const onFocusTextArea = (): void => {
    onHandleFocused(true)

    if (onFocus) {
      onFocus()
    }
  }

  const onChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const { scrollHeight } = ref.current || {}
    const newHeight = calculateHeight(scrollHeight)
    setHeight(newHeight)

    if (onChange) {
      onChange(event.currentTarget.value, event)
    }
  }

  const calculateHeight = (scrollHeight: number | undefined): number => {
    if (!scrollHeight) {
      return fixedHeight || DEFAULT_HEIGHT
    }

    if (!fixedHeight) {
      return scrollHeight > DEFAULT_HEIGHT ? scrollHeight : DEFAULT_HEIGHT
    }

    return scrollHeight > fixedHeight ? scrollHeight : fixedHeight
  }

  const isFocused = focused || !!value?.length

  return (
    <Field {...rest} className={cn(className)}>
      <InputWrap
        disabled={disabled}
        fixedHeight={fixedHeight}
        focused={focused}
        height={height}
        maxHeight={maxHeight}
        validationState={validationState}
      >
        <Placeholder
          className={cn(
            fixedHeight &&
              fixedHeight > DEFAULT_HEIGHT &&
              !isFocused &&
              "itpc-textarea_placeholder"
          )}
          disabled={disabled}
          focused={isFocused}
          htmlFor={id}
          validationState={validationState}
        >
          {placeholder}
        </Placeholder>

        <textarea
          className={cn("itpc-input", isFocused && "itpc-input_focused")}
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
