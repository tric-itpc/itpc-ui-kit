import React from "react"
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Preloader, PreloaderProps } from '../Preloader'

export default {
  title: 'Components/Preloader',
  component: Preloader
} as ComponentMeta<React.FC<PreloaderProps>>

const Template: ComponentStory<React.FC<PreloaderProps>> = (args) => <Preloader {...args} />

export const Basic = Template.bind({})
Basic.args = {
}


