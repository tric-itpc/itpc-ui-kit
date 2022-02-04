import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DatePicker, DatePickerProps } from '../components/DatePicker'
import { FormattedValues } from "../components"

export default {
  title: 'Components/DatePicker',
  component: DatePicker
} as ComponentMeta<React.FC<DatePickerProps>>

const Template: ComponentStory<React.FC<DatePickerProps>> = (args) => {
  const [date, setDate] = useState<FormattedValues>({ value: '', formattedValue: '' })

  const onChange = (inputValue: FormattedValues): void => {
    setDate(inputValue)
  }

  return (
    <div>
      <DatePicker {...args} value={date.value} onChange={onChange} offsetYear={100} />
      <p>Value: {date.value}</p>
      <p>Formatted value: {date.formattedValue}</p>
    </div>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  placeholder: 'Enter date',
  validationState: 'valid',
  errorMessage: 'Error message'
}
