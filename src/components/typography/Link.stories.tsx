import { Meta, StoryObj } from "@storybook/react"

import { TextSize, TextWeight } from "../../enums"
import { Typography } from "../index"

const { Link } = Typography

const meta: Meta<typeof Link> = {
  component: Link,
  title: "Typography/Link",
}

export default meta

type Story = StoryObj<typeof Link>

export const Basic: Story = {
  args: {
    children: "Link",
    href: "https://google.com",
    target: "_blank",
  },
  name: "Базовый",
}

export const Disabled: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
  name: "Отключённый",
}

export const Underlined: Story = {
  args: {
    ...Basic.args,
    underline: false,
  },
  name: "Не подчёркнутый",
}

export const Through: Story = {
  args: {
    ...Basic.args,
    through: true,
  },
  name: "Зачеркнутый",
}

export const Bold: Story = {
  args: {
    ...Basic.args,
    weight: TextWeight.BOLD,
  },
  name: "Жирный",
}

export const Size: Story = {
  args: {
    ...Basic.args,
    size: TextSize.XXL,
  },
  name: "Размер",
}
