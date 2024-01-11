import React, { HTMLAttributes, useState } from "react"
import cn from "classnames"

import {
  Field,
  InputError,
  InputIcon,
  InputWrap,
  Placeholder,
} from "../_elements"

import { InputType, ValidationState } from "../types"

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  id: string
  name: string
  type?: InputType
  value?: string
  disabled?: boolean
  maxLength?: number
  placeholder?: string
  validationState?: ValidationState
  errorMessage?: string
  icon?: React.ReactNode
  className?: string
  onBlur?: () => void
  onFocus?: () => void
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TextField: React.FC<Props> = ({
  id = "itpc-input",
  name = "itpc-input",
  type = "text",
  value = "",
  disabled = false,
  maxLength,
  placeholder = "",
  validationState = "valid",
  errorMessage = "",
  icon,
  className = "",
  onBlur,
  onFocus,
  onChange,
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
    <Field className={className} {...rest}>
      <InputWrap focused={focused} validationState={validationState}>
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
          className={cn(
            "itpc-input",
            (focused || !!value.length) && "itpc-input_focused"
          )}
          maxLength={maxLength}
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
