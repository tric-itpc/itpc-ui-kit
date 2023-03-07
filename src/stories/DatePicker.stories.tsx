import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DatePicker, Props } from '../components/DatePicker'
import { FormattedValues } from "../components"
import { IInfo } from '../components/types'

export default {
  title: 'Components/DatePicker',
  component: DatePicker
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => {
  const [date, setDate] = useState<FormattedValues>({ value: '', formattedValue: '' })

  const onChange = (
    inputValue: FormattedValues,
    event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLTableCellElement>,
    info: IInfo
  ): void => {
    setDate(inputValue)
  }

  return (
    <>
      <DatePicker {...args} value={date.value} onChange={onChange} />
      <p>Value: {date.value}</p>
      <p>Formatted value: {date.formattedValue}</p>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  placeholder: 'Enter date',
  validationState: 'valid',
  errorMessage: 'Error message',
  withTime: false,
  disabledDates: ['2023-01-25'],
  disabledAfterDate: '2023-02-05'
}
