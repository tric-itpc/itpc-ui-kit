import React, { useState } from "react"

import { Meta } from "@storybook/react"

import { Checkbox } from "../../index"

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  render: ({ ...args }) => <Checkbox {...args} id="1" name="name" />,
  title: "Inputs/Checkbox",
}

export default meta

const Template: React.FC = (args) => {
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <Checkbox
      {...args}
      id="1"
      isChecked={checked}
      name="name"
      onClick={(e) => setChecked(e.currentTarget.checked)}
    />
  )
}

export const Basic = {
  args: {},
  name: "Базовый",
}

export const Controlled = {
  args: {
    isChecked: true,
  },
  name: "Контролируемый",
  render: ({ ...args }) => <Template {...args} />,
}

export const Disabled = {
  args: {
    disabled: true,
  },
  name: "Заблокированный",
}

export const Checked = {
  args: {
    isChecked: true,
  },
  name: "Выбранный",
}

export const WithLabel = {
  args: {
    label: "Label",
  },
  name: "С подписью",
}

export const WithLabelLeft = {
  args: {
    label: "Label",
    labelPosition: "left",
  },
  name: "С подписью слева",
}

export const WithLabelAll = {
  args: {
    label: "Label",
    labelPosition: "all",
  },
  name: "С подписью везде",
}

export const VariantAndroid = {
  args: {
    variant: "android",
  },
  name: "Android",
}

export const VariantIOS = {
  args: {
    variant: "ios",
  },
  name: "IOS",
}

export const VariantRound = {
  args: {
    variant: "round",
  },
  name: "Round",
}

export const VariantSquare = {
  args: {
    variant: "square",
  },
  name: "Square",
}

export const Blured = {
  args: {
    isBlurCheckbox: true,
  },
  name: "Blured",
}

export const CheckedBlured = {
  args: {
    isBlurCheckbox: true,
    isChecked: true,
  },
  name: "Выбранный Blured",
}

export const BluredLabelLeft = {
  args: {
    isBlurLabelLeft: true,
    label: "Label",
    labelPosition: "left",
  },
  name: "Blured Label Left",
}

export const BluredLabelRight = {
  args: {
    isBlurLabelRight: true,
    label: "Label",
    labelPosition: "right",
  },
  name: "Blured Label Right",
}
