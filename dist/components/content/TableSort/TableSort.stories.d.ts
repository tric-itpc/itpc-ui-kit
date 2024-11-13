import { Meta, StoryObj } from "@storybook/react";
import { TableSort } from "../../index";
declare const meta: Meta<typeof TableSort>;
export default meta;
type Story = StoryObj<typeof TableSort>;
export declare const Basic: Story;
export declare const SortByOneColumns: Story;
export declare const SortByTwoColumns: Story;
