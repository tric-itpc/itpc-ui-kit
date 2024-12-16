import React from "react"

import { Meta, StoryObj } from "@storybook/react"

import {
  Button,
  Layout,
  Modal,
  ModalContent,
  ModalFooter,
  Typography,
} from "../../index"

const meta: Meta<typeof Modal> = {
  component: Modal,
  decorators: [
    (story) => <Layout style={{ height: "300px" }}>{story()}</Layout>,
  ],
  render: (args) => (
    <>
      <Typography.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id et tenetur
        ab reprehenderit earum sequi. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Hic sapiente molestiae mollitia dolor nam officia
        dicta incidunt, nostrum iste, libero magnam ea id dolores nemo vel iure
        cumque eaque ratione temporibus natus. Quo praesentium obcaecati odit,
        officiis amet similique dolor possimus minima animi recusandae facere
        perferendis laborum totam voluptas? Maxime ratione nesciunt quas fugit.
        Doloribus nesciunt nobis architecto voluptatum ut asperiores harum in
        minus aut ducimus ad itaque quis optio perspiciatis animi officia,
        suscipit expedita quibusdam? Esse aspernatur architecto dolore porro
        excepturi sequi saepe nobis laudantium nisi ratione tempora repellendus
        ipsum adipisci, impedit, debitis vel officiis itaque non at error.
      </Typography.Text>
      <Modal {...args} isOpen>
        <ModalContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ModalContent>

        <ModalFooter>
          <Button variant="white">Cancel</Button>

          <Button>Ok</Button>
        </ModalFooter>
      </Modal>
    </>
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
