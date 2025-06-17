import React, { useState } from "react"

import { Meta, StoryObj } from "@storybook/react"

import { Item } from "../../index"

import { Props, SelectField } from "./index"

const meta: Meta<typeof SelectField> = {
  component: SelectField,
  title: "Inputs/SelectField",
}

export default meta

type Story = StoryObj<typeof SelectField>

const mockItems: Item[] = [
  {
    disabled: true,
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
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  const onChange = (id: string): void => {
    setSelectedItem(mockItems.find((item) => item.id === id) ?? null)
  }

  return (
    <SelectField
      {...args}
      items={mockItems}
      onChange={onChange}
      selectedItemId={selectedItem?.id}
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
  },
  name: "Управляемый",
  render: (args) => <Template {...args} />,
}

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
  name: "Отключённый",
}
