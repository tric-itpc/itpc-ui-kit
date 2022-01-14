import React from "react"
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ButtonProps } from '../Button'

export default {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<React.FC<ButtonProps>>

const Template: ComponentStory<React.FC<ButtonProps>> = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  variant: 'primary',
  disabled: false,
  children: 'Button'
}
