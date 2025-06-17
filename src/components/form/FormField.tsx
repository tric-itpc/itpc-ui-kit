import React from "react"

import { componentMap } from "./constants"
import { FormItem } from "./FormItem"
import { useFieldRules } from "./hooks/useFieldRules"
import { ComponentKey, Rule } from "./types"
import { getComponentName } from "./utils/getComponentName"

interface Props {
  [key: string]: any
  /** Дополнительный класс */
  className?: string
  /** Компонент формы (Checkbox, TextField и т.д.) */
  component: React.ElementType
  /** Пропсы передаваемого компонента */
  componentProps?: Record<string, any>
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
}

export const FormField: React.FC<Props> = ({
  className,
  component: Component,
  componentProps = {},
  name,
  placeholder,
  required = false,
  rules = [],
  style,
  ...rest
}) => {
  const componentName = getComponentName(Component) as ComponentKey
  const config = componentMap[componentName] || {}
  const allRules = useFieldRules({ required, rules })

  return (
    <FormItem
      className={className}
      getValueFromEvent={config.getValueFromEvent}
      name={name}
      placeholder={placeholder}
      required={required}
      rules={allRules}
      style={style}
      valuePropName={config.valuePropName || "value"}
      {...rest}
    >
      <Component {...componentProps} />
    </FormItem>
  )
}
