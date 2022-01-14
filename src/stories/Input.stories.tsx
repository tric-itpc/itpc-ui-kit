import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { InputField, InputFieldProps } from '../InputField'

export default {
  title: 'Components/InputField',
  component: InputField
} as ComponentMeta<React.FC<InputFieldProps>>

const Template: ComponentStory<React.FC<InputFieldProps>> = (args) => <InputField {...args} />

export const Basic = Template.bind({})
Basic.args = {
  placeholder: 'Enter text'
}
