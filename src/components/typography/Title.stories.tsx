import { Meta, StoryObj } from "@storybook/react"

import { TextSize, TextType, TextWeight } from "../../enums"
import { Typography } from "../index"

const { Title } = Typography

const meta: Meta<typeof Title> = {
  argTypes: {
    size: {
      options: [
        TextSize.XXS,
        TextSize.XS,
        TextSize.S,
        TextSize.M,
        TextSize.L,
        TextSize.XL,
        TextSize.XXL,
      ],
    },
    type: {
      options: [
        TextType.PRIMARY,
        TextType.SECONDARY,
        TextType.DANGER,
        TextType.DISABLED,
        TextType.SUCCESS,
        TextType.WARNING,
      ],
    },
    weight: {
      options: [
        TextWeight.LIGHT,
        TextWeight.NORMAL,
        TextWeight.MEDIUM,
        TextWeight.BOLD,
      ],
    },
  },
  component: Title,
  title: "Typography/Title",
}

export default meta

type Story = StoryObj<typeof Title>

export const Basic: Story = {
  args: {
    children: "Title",
  },
  name: "Базовый",
}

export const Level: Story = {
  args: {
    ...Basic.args,
    level: 2,
  },
  name: "Уровень",
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
