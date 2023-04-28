import React, { useState } from 'react'
import cn from 'classnames'

import {
  Field,
  IconCancel,
  IconLoading,
  IconOk,
  IconWarning, InputError,
  InputWrap,
  Placeholder
} from '../_elements'

import {
  InputState,
  InputType,
  ValidationState
} from "../types"

export interface Props {
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
  className?: string
  onBlur?: () => void
  onFocus?: () => void
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void
  onClickIcon?: () => void
}

export const TextField: React.FC<Props> = ({
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
  className = '',
  onBlur,
  onFocus,
  onChange,
  onClickIcon
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
    <Field className={className}>
      <InputWrap
        focused={focused}
        validationState={validationState}
      >
        <Placeholder
          htmlFor={id}
          focused={focused || value.length > 0}
          validationState={validationState}
        >
          {placeholder}
        </Placeholder>

        <input
          id={id}
          name={name}
          type={type}
          value={value}
          disabled={disabled}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          onChange={onChangeInput}
          className={cn('itpc-input', (focused || !!value.length) && 'itpc-input_focused')}
          maxLength={maxLength}
        />

        <InputError errorMessage={errorMessage} show={validationState === "invalid"} />

        {state === 'cancel' && <IconCancel onClick={onClickIcon} />}
        {state === 'success' && <IconOk />}
        {state === 'loading' && <IconLoading />}
        {state === 'warning' && <IconWarning />}
      </InputWrap>
    </Field>
  )
}
