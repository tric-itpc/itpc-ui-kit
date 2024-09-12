import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Checkbox, Props } from "../components/Checkbox"
import { Theme } from "../components/types"

export default {
  component: Checkbox,
  title: "Components/Checkbox",
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => {
  const [checkedFirst, setCheckedFirst] = useState<boolean>(false)

  const handleCheckedFirst = (): void => {
    setCheckedFirst(!checkedFirst)
  }

  return (
    <>
      <Checkbox
        {...args}
        isChecked={checkedFirst}
        name="1"
        onClick={handleCheckedFirst}
      />
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  disabled: false,
  theme: Theme.DEFAULT,
}

export const CheckBoxDark = Template.bind({})
CheckBoxDark.args = {
  disabled: false,
  theme: Theme.DARK,
}

CheckBoxDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
