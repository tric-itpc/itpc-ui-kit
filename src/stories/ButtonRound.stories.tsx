import React from "react"
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { IconWarning } from "../components/_elements"
import { ButtonRound, Props } from '../components/ButtonRound'

export default {
  title: 'Components/ButtonRound',
  component: ButtonRound
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = ({
  disabled
}: Props) => (
  <ButtonRound disabled={disabled}>
    <IconWarning />
  </ButtonRound>
)

export const Basic = Template.bind({})
Basic.args = {
  disabled: false
}
