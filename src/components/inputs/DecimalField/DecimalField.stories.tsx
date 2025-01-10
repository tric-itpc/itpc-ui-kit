import React, { useState } from "react"

import { Meta, StoryObj } from "@storybook/react"

import { IconWarning } from "../../_elements"

import { DecimalField } from "./index"

const meta: Meta<typeof DecimalField> = {
  component: DecimalField,
  title: "Inputs/DecimalField",
}

export default meta

type Story = StoryObj<typeof DecimalField>

const Template: React.FC = (args) => {
  const [value, setValue] = useState<string>("")

  const onChange = (valueInput: string): void => {
    setValue(valueInput)
  }

  return (
    <DecimalField
      {...args}
      id="test"
      name="test"
      onChange={onChange}
      value={value}
    />
  )
}

export const Basic: Story = {
  args: {
    id: "basic",
    placeholder: "Enter text",
  },
  name: "Базовый",
}

export const Controlled: Story = {
  args: {
    ...Basic.args,
    accuracy: 4,
  },
  name: "Управляемый",
  render: (args) => <Template {...args} />,
}

export const СanEmptyString: Story = {
  args: {
    ...Basic.args,
    accuracy: 2,
    canEmptyString: true,
    id: "сan-empty-string",
  },
  name: "С пустым значением",
  render: (args) => <Template {...args} />,
}

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
    id: "disabled",
  },
  name: "Отключено",
}

export const WithIcon: Story = {
  args: {
    ...Basic.args,
    icon: <IconWarning />,
    id: "with-icon",
  },
  name: "С иконкой",
}
