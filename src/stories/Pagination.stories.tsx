import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Pagination, Props } from '../components/Pagination'
import { Item, PaginationResult } from "../components"

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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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
  }, {
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

export default {
  title: 'Components/Pagination',
  component: Pagination
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => {
  const [items, setItems] = useState(mockItems)
  const [start, setStart] = useState<number>(0)
  const [end, setEnd] = useState<number>(0)

  const addItem = (): void => {
    setItems([...items, { id: '123', value: 'asd' }])
  }

  const deleteItem = (): void => {
    setItems([...items.slice(0, items.length - 1)])
  }

  const paginationResult = (pagination: PaginationResult): void => {
    setStart(pagination.start)
    setEnd(pagination.end)
  }

  return (
    <>
      <Pagination
        step={10}
        dataLength={items.length}
        callback={paginationResult}
      />
      <p>start: {start}</p>
      <p>end: {end}</p>
      <button onClick={addItem}>ADD</button>
      <button onClick={deleteItem}>DELETE</button>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {}
