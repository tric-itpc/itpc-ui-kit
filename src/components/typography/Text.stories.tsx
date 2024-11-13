import { Meta, StoryObj } from "@storybook/react"

import { TextSize, TextWeight } from "../../enums"
import { Typography } from "../index"

const { Text } = Typography

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Typography/Text",
}

export default meta

type Story = StoryObj<typeof Text>

export const Basic: Story = {
  args: {
    children: "Text",
  },
  name: "Базовый",
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
