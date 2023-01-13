import React from "react";
export declare type InputState = 'default' | 'cancel' | 'loading' | 'success' | 'warning';
export declare type InputType = 'password' | 'text';
export declare type ButtonType = 'button' | 'submit' | 'reset';
export declare type ButtonVariant = 'white' | 'red';
export declare type InputCheckboxType = "checkbox" | "radio";
export declare type Orientation = 'top' | 'right' | 'bottom' | 'left';
export declare type PopupSize = 'small' | 'normal';
export declare type PopupVariant = 'default' | 'error' | 'warning' | 'success';
export declare type PopupPosition = 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center-center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export declare type ValidationState = 'valid' | 'invalid';
export interface TabsItem {
    title: string;
    content: React.ReactElement<React.ReactNode>;
}
export interface PaginationResult {
    currentPage?: number;
    start: number;
    end: number;
}
export interface Item {
    id: string;
    value: string;
    disabled?: boolean;
}
export interface FormattedValues {
    value: string;
    formattedValue: string;
}
