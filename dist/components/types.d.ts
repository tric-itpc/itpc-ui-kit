export declare type InputState = 'default' | 'cancel' | 'loading' | 'success' | 'warning';
export declare type InputType = 'password' | 'text';
export declare type ButtonType = 'button' | 'submit' | 'reset';
export declare type ButtonVariant = 'purple' | 'white' | 'red';
export declare type Orientation = 'top' | 'right' | 'bottom' | 'left';
export declare type PopupSize = 'small' | 'normal';
export declare type PopupVariant = 'default' | 'error' | 'warning' | 'success';
export declare type PopupPosition = 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center-center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export declare type ValidationState = 'valid' | 'invalid';
export interface Item {
    id: string;
    value: string;
}
export interface FormattedValues {
    value: string;
    formattedValue: string;
}
export declare type fontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export declare type cursor = 'pointer' | 'default';
export declare type tableLayout = 'fixed' | 'unset';
