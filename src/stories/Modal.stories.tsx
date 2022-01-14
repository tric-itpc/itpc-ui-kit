import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, TextField } from "../components"
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
      <Modal {...args} title="Modal window" isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <>
          <ModalContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <TextField placeholder="Modal input" id="1" name="2" />
            <TextField placeholder="Modal input" id="2" name="2" />
            <TextField placeholder="Modal input" id="3" name="2" />
            <TextField placeholder="Modal input" id="4" name="2" />
            <TextField placeholder="Modal input" id="5" name="2" />
          </ModalContent>
          <ModalFooter>
            <Button variant="white" onPress={() => setIsOpenModal(false)}>Cancel</Button>
            <Button onPress={() => setIsOpenModal(false)}>Ok</Button>
          </ModalFooter>
        </>
      </Modal>
    </>
  )
}

export const Basic = Template.bind({})
Basic.args = {
  isOverlayClickable: true
}
