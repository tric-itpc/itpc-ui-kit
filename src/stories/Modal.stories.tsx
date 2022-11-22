import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from "../components"
import { Modal, ModalContent, ModalFooter, ModalProps } from '../components/Modal'

export default {
  title: 'Components/Modal',
  component: Modal
} as ComponentMeta<React.FC<ModalProps>>

const Template: ComponentStory<React.FC<ModalProps>> = (args) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  return (
    <>
      <Button onPress={() => setIsOpenModal(true)}>Open modal</Button>
      <Modal {...args} isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <ModalContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ModalContent>
        <ModalFooter>
          <Button variant="white" onPress={() => setIsOpenModal(false)}>Cancel</Button>
          <Button onPress={() => setIsOpenModal(false)}>Ok</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  title: "Modal window",
  isOverlayClickable: true
}
