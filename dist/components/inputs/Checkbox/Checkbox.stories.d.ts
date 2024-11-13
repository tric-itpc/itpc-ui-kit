import React from "react";
import { Meta } from "@storybook/react";
import { Checkbox } from "../../index";
declare const meta: Meta<typeof Checkbox>;
export default meta;
export declare const Basic: {
    args: {};
    name: string;
};
export declare const Controlled: {
    args: {
        isChecked: boolean;
    };
    name: string;
    render: ({ ...args }: {
        [x: string]: any;
    }) => React.JSX.Element;
};
export declare const Disabled: {
    args: {
        disabled: boolean;
    };
    name: string;
};
export declare const Checked: {
    args: {
        isChecked: boolean;
    };
    name: string;
};
export declare const WithLabel: {
    args: {
        label: string;
    };
    name: string;
};
export declare const WithLabelLeft: {
    args: {
        label: string;
        labelPosition: string;
    };
    name: string;
};
export declare const WithLabelAll: {
    args: {
        label: string;
        labelPosition: string;
    };
    name: string;
};
export declare const VariantAndroid: {
    args: {
        variant: string;
    };
    name: string;
};
export declare const VariantIOS: {
    args: {
        variant: string;
    };
    name: string;
};
export declare const VariantRound: {
    args: {
        variant: string;
    };
    name: string;
};
export declare const VariantSquare: {
    args: {
        variant: string;
    };
    name: string;
};
export declare const Blured: {
    args: {
        isBlurCheckbox: boolean;
    };
    name: string;
};
export declare const CheckedBlured: {
    args: {
        isBlurCheckbox: boolean;
        isChecked: boolean;
    };
    name: string;
};
export declare const BluredLabelLeft: {
    args: {
        isBlurLabelLeft: boolean;
        label: string;
        labelPosition: string;
    };
    name: string;
};
export declare const BluredLabelRight: {
    args: {
        isBlurLabelRight: boolean;
        label: string;
        labelPosition: string;
    };
    name: string;
};
