import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Button } from "../components"
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalProps,
} from "../components/Modal"
import { Theme } from "../components/types"

export default {
  component: Modal,
  title: "Components/Modal",
} as ComponentMeta<React.FC<ModalProps>>

const Template: ComponentStory<React.FC<ModalProps>> = (args) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  return (
    <>
      <Button onPress={() => setIsOpenModal(true)} theme={args.theme}>
        Open modal
      </Button>
      <Modal
        {...args}
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      >
        <ModalContent theme={args.theme}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ModalContent>
        <ModalFooter theme={args.theme}>
          <Button
            onPress={() => setIsOpenModal(false)}
            theme={args.theme}
            variant="white"
          >
            Cancel
          </Button>
          <Button onPress={() => setIsOpenModal(false)} theme={args.theme}>
            Ok
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  isOverlayClickable: true,
  theme: Theme.DEFAULT,
  title: "Modal window",
}

export const ModalDark = Template.bind({})
ModalDark.args = {
  isOverlayClickable: true,
  theme: Theme.DARK,
  title: "Modal window",
}

ModalDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
