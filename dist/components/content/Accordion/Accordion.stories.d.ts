import type { Meta, StoryObj } from "@storybook/react";
import { AccordionArrowProps, AccordionBodyProps, AccordionHeaderProps, AccordionItemProps, AccordionProps } from "./index";
type Props = {
    withArrow?: boolean;
} & AccordionHeaderProps & AccordionArrowProps & AccordionBodyProps & AccordionItemProps & AccordionProps;
type Story = StoryObj<Props>;
declare const meta: Meta<Props>;
export default meta;
export declare const Closed: Story;
export declare const Opened: Story;
export declare const WithArrow: StoryObj;
export declare const Active: StoryObj;
