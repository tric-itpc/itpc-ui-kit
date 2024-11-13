import React from "react"

import type { Meta, StoryObj } from "@storybook/react"

import {
  Accordion,
  AccordionArrow,
  AccordionArrowProps,
  AccordionBody,
  AccordionBodyProps,
  AccordionHeader,
  AccordionHeaderProps,
  AccordionItem,
  AccordionItemProps,
  AccordionProps,
} from "./index"

type Props = {
  withArrow?: boolean
} & AccordionHeaderProps &
  AccordionArrowProps &
  AccordionBodyProps &
  AccordionItemProps &
  AccordionProps

type Story = StoryObj<Props>

const meta: Meta<Props> = {
  component: Accordion,
  render: ({ ...args }) => (
    <Accordion>
      <AccordionItem>
        <AccordionHeader
          isActive={args.isActive}
          isOpened={args.isOpened}
          onPress={args.onPress}
        >
          Header
          {args.withArrow && <AccordionArrow isOpened={args.isOpened} />}
        </AccordionHeader>

        <AccordionBody isOpened={args.isOpened}>Body</AccordionBody>
      </AccordionItem>
    </Accordion>
  ),
  subcomponents: {
    // @ts-ignore
    Accordion,
    // @ts-ignore
    AccordionArrow,
    // @ts-ignore
    AccordionBody,
    // @ts-ignore
    AccordionHeader,
    // @ts-ignore
    AccordionItem,
  },
  title: "Content/Accordion",
}

export default meta

export const Closed: Story = {
  args: {
    isActive: false,
    isOpened: false,
    onPress: () => {},
    withArrow: false,
  },
  name: "Закрытый",
}

export const Opened: Story = {
  args: {
    ...Closed.args,
    isOpened: true,
    withArrow: false,
  },
  name: "Открытый",
}

export const WithArrow: StoryObj = {
  args: {
    ...Closed.args,
    isOpened: false,
    withArrow: true,
  },
  name: "С стрелкой",
}
export const Active: StoryObj = {
  args: {
    ...Closed.args,
    isActive: true,
    isOpened: false,
    withArrow: true,
  },
  name: "Активный",
}
