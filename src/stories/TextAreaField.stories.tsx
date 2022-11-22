import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextAreaField, Props } from '../components/TextAreaField'

export default {
  title: 'Components/TextAreaField',
  component: TextAreaField
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => {
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
