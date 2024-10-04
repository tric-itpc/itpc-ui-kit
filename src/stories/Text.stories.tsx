import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Props, Text } from "../components/Text"
import { Theme } from "../components/types"
import { ThemeDecorator } from "../config/ThemeDecorator"

export default {
  component: Text,
  title: "Components/Text",
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => (
  <Text>{args.children}</Text>
)

export const Basic = Template.bind({})
Basic.args = {
  children: "Text",
}
Basic.decorators = [ThemeDecorator(Theme.DEFAULT)]

export const TextDark = Template.bind({})
TextDark.args = {
  children: "Text",
}
TextDark.decorators = [ThemeDecorator(Theme.DARK)]
TextDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
