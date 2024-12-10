/// <reference types="react" />
import { Meta, StoryObj } from "@storybook/react";
declare const Text: import("react").FC<import("./components").TextProps>;
declare const meta: Meta<typeof Text>;
export default meta;
type Story = StoryObj<typeof Text>;
export declare const Basic: Story;
export declare const Through: Story;
export declare const Bold: Story;
export declare const Size: Story;