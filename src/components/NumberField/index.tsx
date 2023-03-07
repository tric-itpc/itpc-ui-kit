/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import NumberFormat, { NumberFormatValues, SourceInfo } from 'react-number-format'
import cn from 'classnames'

import { Field, InputWrap, Placeholder } from '../_elements'

import { FormattedValues, ValidationState } from '../types'

export interface Props {
  id: string
  name: string
  value?: string
  disabled?: boolean
  placeholder?: string
  validationState?: ValidationState
  errorMessage?: string
  format?: string
  mask?: string
  prefix?: string
  suffix?: string
  allowEmptyFormatting?: boolean
  allowNegative?: boolean
  onBlur?: () => void
  onFocus?: () => void
  onChange?: (values: FormattedValues, event: React.ChangeEvent<HTMLInputElement>) => void
  getInputRef?: ((el: HTMLInputElement) => void) | React.Ref<any>
  className?: string
}

export const NumberField: React.FC<Props> = ({
  id,
  name,
  value = '',
  disabled = false,
  placeholder = '',
  validationState = 'valid',
  errorMessage = '',
  format = '',
  mask = '_',
  prefix = "",
  suffix = "",
  allowEmptyFormatting = true,
  allowNegative = false,
  onBlur,
  onFocus,
  onChange,
  getInputRef,
  className = ''
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

  const onChangeInput = (values: NumberFormatValues, sourceInfo: SourceInfo): void => {
    if (onChange) {
      onChange({
        value: values.value,
        formattedValue: values.formattedValue
      }, sourceInfo.event)
    }
  }

  return (
    <Field className={className}>
      <InputWrap focused={focused} validationState={validationState}>
        <Placeholder htmlFor={id} focused={focused || !!value.length} validationState={validationState}>
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
          className={cn('itpc-input', (focused || !!value.length) && 'itpc-input_focused')}
          isNumericString
          allowNegative={allowNegative}
          allowEmptyFormatting={allowEmptyFormatting}
          format={format}
          mask={mask}
          prefix={prefix}
          suffix={suffix}
          getInputRef={getInputRef}
        />
      </InputWrap>

      {validationState === 'invalid' && <p className="itpc-field__error-message">{errorMessage}</p>}
    </Field>
  )
}