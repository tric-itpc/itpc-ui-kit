import React from "react"

import { Meta } from "@storybook/react"

import { Button, Card, Flex, Typography } from "../../index"

const meta: Meta<typeof Card> = {
  component: Card,
  render: (args) => (
    <Card {...args}>
      <Flex justify="space-between" style={{ height: "100%" }} vertical>
        <Typography.Text>Text</Typography.Text>
        <Button>Test</Button>
      </Flex>
    </Card>
  ),
  title: "Content/Card",
}

export default meta

export const Basic = {
  args: {
    title: "Title card",
  },
}

export const Bordered = {
  args: {
    ...Basic.args,
    isBordered: true,
  },
  name: "С рамкой",
}

export const CustomTitle = {
  args: {
    title: <Typography.Title>Custom title 😍</Typography.Title>,
  },
  name: "С кастомным заголовком",
}
