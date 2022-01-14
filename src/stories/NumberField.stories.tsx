import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { NumberField, NumberFieldProps } from '../components/NumberField'
import { FormattedValues } from "../components"

export default {
  title: 'Components/NumberField',
  component: NumberField
} as ComponentMeta<React.FC<NumberFieldProps>>

const Template: ComponentStory<React.FC<NumberFieldProps>> = (args) => {
  const [date, setDate] = useState<FormattedValues>({ value: '', formattedValue: '' })

  const onChange = (inputValue: FormattedValues): void => {
    setDate(inputValue)
  }

  return (
    <div>
      <NumberField {...args} value={date.value} onChange={onChange} />
      <p>Value: {date.value}</p>
      <p>Formatted value: {date.formattedValue}</p>
    </div>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  placeholder: 'Enter snils',
  validationState: 'valid',
  errorMessage: 'Phone number is invalid',
  format: '###-###-### ##',
  mask: '_'
}
