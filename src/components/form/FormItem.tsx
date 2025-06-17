import React, { useEffect } from "react"

import { useFormContext } from "./FormContext"
import { Rule, ValidateError } from "./types"

interface Props {
  /** Компонент формы (Checkbox, TextField и т.д.) */
  children: React.ReactNode
  /** Дополнительный класс */
  className?: string
  /** Пропсы передаваемого компонента */
  componentProps?: Record<string, any>
  /** Метод получения значения из компонента. Пример: const getValue = (v) => v.value */
  getValueFromEvent?: (...args: any[]) => any
  /** Название поля формы */
  name: string
  /** Подпись поля */
  placeholder?: string
  /** Флаг обязательности поля */
  required?: boolean
  /** Список правил валидации */
  rules?: Rule[]
  /** Стили */
  style?: React.CSSProperties
  /** Название значения поля. Например, для чекбокса - checked, а для инпута - value */
  valuePropName?: string
}

export const FormItem: React.FC<Props> = ({
  children,
  className,
  componentProps,
  getValueFromEvent = (...args) => args[0]?.target?.value,
  name,
  placeholder,
  required = true,
  rules = [],
  style,
  valuePropName = "value",
}) => {
  const form = useFormContext()

  const value = form.getFieldValue(name)
  const errors: ValidateError[] = form.getFieldError(name)
  const errorMessage = errors.map((e) => e.message).join("; ")

  const onChange = (...args: any[]) => {
    const val = getValueFromEvent(...args)
    form.setFieldValue(name, val)
  }

  const childNode = React.isValidElement(children)
    ? React.cloneElement(children as React.ReactElement, {
        ...componentProps,
        errorMessage,
        onChange,
        placeholder,
        required,
        validationState: errorMessage.length ? "invalid" : "valid",
        [valuePropName]: value,
      })
    : children

  useEffect(() => {
    form.registerField({ name, rules, value: form.getFieldValue(name) })
    return () => {
      form.unregisterField(name)
    }
  }, [name, rules])

  return (
    <div className={className} style={style}>
      {childNode}
    </div>
  )
}
