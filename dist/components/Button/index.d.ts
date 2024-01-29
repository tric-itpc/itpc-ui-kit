import React, { HTMLAttributes } from "react";
import { ButtonType, ButtonVariant } from "../types";
import "./styles.css";
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    onPress?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    type?: ButtonType;
    variant?: ButtonVariant;
}
export declare const Button: React.FC<Props>;
