import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { FormattedValues, Typography } from "../components"
import { NumberField, Props } from "../components/NumberField"
import { ThemeDecorator } from "../config/ThemeDecorator"
import { Theme } from "../enums"

const { Text } = Typography

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
      <br />
      <Text>Value: {date.value}</Text>
      <Text>Formatted value: {date.formattedValue}</Text>
    </div>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  errorMessage: "Phone number is invalid",
  format: "+7 (###) - ### - ## - ##",
  mask: "_",
  placeholder: "Phone number",
  validationState: "valid",
}
Basic.decorators = [ThemeDecorator(Theme.DEFAULT)]

export const NumberFieldDark = Template.bind({})
NumberFieldDark.args = {
  errorMessage: "Phone number is invalid",
  format: "+7 (###) - ### - ## - ##",
  mask: "_",
  placeholder: "Phone number",
  validationState: "valid",
}
NumberFieldDark.decorators = [ThemeDecorator(Theme.DARK)]

NumberFieldDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
