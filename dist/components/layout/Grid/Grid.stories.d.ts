import { Meta, StoryObj } from "@storybook/react";
import { ColProps, Row, RowProps } from "./index";
declare const meta: Meta<typeof Row>;
export default meta;
interface Props extends RowProps, ColProps {
}
type Story = StoryObj<Props>;
export declare const Basic: Story;
export declare const Gap: Story;
export declare const AlignTop: Story;
export declare const AlignMiddle: Story;
export declare const AlignBottom: Story;
export declare const JustifyStart: Story;
export declare const JustifyCenter: Story;
export declare const JustifyEnd: Story;
export declare const JustifySpaceBetween: Story;
export declare const JustifySpaceAround: Story;
export declare const JustifySpaceEvenly: Story;
