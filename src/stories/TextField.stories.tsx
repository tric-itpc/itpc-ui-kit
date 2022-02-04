import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextField, TextFieldProps } from '../components/TextField'

export default {
  title: 'Components/TextField',
  component: TextField
} as ComponentMeta<React.FC<TextFieldProps>>

const Template: ComponentStory<React.FC<TextFieldProps>> = (args) => {
  const [value, setValue] = useState<string>('')

  const onChange = (valueInput: string): void => {
    setValue(valueInput)
  }

  return (
    <>
      <TextField {...args} value={value} onChange={onChange} />
      <p>Value: {value}</p>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  placeholder: 'Enter text',
  validationState: 'valid',
  errorMessage: 'Error message'
}
