import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SelectField, SelectFieldProps } from '../components/SelectField'
import { Item } from "../components/types"

export default {
  title: 'Components/SelectField',
  component: SelectField
} as ComponentMeta<React.FC<SelectFieldProps>>

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

const Template: ComponentStory<React.FC<SelectFieldProps>> = (args) => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  const onChange = (id: string): void => {
    setSelectedItem(mockItems.find((item) => item.id === id) ?? null)
  }

  return (
    <SelectField
      {...args}
      items={mockItems}
      defaultItemId={selectedItem?.id}
      onChange={onChange}
    />
  )
}

export const Basic = Template.bind({})
Basic.args = {
  defaultItemId: '2',
  placeholder: 'Animal'
}
