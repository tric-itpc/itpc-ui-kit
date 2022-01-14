import React, { useRef, useState } from "react"

import { FieldWrap, Placeholder } from "../_elements"

import { ValidationState } from "../types"
import { ErrorMessage } from "../ErrorMessage"

import * as Styled from './styled'

export interface TextAreaFieldProps {
  id: string
  name: string
  value?: string
  maxHeight?: number
  disabled?: boolean
  placeholder?: string
  validationState?: ValidationState
  errorMessage?: string
  onBlur?: () => void
  onFocus?: () => void
  onChange?: (value: string) => void
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  id = 'itpc-input',
  name = 'itpc-input',
  value = '',
  maxHeight,
  disabled = false,
  placeholder = '',
  validationState = 'valid',
  errorMessage = '',
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
      onChange(event.currentTarget.value)
    }
  }

  return (
    <FieldWrap>
      <Styled.TextAreaWrap
        height={height}
        maxHeight={maxHeight}
        focused={focused}
        disabled={disabled}
        validationState={validationState}
        onClick={onFocusTextArea}
      >
        <Placeholder
          htmlFor={id}
          disabled={disabled}
          focused={focused || value.length > 0}
          validationState={validationState}
        >
          {placeholder}
        </Placeholder>

        <Styled.TextArea
          ref={ref}
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          onFocus={onFocusTextArea}
          onBlur={onBlurTextArea}
          onChange={onChangeTextArea}
          focused={focused}
          valueLength={value.length}
        />
      </Styled.TextAreaWrap>

      {validationState === 'invalid' && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FieldWrap>
  )
}
