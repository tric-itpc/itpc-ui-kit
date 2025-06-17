import { ComponentKey, ComponentProps } from "./types"

export const DEFAULT_REQUIRED_MESSAGE = "Обязательное поле"

export const componentMap: Record<ComponentKey, ComponentProps> = {
  Checkbox: {
    getValueFromEvent: (e) => e?.target?.checked,
    valuePropName: "isChecked",
  },
  DatePicker: {
    getValueFromEvent: (v) => v?.value,
    valuePropName: "value",
  },
  DecimalField: {
    getValueFromEvent: (v) => v?.value,
    valuePropName: "value",
  },
  MultiSelectField: {
    getValueFromEvent: (v) => v,
    valuePropName: "value",
  },
  NumberField: {
    getValueFromEvent: (v) => v?.value,
    valuePropName: "value",
  },
  SearchField: {
    getValueFromEvent: (e) => e?.target?.value,
    valuePropName: "value",
  },
  SelectField: {
    getValueFromEvent: (v) => v,
    valuePropName: "value",
  },
  TextAreaField: {
    getValueFromEvent: (e) => e?.target?.value,
    valuePropName: "value",
  },
  TextField: {
    getValueFromEvent: (v, e) => v,
    valuePropName: "value",
  },
}
