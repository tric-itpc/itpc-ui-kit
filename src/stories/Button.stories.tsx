import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Button, Props } from "../components/Button"

export default {
  component: Button,
  title: "Components/Button",
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = ({
  children,
  disabled,
  variant,
}: Props) => (
  <Button disabled={disabled} variant={variant}>
    {children}
  </Button>
)

export const Basic = Template.bind({})
Basic.args = {
  children: "Button",
  disabled: false,
}
