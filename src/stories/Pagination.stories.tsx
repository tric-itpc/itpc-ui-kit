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
  const [start, setStart] = useState<number>(0)
  const [end, setEnd] = useState<number>(0)

  const paginationResult = (pagination: PaginationResult): void => {
    setStart(pagination.start)
    setEnd(pagination.end)
  }

  return (
    <>
      <Pagination
        step={10}
        dataLength={mockItems.length}
        callback={paginationResult}
      />
      <p>start: {start}</p>
      <p>end: {end}</p>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {}
