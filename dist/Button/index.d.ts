import React from 'react';
import { ButtonType, Variant } from '../types';
export interface ButtonProps {
    type?: ButtonType;
    variant?: Variant;
    disabled?: boolean;
    onPress?: () => void;
}
export declare const Button: React.FC<ButtonProps>;
