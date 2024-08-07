import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { MultiSelectField, Props } from "../components/MultiSelectField"
import { Item } from "../components/types"

export default {
  component: MultiSelectField,
  title: "Components/MultiSelectField",
} as ComponentMeta<React.FC<Props>>

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

const Template: ComponentStory<React.FC<Props>> = (args) => {
  const [selectedItems, setSelectedItems] = useState<Item[] | []>([
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

export const Basic = Template.bind({})
Basic.args = {
  placeholder: "Animal",
  selectedItems: ["2"],
}
