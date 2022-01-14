import React, { useState } from 'react'
import NumberFormat, { NumberFormatValues } from 'react-number-format'

import { FieldWrap,Input, InputWrap, Placeholder } from "../_elements"

import { FormattedValues, ValidationState } from "../types"
import { ErrorMessage } from "../ErrorMessage"

export interface PhoneFieldProps {
  id: string
  name: string
  value?: string
  disabled?: boolean
  placeholder?: string
  validationState?: ValidationState
  errorMessage?: string
  onBlur?: () => void
  onFocus?: () => void
  onChange?: (values: FormattedValues) => void
}

export const PhoneField: React.FC<PhoneFieldProps> = ({
  id,
  name,
  value = '',
  disabled = false,
  placeholder = '',
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

  const onChangeInput = (values: NumberFormatValues): void => {
    if (onChange) {
      onChange({
        value: values.value,
        formattedValue: values.formattedValue
      })
    }
  }

  return (
    <FieldWrap>
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

        <NumberFormat
          id={id}
          name={name}
          type="text"
          value={value}
          disabled={disabled}
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          onValueChange={onChangeInput}
          focused={focused}
          valueLength={value.length}
          customInput={Input}
          isNumericString
          allowEmptyFormatting
          format="+7(###)###-##-##"
          mask="_"
        />
      </InputWrap>

      {validationState === 'invalid' && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FieldWrap>
  )
}
