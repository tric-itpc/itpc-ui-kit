import React from "react"
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Tabs, TabsProps } from '../components/Tabs'
import { TabsItem } from "../components"

const items: TabsItem[] = [
  {
    title: 'First',
    content: (
      <div>First tab</div>
    )
  }, {
    title: 'Second',
    content: (
      <div>Second tab</div>
    )
  }, {
    title: 'Third',
    content: (
      <div>Third tab</div>
    )
  }
]

export default {
  title: 'Components/Tabs',
  component: Tabs
} as ComponentMeta<React.FC<TabsProps>>

const Template: ComponentStory<React.FC<TabsProps>> = (args) => (
  <Tabs {...args} items={items} />
)

export const Basic = Template.bind({})
Basic.args = {}
