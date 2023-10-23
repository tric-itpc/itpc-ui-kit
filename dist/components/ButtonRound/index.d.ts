import React, { HTMLAttributes } from "react";
import { ButtonType } from "../types";
import "./styles.css";
export interface Props extends HTMLAttributes<HTMLButtonElement> {
    type?: ButtonType;
    disabled?: boolean;
    tooltip?: string;
    onPress?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    children?: React.ReactNode;
    tooltipAttr?: HTMLAttributes<HTMLSpanElement>;
}
export declare const ButtonRound: React.FC<Props>;
