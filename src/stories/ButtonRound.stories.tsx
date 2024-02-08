import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { IconWarning } from "../components/_elements"
import { ButtonRound, Props } from "../components/ButtonRound"

export default {
  component: ButtonRound,
  title: "Components/ButtonRound",
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => (
  <ButtonRound {...args}>
    <IconWarning />
  </ButtonRound>
)

export const Basic = Template.bind({})
Basic.args = {
  disabled: false,
}
