import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { FormattedValues } from "../components"
import { NumberField, Props } from "../components/NumberField"

export default {
  component: NumberField,
  title: "Components/NumberField",
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => {
  const [date, setDate] = useState<FormattedValues>({
    formattedValue: "",
    value: "",
  })

  const onChange = (inputValue: FormattedValues): void => {
    setDate(inputValue)
  }

  return (
    <div>
      <NumberField
        {...args}
        id="itpc-number-field-id"
        name="itpc-number-field-name"
        onChange={onChange}
        value={date.value}
      />
      <p>Value: {date.value}</p>
      <p>Formatted value: {date.formattedValue}</p>
    </div>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  errorMessage: "Phone number is invalid",
  format: "###-###-### ##",
  mask: "_",
  placeholder: "Enter snils",
  validationState: "valid",
}
