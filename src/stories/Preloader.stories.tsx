import React from "react"

import { ComponentMeta, ComponentStory } from "@storybook/react"

import { Preloader, PreloaderProps } from "../components/Preloader"
import { Theme } from "../components/types"
import { ThemeDecorator } from "../config/ThemeDecorator"

export default {
  component: Preloader,
  title: "Components/Preloader",
} as ComponentMeta<React.FC<PreloaderProps>>

const Template: ComponentStory<React.FC<PreloaderProps>> = (args) => (
  <Preloader {...args} />
)

export const Basic = Template.bind({})
Basic.args = {}

Basic.decorators = [ThemeDecorator(Theme.DEFAULT)]

export const PreloaderDark = Template.bind({})
PreloaderDark.args = {}

PreloaderDark.decorators = [ThemeDecorator(Theme.DARK)]

PreloaderDark.parameters = {
  backgrounds: {
    default: "dark",
  },
}
