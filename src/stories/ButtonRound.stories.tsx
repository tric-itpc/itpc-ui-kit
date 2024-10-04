import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { IconWarning } from "../components/_elements"
import { ButtonRound, Props } from "../components/ButtonRound"
import { Theme } from "../components/types"
import { ThemeDecorator } from "../config/ThemeDecorator"

export default {
  component: ButtonRound,
  title: "Components/ButtonRound",
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => (
  <ButtonRound {...args}>{args.children}</ButtonRound>
)

export const Basic = Template.bind({})
Basic.args = {
  children: <IconWarning />,
  disabled: false,
  theme: Theme.DEFAULT,
  tooltip: "текст",
}
Basic.decorators = [ThemeDecorator(Theme.DEFAULT)]

export const ButtonRoundDark = Template.bind({})
ButtonRoundDark.args = {
  children: <IconWarning />,
  disabled: false,
  theme: Theme.DARK,
  tooltip: "текст",
}
ButtonRoundDark.decorators = [ThemeDecorator(Theme.DARK)]

ButtonRoundDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
