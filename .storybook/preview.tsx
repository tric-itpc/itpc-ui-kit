import "../src/styles/global.css"
import { Preview } from "@storybook/react"

import { withThemeByClassName } from "@storybook/addon-themes"

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
