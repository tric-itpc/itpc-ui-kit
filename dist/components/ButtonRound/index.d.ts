import React from 'react';
import { ButtonType } from '../types';
import './styles.css';
export interface Props {
    type?: ButtonType;
    disabled?: boolean;
    tooltip?: string;
    onPress?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    children?: React.ReactNode;
}
export declare const ButtonRound: React.FC<Props>;
