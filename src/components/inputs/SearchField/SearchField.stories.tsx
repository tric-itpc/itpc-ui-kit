import React, { useState } from "react"

import { Meta, StoryObj } from "@storybook/react"

import { AutoComplete } from "../../../enums"
import { Item, Preloader } from "../../index"

import { Props, SearchField } from "./index"

const meta: Meta<typeof SearchField> = {
  component: SearchField,
  title: "Inputs/SearchField",
}

export default meta

type Story = StoryObj<typeof SearchField>

const mockItems: Item[] = [
  {
    id: "1",
    value:
      "Cat Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorevm ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
  const [items, setItems] = useState<Item[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [, setSelectedItem] = useState<Item | null>(null)

  const onChange = (id: string): void => {
    setSelectedItem(items.find((item) => item.id === id) ?? null)
  }

  const fetchData = async () => {
    setIsLoading(true)
    setTimeout(() => {
      setItems(mockItems)
      setIsLoading(false)
    }, 2000)
  }

  const clear = (): void => {
    setSelectedItem(null)
    setItems([])
  }

  return (
    <SearchField
      {...args}
      fetchData={fetchData}
      handleClear={clear}
      icon={isLoading ? <Preloader /> : null}
      isDisableClickIcon={isLoading}
      items={items}
      onChange={onChange}
    />
  )
}

export const Basic: Story = {
  args: {
    items: mockItems,
    onChange: () => {},
    placeholder: "Animal",
  },
  name: "Базовый",
}

export const Controlled: Story = {
  args: {
    ...Basic.args,
    autoComplete: AutoComplete.OFF,
    items: mockItems,
  },
  name: "Управляемый",
  render: (args) => <Template {...args} />,
}

export const InsertCurrentlySelected: Story = {
  args: {
    ...Basic.args,
    autoComplete: AutoComplete.OFF,
    isInsertCurrentlySelected: true,
    items: mockItems,
  },
  name: "С подстановкой из списка",
  render: (args) => <Template {...args} />,
}

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
    items: mockItems,
  },
  name: "Отключённый",
}
