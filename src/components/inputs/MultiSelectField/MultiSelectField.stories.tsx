import React, { useState } from "react"

import { Meta, StoryObj } from "@storybook/react"

import { Item } from "../../index"

import { MultiSelectField, Props } from "./index"

const meta: Meta<typeof MultiSelectField> = {
  component: MultiSelectField,
  title: "Inputs/MultiSelectField",
}

export default meta

type Story = StoryObj<typeof MultiSelectField>

const mockItems: Item[] = [
  {
    id: "1",
    value: "Cat",
  },
  {
    id: "2",
    value: "Dog",
  },
  {
    id: "3",
    value: "Duck",
  },
  {
    id: "4",
    value: "Bear",
  },
  {
    id: "5",
    value: "Mouse",
  },
  {
    id: "6",
    value: "Tiger",
  },
  {
    id: "7",
    value: "Lion",
  },
]

const Template: React.FC<Props> = (args) => {
  const [selectedItems, setSelectedItems] = useState<[] | Item[]>([
    {
      id: "1",
      value: "Cat",
    },
  ])

  const onChange = (values: string[]): void => {
    setSelectedItems(mockItems.filter((item) => values.includes(item.id)))
  }

  return (
    <MultiSelectField
      {...args}
      items={mockItems}
      onChange={onChange}
      selectedItems={selectedItems.map((item) => item.id)}
    />
  )
}

export const Basic: Story = {
  args: {
    items: mockItems,
    placeholder: "Animal",
  },
  name: "Базовый",
}

export const Controlled: Story = {
  args: {
    ...Basic.args,
    items: mockItems,
  },
  name: "Управляемый",
  render: (args) => <Template {...args} />,
}

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
  name: "Заблокированный",
}
