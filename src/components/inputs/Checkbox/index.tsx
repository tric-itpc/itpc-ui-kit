import React, { HTMLAttributes } from "react"

import cn from "classnames"

import {
  InputCheckboxLabelPosition,
  InputCheckboxType,
  InputCheckboxVariant,
} from "../../types"

import "./styles.css"

export interface Props
  extends Omit<HTMLAttributes<HTMLLabelElement>, "onClick"> {
  /** Дополнительный класс */
  className?: string
  /** Отключение кнопки */
  disabled?: boolean
  /** Атрибут id инпута */
  id: string
  /** Атрибуты инпута */
  inputAttr?: HTMLAttributes<HTMLInputElement>
  /** Флаг размытия инпута */
  isBlurCheckbox?: boolean
  /** Флаг размытия левой подписи */
  isBlurLabelLeft?: boolean
  /** Флаг размытия правой подписи */
  isBlurLabelRight?: boolean
  /** Флаг активности */
  isChecked?: boolean
  /** Подпись справа */
  label?: string
  /** Атрибуты подписи */
  labelAttr?: HTMLAttributes<HTMLSpanElement>
  /** Подпись слева */
  labelLeft?: string
  /** Позиция подписи */
  labelPosition?: InputCheckboxLabelPosition
  /** Атрибут name инпута */
  name: string
  /** Обработчик клика */
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Тип */
  type?: InputCheckboxType
  /** Вариант */
  variant?: InputCheckboxVariant
}

export const Checkbox: React.FC<Props> = ({
  className = "",
  disabled = false,
  id,
  inputAttr,
  isBlurCheckbox = false,
  isBlurLabelLeft = false,
  isBlurLabelRight = false,
  isChecked = false,
  label = "",
  labelAttr,
  labelLeft,
  labelPosition = "right",
  name,
  onClick,
  type = "checkbox",
  variant = "android",
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
      checked={isChecked}
      className="itpc-checkbox__input"
      disabled={disabled}
      id={id}
      name={name}
      onChange={onClick}
      type={type}
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
