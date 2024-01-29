import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Props, TextAreaField } from "../components/TextAreaField"

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
