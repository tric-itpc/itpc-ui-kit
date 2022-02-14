import React from 'react';
import { ButtonType, ButtonVariant } from '../types';
export interface ButtonProps {
    type?: ButtonType;
    variant?: ButtonVariant;
    disabled?: boolean;
    onPress?: () => void;
}
export declare const Button: React.FC<ButtonProps>;
