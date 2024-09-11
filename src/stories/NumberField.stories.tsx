import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { FormattedValues, Text } from "../components"
import { NumberField, Props } from "../components/NumberField"
import { Theme } from "../components/types"

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
      <Text theme={args.theme}>Value: {date.value}</Text>
      <Text theme={args.theme}>Formatted value: {date.formattedValue}</Text>
    </div>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  errorMessage: "Phone number is invalid",
  format: "+7 (###) - ### - ## - ##",
  mask: "_",
  placeholder: "Phone number",
  replaceValue: () => "",
  theme: Theme.DEFAULT,
  validationState: "valid",
}

export const NumberFieldDark = Template.bind({})
NumberFieldDark.args = {
  errorMessage: "Phone number is invalid",
  format: "+7 (###) - ### - ## - ##",
  mask: "_",
  placeholder: "Phone number",
  replaceValue: () => "",
  theme: Theme.DARK,
  validationState: "valid",
}

NumberFieldDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
