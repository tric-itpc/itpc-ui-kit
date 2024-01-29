import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Item } from "../components"
import { Props, SelectField } from "../components/SelectField"

export default {
  component: SelectField,
  title: "Components/SelectField",
} as ComponentMeta<React.FC<Props>>

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

const Template: ComponentStory<React.FC<Props>> = (args) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  const onChange = (id: string): void => {
    setSelectedItem(mockItems.find((item) => item.id === id) ?? null)
  }

  return (
    <SelectField
      {...args}
      defaultItemId={selectedItem?.id}
      items={mockItems}
      onChange={onChange}
    />
  )
}

export const Basic = Template.bind({})
Basic.args = {
  defaultItemId: "2",
  placeholder: "Animal",
}
