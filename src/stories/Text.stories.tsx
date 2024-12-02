import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { TextProps, Typography } from "../components/Typography"
import { ThemeDecorator } from "../config/ThemeDecorator"
import { Theme } from "../enums"

const { Text } = Typography

export default {
  component: Text,
  title: "Components/Text",
} as ComponentMeta<React.FC<TextProps>>

const Template: ComponentStory<React.FC<TextProps>> = (args) => (
  <Text {...args} />
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
