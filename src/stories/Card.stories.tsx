import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Button } from "../components/Button"
import { Card, Props } from "../components/Card"
import { ThemeDecorator } from "../config/ThemeDecorator"
import { Theme } from "../enums"

export default {
  component: Card,
  title: "Components/Card",
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => (
  <Card {...args}>
    <form>
      <p>My form</p>
      <Button>Test</Button>
    </form>
  </Card>
)

export const Basic = Template.bind({})
Basic.args = {
  isBordered: true,
  title: "My card",
}
Basic.decorators = [ThemeDecorator(Theme.DEFAULT)]

export const CardDark = Template.bind({})
CardDark.args = {
  isBordered: true,
  title: "My card",
}

CardDark.decorators = [ThemeDecorator(Theme.DARK)]

CardDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
