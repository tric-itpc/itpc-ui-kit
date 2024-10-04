import React from "react"

import { Story } from "@storybook/react"

import { ComponentProvider } from "../components/ComponentProvider"
import type { Theme } from "../components/types"

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <ComponentProvider theme={theme}>
      <div className={`app itpc-theme-${theme}`}>
        <StoryComponent />
      </div>
    </ComponentProvider>
  )
