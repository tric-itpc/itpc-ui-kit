import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button, Props } from "../components/Button"

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = ({
  variant,
  disabled,
  children,
}: Props) => (
  <Button variant={variant} disabled={disabled}>
    {children}
  </Button>
)

export const Basic = Template.bind({})
Basic.args = {
  disabled: false,
  children: "Button",
}
