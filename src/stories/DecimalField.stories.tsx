import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { DecimalField, Props } from "../components/DecimalField"

export default {
  component: DecimalField,
  title: "Components/DecimalField",
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => {
  const [value, setValue] = useState<string>(args.value ?? "")

  const onChange = (valueInput: string): void => {
    setValue(valueInput)
  }

  return (
    <>
      <DecimalField {...args} onChange={onChange} value={value} />
      <p>Value: {value}</p>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  accuracy: 4,
  errorMessage: "Error message",
  placeholder: "Enter text",
  validationState: "valid",
}
