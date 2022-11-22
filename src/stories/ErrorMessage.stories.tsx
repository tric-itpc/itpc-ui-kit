import React from "react"
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ErrorMessage, Props } from '../components/ErrorMessage'

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => <ErrorMessage {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Error text'
}
