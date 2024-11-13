import React from "react"

import { Meta, StoryObj } from "@storybook/react"

import { Button, Modal, ModalContent, ModalFooter } from "../../index"

const meta: Meta<typeof Modal> = {
  component: Modal,
  render: (args) => (
    <Modal {...args} isOpen>
      <ModalContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </ModalContent>

      <ModalFooter>
        <Button variant="white">Cancel</Button>

        <Button>Ok</Button>
      </ModalFooter>
    </Modal>
  ),
  // @ts-ignore
  subcomponents: { ModalContent, ModalFooter },
  title: "Content/Modal",
}

export default meta

type Story = StoryObj<typeof Modal>

export const Basic: Story = {
  args: {
    isOverlayClickable: false,
    title: "Modal window",
  },
}
