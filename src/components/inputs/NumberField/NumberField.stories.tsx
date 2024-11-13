import React from "react"

import { Meta, StoryObj } from "@storybook/react"

import { IconWarning } from "../../_elements"
import { NumberField } from "../../index"

const meta: Meta<typeof NumberField> = {
  component: NumberField,
  title: "Inputs/NumberField",
}

export default meta

type Story = StoryObj<typeof NumberField>

export const Basic: Story = {
  args: {
    format: "+7 (###) - ### - ## - ##",
    mask: "_",
    placeholder: "Phone number",
  },
  name: "Базовый",
}

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
  name: "Отключённый",
}

export const WithIcon: Story = {
  args: {
    ...Basic.args,
    icon: <IconWarning />,
  },
  name: "С иконкой",
}
