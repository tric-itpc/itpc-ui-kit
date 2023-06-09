import React, { useState } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { TextField, Props } from "../components/TextField"
import { IconOk } from "../components/_elements"

export default {
  title: "Components/TextField",
  component: TextField,
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
        value={value}
        onChange={onChange}
        icon={
          <div onClick={() => setValue("test")}>
            <IconOk />
          </div>
        }
      />
      <p>Value: {value}</p>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  placeholder: "Enter text",
  validationState: "valid",
  errorMessage: "Error message",
}
