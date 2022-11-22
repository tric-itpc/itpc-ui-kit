import React from "react"
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ButtonRound, Props } from '../components/ButtonRound'

export default {
  title: 'Components/ButtonRound',
  component: ButtonRound
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = ({
  disabled,
  children
}: Props) => (
  <ButtonRound disabled={disabled}>
    {children}
  </ButtonRound>
)

export const Basic = Template.bind({})
Basic.args = {
  disabled: false,
  children: 'B'
}
