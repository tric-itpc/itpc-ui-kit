import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SearchField, Props } from '../components/SearchField'
import { Item } from "../components"

export default {
  title: 'Components/SearchField',
  component: SearchField
} as ComponentMeta<React.FC<Props>>

const mockItems: Item[] = [
  {
    id: '1',
    value: 'Cat'
  }, {
    id: '2',
    value: 'Dog'
  }, {
    id: '3',
    value: 'Duck'
  }, {
    id: '4',
    value: 'Bear'
  }, {
    id: '5',
    value: 'Mouse'
  }, {
    id: '6',
    value: 'Tiger'
  }, {
    id: '7',
    value: 'Lion'
  }
]

const Template: ComponentStory<React.FC<Props>> = (args) => {
  const [items, setItems] = useState<Item[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  const onChange = (id: string): void => {
    setSelectedItem(items.find((item) => item.id === id) ?? null)
  }

  const fetchData = async (value: string) => {
    setIsLoading(true)
    await setTimeout(() => {
      setItems(mockItems)
      setIsLoading(false)
    }, 2000)
  }

  const clear = (): void => {
    setSelectedItem(null)
    setItems([])
  }

  return (
    <>
      <SearchField
        {...args}
        items={items}
        isLoading={isLoading}
        onChange={onChange}
        fetchData={fetchData}
        handleClear={clear}
      />
      <p>selected: {selectedItem?.id} {selectedItem?.value}</p>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  placeholder: 'Animal'
}
