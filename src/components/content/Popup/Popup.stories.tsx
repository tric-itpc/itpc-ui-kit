import React from "react"

import { Meta, StoryObj } from "@storybook/react"

import { IconClose } from "../../_elements"
import { Popup } from "../../index"

const meta: Meta<typeof Popup> = {
  component: Popup,
  decorators: [(story) => <div style={{ height: "300px" }}>{story()}</div>],
  title: "Content/Popup",
}

export default meta

type Story = StoryObj<typeof Popup>

export const Basic: Story = {
  args: {
    isOpen: true,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  name: "Базовый",
}

export const WithCloseButton: Story = {
  args: {
    ...Basic.args,
    iconClose: <IconClose />,
  },
  name: "С кнопкой закрытия",
}

export const TopLeftPosition: Story = {
  args: {
    ...Basic.args,
    position: "top-left",
  },
  name: "Вверху слева",
}

export const TopCenterPosition: Story = {
  args: {
    ...Basic.args,
    position: "top-center",
  },
  name: "Вверху по центру",
}

export const TopRightPosition: Story = {
  args: {
    ...Basic.args,
    position: "top-right",
  },
  name: "Вверху справа",
}

export const CenterLeftPosition: Story = {
  args: {
    ...Basic.args,
    position: "center-left",
  },
  name: "По центру слева",
}

export const CenterPosition: Story = {
  args: {
    ...Basic.args,
    position: "center-center",
  },
  name: "По центру",
}

export const CenterRightPosition: Story = {
  args: {
    ...Basic.args,
    position: "center-right",
  },
  name: "По центру справа",
}

export const BottomLeftPosition: Story = {
  args: {
    ...Basic.args,
    position: "bottom-left",
  },
  name: "Внизу слева",
}

export const BottomCenterPosition: Story = {
  args: {
    ...Basic.args,
    position: "bottom-center",
  },
  name: "Внизу по центру",
}

export const BottomRightPosition: Story = {
  args: {
    ...Basic.args,
    position: "bottom-right",
  },
  name: "Внизу справа",
}

export const SmallSize: Story = {
  args: {
    ...Basic.args,
    size: "small",
  },
  name: "Маленький",
}

export const MediumSize: Story = {
  args: {
    ...Basic.args,
    size: "normal",
  },
  name: "Большой",
  render: (args) => (
    <Popup {...args}>
      Lorem ipsum dolor sit amet consectetur adipiscing elit consectetur
      adipiscing elit
    </Popup>
  ),
}
