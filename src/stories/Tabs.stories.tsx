import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { TabsItem } from "../components"
import { Tabs, TabsProps } from "../components/Tabs"

const items: TabsItem[] = [
  {
    content: <div>First tab</div>,
    title: "First",
  },
  {
    content: <div>Second tab</div>,
    title: "Second",
  },
  {
    content: <div>Third tab</div>,
    title: "Third",
  },
]

export default {
  component: Tabs,
  title: "Components/Tabs",
} as ComponentMeta<React.FC<TabsProps>>

const Template: ComponentStory<React.FC<TabsProps>> = (args) => (
  <Tabs {...args} items={items} />
)

export const Basic = Template.bind({})
Basic.args = {}
