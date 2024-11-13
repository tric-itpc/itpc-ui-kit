import { StorybookConfig } from "@storybook/react-webpack5"

const config: StorybookConfig = {
  stories: ["../src/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  framework: "@storybook/react-webpack5",
  core: {
    builder: {
      name: "@storybook/builder-webpack5",
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-themes",
  ],
}

export default config
