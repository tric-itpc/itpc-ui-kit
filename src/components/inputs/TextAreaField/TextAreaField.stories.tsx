import React, { useState } from "react"

import { Meta, StoryObj } from "@storybook/react"

import { Props, TextAreaField } from "./index"

const meta: Meta<typeof TextAreaField> = {
  component: TextAreaField,
  title: "Inputs/TextAreaField",
}

export default meta

type Story = StoryObj<typeof TextAreaField>

const Template: React.FC<Props> = (args) => {
  const [value, setValue] = useState<string>("")

  const onChange = (valueInput: string): void => {
    setValue(valueInput)
  }

  return <TextAreaField {...args} onChange={onChange} value={value} />
}

export const Basic: Story = {
  args: {
    placeholder: "Text area",
  },
  name: "Базовый",
}

export const Controlled: Story = {
  args: {
    ...Basic.args,
    maxHeight: 92,
  },
  name: "Управляемый",
  render: (args) => <Template {...args} />,
}

export const Fix: Story = {
  args: {
    ...Basic.args,
    fixedHeight: 92,
  },
  name: "Фиксированная высота",
  render: (args) => <Template {...args} />,
}

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
  name: "Отключенный",
}
