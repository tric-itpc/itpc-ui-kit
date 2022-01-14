interface SelectButtonProps {
    disabled: boolean;
    focused: boolean;
}
interface ItemFlagProps {
    isShow: boolean;
}
export declare const SelectWrap: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SelectButton: import("styled-components").StyledComponent<"button", any, SelectButtonProps, never>;
export declare const SelectItem: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const SelectItemFlag: import("styled-components").StyledComponent<"span", any, ItemFlagProps, never>;
export {};
