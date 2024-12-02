import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { LinkProps, Typography } from "../components/Typography"
import { ThemeDecorator } from "../config/ThemeDecorator"
import { Theme } from "../enums"

const { Link } = Typography

export default {
  component: Link,
  title: "Components/Link",
} as ComponentMeta<React.FC<LinkProps>>

const Template: ComponentStory<React.FC<LinkProps>> = (args) => (
  <Link {...args} />
)

export const Basic = Template.bind({})
Basic.args = {
  children: "Link",
  href: "https://google.com",
  target: "_blank",
}
Basic.decorators = [ThemeDecorator(Theme.DEFAULT)]

export const LinkDark = Template.bind({})
LinkDark.args = {
  children: "Link",
  href: "https://google.com",
  target: "_blank",
}
LinkDark.decorators = [ThemeDecorator(Theme.DARK)]
LinkDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
