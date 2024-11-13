import { Meta, StoryObj } from "@storybook/react"

import { Preloader } from "../../index"

const meta: Meta<typeof Preloader> = {
  component: Preloader,
  title: "Content/Preloader",
}

export default meta

type Story = StoryObj<typeof Preloader>

export const Basic: Story = {
  args: {},
}
