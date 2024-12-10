import React from "react"

import { Preview } from "@storybook/react"

import { withThemeByClassName } from "@storybook/addon-themes"

import "../src/styles/global.css"
import { Layout } from "../src/components/layout/Layout"

const preview: Preview = {
  tags: ["autodocs"],
  decorators: [
    withThemeByClassName({
      themes: {
        light: "itpc-theme-light",
        dark: "itpc-theme-dark",
      },
      parentSelector: "body",
      defaultTheme: "light",
    }),
    (story) => (
      <Layout
        style={{
          padding: "2em",
          width: "auto",
          border: `1px solid var(--itpc-primary-border-color)`,
          borderRadius: "4px",
          minHeight: "500px",
        }}
      >
        {story()}
      </Layout>
    ),
  ],
  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
      },
    },
  },
}

export default preview
