import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Typography } from "../components"
import { Props, TextAreaField } from "../components/TextAreaField"
import { ThemeDecorator } from "../config/ThemeDecorator"
import { Theme } from "../enums"

const { Text } = Typography

export default {
  component: TextAreaField,
  title: "Components/TextAreaField",
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => {
  const [value, setValue] = useState<string>("")

  const onChange = (valueInput: string): void => {
    setValue(valueInput)
  }

  return (
    <>
      <TextAreaField {...args} onChange={onChange} value={value} />
      <br />
      <Text>Value: {value}</Text>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  errorMessage: "Error message",
  placeholder: "Enter text",
  validationState: "valid",
}
Basic.decorators = [ThemeDecorator(Theme.DEFAULT)]

export const TextAreaDark = Template.bind({})
TextAreaDark.args = {
  errorMessage: "Error message",
  placeholder: "Enter text",
  validationState: "valid",
}
TextAreaDark.decorators = [ThemeDecorator(Theme.DARK)]

TextAreaDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
