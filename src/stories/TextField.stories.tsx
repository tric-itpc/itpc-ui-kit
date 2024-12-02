import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Typography } from "../components"
import { IconOk } from "../components/_elements"
import { Props, TextField } from "../components/TextField"
import { ThemeDecorator } from "../config/ThemeDecorator"
import { Theme } from "../enums"

const { Text } = Typography

export default {
  component: TextField,
  title: "Components/TextField",
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => {
  const [value, setValue] = useState<string>("")

  const onChange = (valueInput: string): void => {
    setValue(valueInput)
  }

  return (
    <>
      <TextField
        {...args}
        icon={
          value && (
            <div onClick={() => setValue("test")}>
              <IconOk />
            </div>
          )
        }
        onChange={onChange}
        value={value}
      />
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

export const TextFieldDark = Template.bind({})
TextFieldDark.args = {
  errorMessage: "Error message",
  placeholder: "Enter text",
  validationState: "valid",
}

TextFieldDark.decorators = [ThemeDecorator(Theme.DARK)]

TextFieldDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
