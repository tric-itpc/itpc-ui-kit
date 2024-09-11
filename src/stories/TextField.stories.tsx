import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Text } from "../components"
import { IconOk } from "../components/_elements"
import { Props, TextField } from "../components/TextField"
import { Theme } from "../components/types"

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

export const TextFieldDark = Template.bind({})
TextFieldDark.args = {
  errorMessage: "Error message",
  placeholder: "Enter text",
  theme: Theme.DARK,
  validationState: "valid",
}

TextFieldDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
