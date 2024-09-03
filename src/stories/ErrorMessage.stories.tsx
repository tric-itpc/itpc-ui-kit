import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { ErrorMessage, Props } from "../components/ErrorMessage"
import { ThemeDecorator } from "../config/ThemeDecorator"
import { Theme } from "../enums"

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
}
Basic.decorators = [ThemeDecorator(Theme.DEFAULT)]

export const ErrorMessageDark = Template.bind({})
ErrorMessageDark.args = {
  children: "Error text",
}
ErrorMessageDark.decorators = [ThemeDecorator(Theme.DARK)]

ErrorMessageDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
