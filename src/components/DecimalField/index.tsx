import React, { HTMLAttributes, useState } from "react"

import cn from "classnames"

import {
  Field,
  InputError,
  InputIcon,
  InputWrap,
  Placeholder,
} from "../_elements"
import { DecimalFixed } from "../../lab"
import { ValidationState } from "../types"

import { dotRegExp, numberAndOnlyPointRegExp } from "./constants"

export interface Props
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "onChange" | "onFocus" | "onBlur"
  > {
  accuracy: number
  canEmptyString: boolean
  className?: string
  disabled?: boolean
  errorMessage?: string
  icon?: React.ReactNode
  id: string
  maxLength?: number
  name: string
  onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void
  onFocus?: (event?: React.FocusEvent<HTMLInputElement>) => void
  placeholder?: string
  validationState?: ValidationState
  value?: string
}

export const DecimalField: React.FC<Props> = ({
  accuracy = 0,
  canEmptyString = false,
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
  validationState = "valid",
  value = "",
  ...rest
}) => {
  const [focused, onHandleFocused] = useState<boolean>(false)

  const onBlurInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    onHandleFocused(false)

    if (onBlur) {
      onBlur(event)
    }
  }

  const onFocusInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    onHandleFocused(true)

    if (onFocus) {
      onFocus(event)
    }
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget

    if (canEmptyString && !value.length && onChange) {
      onChange(value, event)
      return
    }

    const valueWithReplace = value.replace(dotRegExp, ".")
    const isValid = numberAndOnlyPointRegExp.test(valueWithReplace)

    if (isValid && onChange) {
      onChange(new DecimalFixed(valueWithReplace, accuracy).toString(), event)
    }
  }

  return (
    <Field className={className} {...rest}>
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
          type="text"
          value={value}
        />

        <InputError
          errorMessage={errorMessage}
          show={validationState === "invalid" || validationState === "warning"}
          validationType={validationState}
        />

        {icon && <InputIcon>{icon}</InputIcon>}
      </InputWrap>
    </Field>
  )
}
