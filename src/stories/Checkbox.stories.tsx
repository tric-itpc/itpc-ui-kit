import React, { useState } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Checkbox, Props } from "../components/Checkbox"

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => {
  const [checkedFirst, setCheckedFirst] = useState<boolean>(false)
  const [checkedSecond, setCheckedSecond] = useState<boolean>(false)

  const handleCheckedFirst = (): void => {
    setCheckedFirst(!checkedFirst)
  }

  const handleCheckedSecond = (): void => {
    setCheckedSecond(!checkedSecond)
  }

  return (
    <>
      <Checkbox
        {...args}
        name="1"
        isChecked={checkedFirst}
        onClick={handleCheckedFirst}
      />
      <Checkbox
        {...args}
        name="1"
        isChecked={checkedSecond}
        onClick={handleCheckedSecond}
      />
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  disabled: false,
}
