import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Text } from "../components"
import { Props, TextAreaField } from "../components/TextAreaField"
import { Theme } from "../components/types"

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
      <TextAreaField
        {...args}
        onChange={onChange}
        theme={args.theme}
        value={value}
      />
      <br />
      <Text theme={args.theme}>Value: {value}</Text>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  errorMessage: "Error message",
  placeholder: "Enter text",
  theme: Theme.DEFAULT,
  validationState: "valid",
}

export const TextAreaDark = Template.bind({})
TextAreaDark.args = {
  errorMessage: "Error message",
  placeholder: "Enter text",
  theme: Theme.DARK,
  validationState: "valid",
}

TextAreaDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
