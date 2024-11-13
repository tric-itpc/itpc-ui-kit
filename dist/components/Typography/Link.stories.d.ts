/// <reference types="react" />
import { Meta, StoryObj } from "@storybook/react";
declare const Link: import("react").FC<import("./components").LinkProps>;
declare const meta: Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof Link>;
export declare const Basic: Story;
export declare const Disabled: Story;
export declare const Underlined: Story;
export declare const Through: Story;
export declare const Bold: Story;
export declare const Size: Story;
