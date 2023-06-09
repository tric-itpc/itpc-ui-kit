import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Card, Props } from "../components/Card"

export default {
  title: "Components/Card",
  component: Card,
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
  title: "My card",
  isBordered: true,
}
