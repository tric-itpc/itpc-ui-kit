import React, { useEffect } from 'react'

import { InputType } from "../types"
import { Preloader } from "../Preloader"

import * as Styled from './styled'

export interface InputFieldProps {
  id: string
  name: string
  type?: InputType
  value?: string
  loading?: boolean
  disabled?: boolean
  maxLength?: number
  placeholder?: string
  onBlur?: () => void
  onFocus?: () => void
  onChange?: (value: string) => void
}

export const InputField: React.FC<InputFieldProps> = ({
  id = 'itpc-input',
  name = 'itpc-input',
  type = 'text',
  value = '',
  loading = false,
  disabled = false,
  maxLength,
  placeholder = '',
  onBlur,
  onFocus,
  onChange
}) => {
  const [focused, onHandleFocused] = React.useState(false)
  const [valueInput, onChangeValue] = React.useState(value)

  useEffect(() => onChangeValue(value), [value])

  const onBlurInput = (): void => {
    onHandleFocused(false)

    if (onBlur && typeof onBlur === 'function') {
      onBlur()
    }
  }

  const onFocusInput = (): void => {
    onHandleFocused(true)

    if (onFocus && typeof onFocus === 'function') {
      onFocus()
    }
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onChangeValue(event.currentTarget.value)

    if (onChange && typeof onChange === 'function') {
      onChange(event.currentTarget.value)
    }
  }

  return (
    <Styled.InputField focused={focused} disabled={disabled}>
      <Styled.Placeholder
        htmlFor={id}
        disabled={disabled}
        focused={focused || valueInput.length > 0}
      >
        {placeholder}
      </Styled.Placeholder>
      <Styled.Input
        id={id}
        name={name}
        type={type}
        value={valueInput}
        disabled={disabled}
        maxLength={maxLength}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        onChange={onChangeInput}
        focused={focused}
        valueLength={valueInput.length}
      />
      {loading && <Preloader />}
    </Styled.InputField>
  )
}
