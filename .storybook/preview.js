import { Theme } from "../src"
import "../src/styles/global.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: Theme.DEFAULT, value: "#ffffff" },
      { name: Theme.DARK, value: "#19192a" },
    ],
  },
}
