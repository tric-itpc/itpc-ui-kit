import { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./index";
declare const meta: Meta<typeof TextField>;
export default meta;
type Story = StoryObj<typeof TextField>;
export declare const Basic: Story;
export declare const Controlled: Story;
export declare const Disabled: Story;
export declare const WithIcon: Story;
