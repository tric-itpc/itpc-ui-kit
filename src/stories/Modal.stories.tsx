import React, { useState } from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Button } from "../components"
import {
  Modal,
  ModalContent,
  ModalFooter,
  ModalProps,
} from "../components/Modal"

export default {
  component: Modal,
  title: "Components/Modal",
} as ComponentMeta<React.FC<ModalProps>>

const Template: ComponentStory<React.FC<ModalProps>> = (args) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  return (
    <>
      <Button onPress={() => setIsOpenModal(true)}>Open modal</Button>
      <Modal
        {...args}
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
      >
        <ModalContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ModalContent>
        <ModalFooter>
          <Button onPress={() => setIsOpenModal(false)} variant="white">
            Cancel
          </Button>
          <Button onPress={() => setIsOpenModal(false)}>Ok</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  isOverlayClickable: true,
  title: "Modal window",
}
