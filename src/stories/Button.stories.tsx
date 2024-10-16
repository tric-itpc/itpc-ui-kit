import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Button, Props } from "../components/Button"
import { ThemeDecorator } from "../config/ThemeDecorator"
import { Theme } from "../enums"

export default {
  component: Button,
  title: "Components/Button",
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => <Button {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: "Button",
  disabled: false,
}
Basic.decorators = [ThemeDecorator(Theme.DEFAULT)]

export const ButtonDark = Template.bind({})
ButtonDark.args = {
  children: "Button",
  disabled: false,
}
ButtonDark.decorators = [ThemeDecorator(Theme.DARK)]

ButtonDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
