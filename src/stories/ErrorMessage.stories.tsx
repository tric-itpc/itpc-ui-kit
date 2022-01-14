import React from "react"
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ErrorMessage, ErrorMessageProps } from '../components/ErrorMessage'

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage
} as ComponentMeta<React.FC<ErrorMessageProps>>

const Template: ComponentStory<React.FC<ErrorMessageProps>> = (args) => <ErrorMessage {...args} />

export const Basic = Template.bind({})
Basic.args = {
  marginY: 10,
  marginX: 10,
  fontSize: 14,
  children: 'Error text'
}
