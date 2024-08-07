import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import {
  Accordion,
  AccordionArrow,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  AccordionProps,
} from "../components/Accordion"

export default {
  component: Accordion,
  title: "Components/Accordion",
} as ComponentMeta<React.FC<AccordionProps>>

const Template: ComponentStory<React.FC<AccordionProps>> = (args) => {
  const [opened, setOpened] = useState<boolean>(false)

  const handleOpened = (): void => {
    setOpened(!opened)
  }

  return (
    <Accordion {...args}>
      <AccordionItem>
        <AccordionHeader id={"1"} isOpened={opened} onPress={handleOpened}>
          Header
          <AccordionArrow isOpened={opened} />
        </AccordionHeader>
        <AccordionBody isOpened={opened}>Body</AccordionBody>
      </AccordionItem>
    </Accordion>
  )
}

export const Basic = Template.bind({})
Basic.args = {}
