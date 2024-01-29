import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { FormattedValues, IInfo } from "../components"
import { DatePicker, Props } from "../components/DatePicker"

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
      <p>Value: {date.value}</p>
      <p>Formatted value: {date.formattedValue}</p>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  errorMessage: "Error message",
  placeholder: "Enter date",
  validationState: "valid",
  withTime: false,
}
