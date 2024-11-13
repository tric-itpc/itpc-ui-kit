import React from "react"

import { Meta, StoryObj } from "@storybook/react"

import { Tabs, TabsItem } from "../../index"

const items: TabsItem[] = [
  {
    content: <div>First tab</div>,
    title: "First",
  },
  {
    content: <div>Second tab</div>,
    title: "Second",
  },
  {
    content: <div>Third tab</div>,
    title: "Third",
  },
]

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "Content/Tabs",
}

export default meta

type Story = StoryObj<typeof Tabs>

export const Basic: Story = {
  args: {
    items,
  },
  name: "Базовый",
}

export const Disabled: Story = {
  args: {
    disabled: true,
    items,
  },
  name: "Отключённый",
}
