import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { FormattedValues, Typography } from "../components"
import { DatePicker, Props } from "../components/DatePicker"
import type { PositionType } from "../components/DatePicker/types"
import { ThemeDecorator } from "../config/ThemeDecorator"
import { Theme } from "../enums"

const { Text } = Typography

export default {
  component: DatePicker,
  title: "Components/DatePicker",
} as ComponentMeta<React.FC<Props<PositionType>>>

const Template: ComponentStory<React.FC<Props<PositionType>>> = (args) => {
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
      <Text>Value: {date.value}</Text>
      <Text>Formatted value: {date.formattedValue}</Text>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  errorMessage: "Error message",
  placeholder: "Enter date",
  position: "absolute",
  withTime: false,
}
Basic.decorators = [ThemeDecorator(Theme.DEFAULT)]

export const DatePickerDark = Template.bind({})
DatePickerDark.args = {
  errorMessage: "Error message",
  placeholder: "Enter date",
  validationState: "valid",
  withTime: false,
}
DatePickerDark.decorators = [ThemeDecorator(Theme.DARK)]

DatePickerDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
