import React, { HTMLAttributes } from "react"
import cn from "classnames"

import {
  InputCheckboxLabelPosition,
  InputCheckboxType,
  InputCheckboxVariant,
} from "../types"

import "./styles.css"

export interface Props
  extends Omit<HTMLAttributes<HTMLLabelElement>, "onClick"> {
  id: string
  name: string
  type?: InputCheckboxType
  variant?: InputCheckboxVariant
  labelPosition?: InputCheckboxLabelPosition
  disabled?: boolean
  labelLeft?: string
  label?: string
  isBlurLabelLeft?: boolean
  isBlurLabelRight?: boolean
  isBlurCheckbox?: boolean
  className?: string
  isChecked?: boolean
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputAttr?: HTMLAttributes<HTMLInputElement>
  labelAttr?: HTMLAttributes<HTMLSpanElement>
}

export const Checkbox: React.FC<Props> = ({
  id,
  name,
  type = "checkbox",
  variant = "android",
  labelPosition = "right",
  disabled = false,
  labelLeft,
  label = "",
  isBlurLabelLeft = false,
  isBlurLabelRight = false,
  isBlurCheckbox = false,
  className = "",
  isChecked = false,
  onClick,
  inputAttr,
  labelAttr,
  ...rest
}) => (
  <label
    className={cn(
      "itpc-checkbox",
      isBlurCheckbox && "itpc-checkbox_blur",
      className
    )}
    {...rest}
  >
    {(labelPosition === "left" || labelPosition === "all") && (
      <span
        className={cn(
          "itpc-checkbox__label",
          "itpc-checkbox__label_left",
          isBlurLabelLeft && "itpc-checkbox__label_blur"
        )}
        {...labelAttr}
      >
        {labelLeft ?? label}
      </span>
    )}

    <input
      id={id}
      name={name}
      type={type}
      disabled={disabled}
      checked={isChecked}
      className="itpc-checkbox__input"
      onChange={onClick}
      {...inputAttr}
    />
    <div
      className={cn("itpc-checkbox__fake", `itpc-checkbox__fake_${variant}`)}
    />

    {(labelPosition === "right" || labelPosition === "all") && (
      <span
        className={cn(
          "itpc-checkbox__label",
          isBlurLabelRight && "itpc-checkbox__label_blur"
        )}
        {...labelAttr}
      >
        {label}
      </span>
    )}
  </label>
)
