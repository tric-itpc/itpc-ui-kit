import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Flex, FlexProps } from "../components/Flex"

export default {
  component: Flex,
  title: "Components/Flex",
} as ComponentMeta<React.FC<FlexProps>>

const Template: ComponentStory<React.FC<FlexProps>> = (args) => (
  <Flex {...args}>
    <p style={{ margin: "0" }}>Flex</p>
    <p style={{ margin: "0" }}>Flex</p>
  </Flex>
)

export const Basic = Template.bind({})
Basic.args = {}
