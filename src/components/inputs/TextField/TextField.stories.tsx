import React, { useState } from "react"

import { Meta, StoryObj } from "@storybook/react"

import { IconOk } from "../../_elements"

import { Props, TextField } from "./index"

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: "Inputs/TextField",
}

export default meta

type Story = StoryObj<typeof TextField>

const Template: React.FC<Props> = (args) => {
  const [value, setValue] = useState<string>("")

  const onChange = (valueInput: string): void => {
    setValue(valueInput)
  }

  return <TextField {...args} onChange={onChange} value={value} />
}

export const Basic: Story = {
  args: {
    placeholder: "Text field",
  },
  name: "Базовый",
}

export const Controlled: Story = {
  args: {
    ...Basic.args,
  },
  name: "Управляемый",
  render: (args) => <Template {...args} />,
}

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
  name: "Отключенный",
}

export const WithIcon: Story = {
  args: {
    ...Basic.args,
    icon: <IconOk />,
  },
  name: "С иконкой",
}
