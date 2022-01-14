import React from 'react';
import { ButtonStyles } from '../styles';
import { ButtonType, ButtonVariant } from '../types';
export interface ButtonProps {
    type?: ButtonType;
    variant?: ButtonVariant;
    disabled?: boolean;
    styles?: ButtonStyles;
    onPress?: () => void;
}
export declare const Button: React.FC<ButtonProps>;
