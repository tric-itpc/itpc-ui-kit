import React from "react"
import cn from "classnames"

import {
  InputCheckboxLabelPosition,
  InputCheckboxType,
  InputCheckboxVariant,
} from "../types"

import "./styles.css"

export interface Props {
  id: string
  name: string
  type?: InputCheckboxType
  variant?: InputCheckboxVariant
  labelPosition?: InputCheckboxLabelPosition
  disabled?: boolean
  label?: string
  className?: string
  isChecked?: boolean
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: React.FC<Props> = ({
  id,
  name,
  type = "checkbox",
  variant = "android",
  labelPosition = "right",
  disabled = false,
  label = "",
  className = "",
  isChecked = false,
  onClick,
}) => (
  <label className={cn("itpc-checkbox", className)}>
    {labelPosition === "left" && (
      <span className="itpc-checkbox__label itpc-checkbox__label_left">
        {label}
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
    />
    <div
      className={cn("itpc-checkbox__fake", `itpc-checkbox__fake_${variant}`)}
    />
    {labelPosition === "right" && (
      <span className="itpc-checkbox__label">{label}</span>
    )}
  </label>
)
