import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextAreaField, TextAreaFieldProps } from '../components/TextAreaField'

export default {
  title: 'Components/TextAreaField',
  component: TextAreaField
} as ComponentMeta<React.FC<TextAreaFieldProps>>

const Template: ComponentStory<React.FC<TextAreaFieldProps>> = (args) => {
  const [value, setValue] = useState<string>('')

  const onChange = (valueInput: string): void => {
    setValue(valueInput)
  }

  return (
    <>
      <TextAreaField {...args} value={value} onChange={onChange} />
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
