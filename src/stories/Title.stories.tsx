import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { TitleProps, Typography } from "../components/Typography"
import { ThemeDecorator } from "../config/ThemeDecorator"
import { Theme } from "../enums"

const { Title } = Typography

export default {
  component: Title,
  title: "Components/Title",
} as ComponentMeta<React.FC<TitleProps>>

const Template: ComponentStory<React.FC<TitleProps>> = (args) => (
  <Title {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  children: "Title",
}
Basic.decorators = [ThemeDecorator(Theme.DEFAULT)]

export const TitleDark = Template.bind({})
TitleDark.args = {
  children: "Title",
}
TitleDark.decorators = [ThemeDecorator(Theme.DARK)]
TitleDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
