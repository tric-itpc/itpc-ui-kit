import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Button } from "../components/Button"
import { Card, Props } from "../components/Card"
import { Theme } from "../components/types"

export default {
  component: Card,
  title: "Components/Card",
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => (
  <Card {...args}>
    <form>
      <p>My form</p>
      <Button theme={args.theme}>Test</Button>
    </form>
  </Card>
)

export const Basic = Template.bind({})
Basic.args = {
  isBordered: true,
  theme: Theme.DEFAULT,
  title: "My card",
}

export const CardDark = Template.bind({})
CardDark.args = {
  isBordered: true,
  theme: Theme.DARK,
  title: "My card",
}

CardDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
