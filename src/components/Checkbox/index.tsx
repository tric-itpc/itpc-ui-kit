import React from "react"
import cn from 'classnames'

import { InputCheckboxType } from "../types"

import './styles.css'

export interface Props {
  id: string
  name: string
  type?: InputCheckboxType
  disabled?: boolean
  label?: string
  className?: string
  isChecked?: boolean
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: React.FC<Props> = ({
  id,
  name,
  type = 'checkbox',
  disabled = false,
  label = '',
  className = '',
  isChecked = false,
  onClick
}) => (
  <label className={cn('itpc-checkbox', className)}>
    <input
      id={id}
      name={name}
      type={type}
      disabled={disabled}
      checked={isChecked}
      className="itpc-checkbox__input"
      onChange={onClick}
    />
    <div className="itpc-checkbox__fake" />
    <span className="itpc-checkbox__label">{label}</span>
  </label>
)
