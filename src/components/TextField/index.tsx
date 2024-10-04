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
  className?: string
  disabled?: boolean
  errorMessage?: string
  icon?: React.ReactNode
  id: string
  maxLength?: number
  name: string
  onBlur?: () => void
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: () => void
  placeholder?: string
  type?: InputType
  validationState?: ValidationState
  value?: string
}

export const TextField: React.FC<Props> = ({
  className = "",
  disabled = false,
  errorMessage = "",
  icon,
  id = "itpc-input",
  maxLength,
  name = "itpc-input",
  onBlur,
  onChange,
  onFocus,
  placeholder = "",
  type = "text",
  validationState = "valid",
  value = "",
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
    <Field className={cn(className)} {...rest}>
      <InputWrap focused={focused} validationState={validationState}>
        <Placeholder
          focused={focused || value.length > 0}
          htmlFor={id}
          validationState={validationState}
        >
          {placeholder}
        </Placeholder>

        <input
          className={cn(
            "itpc-input",
            (focused || !!value.length) && "itpc-input_focused"
          )}
          disabled={disabled}
          id={id}
          maxLength={maxLength}
          name={name}
          onBlur={onBlurInput}
          onChange={onChangeInput}
          onFocus={onFocusInput}
          type={type}
          value={value}
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
