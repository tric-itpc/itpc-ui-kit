import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Button } from "../components"
import { Popup, Props } from "../components/Popup"

export default {
  component: Popup,
  title: "Components/Popup",
} as ComponentMeta<React.FC<Props>>

const Template: ComponentStory<React.FC<Props>> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div style={{ height: "100vh" }}>
      <Button onPress={() => setIsOpen(true)}>Open popup</Button>
      <Popup {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum est
        sagittis, odio tincidunt ipsum, lorem cras mollis.
      </Popup>
    </div>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  position: "bottom-left",
  size: "small",
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  variant: "success",
}
