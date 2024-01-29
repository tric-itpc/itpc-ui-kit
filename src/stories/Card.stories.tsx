import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Card, Props } from "../components/Card"

export default {
  component: Card,
  title: "Components/Card",
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => (
  <Card {...args}>
    <form>
      <p>My form</p>
      <button>Test</button>
    </form>
  </Card>
)

export const Basic = Template.bind({})
Basic.args = {
  isBordered: true,
  title: "My card",
}
