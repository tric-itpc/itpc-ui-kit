import React, { useRef, useState } from "react"
import cn from 'classnames'

import { Field, InputError, InputWrap, Placeholder } from "../_elements"

import { ValidationState } from "../types"

export interface Props {
  id: string
  name: string
  value?: string
  maxHeight?: number
  disabled?: boolean
  placeholder?: string
  validationState?: ValidationState
  errorMessage?: string
  className?: string
  onBlur?: () => void
  onFocus?: () => void
  onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextAreaField: React.FC<Props> = ({
  id = 'itpc-input',
  name = 'itpc-input',
  value = '',
  maxHeight,
  disabled = false,
  placeholder = '',
  validationState = 'valid',
  errorMessage = '',
  className = '',
  onBlur,
  onFocus,
  onChange
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

  const onChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setHeight(40)

    if (ref.current?.scrollHeight && ref.current.scrollHeight > 40) {
      setHeight(ref.current.scrollHeight)
    }

    if (onChange) {
      onChange(event.currentTarget.value, event)
    }
  }

  return (
    <Field className={className}>
      <InputWrap
        focused={focused}
        validationState={validationState}
        height={height}
        maxHeight={maxHeight}
      >
        <Placeholder
          htmlFor={id}
          focused={focused || value.length > 0}
          validationState={validationState}
        >
          {placeholder}
        </Placeholder>

        <textarea
          ref={ref}
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          onFocus={onFocusTextArea}
          onBlur={onBlurTextArea}
          onChange={onChangeTextArea}
          className={cn('itpc-input', (focused || !!value.length) && 'itpc-input_focused')}
        />

        <InputError errorMessage={errorMessage} show={validationState === 'invalid'} />
      </InputWrap>
    </Field>
  )
}
