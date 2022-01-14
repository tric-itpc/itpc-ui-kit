import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MultiSelectField, MultiSelectFieldProps } from '../components/MultiSelectField'
import { Item } from "../components/types"

export default {
  title: 'Components/MultiSelectField',
  component: MultiSelectField
} as ComponentMeta<React.FC<MultiSelectFieldProps>>

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
  }
]

const Template: ComponentStory<React.FC<MultiSelectFieldProps>> = (args) => {
  const [selectedItems, setSelectedItems] = useState<Item[] | []>([
    {
      id: '1',
      value: 'Cat'
    }
  ])

  const onChange = (values: string[]): void => {
    setSelectedItems(mockItems.filter((item) => values.includes(item.id)))
  }

  return (
    <MultiSelectField
      {...args}
      items={mockItems}
      selectedItems={selectedItems.map((item) => item.id)}
      onChange={onChange}
    />
  )
}

export const Basic = Template.bind({})
Basic.args = {
  selectedItems: ['2'],
  placeholder: 'Animal'
}
