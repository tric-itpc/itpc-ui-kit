import React from "react"

import { Story } from "@storybook/react"

import { Theme } from "../enums"
import { ConfigProvider } from "../provider"

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <ConfigProvider theme={theme}>
      <div className={`app itpc-theme-${theme}`}>
        <StoryComponent />
      </div>
    </ConfigProvider>
  )
