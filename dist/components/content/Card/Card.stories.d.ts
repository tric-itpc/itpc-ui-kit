import React from "react";
import { Meta } from "@storybook/react";
import { Card } from "../../index";
declare const meta: Meta<typeof Card>;
export default meta;
export declare const Basic: {
    args: {
        title: string;
    };
};
export declare const Bordered: {
    args: {
        isBordered: boolean;
        title: string;
    };
    name: string;
};
export declare const CustomTitle: {
    args: {
        title: React.JSX.Element;
    };
    name: string;
};
