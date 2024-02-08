import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { IconOk } from "../components/_elements"
import { Props, TextField } from "../components/TextField"

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
          <div onClick={() => setValue("test")}>
            <IconOk />
          </div>
        }
        onChange={onChange}
        value={value}
      />
      <p>Value: {value}</p>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  errorMessage: "Error message",
  placeholder: "Enter text",
  validationState: "valid",
}
