import React from "react"

import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../../index"

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Buttons/Button",
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: "Button",
    onPress: (e) => {
      console.log("Press primary button", e)
    },
  },
  render: (args) => <Button {...args} />,
}

export const Red: Story = {
  args: {
    children: "Button",
    variant: "red",
  },
}

export const White: Story = {
  args: {
    children: "Button",
    variant: "white",
  },
}

export const Disabled: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
}
