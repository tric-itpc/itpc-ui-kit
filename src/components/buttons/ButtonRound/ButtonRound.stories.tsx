import React from "react"

import type { Meta, StoryObj } from "@storybook/react"

import { IconWarning } from "../../_elements"
import { ButtonRound } from "../../index"

const meta: Meta<typeof ButtonRound> = {
  component: ButtonRound,
  render: (args) => (
    <ButtonRound {...args}>
      <IconWarning />
    </ButtonRound>
  ),
  title: "Buttons/ButtonRound",
}

export default meta

type Story = StoryObj<typeof ButtonRound>

export const Basic: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const WithTooltip: Story = {
  args: {
    tooltip: "Tooltip",
  },
  name: "С тултипом",
}
