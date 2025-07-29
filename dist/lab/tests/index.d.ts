import { KeyCode } from "../../enums";
export declare const getTabElement: (testId: string, position: number) => Element;
export declare const getButtonDisabled: (element: HTMLElement) => boolean;
export declare const getCheckboxValue: (element: HTMLElement, withLabelLeft?: boolean) => boolean;
export declare const getSelectButton: (element: HTMLElement) => Element;
export declare const getSelectValue: (element: HTMLElement) => string;
export declare const getAttributes: (element: Element) => {
    [key: string]: string | number | boolean;
};
export declare const getAttributeValue: (element: Element, attributeName: string) => string;
export declare const getInputAttributes: (element: HTMLElement) => {
    [key: string]: string | number | boolean;
};
export declare const getInputAttributeValue: (element: HTMLElement, attributeName: string) => string;
export declare const getInputDisabled: (element: HTMLElement) => boolean;
export declare const getInputValue: (element: HTMLElement) => string;
export declare const getInputError: (element: HTMLElement) => Element;
export declare const getInputErrorValue: (element: HTMLElement) => string;
export declare const getDateInputError: (element: HTMLElement) => string;
export declare const changeInput: (element: HTMLElement, value: string) => void;
export declare const focusInput: (element: HTMLElement) => void;
export declare const blurInput: (element: HTMLElement) => void;
export declare const keyDownInput: (element: HTMLElement, key: KeyCode) => void;
export declare const keyDownElement: (element: HTMLElement, key: KeyCode) => void;
