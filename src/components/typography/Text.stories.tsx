import React from "react"

import { Meta, StoryObj } from "@storybook/react"

import { TextSize, TextTag, TextType, TextWeight } from "../../enums"
import { Typography } from "../index"

const { Text } = Typography

const meta: Meta<typeof Text> = {
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
    tag: {
      options: [TextTag.CODE, TextTag.EM, TextTag.PARAGRAPH, TextTag.STRONG],
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

export const Color: Story = {
  args: {
    ...Basic.args,
    type: TextType.DANGER,
  },
  name: "Цвет",
}
