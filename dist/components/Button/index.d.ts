import React, { HTMLAttributes } from "react";
import { ButtonType, ButtonVariant } from "../types";
import "./styles.css";
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    type?: ButtonType;
    variant?: ButtonVariant;
    disabled?: boolean;
    onPress?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    children?: React.ReactNode;
}
export declare const Button: React.FC<Props>;
