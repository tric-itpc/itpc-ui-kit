import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { FormattedValues, IInfo } from "../components"
import { DatePicker, Props } from "../components/DatePicker"
import { Text } from "../components/Text"
import { Theme } from "../components/types"

export default {
  component: DatePicker,
  title: "Components/DatePicker",
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
    <>
      <DatePicker {...args} onChange={onChange} value={date.value} />
      <br />
      <Text theme={args.theme}>Value: {date.value}</Text>
      <Text theme={args.theme}>Formatted value: {date.formattedValue}</Text>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  errorMessage: "Error message",
  placeholder: "Enter date",
  theme: Theme.DEFAULT,
  validationState: "valid",
  withTime: false,
}

export const DatePickerDark = Template.bind({})
DatePickerDark.args = {
  errorMessage: "Error message",
  placeholder: "Enter date",
  theme: Theme.DARK,
  validationState: "valid",
  withTime: false,
}

DatePickerDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
