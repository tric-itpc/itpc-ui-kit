import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { ErrorMessage, Props } from "../components/ErrorMessage"
import { Theme } from "../components/types"
import { ThemeDecorator } from "../config/ThemeDecorator"

export default {
  component: ErrorMessage,
  title: "Components/ErrorMessage",
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => (
  <ErrorMessage {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  children: "Error text",
  theme: Theme.DEFAULT,
}
Basic.decorators = [ThemeDecorator(Theme.DEFAULT)]

export const ErrorMessageDark = Template.bind({})
ErrorMessageDark.args = {
  children: "Error text",
  theme: Theme.DARK,
}
ErrorMessageDark.decorators = [ThemeDecorator(Theme.DARK)]

ErrorMessageDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
