import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Props, Text } from "../components/Text"

export default {
  component: Text,
  title: "Components/Text",
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = ({ children }: Props) => (
  <Text>{children}</Text>
)

export const Basic = Template.bind({})
Basic.args = {
  children: "Text",
}
