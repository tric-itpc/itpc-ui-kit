import React from "react"

import { Meta, StoryObj } from "@storybook/react"

import { IconWarning } from "../../_elements"
import { Button, Flex } from "../../index"

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: "Layout/Flex",
}
export default meta

type Story = StoryObj<typeof Flex>

const Template: React.FC = (args) => (
  <Flex {...args}>
    <Button>Button</Button>
    <Button>Button</Button>
    <IconWarning />
    <IconWarning />
  </Flex>
)

export const Basic: Story = {
  args: {},
  name: "Базовый",
  render: (args) => <Template {...args} />,
}

export const Gap: Story = {
  args: {
    gap: 10,
  },
  name: "Расстояние между элементами",
  render: (args) => <Template {...args} />,
}

export const Vertical: Story = {
  args: {
    gap: 10,
    vertical: true,
  },
  name: "Вертикальное расположение",
  render: (args) => <Template {...args} />,
}

export const Wrap: Story = {
  args: {
    gap: 10,
    style: { width: "100px" },
    wrap: "wrap",
  },
  name: "Перенос строк",
  render: (args) => <Template {...args} />,
}

export const Align: Story = {
  args: {
    align: "center",
    gap: 10,
  },
  name: "Вертикальное выравнивание",
  render: (args) => <Template {...args} />,
}

export const Justify: Story = {
  args: {
    gap: 10,
    justify: "center",
  },
  name: "Горизонтальное выравнивание",
  render: (args) => <Template {...args} />,
}
