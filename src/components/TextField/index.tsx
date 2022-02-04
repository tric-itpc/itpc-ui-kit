import React, { useState } from 'react'

import {
  Icons,
  Input,
  InputWrap,
  Placeholder
} from '../_elements'

import {
  InputState,
  InputType,
  ValidationState
} from "../types"
import { ErrorMessage } from "../ErrorMessage"

export interface TextFieldProps {
  id: string
  name: string
  type?: InputType
  value?: string
  disabled?: boolean
  maxLength?: number
  placeholder?: string
  state?: InputState
  validationState?: ValidationState
  errorMessage?: string
  onBlur?: () => void
  onFocus?: () => void
  onChange?: (value: string) => void
}

export const TextField: React.FC<TextFieldProps> = ({
  id = 'itpc-input',
  name = 'itpc-input',
  type = 'text',
  value = '',
  disabled = false,
  maxLength,
  placeholder = '',
  state = 'default',
  validationState = 'valid',
  errorMessage = '',
  onBlur,
  onFocus,
  onChange
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
      onChange(event.currentTarget.value)
    }
  }

  return (
    <>
      <InputWrap
        focused={focused}
        disabled={disabled}
        validationState={validationState}
      >
        <Placeholder
          htmlFor={id}
          disabled={disabled}
          focused={focused || value.length > 0}
          validationState={validationState}
        >
          {placeholder}
        </Placeholder>

        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          disabled={disabled}
          maxLength={maxLength}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          onChange={onChangeInput}
          focused={focused}
          valueLength={value.length}
        />

        {state === 'cancel' && <Icons.Cancel />}
        {state === 'success' && <Icons.Ok />}
        {state === 'loading' && <Icons.Loading />}
        {state === 'warning' && <Icons.Warning />}
      </InputWrap>

      {validationState === 'invalid' && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  )
}
