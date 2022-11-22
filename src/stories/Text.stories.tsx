import React from "react"
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text, Props } from '../components/Text'

export default {
  title: 'Components/Text',
  component: Text
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = ({
  children
}: Props) => <Text>{children}</Text>

export const Basic = Template.bind({})
Basic.args = {
  children: 'Text'
}
